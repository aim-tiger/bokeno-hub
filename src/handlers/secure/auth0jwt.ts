import { verify, type JwtPayload } from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { resErr } from '../common';
import type { NSResult } from '../../types';
import { getSigningKeys } from './jwksPolyfill';
import { getUserPermission } from './getManageToken';
import { getUserByUserId } from '../../hasura/user';

// Initialize the JWKS client for Auth0

const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  cache: true,
});
// The magic happened here
client.getSigningKeys = getSigningKeys;

// Helper function to get the signing key
const getKey = async (header: any, callback: any) => {
  client.getSigningKey(header.kid, function (_err, key) {
    const signingKey = key?.getPublicKey();
    callback(null, signingKey);
  });
};
// Middleware function to verify the JWT
export const checkJwt = async (bearer: string): Promise<NSResult> => {
  return new Promise(async (resolve) => {
    // Verify the JWT
    verify(
      bearer,
      getKey,
      {
        audience: process.env.AUTH0_AUDIENCE, // The Audience from Auth0 API settings
        issuer: `https://${process.env.AUTH0_DOMAIN}/`, // Your Auth0 domain
        algorithms: ['RS256'], // Auth0 uses RS256 for token signing
      },
      async (err, decoded) => {
        if (err) {
          console.log(err);
          resolve(resErr('Unauthorized', 401));
        } else {
          if (decoded) {
            const decodedObj =
              typeof decoded === 'string' ? JSON.parse(decoded) : decoded;

            const user = {
              userId: decodedObj.sub,
              audience: decodedObj.aud,
              issuedAt: new Date(decodedObj.iat * 1000),
              issuer: decodedObj.iss,
              expiration: new Date(decodedObj.exp * 1000),
            };
            const usersFromNS = await getUserByUserId(user.userId);
            const permissions = await getUserPermission(user.userId);
            resolve({
              status: 200,
              data: { user: { ...user, permissions, id: usersFromNS[0].id } },
              ok: true,
            });
          }
        }
      }
    );
  });
};
