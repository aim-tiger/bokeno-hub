import {importJWK,exportSPKI} from 'jose';
import type { SigningKey } from 'jwks-rsa';

class JwksError extends Error {
  constructor(message: string) {
    super(message); // Call the Error constructor
    this.name = 'JwksError'; // Set the error name

    // Capture the stack trace (optional, but similar to how you were doing it)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

function resolveAlg(jwk: any) {
  if (jwk.alg) {
    return jwk.alg;
  }

  if (jwk.kty === 'RSA') {
    return 'RS256';
  }

  if (jwk.kty === 'EC') {
    switch (jwk.crv) {
      case 'P-256':
        return 'ES256';
      case 'secp256k1':
        return 'ES256K';
      case 'P-384':
        return 'ES384';
      case 'P-521':
        return 'ES512';
    }
  }

  if (jwk.kty === 'OKP') {
    switch (jwk.crv) {
      case 'Ed25519':
      case 'Ed448':
        return 'EdDSA';
    }
  }

  throw new JwksError('Unsupported JWK');
}

export async function retrieveSigningKeys(jwks: any[]) {
  const results = [];

  jwks = jwks
    .filter(({ use }) => use === 'sig' || use === undefined)
    .filter(({ kty }) => kty === 'RSA' || kty === 'EC' || kty === 'OKP');
  for (const jwk of jwks) {
    jwk.ext = true;
    try {
      const key: any = await importJWK(jwk, resolveAlg(jwk));
      if (key.type !== 'public') {
        continue;
      }
      let getSpki;
      switch (key[Symbol.toStringTag]) {
        case 'CryptoKey': {
          const spki = await exportSPKI(key);
          getSpki = () => spki;
          break;
        }
        case 'KeyObject':
        // Assume legacy Node.js version without the Symbol.toStringTag backported
        // Fall through
        default:
          getSpki = () => key.export({ format: 'pem', type: 'spki' });
      }
      results.push({
        get publicKey() {
          return getSpki();
        },
        get rsaPublicKey() {
          return getSpki();
        },
        getPublicKey() {
          return getSpki();
        },
        ...(typeof jwk.kid === 'string' && jwk.kid
          ? { kid: jwk.kid }
          : undefined),
        ...(typeof jwk.alg === 'string' && jwk.alg
          ? { alg: jwk.alg }
          : undefined),
      });
    } catch (err) {
      continue;
    }
  }

  return results;
}
async function getKeys(jwksUri: string) {
  try {
    const res = await fetch(jwksUri);
    const data = await res.json();

    return data.keys.map((k: any) => {
      return { ...k, ext: true };
    });
  } catch (err: any) {
    const { errorMsg } = err;
    throw errorMsg ? new JwksError(errorMsg) : err;
  }
}

export async function getSigningKeys():Promise<SigningKey[]> {
  const keys = await getKeys(`https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`);

  if (!keys || !keys.length) {
    throw new JwksError('The JWKS endpoint did not contain any keys');
  }
  const signingKeys = await retrieveSigningKeys(keys);
  if (!signingKeys.length) {
    throw new JwksError('The JWKS endpoint did not contain any signing keys');
  }
  return signingKeys as SigningKey[];
}
