import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { bearer } from '@elysiajs/bearer';
import { NSAuthUser, type ScrapeParam } from './types';
import { authUserHandler } from './handlers/secure/authUserHandler';
import { handleScrape } from './handlers/scrape-handler';

console.log('Hello via Bokeno Hub!');

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
    return { ok: true, user: user.userId };
  })
  .post('/inner_scrape', async ({ body, store: { user } }) => {
    try {
      const param: ScrapeParam = {
        ...(body as ScrapeParam),
        user,
      };
      const result = await handleScrape(param);
      return result;
    } catch (error) {
      console.log('error', error);
      return { ok: false, error };
    }
  })
  .listen(3001);
