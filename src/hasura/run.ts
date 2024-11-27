import { gql } from 'graphql-request';
import type { Scraper_Run_V2_Insert_Input } from '../gql/graphql';
import { execute } from './common';

const ADD_RUN = gql`
  mutation AddRun($object: scraper_run_v2_insert_input!) {
    insert_scraper_run_v2_one(object: $object) {
      creator
      id
      keywords
      platform
      run_id
      status
      url
      category_id
      uk
    }
  }
`;
const GET_SAME_RUN = gql`
  query GetSameRun($uk: String = "") {
    scraper_run_v2(
      where: {
        _and: [{ uk: { _eq: $uk } }, { status: { _in: ["await", "running"] } }]
      }
    ) {
      id
    }
  }
`;

export const sameRunning = async (uk: string): Promise<boolean> => {
  const result = await execute(GET_SAME_RUN, { uk });
  if (result.scraper_run_v2.length > 0) return true;
  return false;
};

export const addRun = async (newRun: Scraper_Run_V2_Insert_Input) => {
  const result = await execute(ADD_RUN, { object: newRun });
  return result;
};
