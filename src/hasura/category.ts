import { gql } from 'graphql-request';
import { execute } from './common';

import {
  type Nanisore_Category,
  type Nanisore_Category_Insert_Input,
} from '../gql/graphql';

const ADD_CATEGORIES = gql`
  mutation AddCategories($objects: [nanisore_category_insert_input!]!) {
    insert_nanisore_category(
      objects: $objects
      on_conflict: { constraint: category_platform_id_link_parent_id_key }
    ) {
      affected_rows
    }
  }
`;

const ADD_CATEGORIES_WITH_RETURNING = gql`
  mutation AddCategoriesWithReturning(
    $objects: [nanisore_category_insert_input!]!
  ) {
    insert_nanisore_category(
      objects: $objects
      on_conflict: {
        constraint: category_link_platform_id_key
        update_columns: [created_at, title]
      }
    ) {
      affected_rows
      returning {
        id
        title
        link
      }
    }
  }
`;

const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    nanisore_category {
      parent_id
      parent_link
      title
      link
      id
      platform {
        name
        id
        site
      }
    }
  }
`;
const GET_CATEGORY_BY_PK = gql`
  query GetCategoryByPK($id: Int!) @cached {
    nanisore_category_by_pk(id: $id) {
      link
      id
      title
      parent_link
      platform {
        name
        id
        site
      }
    }
  }
`;
const UPDATE_PARENT_ID = gql`
  mutation UpdateParent($id: Int!, $parent_id: Int!) {
    update_nanisore_category(
      where: { id: { _eq: $id } }
      _set: { parent_id: $parent_id }
    ) {
      affected_rows
    }
  }
`;

const GET_CATEGORIES_BY_PLATFORM_NAME = gql`
  query GetCategoriesByPlatformName($name: String!) @cached {
    nanisore_category(where: { platform: { name: { _eq: $name } } }) {
      id
      title
      link
      parent_id
      parent_link
      platform {
        name
        id
        site
      }
    }
  }
`;

const GET_CATEGORY_BY_LINK = gql`
  query GetCategoryByLink($link: String!) {
    nanisore_category(where: { link: { _eq: $link } }) {
      id
      link
    }
  }
`;

const ADD_CATEGORY_ONE = gql`
  mutation AddCategoryOne($object: nanisore_category_insert_input!) {
    insert_nanisore_category_one(
      object: $object
      on_conflict: { constraint: category_platform_id_link_parent_id_key }
    ) {
      id
    }
  }
`;

export const addCategories = async (
  categories: Array<Nanisore_Category_Insert_Input>
) => {
  try {
    const result = await execute(ADD_CATEGORIES, { objects: categories });
    return result;
  } catch (error) {
    console.log(error);
    await Bun.write('public/results/error.txt', String(error));
    return null;
  }
};

export const addCategoriesWithReturning = async (
  categories: Array<Nanisore_Category_Insert_Input>
) => {
  try {
    const result = await execute(ADD_CATEGORIES_WITH_RETURNING, {
      objects: categories,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getCategories = async (platform_name: string) => {
  const result =
    platform_name === 'all'
      ? await execute(GET_ALL_CATEGORIES, {})
      : await execute(GET_CATEGORIES_BY_PLATFORM_NAME, {
          name: platform_name,
        });
  const cates: Array<Nanisore_Category> = result.nanisore_category;
  return cates;
};
export const getCategoryByPK = async (category_id: number) => {
  const result = await execute(GET_CATEGORY_BY_PK, { id: category_id });
  const cate: Nanisore_Category = result.nanisore_category_by_pk;
  return cate;
};

export const findParent = async () => {
  const cates: Array<Nanisore_Category> = await getCategories('all');
  for (let i = 0; i < cates.length; i++) {
    const cc = cates[i];
    if (cc.parent_link) {
      const theParent = cates.find((c) => {
        return c.link === cc.parent_link;
      });
      if (theParent) {
        console.log(cc.link, '->', theParent.link);
        if (!cc.parent_id) {
          await execute(UPDATE_PARENT_ID, {
            id: { _eq: cc.id },
            parent_id: theParent.id,
          });
        }
      }
    }
  }
  console.log('Done');
};

export const getCategoryByLink = async (link: string) => {
  const result = await execute(GET_CATEGORY_BY_LINK, { link: link });
  if (result.nanisore_category.length === 0) return null;
  return result.nanisore_category[0].id as number;
};

export const addCategoryOne = async (
  category: Nanisore_Category_Insert_Input
) => {
  const result = await execute(ADD_CATEGORY_ONE, { object: category });
  return result.insert_nanisore_category_one
};
