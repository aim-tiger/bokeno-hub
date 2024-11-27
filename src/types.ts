export type NSResult = {
  ok: boolean;
  error?: any;
  status: number;
  data?: any;
};

export type NSPermission = {
  name: string;
  description: string;
};

export class NSAuthUser {
  id: number = 0;
  userId: string = '';
  permissions: NSPermission[] = [];
  parse({ id, userId, permissions }: any) {
    this.id = id;
    this.userId = userId;
    this.permissions = permissions;
  }
}

export type ScrapeParam = {
  category_id: string;
  keyword?: string;
  type: string;
  item_ids?: string;
  user: NSAuthUser;
};
