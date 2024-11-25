import { gql } from 'graphql-request';
import { execute } from './common';
import type { Nanisore_User, Nanisore_User_Insert_Input } from '../gql/graphql';
//从User表查询
const GET_USER_BY_USER_ID = gql`
  query GetUserByUserId($userId: String_comparison_exp = {}) @cached {
    nanisore_user(where: { userId: $userId }) {
      id
      userId
      userName
      lastSeen
    }
  }
`;
//更新表信息
const UPDATE_USER_LASTSEEN_BY_ID = gql`
  mutation UpdateUserLastseenByID(
    $lastSeen: date = ""
    $id: Int_comparison_exp = {}
  ) {
    update_nanisore_user(where: { id: $id }, _set: { lastSeen: $lastSeen }) {
      affected_rows
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($object: nanisore_user_insert_input = {}) {
    insert_nanisore_user_one(object: $object) {
      id
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUserByID($id: Int_comparison_exp = {}) {
    delete_nanisore_user(where: { id: $id }) {
      affected_rows
    }
  }
`;

export const getUserByUserId = async (userId: string) => {
  const result = await execute(GET_USER_BY_USER_ID, {
    userId: { _eq: userId },
  });
  return result.nanisore_user as Nanisore_User[];
};

export const updateUserLastseenByID = async (id: number, date: Date) => {
  const result = await execute(UPDATE_USER_LASTSEEN_BY_ID, {
    id: { _eq: id },
    lastSeen: date.toISOString(),
  });
  return result.update_nanisore_user.affected_rows;
};

export const createUser = async (newUser: Nanisore_User_Insert_Input) => {
  const result = await execute(CREATE_USER, {
    object: newUser,
  });
  return result.insert_nanisore_user_one as Nanisore_User_Insert_Input;
};

export const deleteUser = async (id: number) => {
  const result = await execute(DELETE_USER, {
    id: { _eq: id },
  });
  console.log('deleteUser', result);
  return result;
};
