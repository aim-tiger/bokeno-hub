import { request } from 'graphql-request';
const requestHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/graphql-response+json',
  'x-hasura-admin-secret': process.env.HASURA_API_KEY!,
  'x-hasura-role': 'admin',
};

export const execute = async (
  document: string,
  variables: any
): Promise<any> => {
  const result = await request({
    url: process.env.HASURA_END_POINT!,
    document,
    variables,
    requestHeaders,
  });
  return result;
};