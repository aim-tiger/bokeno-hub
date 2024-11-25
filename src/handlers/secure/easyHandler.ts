import { resErr } from '../common';

export const handleBearer = ({ bearer, set }: any) => {
  if (!bearer || bearer !== process.env.AUTH_BEARER) {
    set.status = 400;
    set.headers[
      'WWW-Authenticate'
    ] = `Bearer realm='fb', error="invalid_request"`;
    return resErr('Unauthorized', 400);
  }
};
