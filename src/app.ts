import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { bearer } from '@elysiajs/bearer';
import { NSAuthUser } from './types';
import { authUserHandler } from './handlers/secure/authUserHandler';
console.log("Hello via Bokeno Hub!");

new Elysia()
  .use(
    cors({
      origin: '*',
    })
  )
  .use(bearer())
  .state('user', new NSAuthUser())
  .use(bearer())
  .onBeforeHandle(authUserHandler)
  .get('/jwttest', async ({ store: { user } }) => {
    console.log(user);
    return { ok: true, user: user.userId};
  })
  .listen(3001);