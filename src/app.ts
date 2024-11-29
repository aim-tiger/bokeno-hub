import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { bearer } from '@elysiajs/bearer';
import {
  NSAuthUser,
  type IntergratedScrapeParam,
  type SpecificScrapeParam,
} from './types';
import { authUserHandler } from './handlers/secure/authUserHandler';
import {
  handleIntegratedScrape,
  handleScrape,
} from './handlers/scrape-handler';

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
      const param: SpecificScrapeParam = {
        ...(body as SpecificScrapeParam),
        user,
      };
      const result = await handleScrape(param);
      return result;
    } catch (error) {
      console.log('error', error);
      return { ok: false, error };
    }
  })
  .post('/integrated_scrape', async ({ body, store: { user } }) => {
    try {
      const param: IntergratedScrapeParam = {
        ...(body as IntergratedScrapeParam),
        type: 'integrated',
        user,
      };
      const result = await handleIntegratedScrape(param);
      return result;
    } catch (error) {
      console.log('error', error);
      return { ok: false, error };
    }
  })
  .listen(3001);
