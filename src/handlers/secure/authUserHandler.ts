import { resErr } from '../common';
import { handleJWTBearer } from '../secure/jwtHandler';
import permissionConfig from './permissionConfig.json';
import type { NSPermission } from '../../types';
export const authUserHandler = async ({ bearer, set, path, store }: any) => {
  const result = await handleJWTBearer({ bearer, set });
  if (!result.ok) {
    return result;
  }
  //check permissions
  const needPermission = permissionConfig.find((p) => p.path === path);
  if (needPermission) {
    if (needPermission.permission !== 'none') {
      const hitPermission = result.data.permissions.find(
        (p: NSPermission) => p.name === needPermission.permission
      );
      if (!hitPermission) {
        return resErr(`Not allow to do this:${needPermission.permission}`, 401);
      }
    }
  } else {
    return resErr('Not permission registed', 401);
  }
  store.user.parse(result.data!);
};
