import { checkJwt } from './auth0jwt';
import type { NSResult } from '../../types';
import { resErr } from '../common';
import {} from 'elysia';

export const handleJWTBearer = async ({
  bearer,
  set,
}: any): Promise<NSResult> => {
  if (!bearer) {
    set.status = 400;
    set.headers[
      'WWW-Authenticate'
    ] = `Bearer realm='fb', error="invalid_request"`;
    return resErr('Unauthorized', 400);
  }
  const { ok, status, data, error } = await checkJwt(bearer);  
  if (!ok) {
    set.status = status;
    set.headers[
      'WWW-Authenticate'
    ] = `Bearer realm='nanisore', error="invalid_request"`;
    return resErr(error, status);
  } else {
    return {
      ok: true,
      status: 200,
      data: data.user,
    };
  }
};
