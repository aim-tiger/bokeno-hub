import { randomUUID } from 'crypto';
import type { Scraper_Run_V2_Insert_Input } from '../gql/graphql';
import { getCategoryByPK } from '../hasura/category';
import type { ScrapeParam } from '../types';
import { addRun, sameRunning } from '../hasura/run';

export const handleScrape = async ({
  category_id,
  keyword,
  type,
  item_ids,
  user,
}: ScrapeParam) => {
  try {
    const category = await getCategoryByPK(Number(category_id));

    const runId = randomUUID();
    const ids = item_ids ? (JSON.parse(item_ids) as number[]) : [];
    const uk = `${category.platform?.id!}-${category_id}-${type}-${ids.join(
      '|'
    )}`;
    const existingRun = await sameRunning(uk);
    if (existingRun) return { ok: false, error: 'Same run task is running' };
    const runTask: Scraper_Run_V2_Insert_Input = {
      status: 'await',
      run_id: runId,
      url: `${category.platform!.site}${category.link}`,
      platform: category.platform!.name,
      creator: user.userId,
      keywords: keyword === undefined ? null : keyword,
      category_id: category.id,
      type: type,
      item_ids: ids,
      uk,
    };
    await addRun(runTask);
    return { ok: true, run: runTask };
  } catch (error: any) {
    const errorMessage = error.message;
    console.error('error:', errorMessage);
    return { ok: false, error: errorMessage };
  }
};
