import type { NSPermission } from '../types';

const {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_MANAGE_AUDIENCE,
} = process.env;
let cachedManageToken: any = null;
const cachedPermission: Map<string, any> = new Map<string, any>();
export const getManageToken = async () => {
  if (cachedManageToken !== null) {
    console.log('cachedManageToken.expired_at', cachedManageToken.expired_at);
    if (cachedManageToken.expired_at > Date.now()) {
      console.log('hit token cache');

      return cachedManageToken.access_token;
    }
  }

  const tokenResponse = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: AUTH0_CLIENT_ID,
      client_secret: AUTH0_CLIENT_SECRET,
      audience: AUTH0_MANAGE_AUDIENCE,
      grant_type: 'client_credentials',
    }),
  });

  const result = await tokenResponse.json();
  // console.log('result', result);
  cachedManageToken = {
    ...result,
    expired_at: Date.now() + result.expires_in,
  };
  return result.access_token;
};
export const getUserPermission = async (
  userId?: string,
  forced: boolean = false
):Promise<Array<NSPermission>> => {
  if (!userId) return [];
  if(!forced){
    const cached = cachedPermission.get(userId);
    if(cached){
      console.log('hit permission cache');
      return cached
    }
  }
  
  const accessToken = await getManageToken();
  const permissionsResponse = await fetch(
    `https://${AUTH0_DOMAIN}/api/v2/users/${userId}/permissions`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );
  const permissions = await permissionsResponse.json();
  const simplePermissions:Array<NSPermission> = permissions.map((p: any) => {
    return {
      name: p.permission_name,
      description: p.description,
    };
  });
  cachedPermission.set(userId, simplePermissions);
  //TODO: flatted the permissions
  return simplePermissions
};
