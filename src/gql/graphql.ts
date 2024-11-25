import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _Any: { input: any; output: any; }
  bigint: { input: any; output: any; }
  bpchar: { input: any; output: any; }
  numeric: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  _eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  _gt?: InputMaybe<Array<Scalars['Int']['input']>>;
  _gte?: InputMaybe<Array<Scalars['Int']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['Int']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['Int']['input']>>;
  _lte?: InputMaybe<Array<Scalars['Int']['input']>>;
  _neq?: InputMaybe<Array<Scalars['Int']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['Int']['input']>>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** A union of all types that use the @key directive */
export type _Entity = Nanisore_Category | Nanisore_Image | Nanisore_Platform | Nanisore_Product | Nanisore_Specification | Scraper_Item | Scraper_Run;

export type _Service = {
  __typename?: '_Service';
  /** SDL representation of schema */
  sdl: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']['input']>;
  _gt?: InputMaybe<Scalars['bpchar']['input']>;
  _gte?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']['input']>;
  _in?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']['input']>;
  _lt?: InputMaybe<Scalars['bpchar']['input']>;
  _lte?: InputMaybe<Scalars['bpchar']['input']>;
  _neq?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']['input']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "nanisore.category" */
  delete_nanisore_category?: Maybe<Nanisore_Category_Mutation_Response>;
  /** delete single row from the table: "nanisore.category" */
  delete_nanisore_category_by_pk?: Maybe<Nanisore_Category>;
  /** delete data from the table: "nanisore.category_material" */
  delete_nanisore_category_material?: Maybe<Nanisore_Category_Material_Mutation_Response>;
  /** delete single row from the table: "nanisore.category_material" */
  delete_nanisore_category_material_by_pk?: Maybe<Nanisore_Category_Material>;
  /** delete data from the table: "nanisore.group" */
  delete_nanisore_group?: Maybe<Nanisore_Group_Mutation_Response>;
  /** delete single row from the table: "nanisore.group" */
  delete_nanisore_group_by_pk?: Maybe<Nanisore_Group>;
  /** delete data from the table: "nanisore.image" */
  delete_nanisore_image?: Maybe<Nanisore_Image_Mutation_Response>;
  /** delete single row from the table: "nanisore.image" */
  delete_nanisore_image_by_pk?: Maybe<Nanisore_Image>;
  /** delete data from the table: "nanisore.order" */
  delete_nanisore_order?: Maybe<Nanisore_Order_Mutation_Response>;
  /** delete single row from the table: "nanisore.order" */
  delete_nanisore_order_by_pk?: Maybe<Nanisore_Order>;
  /** delete data from the table: "nanisore.order_item" */
  delete_nanisore_order_item?: Maybe<Nanisore_Order_Item_Mutation_Response>;
  /** delete single row from the table: "nanisore.order_item" */
  delete_nanisore_order_item_by_pk?: Maybe<Nanisore_Order_Item>;
  /** delete data from the table: "nanisore.payment" */
  delete_nanisore_payment?: Maybe<Nanisore_Payment_Mutation_Response>;
  /** delete single row from the table: "nanisore.payment" */
  delete_nanisore_payment_by_pk?: Maybe<Nanisore_Payment>;
  /** delete data from the table: "nanisore.platform" */
  delete_nanisore_platform?: Maybe<Nanisore_Platform_Mutation_Response>;
  /** delete single row from the table: "nanisore.platform" */
  delete_nanisore_platform_by_pk?: Maybe<Nanisore_Platform>;
  /** delete data from the table: "nanisore.platform_order" */
  delete_nanisore_platform_order?: Maybe<Nanisore_Platform_Order_Mutation_Response>;
  /** delete single row from the table: "nanisore.platform_order" */
  delete_nanisore_platform_order_by_pk?: Maybe<Nanisore_Platform_Order>;
  /** delete data from the table: "nanisore.platform_order_item" */
  delete_nanisore_platform_order_item?: Maybe<Nanisore_Platform_Order_Item_Mutation_Response>;
  /** delete single row from the table: "nanisore.platform_order_item" */
  delete_nanisore_platform_order_item_by_pk?: Maybe<Nanisore_Platform_Order_Item>;
  /** delete data from the table: "nanisore.product" */
  delete_nanisore_product?: Maybe<Nanisore_Product_Mutation_Response>;
  /** delete single row from the table: "nanisore.product" */
  delete_nanisore_product_by_pk?: Maybe<Nanisore_Product>;
  /** delete data from the table: "nanisore.recommendation" */
  delete_nanisore_recommendation?: Maybe<Nanisore_Recommendation_Mutation_Response>;
  /** delete single row from the table: "nanisore.recommendation" */
  delete_nanisore_recommendation_by_pk?: Maybe<Nanisore_Recommendation>;
  /** delete data from the table: "nanisore.shipping" */
  delete_nanisore_shipping?: Maybe<Nanisore_Shipping_Mutation_Response>;
  /** delete data from the table: "nanisore.shipping_address" */
  delete_nanisore_shipping_address?: Maybe<Nanisore_Shipping_Address_Mutation_Response>;
  /** delete single row from the table: "nanisore.shipping_address" */
  delete_nanisore_shipping_address_by_pk?: Maybe<Nanisore_Shipping_Address>;
  /** delete single row from the table: "nanisore.shipping" */
  delete_nanisore_shipping_by_pk?: Maybe<Nanisore_Shipping>;
  /** delete data from the table: "nanisore.shipping_log" */
  delete_nanisore_shipping_log?: Maybe<Nanisore_Shipping_Log_Mutation_Response>;
  /** delete single row from the table: "nanisore.shipping_log" */
  delete_nanisore_shipping_log_by_pk?: Maybe<Nanisore_Shipping_Log>;
  /** delete data from the table: "nanisore.shipping_method" */
  delete_nanisore_shipping_method?: Maybe<Nanisore_Shipping_Method_Mutation_Response>;
  /** delete single row from the table: "nanisore.shipping_method" */
  delete_nanisore_shipping_method_by_pk?: Maybe<Nanisore_Shipping_Method>;
  /** delete data from the table: "nanisore.specification" */
  delete_nanisore_specification?: Maybe<Nanisore_Specification_Mutation_Response>;
  /** delete single row from the table: "nanisore.specification" */
  delete_nanisore_specification_by_pk?: Maybe<Nanisore_Specification>;
  /** delete data from the table: "nanisore.stock_info" */
  delete_nanisore_stock_info?: Maybe<Nanisore_Stock_Info_Mutation_Response>;
  /** delete single row from the table: "nanisore.stock_info" */
  delete_nanisore_stock_info_by_pk?: Maybe<Nanisore_Stock_Info>;
  /** delete data from the table: "nanisore.unity_category" */
  delete_nanisore_unity_category?: Maybe<Nanisore_Unity_Category_Mutation_Response>;
  /** delete data from the table: "nanisore.unity_category_bridge" */
  delete_nanisore_unity_category_bridge?: Maybe<Nanisore_Unity_Category_Bridge_Mutation_Response>;
  /** delete single row from the table: "nanisore.unity_category_bridge" */
  delete_nanisore_unity_category_bridge_by_pk?: Maybe<Nanisore_Unity_Category_Bridge>;
  /** delete single row from the table: "nanisore.unity_category" */
  delete_nanisore_unity_category_by_pk?: Maybe<Nanisore_Unity_Category>;
  /** delete data from the table: "nanisore.user" */
  delete_nanisore_user?: Maybe<Nanisore_User_Mutation_Response>;
  /** delete single row from the table: "nanisore.user" */
  delete_nanisore_user_by_pk?: Maybe<Nanisore_User>;
  /** delete data from the table: "scraper.item" */
  delete_scraper_item?: Maybe<Scraper_Item_Mutation_Response>;
  /** delete single row from the table: "scraper.item" */
  delete_scraper_item_by_pk?: Maybe<Scraper_Item>;
  /** delete data from the table: "scraper.run" */
  delete_scraper_run?: Maybe<Scraper_Run_Mutation_Response>;
  /** delete single row from the table: "scraper.run" */
  delete_scraper_run_by_pk?: Maybe<Scraper_Run>;
  /** delete data from the table: "scraper.scrape_later" */
  delete_scraper_scrape_later?: Maybe<Scraper_Scrape_Later_Mutation_Response>;
  /** delete single row from the table: "scraper.scrape_later" */
  delete_scraper_scrape_later_by_pk?: Maybe<Scraper_Scrape_Later>;
  /** insert data into the table: "nanisore.category" */
  insert_nanisore_category?: Maybe<Nanisore_Category_Mutation_Response>;
  /** insert data into the table: "nanisore.category_material" */
  insert_nanisore_category_material?: Maybe<Nanisore_Category_Material_Mutation_Response>;
  /** insert a single row into the table: "nanisore.category_material" */
  insert_nanisore_category_material_one?: Maybe<Nanisore_Category_Material>;
  /** insert a single row into the table: "nanisore.category" */
  insert_nanisore_category_one?: Maybe<Nanisore_Category>;
  /** insert data into the table: "nanisore.group" */
  insert_nanisore_group?: Maybe<Nanisore_Group_Mutation_Response>;
  /** insert a single row into the table: "nanisore.group" */
  insert_nanisore_group_one?: Maybe<Nanisore_Group>;
  /** insert data into the table: "nanisore.image" */
  insert_nanisore_image?: Maybe<Nanisore_Image_Mutation_Response>;
  /** insert a single row into the table: "nanisore.image" */
  insert_nanisore_image_one?: Maybe<Nanisore_Image>;
  /** insert data into the table: "nanisore.order" */
  insert_nanisore_order?: Maybe<Nanisore_Order_Mutation_Response>;
  /** insert data into the table: "nanisore.order_item" */
  insert_nanisore_order_item?: Maybe<Nanisore_Order_Item_Mutation_Response>;
  /** insert a single row into the table: "nanisore.order_item" */
  insert_nanisore_order_item_one?: Maybe<Nanisore_Order_Item>;
  /** insert a single row into the table: "nanisore.order" */
  insert_nanisore_order_one?: Maybe<Nanisore_Order>;
  /** insert data into the table: "nanisore.payment" */
  insert_nanisore_payment?: Maybe<Nanisore_Payment_Mutation_Response>;
  /** insert a single row into the table: "nanisore.payment" */
  insert_nanisore_payment_one?: Maybe<Nanisore_Payment>;
  /** insert data into the table: "nanisore.platform" */
  insert_nanisore_platform?: Maybe<Nanisore_Platform_Mutation_Response>;
  /** insert a single row into the table: "nanisore.platform" */
  insert_nanisore_platform_one?: Maybe<Nanisore_Platform>;
  /** insert data into the table: "nanisore.platform_order" */
  insert_nanisore_platform_order?: Maybe<Nanisore_Platform_Order_Mutation_Response>;
  /** insert data into the table: "nanisore.platform_order_item" */
  insert_nanisore_platform_order_item?: Maybe<Nanisore_Platform_Order_Item_Mutation_Response>;
  /** insert a single row into the table: "nanisore.platform_order_item" */
  insert_nanisore_platform_order_item_one?: Maybe<Nanisore_Platform_Order_Item>;
  /** insert a single row into the table: "nanisore.platform_order" */
  insert_nanisore_platform_order_one?: Maybe<Nanisore_Platform_Order>;
  /** insert data into the table: "nanisore.product" */
  insert_nanisore_product?: Maybe<Nanisore_Product_Mutation_Response>;
  /** insert a single row into the table: "nanisore.product" */
  insert_nanisore_product_one?: Maybe<Nanisore_Product>;
  /** insert data into the table: "nanisore.recommendation" */
  insert_nanisore_recommendation?: Maybe<Nanisore_Recommendation_Mutation_Response>;
  /** insert a single row into the table: "nanisore.recommendation" */
  insert_nanisore_recommendation_one?: Maybe<Nanisore_Recommendation>;
  /** insert data into the table: "nanisore.shipping" */
  insert_nanisore_shipping?: Maybe<Nanisore_Shipping_Mutation_Response>;
  /** insert data into the table: "nanisore.shipping_address" */
  insert_nanisore_shipping_address?: Maybe<Nanisore_Shipping_Address_Mutation_Response>;
  /** insert a single row into the table: "nanisore.shipping_address" */
  insert_nanisore_shipping_address_one?: Maybe<Nanisore_Shipping_Address>;
  /** insert data into the table: "nanisore.shipping_log" */
  insert_nanisore_shipping_log?: Maybe<Nanisore_Shipping_Log_Mutation_Response>;
  /** insert a single row into the table: "nanisore.shipping_log" */
  insert_nanisore_shipping_log_one?: Maybe<Nanisore_Shipping_Log>;
  /** insert data into the table: "nanisore.shipping_method" */
  insert_nanisore_shipping_method?: Maybe<Nanisore_Shipping_Method_Mutation_Response>;
  /** insert a single row into the table: "nanisore.shipping_method" */
  insert_nanisore_shipping_method_one?: Maybe<Nanisore_Shipping_Method>;
  /** insert a single row into the table: "nanisore.shipping" */
  insert_nanisore_shipping_one?: Maybe<Nanisore_Shipping>;
  /** insert data into the table: "nanisore.specification" */
  insert_nanisore_specification?: Maybe<Nanisore_Specification_Mutation_Response>;
  /** insert a single row into the table: "nanisore.specification" */
  insert_nanisore_specification_one?: Maybe<Nanisore_Specification>;
  /** insert data into the table: "nanisore.stock_info" */
  insert_nanisore_stock_info?: Maybe<Nanisore_Stock_Info_Mutation_Response>;
  /** insert a single row into the table: "nanisore.stock_info" */
  insert_nanisore_stock_info_one?: Maybe<Nanisore_Stock_Info>;
  /** insert data into the table: "nanisore.unity_category" */
  insert_nanisore_unity_category?: Maybe<Nanisore_Unity_Category_Mutation_Response>;
  /** insert data into the table: "nanisore.unity_category_bridge" */
  insert_nanisore_unity_category_bridge?: Maybe<Nanisore_Unity_Category_Bridge_Mutation_Response>;
  /** insert a single row into the table: "nanisore.unity_category_bridge" */
  insert_nanisore_unity_category_bridge_one?: Maybe<Nanisore_Unity_Category_Bridge>;
  /** insert a single row into the table: "nanisore.unity_category" */
  insert_nanisore_unity_category_one?: Maybe<Nanisore_Unity_Category>;
  /** insert data into the table: "nanisore.user" */
  insert_nanisore_user?: Maybe<Nanisore_User_Mutation_Response>;
  /** insert a single row into the table: "nanisore.user" */
  insert_nanisore_user_one?: Maybe<Nanisore_User>;
  /** insert data into the table: "scraper.item" */
  insert_scraper_item?: Maybe<Scraper_Item_Mutation_Response>;
  /** insert a single row into the table: "scraper.item" */
  insert_scraper_item_one?: Maybe<Scraper_Item>;
  /** insert data into the table: "scraper.run" */
  insert_scraper_run?: Maybe<Scraper_Run_Mutation_Response>;
  /** insert a single row into the table: "scraper.run" */
  insert_scraper_run_one?: Maybe<Scraper_Run>;
  /** insert data into the table: "scraper.scrape_later" */
  insert_scraper_scrape_later?: Maybe<Scraper_Scrape_Later_Mutation_Response>;
  /** insert a single row into the table: "scraper.scrape_later" */
  insert_scraper_scrape_later_one?: Maybe<Scraper_Scrape_Later>;
  /** update data of the table: "nanisore.category" */
  update_nanisore_category?: Maybe<Nanisore_Category_Mutation_Response>;
  /** update single row of the table: "nanisore.category" */
  update_nanisore_category_by_pk?: Maybe<Nanisore_Category>;
  /** update multiples rows of table: "nanisore.category" */
  update_nanisore_category_many?: Maybe<Array<Maybe<Nanisore_Category_Mutation_Response>>>;
  /** update data of the table: "nanisore.category_material" */
  update_nanisore_category_material?: Maybe<Nanisore_Category_Material_Mutation_Response>;
  /** update single row of the table: "nanisore.category_material" */
  update_nanisore_category_material_by_pk?: Maybe<Nanisore_Category_Material>;
  /** update multiples rows of table: "nanisore.category_material" */
  update_nanisore_category_material_many?: Maybe<Array<Maybe<Nanisore_Category_Material_Mutation_Response>>>;
  /** update data of the table: "nanisore.group" */
  update_nanisore_group?: Maybe<Nanisore_Group_Mutation_Response>;
  /** update single row of the table: "nanisore.group" */
  update_nanisore_group_by_pk?: Maybe<Nanisore_Group>;
  /** update multiples rows of table: "nanisore.group" */
  update_nanisore_group_many?: Maybe<Array<Maybe<Nanisore_Group_Mutation_Response>>>;
  /** update data of the table: "nanisore.image" */
  update_nanisore_image?: Maybe<Nanisore_Image_Mutation_Response>;
  /** update single row of the table: "nanisore.image" */
  update_nanisore_image_by_pk?: Maybe<Nanisore_Image>;
  /** update multiples rows of table: "nanisore.image" */
  update_nanisore_image_many?: Maybe<Array<Maybe<Nanisore_Image_Mutation_Response>>>;
  /** update data of the table: "nanisore.order" */
  update_nanisore_order?: Maybe<Nanisore_Order_Mutation_Response>;
  /** update single row of the table: "nanisore.order" */
  update_nanisore_order_by_pk?: Maybe<Nanisore_Order>;
  /** update data of the table: "nanisore.order_item" */
  update_nanisore_order_item?: Maybe<Nanisore_Order_Item_Mutation_Response>;
  /** update single row of the table: "nanisore.order_item" */
  update_nanisore_order_item_by_pk?: Maybe<Nanisore_Order_Item>;
  /** update multiples rows of table: "nanisore.order_item" */
  update_nanisore_order_item_many?: Maybe<Array<Maybe<Nanisore_Order_Item_Mutation_Response>>>;
  /** update multiples rows of table: "nanisore.order" */
  update_nanisore_order_many?: Maybe<Array<Maybe<Nanisore_Order_Mutation_Response>>>;
  /** update data of the table: "nanisore.payment" */
  update_nanisore_payment?: Maybe<Nanisore_Payment_Mutation_Response>;
  /** update single row of the table: "nanisore.payment" */
  update_nanisore_payment_by_pk?: Maybe<Nanisore_Payment>;
  /** update multiples rows of table: "nanisore.payment" */
  update_nanisore_payment_many?: Maybe<Array<Maybe<Nanisore_Payment_Mutation_Response>>>;
  /** update data of the table: "nanisore.platform" */
  update_nanisore_platform?: Maybe<Nanisore_Platform_Mutation_Response>;
  /** update single row of the table: "nanisore.platform" */
  update_nanisore_platform_by_pk?: Maybe<Nanisore_Platform>;
  /** update multiples rows of table: "nanisore.platform" */
  update_nanisore_platform_many?: Maybe<Array<Maybe<Nanisore_Platform_Mutation_Response>>>;
  /** update data of the table: "nanisore.platform_order" */
  update_nanisore_platform_order?: Maybe<Nanisore_Platform_Order_Mutation_Response>;
  /** update single row of the table: "nanisore.platform_order" */
  update_nanisore_platform_order_by_pk?: Maybe<Nanisore_Platform_Order>;
  /** update data of the table: "nanisore.platform_order_item" */
  update_nanisore_platform_order_item?: Maybe<Nanisore_Platform_Order_Item_Mutation_Response>;
  /** update single row of the table: "nanisore.platform_order_item" */
  update_nanisore_platform_order_item_by_pk?: Maybe<Nanisore_Platform_Order_Item>;
  /** update multiples rows of table: "nanisore.platform_order_item" */
  update_nanisore_platform_order_item_many?: Maybe<Array<Maybe<Nanisore_Platform_Order_Item_Mutation_Response>>>;
  /** update multiples rows of table: "nanisore.platform_order" */
  update_nanisore_platform_order_many?: Maybe<Array<Maybe<Nanisore_Platform_Order_Mutation_Response>>>;
  /** update data of the table: "nanisore.product" */
  update_nanisore_product?: Maybe<Nanisore_Product_Mutation_Response>;
  /** update single row of the table: "nanisore.product" */
  update_nanisore_product_by_pk?: Maybe<Nanisore_Product>;
  /** update multiples rows of table: "nanisore.product" */
  update_nanisore_product_many?: Maybe<Array<Maybe<Nanisore_Product_Mutation_Response>>>;
  /** update data of the table: "nanisore.recommendation" */
  update_nanisore_recommendation?: Maybe<Nanisore_Recommendation_Mutation_Response>;
  /** update single row of the table: "nanisore.recommendation" */
  update_nanisore_recommendation_by_pk?: Maybe<Nanisore_Recommendation>;
  /** update multiples rows of table: "nanisore.recommendation" */
  update_nanisore_recommendation_many?: Maybe<Array<Maybe<Nanisore_Recommendation_Mutation_Response>>>;
  /** update data of the table: "nanisore.shipping" */
  update_nanisore_shipping?: Maybe<Nanisore_Shipping_Mutation_Response>;
  /** update data of the table: "nanisore.shipping_address" */
  update_nanisore_shipping_address?: Maybe<Nanisore_Shipping_Address_Mutation_Response>;
  /** update single row of the table: "nanisore.shipping_address" */
  update_nanisore_shipping_address_by_pk?: Maybe<Nanisore_Shipping_Address>;
  /** update multiples rows of table: "nanisore.shipping_address" */
  update_nanisore_shipping_address_many?: Maybe<Array<Maybe<Nanisore_Shipping_Address_Mutation_Response>>>;
  /** update single row of the table: "nanisore.shipping" */
  update_nanisore_shipping_by_pk?: Maybe<Nanisore_Shipping>;
  /** update data of the table: "nanisore.shipping_log" */
  update_nanisore_shipping_log?: Maybe<Nanisore_Shipping_Log_Mutation_Response>;
  /** update single row of the table: "nanisore.shipping_log" */
  update_nanisore_shipping_log_by_pk?: Maybe<Nanisore_Shipping_Log>;
  /** update multiples rows of table: "nanisore.shipping_log" */
  update_nanisore_shipping_log_many?: Maybe<Array<Maybe<Nanisore_Shipping_Log_Mutation_Response>>>;
  /** update multiples rows of table: "nanisore.shipping" */
  update_nanisore_shipping_many?: Maybe<Array<Maybe<Nanisore_Shipping_Mutation_Response>>>;
  /** update data of the table: "nanisore.shipping_method" */
  update_nanisore_shipping_method?: Maybe<Nanisore_Shipping_Method_Mutation_Response>;
  /** update single row of the table: "nanisore.shipping_method" */
  update_nanisore_shipping_method_by_pk?: Maybe<Nanisore_Shipping_Method>;
  /** update multiples rows of table: "nanisore.shipping_method" */
  update_nanisore_shipping_method_many?: Maybe<Array<Maybe<Nanisore_Shipping_Method_Mutation_Response>>>;
  /** update data of the table: "nanisore.specification" */
  update_nanisore_specification?: Maybe<Nanisore_Specification_Mutation_Response>;
  /** update single row of the table: "nanisore.specification" */
  update_nanisore_specification_by_pk?: Maybe<Nanisore_Specification>;
  /** update multiples rows of table: "nanisore.specification" */
  update_nanisore_specification_many?: Maybe<Array<Maybe<Nanisore_Specification_Mutation_Response>>>;
  /** update data of the table: "nanisore.stock_info" */
  update_nanisore_stock_info?: Maybe<Nanisore_Stock_Info_Mutation_Response>;
  /** update single row of the table: "nanisore.stock_info" */
  update_nanisore_stock_info_by_pk?: Maybe<Nanisore_Stock_Info>;
  /** update multiples rows of table: "nanisore.stock_info" */
  update_nanisore_stock_info_many?: Maybe<Array<Maybe<Nanisore_Stock_Info_Mutation_Response>>>;
  /** update data of the table: "nanisore.unity_category" */
  update_nanisore_unity_category?: Maybe<Nanisore_Unity_Category_Mutation_Response>;
  /** update data of the table: "nanisore.unity_category_bridge" */
  update_nanisore_unity_category_bridge?: Maybe<Nanisore_Unity_Category_Bridge_Mutation_Response>;
  /** update single row of the table: "nanisore.unity_category_bridge" */
  update_nanisore_unity_category_bridge_by_pk?: Maybe<Nanisore_Unity_Category_Bridge>;
  /** update multiples rows of table: "nanisore.unity_category_bridge" */
  update_nanisore_unity_category_bridge_many?: Maybe<Array<Maybe<Nanisore_Unity_Category_Bridge_Mutation_Response>>>;
  /** update single row of the table: "nanisore.unity_category" */
  update_nanisore_unity_category_by_pk?: Maybe<Nanisore_Unity_Category>;
  /** update multiples rows of table: "nanisore.unity_category" */
  update_nanisore_unity_category_many?: Maybe<Array<Maybe<Nanisore_Unity_Category_Mutation_Response>>>;
  /** update data of the table: "nanisore.user" */
  update_nanisore_user?: Maybe<Nanisore_User_Mutation_Response>;
  /** update single row of the table: "nanisore.user" */
  update_nanisore_user_by_pk?: Maybe<Nanisore_User>;
  /** update multiples rows of table: "nanisore.user" */
  update_nanisore_user_many?: Maybe<Array<Maybe<Nanisore_User_Mutation_Response>>>;
  /** update data of the table: "scraper.item" */
  update_scraper_item?: Maybe<Scraper_Item_Mutation_Response>;
  /** update single row of the table: "scraper.item" */
  update_scraper_item_by_pk?: Maybe<Scraper_Item>;
  /** update multiples rows of table: "scraper.item" */
  update_scraper_item_many?: Maybe<Array<Maybe<Scraper_Item_Mutation_Response>>>;
  /** update data of the table: "scraper.run" */
  update_scraper_run?: Maybe<Scraper_Run_Mutation_Response>;
  /** update single row of the table: "scraper.run" */
  update_scraper_run_by_pk?: Maybe<Scraper_Run>;
  /** update multiples rows of table: "scraper.run" */
  update_scraper_run_many?: Maybe<Array<Maybe<Scraper_Run_Mutation_Response>>>;
  /** update data of the table: "scraper.scrape_later" */
  update_scraper_scrape_later?: Maybe<Scraper_Scrape_Later_Mutation_Response>;
  /** update single row of the table: "scraper.scrape_later" */
  update_scraper_scrape_later_by_pk?: Maybe<Scraper_Scrape_Later>;
  /** update multiples rows of table: "scraper.scrape_later" */
  update_scraper_scrape_later_many?: Maybe<Array<Maybe<Scraper_Scrape_Later_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_CategoryArgs = {
  where: Nanisore_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Category_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Category_MaterialArgs = {
  where: Nanisore_Category_Material_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Category_Material_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_GroupArgs = {
  where: Nanisore_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Group_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_ImageArgs = {
  where: Nanisore_Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Image_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_OrderArgs = {
  where: Nanisore_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Order_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Order_ItemArgs = {
  where: Nanisore_Order_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Order_Item_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_PaymentArgs = {
  where: Nanisore_Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Payment_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_PlatformArgs = {
  where: Nanisore_Platform_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Platform_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Platform_OrderArgs = {
  where: Nanisore_Platform_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Platform_Order_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Platform_Order_ItemArgs = {
  where: Nanisore_Platform_Order_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Platform_Order_Item_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_ProductArgs = {
  where: Nanisore_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Product_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_RecommendationArgs = {
  where: Nanisore_Recommendation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Recommendation_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_ShippingArgs = {
  where: Nanisore_Shipping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Shipping_AddressArgs = {
  where: Nanisore_Shipping_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Shipping_Address_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Shipping_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Shipping_LogArgs = {
  where: Nanisore_Shipping_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Shipping_Log_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Shipping_MethodArgs = {
  where: Nanisore_Shipping_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Shipping_Method_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_SpecificationArgs = {
  where: Nanisore_Specification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Specification_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Stock_InfoArgs = {
  where: Nanisore_Stock_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Stock_Info_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Unity_CategoryArgs = {
  where: Nanisore_Unity_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Unity_Category_BridgeArgs = {
  where: Nanisore_Unity_Category_Bridge_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Unity_Category_Bridge_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_Unity_Category_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_UserArgs = {
  where: Nanisore_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nanisore_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Scraper_ItemArgs = {
  where: Scraper_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Scraper_Item_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Scraper_RunArgs = {
  where: Scraper_Run_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Scraper_Run_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Scraper_Scrape_LaterArgs = {
  where: Scraper_Scrape_Later_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Scraper_Scrape_Later_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_CategoryArgs = {
  objects: Array<Nanisore_Category_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Category_MaterialArgs = {
  objects: Array<Nanisore_Category_Material_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Category_Material_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Category_Material_OneArgs = {
  object: Nanisore_Category_Material_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Category_Material_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Category_OneArgs = {
  object: Nanisore_Category_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_GroupArgs = {
  objects: Array<Nanisore_Group_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Group_OneArgs = {
  object: Nanisore_Group_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_ImageArgs = {
  objects: Array<Nanisore_Image_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Image_OneArgs = {
  object: Nanisore_Image_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_OrderArgs = {
  objects: Array<Nanisore_Order_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Order_ItemArgs = {
  objects: Array<Nanisore_Order_Item_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Order_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Order_Item_OneArgs = {
  object: Nanisore_Order_Item_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Order_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Order_OneArgs = {
  object: Nanisore_Order_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_PaymentArgs = {
  objects: Array<Nanisore_Payment_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Payment_OneArgs = {
  object: Nanisore_Payment_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Payment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_PlatformArgs = {
  objects: Array<Nanisore_Platform_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Platform_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Platform_OneArgs = {
  object: Nanisore_Platform_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Platform_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Platform_OrderArgs = {
  objects: Array<Nanisore_Platform_Order_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Platform_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Platform_Order_ItemArgs = {
  objects: Array<Nanisore_Platform_Order_Item_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Platform_Order_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Platform_Order_Item_OneArgs = {
  object: Nanisore_Platform_Order_Item_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Platform_Order_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Platform_Order_OneArgs = {
  object: Nanisore_Platform_Order_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Platform_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_ProductArgs = {
  objects: Array<Nanisore_Product_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Product_OneArgs = {
  object: Nanisore_Product_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_RecommendationArgs = {
  objects: Array<Nanisore_Recommendation_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Recommendation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Recommendation_OneArgs = {
  object: Nanisore_Recommendation_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Recommendation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_ShippingArgs = {
  objects: Array<Nanisore_Shipping_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Shipping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Shipping_AddressArgs = {
  objects: Array<Nanisore_Shipping_Address_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Shipping_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Shipping_Address_OneArgs = {
  object: Nanisore_Shipping_Address_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Shipping_Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Shipping_LogArgs = {
  objects: Array<Nanisore_Shipping_Log_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Shipping_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Shipping_Log_OneArgs = {
  object: Nanisore_Shipping_Log_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Shipping_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Shipping_MethodArgs = {
  objects: Array<Nanisore_Shipping_Method_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Shipping_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Shipping_Method_OneArgs = {
  object: Nanisore_Shipping_Method_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Shipping_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Shipping_OneArgs = {
  object: Nanisore_Shipping_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Shipping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_SpecificationArgs = {
  objects: Array<Nanisore_Specification_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Specification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Specification_OneArgs = {
  object: Nanisore_Specification_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Specification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Stock_InfoArgs = {
  objects: Array<Nanisore_Stock_Info_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Stock_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Stock_Info_OneArgs = {
  object: Nanisore_Stock_Info_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Stock_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Unity_CategoryArgs = {
  objects: Array<Nanisore_Unity_Category_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Unity_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Unity_Category_BridgeArgs = {
  objects: Array<Nanisore_Unity_Category_Bridge_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_Unity_Category_Bridge_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Unity_Category_Bridge_OneArgs = {
  object: Nanisore_Unity_Category_Bridge_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Unity_Category_Bridge_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_Unity_Category_OneArgs = {
  object: Nanisore_Unity_Category_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_Unity_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_UserArgs = {
  objects: Array<Nanisore_User_Insert_Input>;
  on_conflict?: InputMaybe<Nanisore_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nanisore_User_OneArgs = {
  object: Nanisore_User_Insert_Input;
  on_conflict?: InputMaybe<Nanisore_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scraper_ItemArgs = {
  objects: Array<Scraper_Item_Insert_Input>;
  on_conflict?: InputMaybe<Scraper_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scraper_Item_OneArgs = {
  object: Scraper_Item_Insert_Input;
  on_conflict?: InputMaybe<Scraper_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scraper_RunArgs = {
  objects: Array<Scraper_Run_Insert_Input>;
  on_conflict?: InputMaybe<Scraper_Run_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scraper_Run_OneArgs = {
  object: Scraper_Run_Insert_Input;
  on_conflict?: InputMaybe<Scraper_Run_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scraper_Scrape_LaterArgs = {
  objects: Array<Scraper_Scrape_Later_Insert_Input>;
  on_conflict?: InputMaybe<Scraper_Scrape_Later_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scraper_Scrape_Later_OneArgs = {
  object: Scraper_Scrape_Later_Insert_Input;
  on_conflict?: InputMaybe<Scraper_Scrape_Later_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_CategoryArgs = {
  _inc?: InputMaybe<Nanisore_Category_Inc_Input>;
  _set?: InputMaybe<Nanisore_Category_Set_Input>;
  where: Nanisore_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Category_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Category_Inc_Input>;
  _set?: InputMaybe<Nanisore_Category_Set_Input>;
  pk_columns: Nanisore_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Category_ManyArgs = {
  updates: Array<Nanisore_Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Category_MaterialArgs = {
  _inc?: InputMaybe<Nanisore_Category_Material_Inc_Input>;
  _set?: InputMaybe<Nanisore_Category_Material_Set_Input>;
  where: Nanisore_Category_Material_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Category_Material_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Category_Material_Inc_Input>;
  _set?: InputMaybe<Nanisore_Category_Material_Set_Input>;
  pk_columns: Nanisore_Category_Material_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Category_Material_ManyArgs = {
  updates: Array<Nanisore_Category_Material_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_GroupArgs = {
  _inc?: InputMaybe<Nanisore_Group_Inc_Input>;
  _set?: InputMaybe<Nanisore_Group_Set_Input>;
  where: Nanisore_Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Group_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Group_Inc_Input>;
  _set?: InputMaybe<Nanisore_Group_Set_Input>;
  pk_columns: Nanisore_Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Group_ManyArgs = {
  updates: Array<Nanisore_Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_ImageArgs = {
  _inc?: InputMaybe<Nanisore_Image_Inc_Input>;
  _set?: InputMaybe<Nanisore_Image_Set_Input>;
  where: Nanisore_Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Image_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Image_Inc_Input>;
  _set?: InputMaybe<Nanisore_Image_Set_Input>;
  pk_columns: Nanisore_Image_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Image_ManyArgs = {
  updates: Array<Nanisore_Image_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_OrderArgs = {
  _inc?: InputMaybe<Nanisore_Order_Inc_Input>;
  _set?: InputMaybe<Nanisore_Order_Set_Input>;
  where: Nanisore_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Order_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Order_Inc_Input>;
  _set?: InputMaybe<Nanisore_Order_Set_Input>;
  pk_columns: Nanisore_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Order_ItemArgs = {
  _inc?: InputMaybe<Nanisore_Order_Item_Inc_Input>;
  _set?: InputMaybe<Nanisore_Order_Item_Set_Input>;
  where: Nanisore_Order_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Order_Item_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Order_Item_Inc_Input>;
  _set?: InputMaybe<Nanisore_Order_Item_Set_Input>;
  pk_columns: Nanisore_Order_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Order_Item_ManyArgs = {
  updates: Array<Nanisore_Order_Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Order_ManyArgs = {
  updates: Array<Nanisore_Order_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_PaymentArgs = {
  _inc?: InputMaybe<Nanisore_Payment_Inc_Input>;
  _set?: InputMaybe<Nanisore_Payment_Set_Input>;
  where: Nanisore_Payment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Payment_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Payment_Inc_Input>;
  _set?: InputMaybe<Nanisore_Payment_Set_Input>;
  pk_columns: Nanisore_Payment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Payment_ManyArgs = {
  updates: Array<Nanisore_Payment_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_PlatformArgs = {
  _inc?: InputMaybe<Nanisore_Platform_Inc_Input>;
  _set?: InputMaybe<Nanisore_Platform_Set_Input>;
  where: Nanisore_Platform_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Platform_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Platform_Inc_Input>;
  _set?: InputMaybe<Nanisore_Platform_Set_Input>;
  pk_columns: Nanisore_Platform_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Platform_ManyArgs = {
  updates: Array<Nanisore_Platform_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Platform_OrderArgs = {
  _inc?: InputMaybe<Nanisore_Platform_Order_Inc_Input>;
  _set?: InputMaybe<Nanisore_Platform_Order_Set_Input>;
  where: Nanisore_Platform_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Platform_Order_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Platform_Order_Inc_Input>;
  _set?: InputMaybe<Nanisore_Platform_Order_Set_Input>;
  pk_columns: Nanisore_Platform_Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Platform_Order_ItemArgs = {
  _inc?: InputMaybe<Nanisore_Platform_Order_Item_Inc_Input>;
  _set?: InputMaybe<Nanisore_Platform_Order_Item_Set_Input>;
  where: Nanisore_Platform_Order_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Platform_Order_Item_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Platform_Order_Item_Inc_Input>;
  _set?: InputMaybe<Nanisore_Platform_Order_Item_Set_Input>;
  pk_columns: Nanisore_Platform_Order_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Platform_Order_Item_ManyArgs = {
  updates: Array<Nanisore_Platform_Order_Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Platform_Order_ManyArgs = {
  updates: Array<Nanisore_Platform_Order_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_ProductArgs = {
  _inc?: InputMaybe<Nanisore_Product_Inc_Input>;
  _set?: InputMaybe<Nanisore_Product_Set_Input>;
  where: Nanisore_Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Product_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Product_Inc_Input>;
  _set?: InputMaybe<Nanisore_Product_Set_Input>;
  pk_columns: Nanisore_Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Product_ManyArgs = {
  updates: Array<Nanisore_Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_RecommendationArgs = {
  _inc?: InputMaybe<Nanisore_Recommendation_Inc_Input>;
  _set?: InputMaybe<Nanisore_Recommendation_Set_Input>;
  where: Nanisore_Recommendation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Recommendation_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Recommendation_Inc_Input>;
  _set?: InputMaybe<Nanisore_Recommendation_Set_Input>;
  pk_columns: Nanisore_Recommendation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Recommendation_ManyArgs = {
  updates: Array<Nanisore_Recommendation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_ShippingArgs = {
  _inc?: InputMaybe<Nanisore_Shipping_Inc_Input>;
  _set?: InputMaybe<Nanisore_Shipping_Set_Input>;
  where: Nanisore_Shipping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_AddressArgs = {
  _inc?: InputMaybe<Nanisore_Shipping_Address_Inc_Input>;
  _set?: InputMaybe<Nanisore_Shipping_Address_Set_Input>;
  where: Nanisore_Shipping_Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_Address_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Shipping_Address_Inc_Input>;
  _set?: InputMaybe<Nanisore_Shipping_Address_Set_Input>;
  pk_columns: Nanisore_Shipping_Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_Address_ManyArgs = {
  updates: Array<Nanisore_Shipping_Address_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Shipping_Inc_Input>;
  _set?: InputMaybe<Nanisore_Shipping_Set_Input>;
  pk_columns: Nanisore_Shipping_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_LogArgs = {
  _inc?: InputMaybe<Nanisore_Shipping_Log_Inc_Input>;
  _set?: InputMaybe<Nanisore_Shipping_Log_Set_Input>;
  where: Nanisore_Shipping_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_Log_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Shipping_Log_Inc_Input>;
  _set?: InputMaybe<Nanisore_Shipping_Log_Set_Input>;
  pk_columns: Nanisore_Shipping_Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_Log_ManyArgs = {
  updates: Array<Nanisore_Shipping_Log_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_ManyArgs = {
  updates: Array<Nanisore_Shipping_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_MethodArgs = {
  _inc?: InputMaybe<Nanisore_Shipping_Method_Inc_Input>;
  _set?: InputMaybe<Nanisore_Shipping_Method_Set_Input>;
  where: Nanisore_Shipping_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_Method_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Shipping_Method_Inc_Input>;
  _set?: InputMaybe<Nanisore_Shipping_Method_Set_Input>;
  pk_columns: Nanisore_Shipping_Method_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Shipping_Method_ManyArgs = {
  updates: Array<Nanisore_Shipping_Method_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_SpecificationArgs = {
  _inc?: InputMaybe<Nanisore_Specification_Inc_Input>;
  _set?: InputMaybe<Nanisore_Specification_Set_Input>;
  where: Nanisore_Specification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Specification_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Specification_Inc_Input>;
  _set?: InputMaybe<Nanisore_Specification_Set_Input>;
  pk_columns: Nanisore_Specification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Specification_ManyArgs = {
  updates: Array<Nanisore_Specification_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Stock_InfoArgs = {
  _inc?: InputMaybe<Nanisore_Stock_Info_Inc_Input>;
  _set?: InputMaybe<Nanisore_Stock_Info_Set_Input>;
  where: Nanisore_Stock_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Stock_Info_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Stock_Info_Inc_Input>;
  _set?: InputMaybe<Nanisore_Stock_Info_Set_Input>;
  pk_columns: Nanisore_Stock_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Stock_Info_ManyArgs = {
  updates: Array<Nanisore_Stock_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Unity_CategoryArgs = {
  _inc?: InputMaybe<Nanisore_Unity_Category_Inc_Input>;
  _set?: InputMaybe<Nanisore_Unity_Category_Set_Input>;
  where: Nanisore_Unity_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Unity_Category_BridgeArgs = {
  _inc?: InputMaybe<Nanisore_Unity_Category_Bridge_Inc_Input>;
  _set?: InputMaybe<Nanisore_Unity_Category_Bridge_Set_Input>;
  where: Nanisore_Unity_Category_Bridge_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Unity_Category_Bridge_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Unity_Category_Bridge_Inc_Input>;
  _set?: InputMaybe<Nanisore_Unity_Category_Bridge_Set_Input>;
  pk_columns: Nanisore_Unity_Category_Bridge_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Unity_Category_Bridge_ManyArgs = {
  updates: Array<Nanisore_Unity_Category_Bridge_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Unity_Category_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_Unity_Category_Inc_Input>;
  _set?: InputMaybe<Nanisore_Unity_Category_Set_Input>;
  pk_columns: Nanisore_Unity_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_Unity_Category_ManyArgs = {
  updates: Array<Nanisore_Unity_Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_UserArgs = {
  _inc?: InputMaybe<Nanisore_User_Inc_Input>;
  _set?: InputMaybe<Nanisore_User_Set_Input>;
  where: Nanisore_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_User_By_PkArgs = {
  _inc?: InputMaybe<Nanisore_User_Inc_Input>;
  _set?: InputMaybe<Nanisore_User_Set_Input>;
  pk_columns: Nanisore_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nanisore_User_ManyArgs = {
  updates: Array<Nanisore_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_ItemArgs = {
  _inc?: InputMaybe<Scraper_Item_Inc_Input>;
  _set?: InputMaybe<Scraper_Item_Set_Input>;
  where: Scraper_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_Item_By_PkArgs = {
  _inc?: InputMaybe<Scraper_Item_Inc_Input>;
  _set?: InputMaybe<Scraper_Item_Set_Input>;
  pk_columns: Scraper_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_Item_ManyArgs = {
  updates: Array<Scraper_Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_RunArgs = {
  _inc?: InputMaybe<Scraper_Run_Inc_Input>;
  _set?: InputMaybe<Scraper_Run_Set_Input>;
  where: Scraper_Run_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_Run_By_PkArgs = {
  _inc?: InputMaybe<Scraper_Run_Inc_Input>;
  _set?: InputMaybe<Scraper_Run_Set_Input>;
  pk_columns: Scraper_Run_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_Run_ManyArgs = {
  updates: Array<Scraper_Run_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_Scrape_LaterArgs = {
  _inc?: InputMaybe<Scraper_Scrape_Later_Inc_Input>;
  _set?: InputMaybe<Scraper_Scrape_Later_Set_Input>;
  where: Scraper_Scrape_Later_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_Scrape_Later_By_PkArgs = {
  _inc?: InputMaybe<Scraper_Scrape_Later_Inc_Input>;
  _set?: InputMaybe<Scraper_Scrape_Later_Set_Input>;
  pk_columns: Scraper_Scrape_Later_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Scraper_Scrape_Later_ManyArgs = {
  updates: Array<Scraper_Scrape_Later_Updates>;
};

/** columns and relationships of "nanisore.category" */
export type Nanisore_Category = {
  __typename?: 'nanisore_category';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  /** An object relationship */
  parent?: Maybe<Nanisore_Category>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  parent_link?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  platform?: Maybe<Nanisore_Platform>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  /** An object relationship */
  unity_category?: Maybe<Nanisore_Unity_Category_Bridge>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.category" */
export type Nanisore_Category_Aggregate = {
  __typename?: 'nanisore_category_aggregate';
  aggregate?: Maybe<Nanisore_Category_Aggregate_Fields>;
  nodes: Array<Nanisore_Category>;
};

/** aggregate fields of "nanisore.category" */
export type Nanisore_Category_Aggregate_Fields = {
  __typename?: 'nanisore_category_aggregate_fields';
  avg?: Maybe<Nanisore_Category_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Category_Max_Fields>;
  min?: Maybe<Nanisore_Category_Min_Fields>;
  stddev?: Maybe<Nanisore_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Category_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Category_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Category_Variance_Fields>;
};


/** aggregate fields of "nanisore.category" */
export type Nanisore_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Category_Avg_Fields = {
  __typename?: 'nanisore_category_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.category". All fields are combined with a logical 'AND'. */
export type Nanisore_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Category_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Category_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  parent?: InputMaybe<Nanisore_Category_Bool_Exp>;
  parent_id?: InputMaybe<Int_Comparison_Exp>;
  parent_link?: InputMaybe<String_Comparison_Exp>;
  platform?: InputMaybe<Nanisore_Platform_Bool_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.category" */
export enum Nanisore_Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey',
  /** unique or primary key constraint on columns "parent_id", "platform_id", "link" */
  CategoryPlatformIdLinkParentIdKey = 'category_platform_id_link_parent_id_key'
}

/** input type for incrementing numeric columns in table "nanisore.category" */
export type Nanisore_Category_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.category" */
export type Nanisore_Category_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Nanisore_Category_Obj_Rel_Insert_Input>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  parent_link?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Nanisore_Platform_Obj_Rel_Insert_Input>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Bridge_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** 在爬取过程中，作为过渡数据存储的表 */
export type Nanisore_Category_Material = {
  __typename?: 'nanisore_category_material';
  created_at: Scalars['timestamptz']['output'];
  d_category?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  original_category_ids?: Maybe<Array<Scalars['Int']['output']>>;
  /** An object relationship */
  product?: Maybe<Nanisore_Product>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.category_material" */
export type Nanisore_Category_Material_Aggregate = {
  __typename?: 'nanisore_category_material_aggregate';
  aggregate?: Maybe<Nanisore_Category_Material_Aggregate_Fields>;
  nodes: Array<Nanisore_Category_Material>;
};

/** aggregate fields of "nanisore.category_material" */
export type Nanisore_Category_Material_Aggregate_Fields = {
  __typename?: 'nanisore_category_material_aggregate_fields';
  avg?: Maybe<Nanisore_Category_Material_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Category_Material_Max_Fields>;
  min?: Maybe<Nanisore_Category_Material_Min_Fields>;
  stddev?: Maybe<Nanisore_Category_Material_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Category_Material_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Category_Material_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Category_Material_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Category_Material_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Category_Material_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Category_Material_Variance_Fields>;
};


/** aggregate fields of "nanisore.category_material" */
export type Nanisore_Category_Material_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Category_Material_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Category_Material_Avg_Fields = {
  __typename?: 'nanisore_category_material_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.category_material". All fields are combined with a logical 'AND'. */
export type Nanisore_Category_Material_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Category_Material_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Category_Material_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Category_Material_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  d_category?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  original_category_ids?: InputMaybe<Int_Array_Comparison_Exp>;
  product?: InputMaybe<Nanisore_Product_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.category_material" */
export enum Nanisore_Category_Material_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoryMaterialPkey = 'category_material_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.category_material" */
export type Nanisore_Category_Material_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.category_material" */
export type Nanisore_Category_Material_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  d_category?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  original_category_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  product?: InputMaybe<Nanisore_Product_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Category_Material_Max_Fields = {
  __typename?: 'nanisore_category_material_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  d_category?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  original_category_ids?: Maybe<Array<Scalars['Int']['output']>>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Category_Material_Min_Fields = {
  __typename?: 'nanisore_category_material_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  d_category?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  original_category_ids?: Maybe<Array<Scalars['Int']['output']>>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.category_material" */
export type Nanisore_Category_Material_Mutation_Response = {
  __typename?: 'nanisore_category_material_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Category_Material>;
};

/** input type for inserting object relation for remote table "nanisore.category_material" */
export type Nanisore_Category_Material_Obj_Rel_Insert_Input = {
  data: Nanisore_Category_Material_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Category_Material_On_Conflict>;
};

/** on_conflict condition type for table "nanisore.category_material" */
export type Nanisore_Category_Material_On_Conflict = {
  constraint: Nanisore_Category_Material_Constraint;
  update_columns?: Array<Nanisore_Category_Material_Update_Column>;
  where?: InputMaybe<Nanisore_Category_Material_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.category_material". */
export type Nanisore_Category_Material_Order_By = {
  created_at?: InputMaybe<Order_By>;
  d_category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_ids?: InputMaybe<Order_By>;
  product?: InputMaybe<Nanisore_Product_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.category_material */
export type Nanisore_Category_Material_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "nanisore.category_material" */
export enum Nanisore_Category_Material_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DCategory = 'd_category',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalCategoryIds = 'original_category_ids',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.category_material" */
export type Nanisore_Category_Material_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  d_category?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  original_category_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Category_Material_Stddev_Fields = {
  __typename?: 'nanisore_category_material_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Category_Material_Stddev_Pop_Fields = {
  __typename?: 'nanisore_category_material_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Category_Material_Stddev_Samp_Fields = {
  __typename?: 'nanisore_category_material_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_category_material" */
export type Nanisore_Category_Material_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Category_Material_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Category_Material_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  d_category?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  original_category_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Category_Material_Sum_Fields = {
  __typename?: 'nanisore_category_material_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.category_material" */
export enum Nanisore_Category_Material_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DCategory = 'd_category',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalCategoryIds = 'original_category_ids',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Category_Material_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Category_Material_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Category_Material_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Category_Material_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Category_Material_Var_Pop_Fields = {
  __typename?: 'nanisore_category_material_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Category_Material_Var_Samp_Fields = {
  __typename?: 'nanisore_category_material_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Category_Material_Variance_Fields = {
  __typename?: 'nanisore_category_material_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Nanisore_Category_Max_Fields = {
  __typename?: 'nanisore_category_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  parent_link?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Category_Min_Fields = {
  __typename?: 'nanisore_category_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  parent_link?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.category" */
export type Nanisore_Category_Mutation_Response = {
  __typename?: 'nanisore_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Category>;
};

/** input type for inserting object relation for remote table "nanisore.category" */
export type Nanisore_Category_Obj_Rel_Insert_Input = {
  data: Nanisore_Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Category_On_Conflict>;
};

/** on_conflict condition type for table "nanisore.category" */
export type Nanisore_Category_On_Conflict = {
  constraint: Nanisore_Category_Constraint;
  update_columns?: Array<Nanisore_Category_Update_Column>;
  where?: InputMaybe<Nanisore_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.category". */
export type Nanisore_Category_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  parent?: InputMaybe<Nanisore_Category_Order_By>;
  parent_id?: InputMaybe<Order_By>;
  parent_link?: InputMaybe<Order_By>;
  platform?: InputMaybe<Nanisore_Platform_Order_By>;
  platform_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Bridge_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.category */
export type Nanisore_Category_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "nanisore.category" */
export enum Nanisore_Category_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  ParentLink = 'parent_link',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.category" */
export type Nanisore_Category_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  parent_link?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Category_Stddev_Fields = {
  __typename?: 'nanisore_category_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Category_Stddev_Pop_Fields = {
  __typename?: 'nanisore_category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Category_Stddev_Samp_Fields = {
  __typename?: 'nanisore_category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_category" */
export type Nanisore_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Category_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  parent_link?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Category_Sum_Fields = {
  __typename?: 'nanisore_category_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.category" */
export enum Nanisore_Category_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  ParentLink = 'parent_link',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Category_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Category_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Category_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Category_Var_Pop_Fields = {
  __typename?: 'nanisore_category_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Category_Var_Samp_Fields = {
  __typename?: 'nanisore_category_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Category_Variance_Fields = {
  __typename?: 'nanisore_category_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  parent_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Group up same kind products */
export type Nanisore_Group = {
  __typename?: 'nanisore_group';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  platform_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  products: Array<Nanisore_Product>;
  /** An aggregate relationship */
  products_aggregate: Nanisore_Product_Aggregate;
  /** An array relationship */
  specifications: Array<Nanisore_Specification>;
  /** An aggregate relationship */
  specifications_aggregate: Nanisore_Specification_Aggregate;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** Group up same kind products */
export type Nanisore_GroupProductsArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Product_Order_By>>;
  where?: InputMaybe<Nanisore_Product_Bool_Exp>;
};


/** Group up same kind products */
export type Nanisore_GroupProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Product_Order_By>>;
  where?: InputMaybe<Nanisore_Product_Bool_Exp>;
};


/** Group up same kind products */
export type Nanisore_GroupSpecificationsArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Specification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Specification_Order_By>>;
  where?: InputMaybe<Nanisore_Specification_Bool_Exp>;
};


/** Group up same kind products */
export type Nanisore_GroupSpecifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Specification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Specification_Order_By>>;
  where?: InputMaybe<Nanisore_Specification_Bool_Exp>;
};

/** aggregated selection of "nanisore.group" */
export type Nanisore_Group_Aggregate = {
  __typename?: 'nanisore_group_aggregate';
  aggregate?: Maybe<Nanisore_Group_Aggregate_Fields>;
  nodes: Array<Nanisore_Group>;
};

/** aggregate fields of "nanisore.group" */
export type Nanisore_Group_Aggregate_Fields = {
  __typename?: 'nanisore_group_aggregate_fields';
  avg?: Maybe<Nanisore_Group_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Group_Max_Fields>;
  min?: Maybe<Nanisore_Group_Min_Fields>;
  stddev?: Maybe<Nanisore_Group_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Group_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Group_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Group_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Group_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Group_Variance_Fields>;
};


/** aggregate fields of "nanisore.group" */
export type Nanisore_Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Group_Avg_Fields = {
  __typename?: 'nanisore_group_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.group". All fields are combined with a logical 'AND'. */
export type Nanisore_Group_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Group_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Group_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Group_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  products?: InputMaybe<Nanisore_Product_Bool_Exp>;
  products_aggregate?: InputMaybe<Nanisore_Product_Aggregate_Bool_Exp>;
  specifications?: InputMaybe<Nanisore_Specification_Bool_Exp>;
  specifications_aggregate?: InputMaybe<Nanisore_Specification_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.group" */
export enum Nanisore_Group_Constraint {
  /** unique or primary key constraint on columns "id" */
  GroupPkey = 'group_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.group" */
export type Nanisore_Group_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.group" */
export type Nanisore_Group_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Nanisore_Product_Arr_Rel_Insert_Input>;
  specifications?: InputMaybe<Nanisore_Specification_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Group_Max_Fields = {
  __typename?: 'nanisore_group_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Group_Min_Fields = {
  __typename?: 'nanisore_group_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.group" */
export type Nanisore_Group_Mutation_Response = {
  __typename?: 'nanisore_group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Group>;
};

/** input type for inserting object relation for remote table "nanisore.group" */
export type Nanisore_Group_Obj_Rel_Insert_Input = {
  data: Nanisore_Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Group_On_Conflict>;
};

/** on_conflict condition type for table "nanisore.group" */
export type Nanisore_Group_On_Conflict = {
  constraint: Nanisore_Group_Constraint;
  update_columns?: Array<Nanisore_Group_Update_Column>;
  where?: InputMaybe<Nanisore_Group_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.group". */
export type Nanisore_Group_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Nanisore_Product_Aggregate_Order_By>;
  specifications_aggregate?: InputMaybe<Nanisore_Specification_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.group */
export type Nanisore_Group_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.group" */
export enum Nanisore_Group_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.group" */
export type Nanisore_Group_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Group_Stddev_Fields = {
  __typename?: 'nanisore_group_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Group_Stddev_Pop_Fields = {
  __typename?: 'nanisore_group_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Group_Stddev_Samp_Fields = {
  __typename?: 'nanisore_group_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_group" */
export type Nanisore_Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Group_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Group_Sum_Fields = {
  __typename?: 'nanisore_group_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.group" */
export enum Nanisore_Group_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Group_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Group_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Group_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Group_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Group_Var_Pop_Fields = {
  __typename?: 'nanisore_group_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Group_Var_Samp_Fields = {
  __typename?: 'nanisore_group_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Group_Variance_Fields = {
  __typename?: 'nanisore_group_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nanisore.image" */
export type Nanisore_Image = {
  __typename?: 'nanisore_image';
  created_at: Scalars['timestamptz']['output'];
  from: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  image_type: Scalars['bpchar']['output'];
  operator?: Maybe<Scalars['String']['output']>;
  order: Scalars['smallint']['output'];
  product_id: Scalars['bigint']['output'];
  referer: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  url: Scalars['String']['output'];
};

/** aggregated selection of "nanisore.image" */
export type Nanisore_Image_Aggregate = {
  __typename?: 'nanisore_image_aggregate';
  aggregate?: Maybe<Nanisore_Image_Aggregate_Fields>;
  nodes: Array<Nanisore_Image>;
};

export type Nanisore_Image_Aggregate_Bool_Exp = {
  count?: InputMaybe<Nanisore_Image_Aggregate_Bool_Exp_Count>;
};

export type Nanisore_Image_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nanisore_Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nanisore_Image_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nanisore.image" */
export type Nanisore_Image_Aggregate_Fields = {
  __typename?: 'nanisore_image_aggregate_fields';
  avg?: Maybe<Nanisore_Image_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Image_Max_Fields>;
  min?: Maybe<Nanisore_Image_Min_Fields>;
  stddev?: Maybe<Nanisore_Image_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Image_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Image_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Image_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Image_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Image_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Image_Variance_Fields>;
};


/** aggregate fields of "nanisore.image" */
export type Nanisore_Image_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nanisore.image" */
export type Nanisore_Image_Aggregate_Order_By = {
  avg?: InputMaybe<Nanisore_Image_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nanisore_Image_Max_Order_By>;
  min?: InputMaybe<Nanisore_Image_Min_Order_By>;
  stddev?: InputMaybe<Nanisore_Image_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nanisore_Image_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nanisore_Image_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nanisore_Image_Sum_Order_By>;
  var_pop?: InputMaybe<Nanisore_Image_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nanisore_Image_Var_Samp_Order_By>;
  variance?: InputMaybe<Nanisore_Image_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nanisore.image" */
export type Nanisore_Image_Arr_Rel_Insert_Input = {
  data: Array<Nanisore_Image_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Image_On_Conflict>;
};

/** aggregate avg on columns */
export type Nanisore_Image_Avg_Fields = {
  __typename?: 'nanisore_image_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nanisore.image" */
export type Nanisore_Image_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nanisore.image". All fields are combined with a logical 'AND'. */
export type Nanisore_Image_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Image_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Image_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Image_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  from?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_type?: InputMaybe<Bpchar_Comparison_Exp>;
  operator?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Smallint_Comparison_Exp>;
  product_id?: InputMaybe<Bigint_Comparison_Exp>;
  referer?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.image" */
export enum Nanisore_Image_Constraint {
  /** unique or primary key constraint on columns "id" */
  ImagePkey = 'image_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.image" */
export type Nanisore_Image_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  order?: InputMaybe<Scalars['smallint']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "nanisore.image" */
export type Nanisore_Image_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_type?: InputMaybe<Scalars['bpchar']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['smallint']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  referer?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Image_Max_Fields = {
  __typename?: 'nanisore_image_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  image_type?: Maybe<Scalars['bpchar']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['smallint']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
  referer?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "nanisore.image" */
export type Nanisore_Image_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_type?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  referer?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nanisore_Image_Min_Fields = {
  __typename?: 'nanisore_image_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  image_type?: Maybe<Scalars['bpchar']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['smallint']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
  referer?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "nanisore.image" */
export type Nanisore_Image_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_type?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  referer?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nanisore.image" */
export type Nanisore_Image_Mutation_Response = {
  __typename?: 'nanisore_image_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Image>;
};

/** on_conflict condition type for table "nanisore.image" */
export type Nanisore_Image_On_Conflict = {
  constraint: Nanisore_Image_Constraint;
  update_columns?: Array<Nanisore_Image_Update_Column>;
  where?: InputMaybe<Nanisore_Image_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.image". */
export type Nanisore_Image_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_type?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  referer?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.image */
export type Nanisore_Image_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.image" */
export enum Nanisore_Image_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  ImageType = 'image_type',
  /** column name */
  Operator = 'operator',
  /** column name */
  Order = 'order',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Referer = 'referer',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "nanisore.image" */
export type Nanisore_Image_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_type?: InputMaybe<Scalars['bpchar']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['smallint']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  referer?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Image_Stddev_Fields = {
  __typename?: 'nanisore_image_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nanisore.image" */
export type Nanisore_Image_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Image_Stddev_Pop_Fields = {
  __typename?: 'nanisore_image_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nanisore.image" */
export type Nanisore_Image_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Image_Stddev_Samp_Fields = {
  __typename?: 'nanisore_image_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nanisore.image" */
export type Nanisore_Image_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nanisore_image" */
export type Nanisore_Image_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Image_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Image_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_type?: InputMaybe<Scalars['bpchar']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['smallint']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  referer?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Image_Sum_Fields = {
  __typename?: 'nanisore_image_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  order?: Maybe<Scalars['smallint']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "nanisore.image" */
export type Nanisore_Image_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** update columns of table "nanisore.image" */
export enum Nanisore_Image_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  ImageType = 'image_type',
  /** column name */
  Operator = 'operator',
  /** column name */
  Order = 'order',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Referer = 'referer',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Nanisore_Image_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Image_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Image_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Image_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Image_Var_Pop_Fields = {
  __typename?: 'nanisore_image_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nanisore.image" */
export type Nanisore_Image_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nanisore_Image_Var_Samp_Fields = {
  __typename?: 'nanisore_image_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nanisore.image" */
export type Nanisore_Image_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nanisore_Image_Variance_Fields = {
  __typename?: 'nanisore_image_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nanisore.image" */
export type Nanisore_Image_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "nanisore.order" */
export type Nanisore_Order = {
  __typename?: 'nanisore_order';
  amount: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  discount: Scalars['numeric']['output'];
  handling_charge: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  shipping_fee_domestic: Scalars['numeric']['output'];
  shipping_fee_international: Scalars['numeric']['output'];
  status: Scalars['String']['output'];
  total_amount: Scalars['numeric']['output'];
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "nanisore.order" */
export type Nanisore_Order_Aggregate = {
  __typename?: 'nanisore_order_aggregate';
  aggregate?: Maybe<Nanisore_Order_Aggregate_Fields>;
  nodes: Array<Nanisore_Order>;
};

/** aggregate fields of "nanisore.order" */
export type Nanisore_Order_Aggregate_Fields = {
  __typename?: 'nanisore_order_aggregate_fields';
  avg?: Maybe<Nanisore_Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Order_Max_Fields>;
  min?: Maybe<Nanisore_Order_Min_Fields>;
  stddev?: Maybe<Nanisore_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Order_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Order_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Order_Variance_Fields>;
};


/** aggregate fields of "nanisore.order" */
export type Nanisore_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Order_Avg_Fields = {
  __typename?: 'nanisore_order_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  handling_charge?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['Float']['output']>;
  shipping_fee_international?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.order". All fields are combined with a logical 'AND'. */
export type Nanisore_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Order_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Order_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  discount?: InputMaybe<Numeric_Comparison_Exp>;
  handling_charge?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  shipping_fee_domestic?: InputMaybe<Numeric_Comparison_Exp>;
  shipping_fee_international?: InputMaybe<Numeric_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  total_amount?: InputMaybe<Numeric_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.order" */
export enum Nanisore_Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.order" */
export type Nanisore_Order_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  discount?: InputMaybe<Scalars['numeric']['input']>;
  handling_charge?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shipping_fee_domestic?: InputMaybe<Scalars['numeric']['input']>;
  shipping_fee_international?: InputMaybe<Scalars['numeric']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "nanisore.order" */
export type Nanisore_Order_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  discount?: InputMaybe<Scalars['numeric']['input']>;
  handling_charge?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shipping_fee_domestic?: InputMaybe<Scalars['numeric']['input']>;
  shipping_fee_international?: InputMaybe<Scalars['numeric']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** columns and relationships of "nanisore.order_item" */
export type Nanisore_Order_Item = {
  __typename?: 'nanisore_order_item';
  amount: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  item_id: Scalars['String']['output'];
  order_id: Scalars['bigint']['output'];
  platform: Scalars['bpchar']['output'];
  price: Scalars['numeric']['output'];
  product_id: Scalars['bigint']['output'];
  quantity: Scalars['Int']['output'];
  sku: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.order_item" */
export type Nanisore_Order_Item_Aggregate = {
  __typename?: 'nanisore_order_item_aggregate';
  aggregate?: Maybe<Nanisore_Order_Item_Aggregate_Fields>;
  nodes: Array<Nanisore_Order_Item>;
};

/** aggregate fields of "nanisore.order_item" */
export type Nanisore_Order_Item_Aggregate_Fields = {
  __typename?: 'nanisore_order_item_aggregate_fields';
  avg?: Maybe<Nanisore_Order_Item_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Order_Item_Max_Fields>;
  min?: Maybe<Nanisore_Order_Item_Min_Fields>;
  stddev?: Maybe<Nanisore_Order_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Order_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Order_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Order_Item_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Order_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Order_Item_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Order_Item_Variance_Fields>;
};


/** aggregate fields of "nanisore.order_item" */
export type Nanisore_Order_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Order_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Order_Item_Avg_Fields = {
  __typename?: 'nanisore_order_item_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.order_item". All fields are combined with a logical 'AND'. */
export type Nanisore_Order_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Order_Item_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Order_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Order_Item_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  item_id?: InputMaybe<String_Comparison_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  platform?: InputMaybe<Bpchar_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product_id?: InputMaybe<Bigint_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  sku?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.order_item" */
export enum Nanisore_Order_Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemPkey = 'order_item_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.order_item" */
export type Nanisore_Order_Item_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.order_item" */
export type Nanisore_Order_Item_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  item_id?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  platform?: InputMaybe<Scalars['bpchar']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Order_Item_Max_Fields = {
  __typename?: 'nanisore_order_item_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  item_id?: Maybe<Scalars['String']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  platform?: Maybe<Scalars['bpchar']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Order_Item_Min_Fields = {
  __typename?: 'nanisore_order_item_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  item_id?: Maybe<Scalars['String']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  platform?: Maybe<Scalars['bpchar']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.order_item" */
export type Nanisore_Order_Item_Mutation_Response = {
  __typename?: 'nanisore_order_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Order_Item>;
};

/** on_conflict condition type for table "nanisore.order_item" */
export type Nanisore_Order_Item_On_Conflict = {
  constraint: Nanisore_Order_Item_Constraint;
  update_columns?: Array<Nanisore_Order_Item_Update_Column>;
  where?: InputMaybe<Nanisore_Order_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.order_item". */
export type Nanisore_Order_Item_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.order_item */
export type Nanisore_Order_Item_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.order_item" */
export enum Nanisore_Order_Item_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Platform = 'platform',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Sku = 'sku',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.order_item" */
export type Nanisore_Order_Item_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  item_id?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  platform?: InputMaybe<Scalars['bpchar']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Order_Item_Stddev_Fields = {
  __typename?: 'nanisore_order_item_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Order_Item_Stddev_Pop_Fields = {
  __typename?: 'nanisore_order_item_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Order_Item_Stddev_Samp_Fields = {
  __typename?: 'nanisore_order_item_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_order_item" */
export type Nanisore_Order_Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Order_Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Order_Item_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  item_id?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  platform?: InputMaybe<Scalars['bpchar']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Order_Item_Sum_Fields = {
  __typename?: 'nanisore_order_item_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.order_item" */
export enum Nanisore_Order_Item_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Platform = 'platform',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Sku = 'sku',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Order_Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Order_Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Order_Item_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Order_Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Order_Item_Var_Pop_Fields = {
  __typename?: 'nanisore_order_item_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Order_Item_Var_Samp_Fields = {
  __typename?: 'nanisore_order_item_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Order_Item_Variance_Fields = {
  __typename?: 'nanisore_order_item_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Nanisore_Order_Max_Fields = {
  __typename?: 'nanisore_order_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  discount?: Maybe<Scalars['numeric']['output']>;
  handling_charge?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['numeric']['output']>;
  shipping_fee_international?: Maybe<Scalars['numeric']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Order_Min_Fields = {
  __typename?: 'nanisore_order_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  discount?: Maybe<Scalars['numeric']['output']>;
  handling_charge?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['numeric']['output']>;
  shipping_fee_international?: Maybe<Scalars['numeric']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "nanisore.order" */
export type Nanisore_Order_Mutation_Response = {
  __typename?: 'nanisore_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Order>;
};

/** on_conflict condition type for table "nanisore.order" */
export type Nanisore_Order_On_Conflict = {
  constraint: Nanisore_Order_Constraint;
  update_columns?: Array<Nanisore_Order_Update_Column>;
  where?: InputMaybe<Nanisore_Order_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.order". */
export type Nanisore_Order_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  handling_charge?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shipping_fee_domestic?: InputMaybe<Order_By>;
  shipping_fee_international?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.order */
export type Nanisore_Order_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.order" */
export enum Nanisore_Order_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  HandlingCharge = 'handling_charge',
  /** column name */
  Id = 'id',
  /** column name */
  ShippingFeeDomestic = 'shipping_fee_domestic',
  /** column name */
  ShippingFeeInternational = 'shipping_fee_international',
  /** column name */
  Status = 'status',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "nanisore.order" */
export type Nanisore_Order_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  discount?: InputMaybe<Scalars['numeric']['input']>;
  handling_charge?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shipping_fee_domestic?: InputMaybe<Scalars['numeric']['input']>;
  shipping_fee_international?: InputMaybe<Scalars['numeric']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Order_Stddev_Fields = {
  __typename?: 'nanisore_order_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  handling_charge?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['Float']['output']>;
  shipping_fee_international?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Order_Stddev_Pop_Fields = {
  __typename?: 'nanisore_order_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  handling_charge?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['Float']['output']>;
  shipping_fee_international?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Order_Stddev_Samp_Fields = {
  __typename?: 'nanisore_order_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  handling_charge?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['Float']['output']>;
  shipping_fee_international?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_order" */
export type Nanisore_Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Order_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  discount?: InputMaybe<Scalars['numeric']['input']>;
  handling_charge?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shipping_fee_domestic?: InputMaybe<Scalars['numeric']['input']>;
  shipping_fee_international?: InputMaybe<Scalars['numeric']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Order_Sum_Fields = {
  __typename?: 'nanisore_order_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  discount?: Maybe<Scalars['numeric']['output']>;
  handling_charge?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['numeric']['output']>;
  shipping_fee_international?: Maybe<Scalars['numeric']['output']>;
  total_amount?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "nanisore.order" */
export enum Nanisore_Order_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Discount = 'discount',
  /** column name */
  HandlingCharge = 'handling_charge',
  /** column name */
  Id = 'id',
  /** column name */
  ShippingFeeDomestic = 'shipping_fee_domestic',
  /** column name */
  ShippingFeeInternational = 'shipping_fee_international',
  /** column name */
  Status = 'status',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Nanisore_Order_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Order_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Order_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Order_Var_Pop_Fields = {
  __typename?: 'nanisore_order_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  handling_charge?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['Float']['output']>;
  shipping_fee_international?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Order_Var_Samp_Fields = {
  __typename?: 'nanisore_order_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  handling_charge?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['Float']['output']>;
  shipping_fee_international?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Order_Variance_Fields = {
  __typename?: 'nanisore_order_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  handling_charge?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  shipping_fee_domestic?: Maybe<Scalars['Float']['output']>;
  shipping_fee_international?: Maybe<Scalars['Float']['output']>;
  total_amount?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nanisore.payment" */
export type Nanisore_Payment = {
  __typename?: 'nanisore_payment';
  amount: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  finished_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  method: Scalars['bpchar']['output'];
  order_id: Scalars['bigint']['output'];
  overdue: Scalars['timestamptz']['output'];
  remark: Scalars['String']['output'];
  status: Scalars['bpchar']['output'];
  transaction_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.payment" */
export type Nanisore_Payment_Aggregate = {
  __typename?: 'nanisore_payment_aggregate';
  aggregate?: Maybe<Nanisore_Payment_Aggregate_Fields>;
  nodes: Array<Nanisore_Payment>;
};

/** aggregate fields of "nanisore.payment" */
export type Nanisore_Payment_Aggregate_Fields = {
  __typename?: 'nanisore_payment_aggregate_fields';
  avg?: Maybe<Nanisore_Payment_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Payment_Max_Fields>;
  min?: Maybe<Nanisore_Payment_Min_Fields>;
  stddev?: Maybe<Nanisore_Payment_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Payment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Payment_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Payment_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Payment_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Payment_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Payment_Variance_Fields>;
};


/** aggregate fields of "nanisore.payment" */
export type Nanisore_Payment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Payment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Payment_Avg_Fields = {
  __typename?: 'nanisore_payment_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.payment". All fields are combined with a logical 'AND'. */
export type Nanisore_Payment_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Payment_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Payment_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Payment_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  method?: InputMaybe<Bpchar_Comparison_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  overdue?: InputMaybe<Timestamptz_Comparison_Exp>;
  remark?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Bpchar_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.payment" */
export enum Nanisore_Payment_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentPkey = 'payment_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.payment" */
export type Nanisore_Payment_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "nanisore.payment" */
export type Nanisore_Payment_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  method?: InputMaybe<Scalars['bpchar']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  overdue?: InputMaybe<Scalars['timestamptz']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['bpchar']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Payment_Max_Fields = {
  __typename?: 'nanisore_payment_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  method?: Maybe<Scalars['bpchar']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  overdue?: Maybe<Scalars['timestamptz']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['bpchar']['output']>;
  transaction_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Payment_Min_Fields = {
  __typename?: 'nanisore_payment_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  method?: Maybe<Scalars['bpchar']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  overdue?: Maybe<Scalars['timestamptz']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['bpchar']['output']>;
  transaction_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.payment" */
export type Nanisore_Payment_Mutation_Response = {
  __typename?: 'nanisore_payment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Payment>;
};

/** on_conflict condition type for table "nanisore.payment" */
export type Nanisore_Payment_On_Conflict = {
  constraint: Nanisore_Payment_Constraint;
  update_columns?: Array<Nanisore_Payment_Update_Column>;
  where?: InputMaybe<Nanisore_Payment_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.payment". */
export type Nanisore_Payment_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  method?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  overdue?: InputMaybe<Order_By>;
  remark?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.payment */
export type Nanisore_Payment_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.payment" */
export enum Nanisore_Payment_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Overdue = 'overdue',
  /** column name */
  Remark = 'remark',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.payment" */
export type Nanisore_Payment_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  method?: InputMaybe<Scalars['bpchar']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  overdue?: InputMaybe<Scalars['timestamptz']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['bpchar']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Payment_Stddev_Fields = {
  __typename?: 'nanisore_payment_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Payment_Stddev_Pop_Fields = {
  __typename?: 'nanisore_payment_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Payment_Stddev_Samp_Fields = {
  __typename?: 'nanisore_payment_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_payment" */
export type Nanisore_Payment_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Payment_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Payment_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  method?: InputMaybe<Scalars['bpchar']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  overdue?: InputMaybe<Scalars['timestamptz']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['bpchar']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Payment_Sum_Fields = {
  __typename?: 'nanisore_payment_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "nanisore.payment" */
export enum Nanisore_Payment_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Overdue = 'overdue',
  /** column name */
  Remark = 'remark',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Payment_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Payment_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Payment_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Payment_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Payment_Var_Pop_Fields = {
  __typename?: 'nanisore_payment_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Payment_Var_Samp_Fields = {
  __typename?: 'nanisore_payment_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Payment_Variance_Fields = {
  __typename?: 'nanisore_payment_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nanisore.platform" */
export type Nanisore_Platform = {
  __typename?: 'nanisore_platform';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  site: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.platform" */
export type Nanisore_Platform_Aggregate = {
  __typename?: 'nanisore_platform_aggregate';
  aggregate?: Maybe<Nanisore_Platform_Aggregate_Fields>;
  nodes: Array<Nanisore_Platform>;
};

/** aggregate fields of "nanisore.platform" */
export type Nanisore_Platform_Aggregate_Fields = {
  __typename?: 'nanisore_platform_aggregate_fields';
  avg?: Maybe<Nanisore_Platform_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Platform_Max_Fields>;
  min?: Maybe<Nanisore_Platform_Min_Fields>;
  stddev?: Maybe<Nanisore_Platform_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Platform_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Platform_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Platform_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Platform_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Platform_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Platform_Variance_Fields>;
};


/** aggregate fields of "nanisore.platform" */
export type Nanisore_Platform_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Platform_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Platform_Avg_Fields = {
  __typename?: 'nanisore_platform_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.platform". All fields are combined with a logical 'AND'. */
export type Nanisore_Platform_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Platform_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Platform_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Platform_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  site?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.platform" */
export enum Nanisore_Platform_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlatformPkey = 'platform_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.platform" */
export type Nanisore_Platform_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.platform" */
export type Nanisore_Platform_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Platform_Max_Fields = {
  __typename?: 'nanisore_platform_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Platform_Min_Fields = {
  __typename?: 'nanisore_platform_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.platform" */
export type Nanisore_Platform_Mutation_Response = {
  __typename?: 'nanisore_platform_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Platform>;
};

/** input type for inserting object relation for remote table "nanisore.platform" */
export type Nanisore_Platform_Obj_Rel_Insert_Input = {
  data: Nanisore_Platform_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Platform_On_Conflict>;
};

/** on_conflict condition type for table "nanisore.platform" */
export type Nanisore_Platform_On_Conflict = {
  constraint: Nanisore_Platform_Constraint;
  update_columns?: Array<Nanisore_Platform_Update_Column>;
  where?: InputMaybe<Nanisore_Platform_Bool_Exp>;
};

/** 平台订单 */
export type Nanisore_Platform_Order = {
  __typename?: 'nanisore_platform_order';
  amount: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  delivery_number: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  platform: Scalars['String']['output'];
  platform_order_id: Scalars['String']['output'];
  staff: Scalars['String']['output'];
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.platform_order" */
export type Nanisore_Platform_Order_Aggregate = {
  __typename?: 'nanisore_platform_order_aggregate';
  aggregate?: Maybe<Nanisore_Platform_Order_Aggregate_Fields>;
  nodes: Array<Nanisore_Platform_Order>;
};

/** aggregate fields of "nanisore.platform_order" */
export type Nanisore_Platform_Order_Aggregate_Fields = {
  __typename?: 'nanisore_platform_order_aggregate_fields';
  avg?: Maybe<Nanisore_Platform_Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Platform_Order_Max_Fields>;
  min?: Maybe<Nanisore_Platform_Order_Min_Fields>;
  stddev?: Maybe<Nanisore_Platform_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Platform_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Platform_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Platform_Order_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Platform_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Platform_Order_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Platform_Order_Variance_Fields>;
};


/** aggregate fields of "nanisore.platform_order" */
export type Nanisore_Platform_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Platform_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Platform_Order_Avg_Fields = {
  __typename?: 'nanisore_platform_order_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.platform_order". All fields are combined with a logical 'AND'. */
export type Nanisore_Platform_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Platform_Order_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Platform_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Platform_Order_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  delivery_number?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  platform?: InputMaybe<String_Comparison_Exp>;
  platform_order_id?: InputMaybe<String_Comparison_Exp>;
  staff?: InputMaybe<String_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "nanisore.platform". */
export type Nanisore_Platform_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  site?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "nanisore.platform_order" */
export enum Nanisore_Platform_Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlatformOrderPkey = 'platform_order_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.platform_order" */
export type Nanisore_Platform_Order_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "nanisore.platform_order" */
export type Nanisore_Platform_Order_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  delivery_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  platform_order_id?: InputMaybe<Scalars['String']['input']>;
  staff?: InputMaybe<Scalars['String']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** 平台订单商品清单 */
export type Nanisore_Platform_Order_Item = {
  __typename?: 'nanisore_platform_order_item';
  amount: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  order_item_id: Scalars['bigint']['output'];
  platform_order_id: Scalars['bigint']['output'];
  price: Scalars['numeric']['output'];
  product_id: Scalars['bigint']['output'];
  quantity: Scalars['Int']['output'];
  sku: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.platform_order_item" */
export type Nanisore_Platform_Order_Item_Aggregate = {
  __typename?: 'nanisore_platform_order_item_aggregate';
  aggregate?: Maybe<Nanisore_Platform_Order_Item_Aggregate_Fields>;
  nodes: Array<Nanisore_Platform_Order_Item>;
};

/** aggregate fields of "nanisore.platform_order_item" */
export type Nanisore_Platform_Order_Item_Aggregate_Fields = {
  __typename?: 'nanisore_platform_order_item_aggregate_fields';
  avg?: Maybe<Nanisore_Platform_Order_Item_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Platform_Order_Item_Max_Fields>;
  min?: Maybe<Nanisore_Platform_Order_Item_Min_Fields>;
  stddev?: Maybe<Nanisore_Platform_Order_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Platform_Order_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Platform_Order_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Platform_Order_Item_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Platform_Order_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Platform_Order_Item_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Platform_Order_Item_Variance_Fields>;
};


/** aggregate fields of "nanisore.platform_order_item" */
export type Nanisore_Platform_Order_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Platform_Order_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Platform_Order_Item_Avg_Fields = {
  __typename?: 'nanisore_platform_order_item_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_item_id?: Maybe<Scalars['Float']['output']>;
  platform_order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.platform_order_item". All fields are combined with a logical 'AND'. */
export type Nanisore_Platform_Order_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Platform_Order_Item_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Platform_Order_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Platform_Order_Item_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order_item_id?: InputMaybe<Bigint_Comparison_Exp>;
  platform_order_id?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product_id?: InputMaybe<Bigint_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  sku?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.platform_order_item" */
export enum Nanisore_Platform_Order_Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlatformOrderItemPkey = 'platform_order_item_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.platform_order_item" */
export type Nanisore_Platform_Order_Item_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_item_id?: InputMaybe<Scalars['bigint']['input']>;
  platform_order_id?: InputMaybe<Scalars['bigint']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.platform_order_item" */
export type Nanisore_Platform_Order_Item_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_item_id?: InputMaybe<Scalars['bigint']['input']>;
  platform_order_id?: InputMaybe<Scalars['bigint']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Platform_Order_Item_Max_Fields = {
  __typename?: 'nanisore_platform_order_item_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  order_item_id?: Maybe<Scalars['bigint']['output']>;
  platform_order_id?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Platform_Order_Item_Min_Fields = {
  __typename?: 'nanisore_platform_order_item_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  order_item_id?: Maybe<Scalars['bigint']['output']>;
  platform_order_id?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.platform_order_item" */
export type Nanisore_Platform_Order_Item_Mutation_Response = {
  __typename?: 'nanisore_platform_order_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Platform_Order_Item>;
};

/** on_conflict condition type for table "nanisore.platform_order_item" */
export type Nanisore_Platform_Order_Item_On_Conflict = {
  constraint: Nanisore_Platform_Order_Item_Constraint;
  update_columns?: Array<Nanisore_Platform_Order_Item_Update_Column>;
  where?: InputMaybe<Nanisore_Platform_Order_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.platform_order_item". */
export type Nanisore_Platform_Order_Item_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_item_id?: InputMaybe<Order_By>;
  platform_order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.platform_order_item */
export type Nanisore_Platform_Order_Item_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.platform_order_item" */
export enum Nanisore_Platform_Order_Item_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderItemId = 'order_item_id',
  /** column name */
  PlatformOrderId = 'platform_order_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Sku = 'sku',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.platform_order_item" */
export type Nanisore_Platform_Order_Item_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_item_id?: InputMaybe<Scalars['bigint']['input']>;
  platform_order_id?: InputMaybe<Scalars['bigint']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Platform_Order_Item_Stddev_Fields = {
  __typename?: 'nanisore_platform_order_item_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_item_id?: Maybe<Scalars['Float']['output']>;
  platform_order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Platform_Order_Item_Stddev_Pop_Fields = {
  __typename?: 'nanisore_platform_order_item_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_item_id?: Maybe<Scalars['Float']['output']>;
  platform_order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Platform_Order_Item_Stddev_Samp_Fields = {
  __typename?: 'nanisore_platform_order_item_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_item_id?: Maybe<Scalars['Float']['output']>;
  platform_order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_platform_order_item" */
export type Nanisore_Platform_Order_Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Platform_Order_Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Platform_Order_Item_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  order_item_id?: InputMaybe<Scalars['bigint']['input']>;
  platform_order_id?: InputMaybe<Scalars['bigint']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['bigint']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Platform_Order_Item_Sum_Fields = {
  __typename?: 'nanisore_platform_order_item_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  order_item_id?: Maybe<Scalars['bigint']['output']>;
  platform_order_id?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  product_id?: Maybe<Scalars['bigint']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.platform_order_item" */
export enum Nanisore_Platform_Order_Item_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderItemId = 'order_item_id',
  /** column name */
  PlatformOrderId = 'platform_order_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Sku = 'sku',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Platform_Order_Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Platform_Order_Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Platform_Order_Item_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Platform_Order_Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Platform_Order_Item_Var_Pop_Fields = {
  __typename?: 'nanisore_platform_order_item_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_item_id?: Maybe<Scalars['Float']['output']>;
  platform_order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Platform_Order_Item_Var_Samp_Fields = {
  __typename?: 'nanisore_platform_order_item_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_item_id?: Maybe<Scalars['Float']['output']>;
  platform_order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Platform_Order_Item_Variance_Fields = {
  __typename?: 'nanisore_platform_order_item_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_item_id?: Maybe<Scalars['Float']['output']>;
  platform_order_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Nanisore_Platform_Order_Max_Fields = {
  __typename?: 'nanisore_platform_order_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  delivery_number?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  platform_order_id?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<Scalars['String']['output']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Platform_Order_Min_Fields = {
  __typename?: 'nanisore_platform_order_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  delivery_number?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  platform_order_id?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<Scalars['String']['output']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.platform_order" */
export type Nanisore_Platform_Order_Mutation_Response = {
  __typename?: 'nanisore_platform_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Platform_Order>;
};

/** on_conflict condition type for table "nanisore.platform_order" */
export type Nanisore_Platform_Order_On_Conflict = {
  constraint: Nanisore_Platform_Order_Constraint;
  update_columns?: Array<Nanisore_Platform_Order_Update_Column>;
  where?: InputMaybe<Nanisore_Platform_Order_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.platform_order". */
export type Nanisore_Platform_Order_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  delivery_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  platform_order_id?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.platform_order */
export type Nanisore_Platform_Order_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.platform_order" */
export enum Nanisore_Platform_Order_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveryNumber = 'delivery_number',
  /** column name */
  Id = 'id',
  /** column name */
  Platform = 'platform',
  /** column name */
  PlatformOrderId = 'platform_order_id',
  /** column name */
  Staff = 'staff',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.platform_order" */
export type Nanisore_Platform_Order_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  delivery_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  platform_order_id?: InputMaybe<Scalars['String']['input']>;
  staff?: InputMaybe<Scalars['String']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Platform_Order_Stddev_Fields = {
  __typename?: 'nanisore_platform_order_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Platform_Order_Stddev_Pop_Fields = {
  __typename?: 'nanisore_platform_order_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Platform_Order_Stddev_Samp_Fields = {
  __typename?: 'nanisore_platform_order_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_platform_order" */
export type Nanisore_Platform_Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Platform_Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Platform_Order_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  delivery_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  platform_order_id?: InputMaybe<Scalars['String']['input']>;
  staff?: InputMaybe<Scalars['String']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Platform_Order_Sum_Fields = {
  __typename?: 'nanisore_platform_order_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "nanisore.platform_order" */
export enum Nanisore_Platform_Order_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeliveryNumber = 'delivery_number',
  /** column name */
  Id = 'id',
  /** column name */
  Platform = 'platform',
  /** column name */
  PlatformOrderId = 'platform_order_id',
  /** column name */
  Staff = 'staff',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Platform_Order_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Platform_Order_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Platform_Order_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Platform_Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Platform_Order_Var_Pop_Fields = {
  __typename?: 'nanisore_platform_order_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Platform_Order_Var_Samp_Fields = {
  __typename?: 'nanisore_platform_order_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Platform_Order_Variance_Fields = {
  __typename?: 'nanisore_platform_order_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** primary key columns input for table: nanisore.platform */
export type Nanisore_Platform_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "nanisore.platform" */
export enum Nanisore_Platform_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Site = 'site',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.platform" */
export type Nanisore_Platform_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Platform_Stddev_Fields = {
  __typename?: 'nanisore_platform_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Platform_Stddev_Pop_Fields = {
  __typename?: 'nanisore_platform_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Platform_Stddev_Samp_Fields = {
  __typename?: 'nanisore_platform_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_platform" */
export type Nanisore_Platform_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Platform_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Platform_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Platform_Sum_Fields = {
  __typename?: 'nanisore_platform_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.platform" */
export enum Nanisore_Platform_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Site = 'site',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Platform_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Platform_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Platform_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Platform_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Platform_Var_Pop_Fields = {
  __typename?: 'nanisore_platform_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Platform_Var_Samp_Fields = {
  __typename?: 'nanisore_platform_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Platform_Variance_Fields = {
  __typename?: 'nanisore_platform_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** The deep scraped data after visiting detail page, include price, in stock information */
export type Nanisore_Product = {
  __typename?: 'nanisore_product';
  /** An object relationship */
  category_material?: Maybe<Nanisore_Category_Material>;
  category_material_id?: Maybe<Scalars['Int']['output']>;
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  group?: Maybe<Nanisore_Group>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** An array relationship */
  images: Array<Nanisore_Image>;
  /** An aggregate relationship */
  images_aggregate: Nanisore_Image_Aggregate;
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  original_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  platform?: Maybe<Nanisore_Platform>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  stock_info?: Maybe<Nanisore_Stock_Info>;
  stock_info_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  unity_category?: Maybe<Nanisore_Unity_Category>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  url?: Maybe<Scalars['String']['output']>;
  visable: Scalars['Boolean']['output'];
};


/** The deep scraped data after visiting detail page, include price, in stock information */
export type Nanisore_ProductImagesArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Image_Order_By>>;
  where?: InputMaybe<Nanisore_Image_Bool_Exp>;
};


/** The deep scraped data after visiting detail page, include price, in stock information */
export type Nanisore_ProductImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Image_Order_By>>;
  where?: InputMaybe<Nanisore_Image_Bool_Exp>;
};

/** aggregated selection of "nanisore.product" */
export type Nanisore_Product_Aggregate = {
  __typename?: 'nanisore_product_aggregate';
  aggregate?: Maybe<Nanisore_Product_Aggregate_Fields>;
  nodes: Array<Nanisore_Product>;
};

export type Nanisore_Product_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Nanisore_Product_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Nanisore_Product_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Nanisore_Product_Aggregate_Bool_Exp_Count>;
};

export type Nanisore_Product_Aggregate_Bool_Exp_Bool_And = {
  arguments: Nanisore_Product_Select_Column_Nanisore_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nanisore_Product_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nanisore_Product_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Nanisore_Product_Select_Column_Nanisore_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nanisore_Product_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Nanisore_Product_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nanisore_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nanisore_Product_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nanisore.product" */
export type Nanisore_Product_Aggregate_Fields = {
  __typename?: 'nanisore_product_aggregate_fields';
  avg?: Maybe<Nanisore_Product_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Product_Max_Fields>;
  min?: Maybe<Nanisore_Product_Min_Fields>;
  stddev?: Maybe<Nanisore_Product_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Product_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Product_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Product_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Product_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Product_Variance_Fields>;
};


/** aggregate fields of "nanisore.product" */
export type Nanisore_Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nanisore.product" */
export type Nanisore_Product_Aggregate_Order_By = {
  avg?: InputMaybe<Nanisore_Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nanisore_Product_Max_Order_By>;
  min?: InputMaybe<Nanisore_Product_Min_Order_By>;
  stddev?: InputMaybe<Nanisore_Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nanisore_Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nanisore_Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nanisore_Product_Sum_Order_By>;
  var_pop?: InputMaybe<Nanisore_Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nanisore_Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Nanisore_Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nanisore.product" */
export type Nanisore_Product_Arr_Rel_Insert_Input = {
  data: Array<Nanisore_Product_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Nanisore_Product_Avg_Fields = {
  __typename?: 'nanisore_product_avg_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nanisore.product" */
export type Nanisore_Product_Avg_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nanisore.product". All fields are combined with a logical 'AND'. */
export type Nanisore_Product_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Product_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Product_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Product_Bool_Exp>>;
  category_material?: InputMaybe<Nanisore_Category_Material_Bool_Exp>;
  category_material_id?: InputMaybe<Int_Comparison_Exp>;
  cover_image?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  group?: InputMaybe<Nanisore_Group_Bool_Exp>;
  group_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  images?: InputMaybe<Nanisore_Image_Bool_Exp>;
  images_aggregate?: InputMaybe<Nanisore_Image_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  operator?: InputMaybe<String_Comparison_Exp>;
  original_category_id?: InputMaybe<Int_Comparison_Exp>;
  original_id?: InputMaybe<String_Comparison_Exp>;
  platform?: InputMaybe<Nanisore_Platform_Bool_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  sku?: InputMaybe<String_Comparison_Exp>;
  stock_info?: InputMaybe<Nanisore_Stock_Info_Bool_Exp>;
  stock_info_id?: InputMaybe<Int_Comparison_Exp>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
  unity_category_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  visable?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.product" */
export enum Nanisore_Product_Constraint {
  /** unique or primary key constraint on columns "original_id", "platform_id" */
  ProductOriginalIdPlatformIdKey = 'product_original_id_platform_id_key',
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey',
  /** unique or primary key constraint on columns "url" */
  ProductUrlKey = 'product_url_key'
}

/** input type for incrementing numeric columns in table "nanisore.product" */
export type Nanisore_Product_Inc_Input = {
  category_material_id?: InputMaybe<Scalars['Int']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  stock_info_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.product" */
export type Nanisore_Product_Insert_Input = {
  category_material?: InputMaybe<Nanisore_Category_Material_Obj_Rel_Insert_Input>;
  category_material_id?: InputMaybe<Scalars['Int']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Nanisore_Group_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  images?: InputMaybe<Nanisore_Image_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Nanisore_Platform_Obj_Rel_Insert_Input>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock_info?: InputMaybe<Nanisore_Stock_Info_Obj_Rel_Insert_Input>;
  stock_info_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Obj_Rel_Insert_Input>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Product_Max_Fields = {
  __typename?: 'nanisore_product_max_fields';
  category_material_id?: Maybe<Scalars['Int']['output']>;
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  original_id?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock_info_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "nanisore.product" */
export type Nanisore_Product_Max_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  cover_image?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  original_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nanisore_Product_Min_Fields = {
  __typename?: 'nanisore_product_min_fields';
  category_material_id?: Maybe<Scalars['Int']['output']>;
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  original_id?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock_info_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "nanisore.product" */
export type Nanisore_Product_Min_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  cover_image?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  original_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nanisore.product" */
export type Nanisore_Product_Mutation_Response = {
  __typename?: 'nanisore_product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Product>;
};

/** input type for inserting object relation for remote table "nanisore.product" */
export type Nanisore_Product_Obj_Rel_Insert_Input = {
  data: Nanisore_Product_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Product_On_Conflict>;
};

/** on_conflict condition type for table "nanisore.product" */
export type Nanisore_Product_On_Conflict = {
  constraint: Nanisore_Product_Constraint;
  update_columns?: Array<Nanisore_Product_Update_Column>;
  where?: InputMaybe<Nanisore_Product_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.product". */
export type Nanisore_Product_Order_By = {
  category_material?: InputMaybe<Nanisore_Category_Material_Order_By>;
  category_material_id?: InputMaybe<Order_By>;
  cover_image?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  group?: InputMaybe<Nanisore_Group_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images_aggregate?: InputMaybe<Nanisore_Image_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  original_id?: InputMaybe<Order_By>;
  platform?: InputMaybe<Nanisore_Platform_Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  stock_info?: InputMaybe<Nanisore_Stock_Info_Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  visable?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.product */
export type Nanisore_Product_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.product" */
export enum Nanisore_Product_Select_Column {
  /** column name */
  CategoryMaterialId = 'category_material_id',
  /** column name */
  CoverImage = 'cover_image',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Operator = 'operator',
  /** column name */
  OriginalCategoryId = 'original_category_id',
  /** column name */
  OriginalId = 'original_id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  Price = 'price',
  /** column name */
  Sku = 'sku',
  /** column name */
  StockInfoId = 'stock_info_id',
  /** column name */
  UnityCategoryId = 'unity_category_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  Visable = 'visable'
}

/** select "nanisore_product_aggregate_bool_exp_bool_and_arguments_columns" columns of table "nanisore.product" */
export enum Nanisore_Product_Select_Column_Nanisore_Product_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visable = 'visable'
}

/** select "nanisore_product_aggregate_bool_exp_bool_or_arguments_columns" columns of table "nanisore.product" */
export enum Nanisore_Product_Select_Column_Nanisore_Product_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visable = 'visable'
}

/** input type for updating data in table "nanisore.product" */
export type Nanisore_Product_Set_Input = {
  category_material_id?: InputMaybe<Scalars['Int']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock_info_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Product_Stddev_Fields = {
  __typename?: 'nanisore_product_stddev_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nanisore.product" */
export type Nanisore_Product_Stddev_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Product_Stddev_Pop_Fields = {
  __typename?: 'nanisore_product_stddev_pop_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nanisore.product" */
export type Nanisore_Product_Stddev_Pop_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Product_Stddev_Samp_Fields = {
  __typename?: 'nanisore_product_stddev_samp_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nanisore.product" */
export type Nanisore_Product_Stddev_Samp_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nanisore_product" */
export type Nanisore_Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Product_Stream_Cursor_Value_Input = {
  category_material_id?: InputMaybe<Scalars['Int']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock_info_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Product_Sum_Fields = {
  __typename?: 'nanisore_product_sum_fields';
  category_material_id?: Maybe<Scalars['Int']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  stock_info_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "nanisore.product" */
export type Nanisore_Product_Sum_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** update columns of table "nanisore.product" */
export enum Nanisore_Product_Update_Column {
  /** column name */
  CategoryMaterialId = 'category_material_id',
  /** column name */
  CoverImage = 'cover_image',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Operator = 'operator',
  /** column name */
  OriginalCategoryId = 'original_category_id',
  /** column name */
  OriginalId = 'original_id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  Price = 'price',
  /** column name */
  Sku = 'sku',
  /** column name */
  StockInfoId = 'stock_info_id',
  /** column name */
  UnityCategoryId = 'unity_category_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  Visable = 'visable'
}

export type Nanisore_Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Product_Var_Pop_Fields = {
  __typename?: 'nanisore_product_var_pop_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nanisore.product" */
export type Nanisore_Product_Var_Pop_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nanisore_Product_Var_Samp_Fields = {
  __typename?: 'nanisore_product_var_samp_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nanisore.product" */
export type Nanisore_Product_Var_Samp_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nanisore_Product_Variance_Fields = {
  __typename?: 'nanisore_product_variance_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nanisore.product" */
export type Nanisore_Product_Variance_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "nanisore.recommendation" */
export type Nanisore_Recommendation = {
  __typename?: 'nanisore_recommendation';
  category_material_id?: Maybe<Scalars['Int']['output']>;
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  original_id?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock_info_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  url?: Maybe<Scalars['String']['output']>;
  visable: Scalars['Boolean']['output'];
};

/** aggregated selection of "nanisore.recommendation" */
export type Nanisore_Recommendation_Aggregate = {
  __typename?: 'nanisore_recommendation_aggregate';
  aggregate?: Maybe<Nanisore_Recommendation_Aggregate_Fields>;
  nodes: Array<Nanisore_Recommendation>;
};

/** aggregate fields of "nanisore.recommendation" */
export type Nanisore_Recommendation_Aggregate_Fields = {
  __typename?: 'nanisore_recommendation_aggregate_fields';
  avg?: Maybe<Nanisore_Recommendation_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Recommendation_Max_Fields>;
  min?: Maybe<Nanisore_Recommendation_Min_Fields>;
  stddev?: Maybe<Nanisore_Recommendation_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Recommendation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Recommendation_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Recommendation_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Recommendation_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Recommendation_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Recommendation_Variance_Fields>;
};


/** aggregate fields of "nanisore.recommendation" */
export type Nanisore_Recommendation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Recommendation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Recommendation_Avg_Fields = {
  __typename?: 'nanisore_recommendation_avg_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.recommendation". All fields are combined with a logical 'AND'. */
export type Nanisore_Recommendation_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Recommendation_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Recommendation_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Recommendation_Bool_Exp>>;
  category_material_id?: InputMaybe<Int_Comparison_Exp>;
  cover_image?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  group_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  operator?: InputMaybe<String_Comparison_Exp>;
  original_category_id?: InputMaybe<Int_Comparison_Exp>;
  original_id?: InputMaybe<String_Comparison_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  sku?: InputMaybe<String_Comparison_Exp>;
  stock_info_id?: InputMaybe<Int_Comparison_Exp>;
  unity_category_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  visable?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.recommendation" */
export enum Nanisore_Recommendation_Constraint {
  /** unique or primary key constraint on columns "original_id", "platform_id" */
  RecommendationOriginalIdPlatformIdKey = 'recommendation_original_id_platform_id_key',
  /** unique or primary key constraint on columns "id" */
  RecommendationPkey = 'recommendation_pkey',
  /** unique or primary key constraint on columns "url" */
  RecommendationUrlKey = 'recommendation_url_key'
}

/** input type for incrementing numeric columns in table "nanisore.recommendation" */
export type Nanisore_Recommendation_Inc_Input = {
  category_material_id?: InputMaybe<Scalars['Int']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  stock_info_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.recommendation" */
export type Nanisore_Recommendation_Insert_Input = {
  category_material_id?: InputMaybe<Scalars['Int']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock_info_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Recommendation_Max_Fields = {
  __typename?: 'nanisore_recommendation_max_fields';
  category_material_id?: Maybe<Scalars['Int']['output']>;
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  original_id?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock_info_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Recommendation_Min_Fields = {
  __typename?: 'nanisore_recommendation_min_fields';
  category_material_id?: Maybe<Scalars['Int']['output']>;
  cover_image?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  original_id?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stock_info_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "nanisore.recommendation" */
export type Nanisore_Recommendation_Mutation_Response = {
  __typename?: 'nanisore_recommendation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Recommendation>;
};

/** on_conflict condition type for table "nanisore.recommendation" */
export type Nanisore_Recommendation_On_Conflict = {
  constraint: Nanisore_Recommendation_Constraint;
  update_columns?: Array<Nanisore_Recommendation_Update_Column>;
  where?: InputMaybe<Nanisore_Recommendation_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.recommendation". */
export type Nanisore_Recommendation_Order_By = {
  category_material_id?: InputMaybe<Order_By>;
  cover_image?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  original_id?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  stock_info_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  visable?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.recommendation */
export type Nanisore_Recommendation_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.recommendation" */
export enum Nanisore_Recommendation_Select_Column {
  /** column name */
  CategoryMaterialId = 'category_material_id',
  /** column name */
  CoverImage = 'cover_image',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Operator = 'operator',
  /** column name */
  OriginalCategoryId = 'original_category_id',
  /** column name */
  OriginalId = 'original_id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  Price = 'price',
  /** column name */
  Sku = 'sku',
  /** column name */
  StockInfoId = 'stock_info_id',
  /** column name */
  UnityCategoryId = 'unity_category_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  Visable = 'visable'
}

/** input type for updating data in table "nanisore.recommendation" */
export type Nanisore_Recommendation_Set_Input = {
  category_material_id?: InputMaybe<Scalars['Int']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock_info_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Recommendation_Stddev_Fields = {
  __typename?: 'nanisore_recommendation_stddev_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Recommendation_Stddev_Pop_Fields = {
  __typename?: 'nanisore_recommendation_stddev_pop_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Recommendation_Stddev_Samp_Fields = {
  __typename?: 'nanisore_recommendation_stddev_samp_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_recommendation" */
export type Nanisore_Recommendation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Recommendation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Recommendation_Stream_Cursor_Value_Input = {
  category_material_id?: InputMaybe<Scalars['Int']['input']>;
  cover_image?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock_info_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visable?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Recommendation_Sum_Fields = {
  __typename?: 'nanisore_recommendation_sum_fields';
  category_material_id?: Maybe<Scalars['Int']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  stock_info_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.recommendation" */
export enum Nanisore_Recommendation_Update_Column {
  /** column name */
  CategoryMaterialId = 'category_material_id',
  /** column name */
  CoverImage = 'cover_image',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Operator = 'operator',
  /** column name */
  OriginalCategoryId = 'original_category_id',
  /** column name */
  OriginalId = 'original_id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  Price = 'price',
  /** column name */
  Sku = 'sku',
  /** column name */
  StockInfoId = 'stock_info_id',
  /** column name */
  UnityCategoryId = 'unity_category_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  Visable = 'visable'
}

export type Nanisore_Recommendation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Recommendation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Recommendation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Recommendation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Recommendation_Var_Pop_Fields = {
  __typename?: 'nanisore_recommendation_var_pop_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Recommendation_Var_Samp_Fields = {
  __typename?: 'nanisore_recommendation_var_samp_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Recommendation_Variance_Fields = {
  __typename?: 'nanisore_recommendation_variance_fields';
  category_material_id?: Maybe<Scalars['Float']['output']>;
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  stock_info_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nanisore.shipping" */
export type Nanisore_Shipping = {
  __typename?: 'nanisore_shipping';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  method: Scalars['bigint']['output'];
  recipient: Scalars['Int']['output'];
  sender?: Maybe<Scalars['Int']['output']>;
  shipping_order_no: Scalars['String']['output'];
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id: Scalars['String']['output'];
  /** Order Type (system or platform) */
  type: Scalars['bpchar']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "nanisore.shipping_address" */
export type Nanisore_Shipping_Address = {
  __typename?: 'nanisore_shipping_address';
  address1: Scalars['String']['output'];
  address2: Scalars['String']['output'];
  city: Scalars['bpchar']['output'];
  country: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  full_name: Scalars['bpchar']['output'];
  id: Scalars['bigint']['output'];
  phone_number: Scalars['bpchar']['output'];
  postcode: Scalars['bpchar']['output'];
  state: Scalars['bpchar']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "nanisore.shipping_address" */
export type Nanisore_Shipping_Address_Aggregate = {
  __typename?: 'nanisore_shipping_address_aggregate';
  aggregate?: Maybe<Nanisore_Shipping_Address_Aggregate_Fields>;
  nodes: Array<Nanisore_Shipping_Address>;
};

/** aggregate fields of "nanisore.shipping_address" */
export type Nanisore_Shipping_Address_Aggregate_Fields = {
  __typename?: 'nanisore_shipping_address_aggregate_fields';
  avg?: Maybe<Nanisore_Shipping_Address_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Shipping_Address_Max_Fields>;
  min?: Maybe<Nanisore_Shipping_Address_Min_Fields>;
  stddev?: Maybe<Nanisore_Shipping_Address_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Shipping_Address_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Shipping_Address_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Shipping_Address_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Shipping_Address_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Shipping_Address_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Shipping_Address_Variance_Fields>;
};


/** aggregate fields of "nanisore.shipping_address" */
export type Nanisore_Shipping_Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Shipping_Address_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Shipping_Address_Avg_Fields = {
  __typename?: 'nanisore_shipping_address_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.shipping_address". All fields are combined with a logical 'AND'. */
export type Nanisore_Shipping_Address_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Shipping_Address_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Shipping_Address_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Shipping_Address_Bool_Exp>>;
  address1?: InputMaybe<String_Comparison_Exp>;
  address2?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<Bpchar_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  full_name?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  phone_number?: InputMaybe<Bpchar_Comparison_Exp>;
  postcode?: InputMaybe<Bpchar_Comparison_Exp>;
  state?: InputMaybe<Bpchar_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.shipping_address" */
export enum Nanisore_Shipping_Address_Constraint {
  /** unique or primary key constraint on columns "id" */
  ShippingAddressPkey = 'shipping_address_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.shipping_address" */
export type Nanisore_Shipping_Address_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "nanisore.shipping_address" */
export type Nanisore_Shipping_Address_Insert_Input = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['bpchar']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  full_name?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  phone_number?: InputMaybe<Scalars['bpchar']['input']>;
  postcode?: InputMaybe<Scalars['bpchar']['input']>;
  state?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Shipping_Address_Max_Fields = {
  __typename?: 'nanisore_shipping_address_max_fields';
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['bpchar']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  full_name?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  phone_number?: Maybe<Scalars['bpchar']['output']>;
  postcode?: Maybe<Scalars['bpchar']['output']>;
  state?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Shipping_Address_Min_Fields = {
  __typename?: 'nanisore_shipping_address_min_fields';
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['bpchar']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  full_name?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  phone_number?: Maybe<Scalars['bpchar']['output']>;
  postcode?: Maybe<Scalars['bpchar']['output']>;
  state?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "nanisore.shipping_address" */
export type Nanisore_Shipping_Address_Mutation_Response = {
  __typename?: 'nanisore_shipping_address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Shipping_Address>;
};

/** on_conflict condition type for table "nanisore.shipping_address" */
export type Nanisore_Shipping_Address_On_Conflict = {
  constraint: Nanisore_Shipping_Address_Constraint;
  update_columns?: Array<Nanisore_Shipping_Address_Update_Column>;
  where?: InputMaybe<Nanisore_Shipping_Address_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.shipping_address". */
export type Nanisore_Shipping_Address_Order_By = {
  address1?: InputMaybe<Order_By>;
  address2?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  postcode?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.shipping_address */
export type Nanisore_Shipping_Address_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.shipping_address" */
export enum Nanisore_Shipping_Address_Select_Column {
  /** column name */
  Address1 = 'address1',
  /** column name */
  Address2 = 'address2',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Postcode = 'postcode',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "nanisore.shipping_address" */
export type Nanisore_Shipping_Address_Set_Input = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['bpchar']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  full_name?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  phone_number?: InputMaybe<Scalars['bpchar']['input']>;
  postcode?: InputMaybe<Scalars['bpchar']['input']>;
  state?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Shipping_Address_Stddev_Fields = {
  __typename?: 'nanisore_shipping_address_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Shipping_Address_Stddev_Pop_Fields = {
  __typename?: 'nanisore_shipping_address_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Shipping_Address_Stddev_Samp_Fields = {
  __typename?: 'nanisore_shipping_address_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_shipping_address" */
export type Nanisore_Shipping_Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Shipping_Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Shipping_Address_Stream_Cursor_Value_Input = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['bpchar']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  full_name?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  phone_number?: InputMaybe<Scalars['bpchar']['input']>;
  postcode?: InputMaybe<Scalars['bpchar']['input']>;
  state?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Shipping_Address_Sum_Fields = {
  __typename?: 'nanisore_shipping_address_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "nanisore.shipping_address" */
export enum Nanisore_Shipping_Address_Update_Column {
  /** column name */
  Address1 = 'address1',
  /** column name */
  Address2 = 'address2',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Postcode = 'postcode',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Nanisore_Shipping_Address_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Shipping_Address_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Shipping_Address_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Shipping_Address_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Shipping_Address_Var_Pop_Fields = {
  __typename?: 'nanisore_shipping_address_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Shipping_Address_Var_Samp_Fields = {
  __typename?: 'nanisore_shipping_address_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Shipping_Address_Variance_Fields = {
  __typename?: 'nanisore_shipping_address_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregated selection of "nanisore.shipping" */
export type Nanisore_Shipping_Aggregate = {
  __typename?: 'nanisore_shipping_aggregate';
  aggregate?: Maybe<Nanisore_Shipping_Aggregate_Fields>;
  nodes: Array<Nanisore_Shipping>;
};

/** aggregate fields of "nanisore.shipping" */
export type Nanisore_Shipping_Aggregate_Fields = {
  __typename?: 'nanisore_shipping_aggregate_fields';
  avg?: Maybe<Nanisore_Shipping_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Shipping_Max_Fields>;
  min?: Maybe<Nanisore_Shipping_Min_Fields>;
  stddev?: Maybe<Nanisore_Shipping_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Shipping_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Shipping_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Shipping_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Shipping_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Shipping_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Shipping_Variance_Fields>;
};


/** aggregate fields of "nanisore.shipping" */
export type Nanisore_Shipping_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Shipping_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Shipping_Avg_Fields = {
  __typename?: 'nanisore_shipping_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  method?: Maybe<Scalars['Float']['output']>;
  recipient?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.shipping". All fields are combined with a logical 'AND'. */
export type Nanisore_Shipping_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Shipping_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Shipping_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Shipping_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  method?: InputMaybe<Bigint_Comparison_Exp>;
  recipient?: InputMaybe<Int_Comparison_Exp>;
  sender?: InputMaybe<Int_Comparison_Exp>;
  shipping_order_no?: InputMaybe<String_Comparison_Exp>;
  transaction_id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Bpchar_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.shipping" */
export enum Nanisore_Shipping_Constraint {
  /** unique or primary key constraint on columns "id" */
  ShippingPkey = 'shipping_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.shipping" */
export type Nanisore_Shipping_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  method?: InputMaybe<Scalars['bigint']['input']>;
  recipient?: InputMaybe<Scalars['Int']['input']>;
  sender?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.shipping" */
export type Nanisore_Shipping_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  method?: InputMaybe<Scalars['bigint']['input']>;
  recipient?: InputMaybe<Scalars['Int']['input']>;
  sender?: InputMaybe<Scalars['Int']['input']>;
  shipping_order_no?: InputMaybe<Scalars['String']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  /** Order Type (system or platform) */
  type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "nanisore.shipping_log" */
export type Nanisore_Shipping_Log = {
  __typename?: 'nanisore_shipping_log';
  action: Scalars['bpchar']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['bpchar']['output'];
  id: Scalars['bigint']['output'];
  shipping_id: Scalars['bigint']['output'];
};

/** aggregated selection of "nanisore.shipping_log" */
export type Nanisore_Shipping_Log_Aggregate = {
  __typename?: 'nanisore_shipping_log_aggregate';
  aggregate?: Maybe<Nanisore_Shipping_Log_Aggregate_Fields>;
  nodes: Array<Nanisore_Shipping_Log>;
};

/** aggregate fields of "nanisore.shipping_log" */
export type Nanisore_Shipping_Log_Aggregate_Fields = {
  __typename?: 'nanisore_shipping_log_aggregate_fields';
  avg?: Maybe<Nanisore_Shipping_Log_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Shipping_Log_Max_Fields>;
  min?: Maybe<Nanisore_Shipping_Log_Min_Fields>;
  stddev?: Maybe<Nanisore_Shipping_Log_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Shipping_Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Shipping_Log_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Shipping_Log_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Shipping_Log_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Shipping_Log_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Shipping_Log_Variance_Fields>;
};


/** aggregate fields of "nanisore.shipping_log" */
export type Nanisore_Shipping_Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Shipping_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Shipping_Log_Avg_Fields = {
  __typename?: 'nanisore_shipping_log_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  shipping_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.shipping_log". All fields are combined with a logical 'AND'. */
export type Nanisore_Shipping_Log_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Shipping_Log_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Shipping_Log_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Shipping_Log_Bool_Exp>>;
  action?: InputMaybe<Bpchar_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  shipping_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.shipping_log" */
export enum Nanisore_Shipping_Log_Constraint {
  /** unique or primary key constraint on columns "id" */
  ShippingLogPkey = 'shipping_log_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.shipping_log" */
export type Nanisore_Shipping_Log_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  shipping_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "nanisore.shipping_log" */
export type Nanisore_Shipping_Log_Insert_Input = {
  action?: InputMaybe<Scalars['bpchar']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shipping_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Shipping_Log_Max_Fields = {
  __typename?: 'nanisore_shipping_log_max_fields';
  action?: Maybe<Scalars['bpchar']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  shipping_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Shipping_Log_Min_Fields = {
  __typename?: 'nanisore_shipping_log_min_fields';
  action?: Maybe<Scalars['bpchar']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['bpchar']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  shipping_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "nanisore.shipping_log" */
export type Nanisore_Shipping_Log_Mutation_Response = {
  __typename?: 'nanisore_shipping_log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Shipping_Log>;
};

/** on_conflict condition type for table "nanisore.shipping_log" */
export type Nanisore_Shipping_Log_On_Conflict = {
  constraint: Nanisore_Shipping_Log_Constraint;
  update_columns?: Array<Nanisore_Shipping_Log_Update_Column>;
  where?: InputMaybe<Nanisore_Shipping_Log_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.shipping_log". */
export type Nanisore_Shipping_Log_Order_By = {
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shipping_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.shipping_log */
export type Nanisore_Shipping_Log_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.shipping_log" */
export enum Nanisore_Shipping_Log_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ShippingId = 'shipping_id'
}

/** input type for updating data in table "nanisore.shipping_log" */
export type Nanisore_Shipping_Log_Set_Input = {
  action?: InputMaybe<Scalars['bpchar']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shipping_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Shipping_Log_Stddev_Fields = {
  __typename?: 'nanisore_shipping_log_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  shipping_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Shipping_Log_Stddev_Pop_Fields = {
  __typename?: 'nanisore_shipping_log_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  shipping_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Shipping_Log_Stddev_Samp_Fields = {
  __typename?: 'nanisore_shipping_log_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  shipping_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_shipping_log" */
export type Nanisore_Shipping_Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Shipping_Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Shipping_Log_Stream_Cursor_Value_Input = {
  action?: InputMaybe<Scalars['bpchar']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['bpchar']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  shipping_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Shipping_Log_Sum_Fields = {
  __typename?: 'nanisore_shipping_log_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  shipping_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "nanisore.shipping_log" */
export enum Nanisore_Shipping_Log_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ShippingId = 'shipping_id'
}

export type Nanisore_Shipping_Log_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Shipping_Log_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Shipping_Log_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Shipping_Log_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Shipping_Log_Var_Pop_Fields = {
  __typename?: 'nanisore_shipping_log_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  shipping_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Shipping_Log_Var_Samp_Fields = {
  __typename?: 'nanisore_shipping_log_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  shipping_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Shipping_Log_Variance_Fields = {
  __typename?: 'nanisore_shipping_log_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  shipping_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Nanisore_Shipping_Max_Fields = {
  __typename?: 'nanisore_shipping_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  method?: Maybe<Scalars['bigint']['output']>;
  recipient?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<Scalars['Int']['output']>;
  shipping_order_no?: Maybe<Scalars['String']['output']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: Maybe<Scalars['String']['output']>;
  /** Order Type (system or platform) */
  type?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "nanisore.shipping_method" */
export type Nanisore_Shipping_Method = {
  __typename?: 'nanisore_shipping_method';
  created_at: Scalars['timestamptz']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  tracking_config: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.shipping_method" */
export type Nanisore_Shipping_Method_Aggregate = {
  __typename?: 'nanisore_shipping_method_aggregate';
  aggregate?: Maybe<Nanisore_Shipping_Method_Aggregate_Fields>;
  nodes: Array<Nanisore_Shipping_Method>;
};

/** aggregate fields of "nanisore.shipping_method" */
export type Nanisore_Shipping_Method_Aggregate_Fields = {
  __typename?: 'nanisore_shipping_method_aggregate_fields';
  avg?: Maybe<Nanisore_Shipping_Method_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Shipping_Method_Max_Fields>;
  min?: Maybe<Nanisore_Shipping_Method_Min_Fields>;
  stddev?: Maybe<Nanisore_Shipping_Method_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Shipping_Method_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Shipping_Method_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Shipping_Method_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Shipping_Method_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Shipping_Method_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Shipping_Method_Variance_Fields>;
};


/** aggregate fields of "nanisore.shipping_method" */
export type Nanisore_Shipping_Method_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Shipping_Method_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Shipping_Method_Avg_Fields = {
  __typename?: 'nanisore_shipping_method_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.shipping_method". All fields are combined with a logical 'AND'. */
export type Nanisore_Shipping_Method_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Shipping_Method_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Shipping_Method_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Shipping_Method_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tracking_config?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.shipping_method" */
export enum Nanisore_Shipping_Method_Constraint {
  /** unique or primary key constraint on columns "id" */
  ShippingMethodPkey = 'shipping_method_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.shipping_method" */
export type Nanisore_Shipping_Method_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "nanisore.shipping_method" */
export type Nanisore_Shipping_Method_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tracking_config?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Shipping_Method_Max_Fields = {
  __typename?: 'nanisore_shipping_method_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tracking_config?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Shipping_Method_Min_Fields = {
  __typename?: 'nanisore_shipping_method_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tracking_config?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.shipping_method" */
export type Nanisore_Shipping_Method_Mutation_Response = {
  __typename?: 'nanisore_shipping_method_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Shipping_Method>;
};

/** on_conflict condition type for table "nanisore.shipping_method" */
export type Nanisore_Shipping_Method_On_Conflict = {
  constraint: Nanisore_Shipping_Method_Constraint;
  update_columns?: Array<Nanisore_Shipping_Method_Update_Column>;
  where?: InputMaybe<Nanisore_Shipping_Method_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.shipping_method". */
export type Nanisore_Shipping_Method_Order_By = {
  created_at?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tracking_config?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.shipping_method */
export type Nanisore_Shipping_Method_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.shipping_method" */
export enum Nanisore_Shipping_Method_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TrackingConfig = 'tracking_config',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.shipping_method" */
export type Nanisore_Shipping_Method_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tracking_config?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Shipping_Method_Stddev_Fields = {
  __typename?: 'nanisore_shipping_method_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Shipping_Method_Stddev_Pop_Fields = {
  __typename?: 'nanisore_shipping_method_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Shipping_Method_Stddev_Samp_Fields = {
  __typename?: 'nanisore_shipping_method_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_shipping_method" */
export type Nanisore_Shipping_Method_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Shipping_Method_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Shipping_Method_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tracking_config?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Shipping_Method_Sum_Fields = {
  __typename?: 'nanisore_shipping_method_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "nanisore.shipping_method" */
export enum Nanisore_Shipping_Method_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TrackingConfig = 'tracking_config',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Shipping_Method_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Shipping_Method_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Shipping_Method_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Shipping_Method_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Shipping_Method_Var_Pop_Fields = {
  __typename?: 'nanisore_shipping_method_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Shipping_Method_Var_Samp_Fields = {
  __typename?: 'nanisore_shipping_method_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Shipping_Method_Variance_Fields = {
  __typename?: 'nanisore_shipping_method_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Shipping_Min_Fields = {
  __typename?: 'nanisore_shipping_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  method?: Maybe<Scalars['bigint']['output']>;
  recipient?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<Scalars['Int']['output']>;
  shipping_order_no?: Maybe<Scalars['String']['output']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: Maybe<Scalars['String']['output']>;
  /** Order Type (system or platform) */
  type?: Maybe<Scalars['bpchar']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.shipping" */
export type Nanisore_Shipping_Mutation_Response = {
  __typename?: 'nanisore_shipping_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Shipping>;
};

/** on_conflict condition type for table "nanisore.shipping" */
export type Nanisore_Shipping_On_Conflict = {
  constraint: Nanisore_Shipping_Constraint;
  update_columns?: Array<Nanisore_Shipping_Update_Column>;
  where?: InputMaybe<Nanisore_Shipping_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.shipping". */
export type Nanisore_Shipping_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  method?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  shipping_order_no?: InputMaybe<Order_By>;
  transaction_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.shipping */
export type Nanisore_Shipping_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.shipping" */
export enum Nanisore_Shipping_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  Sender = 'sender',
  /** column name */
  ShippingOrderNo = 'shipping_order_no',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.shipping" */
export type Nanisore_Shipping_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  method?: InputMaybe<Scalars['bigint']['input']>;
  recipient?: InputMaybe<Scalars['Int']['input']>;
  sender?: InputMaybe<Scalars['Int']['input']>;
  shipping_order_no?: InputMaybe<Scalars['String']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  /** Order Type (system or platform) */
  type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Shipping_Stddev_Fields = {
  __typename?: 'nanisore_shipping_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  method?: Maybe<Scalars['Float']['output']>;
  recipient?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Shipping_Stddev_Pop_Fields = {
  __typename?: 'nanisore_shipping_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  method?: Maybe<Scalars['Float']['output']>;
  recipient?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Shipping_Stddev_Samp_Fields = {
  __typename?: 'nanisore_shipping_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  method?: Maybe<Scalars['Float']['output']>;
  recipient?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_shipping" */
export type Nanisore_Shipping_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Shipping_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Shipping_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  method?: InputMaybe<Scalars['bigint']['input']>;
  recipient?: InputMaybe<Scalars['Int']['input']>;
  sender?: InputMaybe<Scalars['Int']['input']>;
  shipping_order_no?: InputMaybe<Scalars['String']['input']>;
  /** Transaction ID, visible to the public, to prevent ID probing attacks */
  transaction_id?: InputMaybe<Scalars['String']['input']>;
  /** Order Type (system or platform) */
  type?: InputMaybe<Scalars['bpchar']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Shipping_Sum_Fields = {
  __typename?: 'nanisore_shipping_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  method?: Maybe<Scalars['bigint']['output']>;
  recipient?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.shipping" */
export enum Nanisore_Shipping_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  Sender = 'sender',
  /** column name */
  ShippingOrderNo = 'shipping_order_no',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Shipping_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Shipping_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Shipping_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Shipping_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Shipping_Var_Pop_Fields = {
  __typename?: 'nanisore_shipping_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  method?: Maybe<Scalars['Float']['output']>;
  recipient?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Shipping_Var_Samp_Fields = {
  __typename?: 'nanisore_shipping_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  method?: Maybe<Scalars['Float']['output']>;
  recipient?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Shipping_Variance_Fields = {
  __typename?: 'nanisore_shipping_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  method?: Maybe<Scalars['Float']['output']>;
  recipient?: Maybe<Scalars['Float']['output']>;
  sender?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nanisore.specification" */
export type Nanisore_Specification = {
  __typename?: 'nanisore_specification';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  group?: Maybe<Nanisore_Group>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "nanisore.specification" */
export type Nanisore_Specification_Aggregate = {
  __typename?: 'nanisore_specification_aggregate';
  aggregate?: Maybe<Nanisore_Specification_Aggregate_Fields>;
  nodes: Array<Nanisore_Specification>;
};

export type Nanisore_Specification_Aggregate_Bool_Exp = {
  count?: InputMaybe<Nanisore_Specification_Aggregate_Bool_Exp_Count>;
};

export type Nanisore_Specification_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nanisore_Specification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nanisore_Specification_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nanisore.specification" */
export type Nanisore_Specification_Aggregate_Fields = {
  __typename?: 'nanisore_specification_aggregate_fields';
  avg?: Maybe<Nanisore_Specification_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Specification_Max_Fields>;
  min?: Maybe<Nanisore_Specification_Min_Fields>;
  stddev?: Maybe<Nanisore_Specification_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Specification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Specification_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Specification_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Specification_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Specification_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Specification_Variance_Fields>;
};


/** aggregate fields of "nanisore.specification" */
export type Nanisore_Specification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Specification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nanisore.specification" */
export type Nanisore_Specification_Aggregate_Order_By = {
  avg?: InputMaybe<Nanisore_Specification_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nanisore_Specification_Max_Order_By>;
  min?: InputMaybe<Nanisore_Specification_Min_Order_By>;
  stddev?: InputMaybe<Nanisore_Specification_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nanisore_Specification_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nanisore_Specification_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nanisore_Specification_Sum_Order_By>;
  var_pop?: InputMaybe<Nanisore_Specification_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nanisore_Specification_Var_Samp_Order_By>;
  variance?: InputMaybe<Nanisore_Specification_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nanisore.specification" */
export type Nanisore_Specification_Arr_Rel_Insert_Input = {
  data: Array<Nanisore_Specification_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Specification_On_Conflict>;
};

/** aggregate avg on columns */
export type Nanisore_Specification_Avg_Fields = {
  __typename?: 'nanisore_specification_avg_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Avg_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nanisore.specification". All fields are combined with a logical 'AND'. */
export type Nanisore_Specification_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Specification_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Specification_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Specification_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  group?: InputMaybe<Nanisore_Group_Bool_Exp>;
  group_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  operator?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.specification" */
export enum Nanisore_Specification_Constraint {
  /** unique or primary key constraint on columns "type", "group_id", "value", "name" */
  SpecificationGroupIdTypeValueNameKey = 'specification_group_id_type_value_name_key',
  /** unique or primary key constraint on columns "id" */
  SpecificationPkey = 'specification_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.specification" */
export type Nanisore_Specification_Inc_Input = {
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "nanisore.specification" */
export type Nanisore_Specification_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  group?: InputMaybe<Nanisore_Group_Obj_Rel_Insert_Input>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Specification_Max_Fields = {
  __typename?: 'nanisore_specification_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nanisore_Specification_Min_Fields = {
  __typename?: 'nanisore_specification_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nanisore.specification" */
export type Nanisore_Specification_Mutation_Response = {
  __typename?: 'nanisore_specification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Specification>;
};

/** on_conflict condition type for table "nanisore.specification" */
export type Nanisore_Specification_On_Conflict = {
  constraint: Nanisore_Specification_Constraint;
  update_columns?: Array<Nanisore_Specification_Update_Column>;
  where?: InputMaybe<Nanisore_Specification_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.specification". */
export type Nanisore_Specification_Order_By = {
  created_at?: InputMaybe<Order_By>;
  group?: InputMaybe<Nanisore_Group_Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.specification */
export type Nanisore_Specification_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "nanisore.specification" */
export enum Nanisore_Specification_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Operator = 'operator',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "nanisore.specification" */
export type Nanisore_Specification_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Specification_Stddev_Fields = {
  __typename?: 'nanisore_specification_stddev_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Stddev_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Specification_Stddev_Pop_Fields = {
  __typename?: 'nanisore_specification_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Stddev_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Specification_Stddev_Samp_Fields = {
  __typename?: 'nanisore_specification_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Stddev_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nanisore_specification" */
export type Nanisore_Specification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Specification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Specification_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  group_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Specification_Sum_Fields = {
  __typename?: 'nanisore_specification_sum_fields';
  group_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Sum_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "nanisore.specification" */
export enum Nanisore_Specification_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Operator = 'operator',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

export type Nanisore_Specification_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Specification_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Specification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Specification_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Specification_Var_Pop_Fields = {
  __typename?: 'nanisore_specification_var_pop_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Var_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nanisore_Specification_Var_Samp_Fields = {
  __typename?: 'nanisore_specification_var_samp_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Var_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nanisore_Specification_Variance_Fields = {
  __typename?: 'nanisore_specification_variance_fields';
  group_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nanisore.specification" */
export type Nanisore_Specification_Variance_Order_By = {
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "nanisore.stock_info" */
export type Nanisore_Stock_Info = {
  __typename?: 'nanisore_stock_info';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  product?: Maybe<Nanisore_Product>;
  raw: Scalars['String']['output'];
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nanisore.stock_info" */
export type Nanisore_Stock_Info_Aggregate = {
  __typename?: 'nanisore_stock_info_aggregate';
  aggregate?: Maybe<Nanisore_Stock_Info_Aggregate_Fields>;
  nodes: Array<Nanisore_Stock_Info>;
};

/** aggregate fields of "nanisore.stock_info" */
export type Nanisore_Stock_Info_Aggregate_Fields = {
  __typename?: 'nanisore_stock_info_aggregate_fields';
  avg?: Maybe<Nanisore_Stock_Info_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Stock_Info_Max_Fields>;
  min?: Maybe<Nanisore_Stock_Info_Min_Fields>;
  stddev?: Maybe<Nanisore_Stock_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Stock_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Stock_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Stock_Info_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Stock_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Stock_Info_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Stock_Info_Variance_Fields>;
};


/** aggregate fields of "nanisore.stock_info" */
export type Nanisore_Stock_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Stock_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Stock_Info_Avg_Fields = {
  __typename?: 'nanisore_stock_info_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.stock_info". All fields are combined with a logical 'AND'. */
export type Nanisore_Stock_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Stock_Info_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Stock_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Stock_Info_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Nanisore_Product_Bool_Exp>;
  raw?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.stock_info" */
export enum Nanisore_Stock_Info_Constraint {
  /** unique or primary key constraint on columns "id" */
  StockInfoPkey = 'stock_info_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.stock_info" */
export type Nanisore_Stock_Info_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.stock_info" */
export type Nanisore_Stock_Info_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Nanisore_Product_Obj_Rel_Insert_Input>;
  raw?: InputMaybe<Scalars['String']['input']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Stock_Info_Max_Fields = {
  __typename?: 'nanisore_stock_info_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  raw?: Maybe<Scalars['String']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Stock_Info_Min_Fields = {
  __typename?: 'nanisore_stock_info_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  raw?: Maybe<Scalars['String']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nanisore.stock_info" */
export type Nanisore_Stock_Info_Mutation_Response = {
  __typename?: 'nanisore_stock_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Stock_Info>;
};

/** input type for inserting object relation for remote table "nanisore.stock_info" */
export type Nanisore_Stock_Info_Obj_Rel_Insert_Input = {
  data: Nanisore_Stock_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Stock_Info_On_Conflict>;
};

/** on_conflict condition type for table "nanisore.stock_info" */
export type Nanisore_Stock_Info_On_Conflict = {
  constraint: Nanisore_Stock_Info_Constraint;
  update_columns?: Array<Nanisore_Stock_Info_Update_Column>;
  where?: InputMaybe<Nanisore_Stock_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.stock_info". */
export type Nanisore_Stock_Info_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Nanisore_Product_Order_By>;
  raw?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.stock_info */
export type Nanisore_Stock_Info_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "nanisore.stock_info" */
export enum Nanisore_Stock_Info_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Raw = 'raw',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nanisore.stock_info" */
export type Nanisore_Stock_Info_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['String']['input']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Stock_Info_Stddev_Fields = {
  __typename?: 'nanisore_stock_info_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Stock_Info_Stddev_Pop_Fields = {
  __typename?: 'nanisore_stock_info_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Stock_Info_Stddev_Samp_Fields = {
  __typename?: 'nanisore_stock_info_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_stock_info" */
export type Nanisore_Stock_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Stock_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Stock_Info_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  raw?: InputMaybe<Scalars['String']['input']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Stock_Info_Sum_Fields = {
  __typename?: 'nanisore_stock_info_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.stock_info" */
export enum Nanisore_Stock_Info_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Raw = 'raw',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nanisore_Stock_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Stock_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Stock_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Stock_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Stock_Info_Var_Pop_Fields = {
  __typename?: 'nanisore_stock_info_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Stock_Info_Var_Samp_Fields = {
  __typename?: 'nanisore_stock_info_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Stock_Info_Variance_Fields = {
  __typename?: 'nanisore_stock_info_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 0 for out of stock, 1 for in stock, 2 for pre-order */
  status?: Maybe<Scalars['Float']['output']>;
};

/** 粗粒度，扁平化表述的大分类，用于网站入口 */
export type Nanisore_Unity_Category = {
  __typename?: 'nanisore_unity_category';
  id: Scalars['Int']['output'];
  /** An array relationship */
  original_categories: Array<Nanisore_Unity_Category_Bridge>;
  /** An aggregate relationship */
  original_categories_aggregate: Nanisore_Unity_Category_Bridge_Aggregate;
  title: Scalars['String']['output'];
};


/** 粗粒度，扁平化表述的大分类，用于网站入口 */
export type Nanisore_Unity_CategoryOriginal_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
};


/** 粗粒度，扁平化表述的大分类，用于网站入口 */
export type Nanisore_Unity_CategoryOriginal_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
};

/** aggregated selection of "nanisore.unity_category" */
export type Nanisore_Unity_Category_Aggregate = {
  __typename?: 'nanisore_unity_category_aggregate';
  aggregate?: Maybe<Nanisore_Unity_Category_Aggregate_Fields>;
  nodes: Array<Nanisore_Unity_Category>;
};

/** aggregate fields of "nanisore.unity_category" */
export type Nanisore_Unity_Category_Aggregate_Fields = {
  __typename?: 'nanisore_unity_category_aggregate_fields';
  avg?: Maybe<Nanisore_Unity_Category_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Unity_Category_Max_Fields>;
  min?: Maybe<Nanisore_Unity_Category_Min_Fields>;
  stddev?: Maybe<Nanisore_Unity_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Unity_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Unity_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Unity_Category_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Unity_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Unity_Category_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Unity_Category_Variance_Fields>;
};


/** aggregate fields of "nanisore.unity_category" */
export type Nanisore_Unity_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Unity_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_Unity_Category_Avg_Fields = {
  __typename?: 'nanisore_unity_category_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.unity_category". All fields are combined with a logical 'AND'. */
export type Nanisore_Unity_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Unity_Category_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Unity_Category_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  original_categories?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
  original_categories_aggregate?: InputMaybe<Nanisore_Unity_Category_Bridge_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge = {
  __typename?: 'nanisore_unity_category_bridge';
  id: Scalars['Int']['output'];
  /** An object relationship */
  original_category?: Maybe<Nanisore_Category>;
  original_category_id: Scalars['Int']['output'];
  /** An object relationship */
  unity_category?: Maybe<Nanisore_Unity_Category>;
  unity_category_id: Scalars['Int']['output'];
};

/** aggregated selection of "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Aggregate = {
  __typename?: 'nanisore_unity_category_bridge_aggregate';
  aggregate?: Maybe<Nanisore_Unity_Category_Bridge_Aggregate_Fields>;
  nodes: Array<Nanisore_Unity_Category_Bridge>;
};

export type Nanisore_Unity_Category_Bridge_Aggregate_Bool_Exp = {
  count?: InputMaybe<Nanisore_Unity_Category_Bridge_Aggregate_Bool_Exp_Count>;
};

export type Nanisore_Unity_Category_Bridge_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Aggregate_Fields = {
  __typename?: 'nanisore_unity_category_bridge_aggregate_fields';
  avg?: Maybe<Nanisore_Unity_Category_Bridge_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_Unity_Category_Bridge_Max_Fields>;
  min?: Maybe<Nanisore_Unity_Category_Bridge_Min_Fields>;
  stddev?: Maybe<Nanisore_Unity_Category_Bridge_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_Unity_Category_Bridge_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_Unity_Category_Bridge_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_Unity_Category_Bridge_Sum_Fields>;
  var_pop?: Maybe<Nanisore_Unity_Category_Bridge_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_Unity_Category_Bridge_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_Unity_Category_Bridge_Variance_Fields>;
};


/** aggregate fields of "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Aggregate_Order_By = {
  avg?: InputMaybe<Nanisore_Unity_Category_Bridge_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nanisore_Unity_Category_Bridge_Max_Order_By>;
  min?: InputMaybe<Nanisore_Unity_Category_Bridge_Min_Order_By>;
  stddev?: InputMaybe<Nanisore_Unity_Category_Bridge_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nanisore_Unity_Category_Bridge_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nanisore_Unity_Category_Bridge_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nanisore_Unity_Category_Bridge_Sum_Order_By>;
  var_pop?: InputMaybe<Nanisore_Unity_Category_Bridge_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nanisore_Unity_Category_Bridge_Var_Samp_Order_By>;
  variance?: InputMaybe<Nanisore_Unity_Category_Bridge_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Arr_Rel_Insert_Input = {
  data: Array<Nanisore_Unity_Category_Bridge_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Unity_Category_Bridge_On_Conflict>;
};

/** aggregate avg on columns */
export type Nanisore_Unity_Category_Bridge_Avg_Fields = {
  __typename?: 'nanisore_unity_category_bridge_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nanisore.unity_category_bridge". All fields are combined with a logical 'AND'. */
export type Nanisore_Unity_Category_Bridge_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  original_category?: InputMaybe<Nanisore_Category_Bool_Exp>;
  original_category_id?: InputMaybe<Int_Comparison_Exp>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
  unity_category_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.unity_category_bridge" */
export enum Nanisore_Unity_Category_Bridge_Constraint {
  /** unique or primary key constraint on columns "id" */
  UnityCategoryBridgePkey = 'unity_category_bridge_pkey',
  /** unique or primary key constraint on columns "original_category_id", "unity_category_id" */
  UnityCategoryBridgeUnityCategoryIdOriginalCategoryIdKe = 'unity_category_bridge_unity_category_id_original_category_id_ke'
}

/** input type for incrementing numeric columns in table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  original_category?: InputMaybe<Nanisore_Category_Obj_Rel_Insert_Input>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Obj_Rel_Insert_Input>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Unity_Category_Bridge_Max_Fields = {
  __typename?: 'nanisore_unity_category_bridge_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nanisore_Unity_Category_Bridge_Min_Fields = {
  __typename?: 'nanisore_unity_category_bridge_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Mutation_Response = {
  __typename?: 'nanisore_unity_category_bridge_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Unity_Category_Bridge>;
};

/** input type for inserting object relation for remote table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Obj_Rel_Insert_Input = {
  data: Nanisore_Unity_Category_Bridge_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Unity_Category_Bridge_On_Conflict>;
};

/** on_conflict condition type for table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_On_Conflict = {
  constraint: Nanisore_Unity_Category_Bridge_Constraint;
  update_columns?: Array<Nanisore_Unity_Category_Bridge_Update_Column>;
  where?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.unity_category_bridge". */
export type Nanisore_Unity_Category_Bridge_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category?: InputMaybe<Nanisore_Category_Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category?: InputMaybe<Nanisore_Unity_Category_Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.unity_category_bridge */
export type Nanisore_Unity_Category_Bridge_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "nanisore.unity_category_bridge" */
export enum Nanisore_Unity_Category_Bridge_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OriginalCategoryId = 'original_category_id',
  /** column name */
  UnityCategoryId = 'unity_category_id'
}

/** input type for updating data in table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Unity_Category_Bridge_Stddev_Fields = {
  __typename?: 'nanisore_unity_category_bridge_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Unity_Category_Bridge_Stddev_Pop_Fields = {
  __typename?: 'nanisore_unity_category_bridge_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Unity_Category_Bridge_Stddev_Samp_Fields = {
  __typename?: 'nanisore_unity_category_bridge_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nanisore_unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Unity_Category_Bridge_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Unity_Category_Bridge_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  original_category_id?: InputMaybe<Scalars['Int']['input']>;
  unity_category_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Unity_Category_Bridge_Sum_Fields = {
  __typename?: 'nanisore_unity_category_bridge_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  original_category_id?: Maybe<Scalars['Int']['output']>;
  unity_category_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** update columns of table "nanisore.unity_category_bridge" */
export enum Nanisore_Unity_Category_Bridge_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OriginalCategoryId = 'original_category_id',
  /** column name */
  UnityCategoryId = 'unity_category_id'
}

export type Nanisore_Unity_Category_Bridge_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Unity_Category_Bridge_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Unity_Category_Bridge_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Unity_Category_Bridge_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Unity_Category_Bridge_Var_Pop_Fields = {
  __typename?: 'nanisore_unity_category_bridge_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nanisore_Unity_Category_Bridge_Var_Samp_Fields = {
  __typename?: 'nanisore_unity_category_bridge_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nanisore_Unity_Category_Bridge_Variance_Fields = {
  __typename?: 'nanisore_unity_category_bridge_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  original_category_id?: Maybe<Scalars['Float']['output']>;
  unity_category_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nanisore.unity_category_bridge" */
export type Nanisore_Unity_Category_Bridge_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  original_category_id?: InputMaybe<Order_By>;
  unity_category_id?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "nanisore.unity_category" */
export enum Nanisore_Unity_Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  UnityCategoryPkey = 'unity_category_pkey'
}

/** input type for incrementing numeric columns in table "nanisore.unity_category" */
export type Nanisore_Unity_Category_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.unity_category" */
export type Nanisore_Unity_Category_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  original_categories?: InputMaybe<Nanisore_Unity_Category_Bridge_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Nanisore_Unity_Category_Max_Fields = {
  __typename?: 'nanisore_unity_category_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Nanisore_Unity_Category_Min_Fields = {
  __typename?: 'nanisore_unity_category_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "nanisore.unity_category" */
export type Nanisore_Unity_Category_Mutation_Response = {
  __typename?: 'nanisore_unity_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_Unity_Category>;
};

/** input type for inserting object relation for remote table "nanisore.unity_category" */
export type Nanisore_Unity_Category_Obj_Rel_Insert_Input = {
  data: Nanisore_Unity_Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nanisore_Unity_Category_On_Conflict>;
};

/** on_conflict condition type for table "nanisore.unity_category" */
export type Nanisore_Unity_Category_On_Conflict = {
  constraint: Nanisore_Unity_Category_Constraint;
  update_columns?: Array<Nanisore_Unity_Category_Update_Column>;
  where?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.unity_category". */
export type Nanisore_Unity_Category_Order_By = {
  id?: InputMaybe<Order_By>;
  original_categories_aggregate?: InputMaybe<Nanisore_Unity_Category_Bridge_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.unity_category */
export type Nanisore_Unity_Category_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "nanisore.unity_category" */
export enum Nanisore_Unity_Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "nanisore.unity_category" */
export type Nanisore_Unity_Category_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_Unity_Category_Stddev_Fields = {
  __typename?: 'nanisore_unity_category_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_Unity_Category_Stddev_Pop_Fields = {
  __typename?: 'nanisore_unity_category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_Unity_Category_Stddev_Samp_Fields = {
  __typename?: 'nanisore_unity_category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_unity_category" */
export type Nanisore_Unity_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_Unity_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_Unity_Category_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_Unity_Category_Sum_Fields = {
  __typename?: 'nanisore_unity_category_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.unity_category" */
export enum Nanisore_Unity_Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

export type Nanisore_Unity_Category_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_Unity_Category_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_Unity_Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_Unity_Category_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_Unity_Category_Var_Pop_Fields = {
  __typename?: 'nanisore_unity_category_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_Unity_Category_Var_Samp_Fields = {
  __typename?: 'nanisore_unity_category_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_Unity_Category_Variance_Fields = {
  __typename?: 'nanisore_unity_category_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "nanisore.user" */
export type Nanisore_User = {
  __typename?: 'nanisore_user';
  id: Scalars['Int']['output'];
  lastSeen: Scalars['timestamptz']['output'];
  userId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

/** aggregated selection of "nanisore.user" */
export type Nanisore_User_Aggregate = {
  __typename?: 'nanisore_user_aggregate';
  aggregate?: Maybe<Nanisore_User_Aggregate_Fields>;
  nodes: Array<Nanisore_User>;
};

/** aggregate fields of "nanisore.user" */
export type Nanisore_User_Aggregate_Fields = {
  __typename?: 'nanisore_user_aggregate_fields';
  avg?: Maybe<Nanisore_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nanisore_User_Max_Fields>;
  min?: Maybe<Nanisore_User_Min_Fields>;
  stddev?: Maybe<Nanisore_User_Stddev_Fields>;
  stddev_pop?: Maybe<Nanisore_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nanisore_User_Stddev_Samp_Fields>;
  sum?: Maybe<Nanisore_User_Sum_Fields>;
  var_pop?: Maybe<Nanisore_User_Var_Pop_Fields>;
  var_samp?: Maybe<Nanisore_User_Var_Samp_Fields>;
  variance?: Maybe<Nanisore_User_Variance_Fields>;
};


/** aggregate fields of "nanisore.user" */
export type Nanisore_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nanisore_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Nanisore_User_Avg_Fields = {
  __typename?: 'nanisore_user_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nanisore.user". All fields are combined with a logical 'AND'. */
export type Nanisore_User_Bool_Exp = {
  _and?: InputMaybe<Array<Nanisore_User_Bool_Exp>>;
  _not?: InputMaybe<Nanisore_User_Bool_Exp>;
  _or?: InputMaybe<Array<Nanisore_User_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  userName?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nanisore.user" */
export enum Nanisore_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey',
  /** unique or primary key constraint on columns "userId" */
  UserUserIdKey = 'User_userId_key'
}

/** input type for incrementing numeric columns in table "nanisore.user" */
export type Nanisore_User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nanisore.user" */
export type Nanisore_User_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Nanisore_User_Max_Fields = {
  __typename?: 'nanisore_user_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Nanisore_User_Min_Fields = {
  __typename?: 'nanisore_user_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "nanisore.user" */
export type Nanisore_User_Mutation_Response = {
  __typename?: 'nanisore_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nanisore_User>;
};

/** on_conflict condition type for table "nanisore.user" */
export type Nanisore_User_On_Conflict = {
  constraint: Nanisore_User_Constraint;
  update_columns?: Array<Nanisore_User_Update_Column>;
  where?: InputMaybe<Nanisore_User_Bool_Exp>;
};

/** Ordering options when selecting data from "nanisore.user". */
export type Nanisore_User_Order_By = {
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userName?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nanisore.user */
export type Nanisore_User_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "nanisore.user" */
export enum Nanisore_User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserName = 'userName'
}

/** input type for updating data in table "nanisore.user" */
export type Nanisore_User_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Nanisore_User_Stddev_Fields = {
  __typename?: 'nanisore_user_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nanisore_User_Stddev_Pop_Fields = {
  __typename?: 'nanisore_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nanisore_User_Stddev_Samp_Fields = {
  __typename?: 'nanisore_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nanisore_user" */
export type Nanisore_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nanisore_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nanisore_User_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Nanisore_User_Sum_Fields = {
  __typename?: 'nanisore_user_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "nanisore.user" */
export enum Nanisore_User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserName = 'userName'
}

export type Nanisore_User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nanisore_User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nanisore_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nanisore_User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nanisore_User_Var_Pop_Fields = {
  __typename?: 'nanisore_user_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nanisore_User_Var_Samp_Fields = {
  __typename?: 'nanisore_user_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nanisore_User_Variance_Fields = {
  __typename?: 'nanisore_user_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** query _Entity union */
  _entities?: Maybe<_Entity>;
  _service: _Service;
  /** fetch data from the table: "nanisore.category" */
  nanisore_category: Array<Nanisore_Category>;
  /** fetch aggregated fields from the table: "nanisore.category" */
  nanisore_category_aggregate: Nanisore_Category_Aggregate;
  /** fetch data from the table: "nanisore.category" using primary key columns */
  nanisore_category_by_pk?: Maybe<Nanisore_Category>;
  /** fetch data from the table: "nanisore.category_material" */
  nanisore_category_material: Array<Nanisore_Category_Material>;
  /** fetch aggregated fields from the table: "nanisore.category_material" */
  nanisore_category_material_aggregate: Nanisore_Category_Material_Aggregate;
  /** fetch data from the table: "nanisore.category_material" using primary key columns */
  nanisore_category_material_by_pk?: Maybe<Nanisore_Category_Material>;
  /** fetch data from the table: "nanisore.group" */
  nanisore_group: Array<Nanisore_Group>;
  /** fetch aggregated fields from the table: "nanisore.group" */
  nanisore_group_aggregate: Nanisore_Group_Aggregate;
  /** fetch data from the table: "nanisore.group" using primary key columns */
  nanisore_group_by_pk?: Maybe<Nanisore_Group>;
  /** fetch data from the table: "nanisore.image" */
  nanisore_image: Array<Nanisore_Image>;
  /** fetch aggregated fields from the table: "nanisore.image" */
  nanisore_image_aggregate: Nanisore_Image_Aggregate;
  /** fetch data from the table: "nanisore.image" using primary key columns */
  nanisore_image_by_pk?: Maybe<Nanisore_Image>;
  /** fetch data from the table: "nanisore.order" */
  nanisore_order: Array<Nanisore_Order>;
  /** fetch aggregated fields from the table: "nanisore.order" */
  nanisore_order_aggregate: Nanisore_Order_Aggregate;
  /** fetch data from the table: "nanisore.order" using primary key columns */
  nanisore_order_by_pk?: Maybe<Nanisore_Order>;
  /** fetch data from the table: "nanisore.order_item" */
  nanisore_order_item: Array<Nanisore_Order_Item>;
  /** fetch aggregated fields from the table: "nanisore.order_item" */
  nanisore_order_item_aggregate: Nanisore_Order_Item_Aggregate;
  /** fetch data from the table: "nanisore.order_item" using primary key columns */
  nanisore_order_item_by_pk?: Maybe<Nanisore_Order_Item>;
  /** fetch data from the table: "nanisore.payment" */
  nanisore_payment: Array<Nanisore_Payment>;
  /** fetch aggregated fields from the table: "nanisore.payment" */
  nanisore_payment_aggregate: Nanisore_Payment_Aggregate;
  /** fetch data from the table: "nanisore.payment" using primary key columns */
  nanisore_payment_by_pk?: Maybe<Nanisore_Payment>;
  /** fetch data from the table: "nanisore.platform" */
  nanisore_platform: Array<Nanisore_Platform>;
  /** fetch aggregated fields from the table: "nanisore.platform" */
  nanisore_platform_aggregate: Nanisore_Platform_Aggregate;
  /** fetch data from the table: "nanisore.platform" using primary key columns */
  nanisore_platform_by_pk?: Maybe<Nanisore_Platform>;
  /** fetch data from the table: "nanisore.platform_order" */
  nanisore_platform_order: Array<Nanisore_Platform_Order>;
  /** fetch aggregated fields from the table: "nanisore.platform_order" */
  nanisore_platform_order_aggregate: Nanisore_Platform_Order_Aggregate;
  /** fetch data from the table: "nanisore.platform_order" using primary key columns */
  nanisore_platform_order_by_pk?: Maybe<Nanisore_Platform_Order>;
  /** fetch data from the table: "nanisore.platform_order_item" */
  nanisore_platform_order_item: Array<Nanisore_Platform_Order_Item>;
  /** fetch aggregated fields from the table: "nanisore.platform_order_item" */
  nanisore_platform_order_item_aggregate: Nanisore_Platform_Order_Item_Aggregate;
  /** fetch data from the table: "nanisore.platform_order_item" using primary key columns */
  nanisore_platform_order_item_by_pk?: Maybe<Nanisore_Platform_Order_Item>;
  /** fetch data from the table: "nanisore.product" */
  nanisore_product: Array<Nanisore_Product>;
  /** fetch aggregated fields from the table: "nanisore.product" */
  nanisore_product_aggregate: Nanisore_Product_Aggregate;
  /** fetch data from the table: "nanisore.product" using primary key columns */
  nanisore_product_by_pk?: Maybe<Nanisore_Product>;
  /** fetch data from the table: "nanisore.recommendation" */
  nanisore_recommendation: Array<Nanisore_Recommendation>;
  /** fetch aggregated fields from the table: "nanisore.recommendation" */
  nanisore_recommendation_aggregate: Nanisore_Recommendation_Aggregate;
  /** fetch data from the table: "nanisore.recommendation" using primary key columns */
  nanisore_recommendation_by_pk?: Maybe<Nanisore_Recommendation>;
  /** fetch data from the table: "nanisore.shipping" */
  nanisore_shipping: Array<Nanisore_Shipping>;
  /** fetch data from the table: "nanisore.shipping_address" */
  nanisore_shipping_address: Array<Nanisore_Shipping_Address>;
  /** fetch aggregated fields from the table: "nanisore.shipping_address" */
  nanisore_shipping_address_aggregate: Nanisore_Shipping_Address_Aggregate;
  /** fetch data from the table: "nanisore.shipping_address" using primary key columns */
  nanisore_shipping_address_by_pk?: Maybe<Nanisore_Shipping_Address>;
  /** fetch aggregated fields from the table: "nanisore.shipping" */
  nanisore_shipping_aggregate: Nanisore_Shipping_Aggregate;
  /** fetch data from the table: "nanisore.shipping" using primary key columns */
  nanisore_shipping_by_pk?: Maybe<Nanisore_Shipping>;
  /** fetch data from the table: "nanisore.shipping_log" */
  nanisore_shipping_log: Array<Nanisore_Shipping_Log>;
  /** fetch aggregated fields from the table: "nanisore.shipping_log" */
  nanisore_shipping_log_aggregate: Nanisore_Shipping_Log_Aggregate;
  /** fetch data from the table: "nanisore.shipping_log" using primary key columns */
  nanisore_shipping_log_by_pk?: Maybe<Nanisore_Shipping_Log>;
  /** fetch data from the table: "nanisore.shipping_method" */
  nanisore_shipping_method: Array<Nanisore_Shipping_Method>;
  /** fetch aggregated fields from the table: "nanisore.shipping_method" */
  nanisore_shipping_method_aggregate: Nanisore_Shipping_Method_Aggregate;
  /** fetch data from the table: "nanisore.shipping_method" using primary key columns */
  nanisore_shipping_method_by_pk?: Maybe<Nanisore_Shipping_Method>;
  /** fetch data from the table: "nanisore.specification" */
  nanisore_specification: Array<Nanisore_Specification>;
  /** fetch aggregated fields from the table: "nanisore.specification" */
  nanisore_specification_aggregate: Nanisore_Specification_Aggregate;
  /** fetch data from the table: "nanisore.specification" using primary key columns */
  nanisore_specification_by_pk?: Maybe<Nanisore_Specification>;
  /** fetch data from the table: "nanisore.stock_info" */
  nanisore_stock_info: Array<Nanisore_Stock_Info>;
  /** fetch aggregated fields from the table: "nanisore.stock_info" */
  nanisore_stock_info_aggregate: Nanisore_Stock_Info_Aggregate;
  /** fetch data from the table: "nanisore.stock_info" using primary key columns */
  nanisore_stock_info_by_pk?: Maybe<Nanisore_Stock_Info>;
  /** fetch data from the table: "nanisore.unity_category" */
  nanisore_unity_category: Array<Nanisore_Unity_Category>;
  /** fetch aggregated fields from the table: "nanisore.unity_category" */
  nanisore_unity_category_aggregate: Nanisore_Unity_Category_Aggregate;
  /** fetch data from the table: "nanisore.unity_category_bridge" */
  nanisore_unity_category_bridge: Array<Nanisore_Unity_Category_Bridge>;
  /** fetch aggregated fields from the table: "nanisore.unity_category_bridge" */
  nanisore_unity_category_bridge_aggregate: Nanisore_Unity_Category_Bridge_Aggregate;
  /** fetch data from the table: "nanisore.unity_category_bridge" using primary key columns */
  nanisore_unity_category_bridge_by_pk?: Maybe<Nanisore_Unity_Category_Bridge>;
  /** fetch data from the table: "nanisore.unity_category" using primary key columns */
  nanisore_unity_category_by_pk?: Maybe<Nanisore_Unity_Category>;
  /** fetch data from the table: "nanisore.user" */
  nanisore_user: Array<Nanisore_User>;
  /** fetch aggregated fields from the table: "nanisore.user" */
  nanisore_user_aggregate: Nanisore_User_Aggregate;
  /** fetch data from the table: "nanisore.user" using primary key columns */
  nanisore_user_by_pk?: Maybe<Nanisore_User>;
  /** fetch data from the table: "scraper.item" */
  scraper_item: Array<Scraper_Item>;
  /** fetch aggregated fields from the table: "scraper.item" */
  scraper_item_aggregate: Scraper_Item_Aggregate;
  /** fetch data from the table: "scraper.item" using primary key columns */
  scraper_item_by_pk?: Maybe<Scraper_Item>;
  /** fetch data from the table: "scraper.run" */
  scraper_run: Array<Scraper_Run>;
  /** fetch aggregated fields from the table: "scraper.run" */
  scraper_run_aggregate: Scraper_Run_Aggregate;
  /** fetch data from the table: "scraper.run" using primary key columns */
  scraper_run_by_pk?: Maybe<Scraper_Run>;
  /** fetch data from the table: "scraper.scrape_later" */
  scraper_scrape_later: Array<Scraper_Scrape_Later>;
  /** fetch aggregated fields from the table: "scraper.scrape_later" */
  scraper_scrape_later_aggregate: Scraper_Scrape_Later_Aggregate;
  /** fetch data from the table: "scraper.scrape_later" using primary key columns */
  scraper_scrape_later_by_pk?: Maybe<Scraper_Scrape_Later>;
};


export type Query_Root_EntitiesArgs = {
  representations: Array<Scalars['_Any']['input']>;
};


export type Query_RootNanisore_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Category_Order_By>>;
  where?: InputMaybe<Nanisore_Category_Bool_Exp>;
};


export type Query_RootNanisore_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Category_Order_By>>;
  where?: InputMaybe<Nanisore_Category_Bool_Exp>;
};


export type Query_RootNanisore_Category_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNanisore_Category_MaterialArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Category_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Category_Material_Order_By>>;
  where?: InputMaybe<Nanisore_Category_Material_Bool_Exp>;
};


export type Query_RootNanisore_Category_Material_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Category_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Category_Material_Order_By>>;
  where?: InputMaybe<Nanisore_Category_Material_Bool_Exp>;
};


export type Query_RootNanisore_Category_Material_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNanisore_GroupArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Group_Order_By>>;
  where?: InputMaybe<Nanisore_Group_Bool_Exp>;
};


export type Query_RootNanisore_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Group_Order_By>>;
  where?: InputMaybe<Nanisore_Group_Bool_Exp>;
};


export type Query_RootNanisore_Group_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_ImageArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Image_Order_By>>;
  where?: InputMaybe<Nanisore_Image_Bool_Exp>;
};


export type Query_RootNanisore_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Image_Order_By>>;
  where?: InputMaybe<Nanisore_Image_Bool_Exp>;
};


export type Query_RootNanisore_Image_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_OrderArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Order_Order_By>>;
  where?: InputMaybe<Nanisore_Order_Bool_Exp>;
};


export type Query_RootNanisore_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Order_Order_By>>;
  where?: InputMaybe<Nanisore_Order_Bool_Exp>;
};


export type Query_RootNanisore_Order_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_Order_ItemArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Order_Item_Order_By>>;
  where?: InputMaybe<Nanisore_Order_Item_Bool_Exp>;
};


export type Query_RootNanisore_Order_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Order_Item_Order_By>>;
  where?: InputMaybe<Nanisore_Order_Item_Bool_Exp>;
};


export type Query_RootNanisore_Order_Item_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_PaymentArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Payment_Order_By>>;
  where?: InputMaybe<Nanisore_Payment_Bool_Exp>;
};


export type Query_RootNanisore_Payment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Payment_Order_By>>;
  where?: InputMaybe<Nanisore_Payment_Bool_Exp>;
};


export type Query_RootNanisore_Payment_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_PlatformArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Bool_Exp>;
};


export type Query_RootNanisore_Platform_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Bool_Exp>;
};


export type Query_RootNanisore_Platform_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNanisore_Platform_OrderArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Order_Bool_Exp>;
};


export type Query_RootNanisore_Platform_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Order_Bool_Exp>;
};


export type Query_RootNanisore_Platform_Order_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_Platform_Order_ItemArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_Item_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Order_Item_Bool_Exp>;
};


export type Query_RootNanisore_Platform_Order_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_Item_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Order_Item_Bool_Exp>;
};


export type Query_RootNanisore_Platform_Order_Item_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_ProductArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Product_Order_By>>;
  where?: InputMaybe<Nanisore_Product_Bool_Exp>;
};


export type Query_RootNanisore_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Product_Order_By>>;
  where?: InputMaybe<Nanisore_Product_Bool_Exp>;
};


export type Query_RootNanisore_Product_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_RecommendationArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Recommendation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Recommendation_Order_By>>;
  where?: InputMaybe<Nanisore_Recommendation_Bool_Exp>;
};


export type Query_RootNanisore_Recommendation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Recommendation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Recommendation_Order_By>>;
  where?: InputMaybe<Nanisore_Recommendation_Bool_Exp>;
};


export type Query_RootNanisore_Recommendation_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_ShippingArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Bool_Exp>;
};


export type Query_RootNanisore_Shipping_AddressArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Address_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Address_Bool_Exp>;
};


export type Query_RootNanisore_Shipping_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Address_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Address_Bool_Exp>;
};


export type Query_RootNanisore_Shipping_Address_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_Shipping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Bool_Exp>;
};


export type Query_RootNanisore_Shipping_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_Shipping_LogArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Log_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Log_Bool_Exp>;
};


export type Query_RootNanisore_Shipping_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Log_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Log_Bool_Exp>;
};


export type Query_RootNanisore_Shipping_Log_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_Shipping_MethodArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Method_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Method_Bool_Exp>;
};


export type Query_RootNanisore_Shipping_Method_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Method_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Method_Bool_Exp>;
};


export type Query_RootNanisore_Shipping_Method_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_SpecificationArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Specification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Specification_Order_By>>;
  where?: InputMaybe<Nanisore_Specification_Bool_Exp>;
};


export type Query_RootNanisore_Specification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Specification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Specification_Order_By>>;
  where?: InputMaybe<Nanisore_Specification_Bool_Exp>;
};


export type Query_RootNanisore_Specification_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootNanisore_Stock_InfoArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Stock_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Stock_Info_Order_By>>;
  where?: InputMaybe<Nanisore_Stock_Info_Bool_Exp>;
};


export type Query_RootNanisore_Stock_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Stock_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Stock_Info_Order_By>>;
  where?: InputMaybe<Nanisore_Stock_Info_Bool_Exp>;
};


export type Query_RootNanisore_Stock_Info_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNanisore_Unity_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
};


export type Query_RootNanisore_Unity_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
};


export type Query_RootNanisore_Unity_Category_BridgeArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
};


export type Query_RootNanisore_Unity_Category_Bridge_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
};


export type Query_RootNanisore_Unity_Category_Bridge_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNanisore_Unity_Category_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNanisore_UserArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_User_Order_By>>;
  where?: InputMaybe<Nanisore_User_Bool_Exp>;
};


export type Query_RootNanisore_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_User_Order_By>>;
  where?: InputMaybe<Nanisore_User_Bool_Exp>;
};


export type Query_RootNanisore_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootScraper_ItemArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Item_Order_By>>;
  where?: InputMaybe<Scraper_Item_Bool_Exp>;
};


export type Query_RootScraper_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Item_Order_By>>;
  where?: InputMaybe<Scraper_Item_Bool_Exp>;
};


export type Query_RootScraper_Item_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootScraper_RunArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Run_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Run_Order_By>>;
  where?: InputMaybe<Scraper_Run_Bool_Exp>;
};


export type Query_RootScraper_Run_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Run_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Run_Order_By>>;
  where?: InputMaybe<Scraper_Run_Bool_Exp>;
};


export type Query_RootScraper_Run_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootScraper_Scrape_LaterArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Scrape_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Scrape_Later_Order_By>>;
  where?: InputMaybe<Scraper_Scrape_Later_Bool_Exp>;
};


export type Query_RootScraper_Scrape_Later_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Scrape_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Scrape_Later_Order_By>>;
  where?: InputMaybe<Scraper_Scrape_Later_Bool_Exp>;
};


export type Query_RootScraper_Scrape_Later_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** The shallow scraped data before visiting detail page. */
export type Scraper_Item = {
  __typename?: 'scraper_item';
  /** An object relationship */
  category?: Maybe<Nanisore_Category>;
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deep_scrape_time?: Maybe<Scalars['timestamptz']['output']>;
  from: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  link: Scalars['String']['output'];
  original_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  platform?: Maybe<Nanisore_Platform>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  product?: Maybe<Nanisore_Product>;
  run_id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "scraper.item" */
export type Scraper_Item_Aggregate = {
  __typename?: 'scraper_item_aggregate';
  aggregate?: Maybe<Scraper_Item_Aggregate_Fields>;
  nodes: Array<Scraper_Item>;
};

/** aggregate fields of "scraper.item" */
export type Scraper_Item_Aggregate_Fields = {
  __typename?: 'scraper_item_aggregate_fields';
  avg?: Maybe<Scraper_Item_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Scraper_Item_Max_Fields>;
  min?: Maybe<Scraper_Item_Min_Fields>;
  stddev?: Maybe<Scraper_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Scraper_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scraper_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Scraper_Item_Sum_Fields>;
  var_pop?: Maybe<Scraper_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Scraper_Item_Var_Samp_Fields>;
  variance?: Maybe<Scraper_Item_Variance_Fields>;
};


/** aggregate fields of "scraper.item" */
export type Scraper_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scraper_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Scraper_Item_Avg_Fields = {
  __typename?: 'scraper_item_avg_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "scraper.item". All fields are combined with a logical 'AND'. */
export type Scraper_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Scraper_Item_Bool_Exp>>;
  _not?: InputMaybe<Scraper_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Scraper_Item_Bool_Exp>>;
  category?: InputMaybe<Nanisore_Category_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deep_scrape_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  from?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  original_id?: InputMaybe<String_Comparison_Exp>;
  platform?: InputMaybe<Nanisore_Platform_Bool_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Nanisore_Product_Bool_Exp>;
  run_id?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "scraper.item" */
export enum Scraper_Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  ItemPkey = 'item_pkey',
  /** unique or primary key constraint on columns "category_id", "platform_id", "link" */
  ItemPlatformIdCategoryIdLinkKey = 'item_platform_id_category_id_link_key'
}

/** input type for incrementing numeric columns in table "scraper.item" */
export type Scraper_Item_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "scraper.item" */
export type Scraper_Item_Insert_Input = {
  category?: InputMaybe<Nanisore_Category_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deep_scrape_time?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Nanisore_Platform_Obj_Rel_Insert_Input>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Nanisore_Product_Obj_Rel_Insert_Input>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Scraper_Item_Max_Fields = {
  __typename?: 'scraper_item_max_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deep_scrape_time?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  original_id?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  run_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Scraper_Item_Min_Fields = {
  __typename?: 'scraper_item_min_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deep_scrape_time?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  original_id?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  run_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "scraper.item" */
export type Scraper_Item_Mutation_Response = {
  __typename?: 'scraper_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Scraper_Item>;
};

/** on_conflict condition type for table "scraper.item" */
export type Scraper_Item_On_Conflict = {
  constraint: Scraper_Item_Constraint;
  update_columns?: Array<Scraper_Item_Update_Column>;
  where?: InputMaybe<Scraper_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "scraper.item". */
export type Scraper_Item_Order_By = {
  category?: InputMaybe<Nanisore_Category_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deep_scrape_time?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  original_id?: InputMaybe<Order_By>;
  platform?: InputMaybe<Nanisore_Platform_Order_By>;
  platform_id?: InputMaybe<Order_By>;
  product?: InputMaybe<Nanisore_Product_Order_By>;
  run_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: scraper.item */
export type Scraper_Item_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "scraper.item" */
export enum Scraper_Item_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeepScrapeTime = 'deep_scrape_time',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Link = 'link',
  /** column name */
  OriginalId = 'original_id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  RunId = 'run_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "scraper.item" */
export type Scraper_Item_Set_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deep_scrape_time?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Scraper_Item_Stddev_Fields = {
  __typename?: 'scraper_item_stddev_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Scraper_Item_Stddev_Pop_Fields = {
  __typename?: 'scraper_item_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Scraper_Item_Stddev_Samp_Fields = {
  __typename?: 'scraper_item_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "scraper_item" */
export type Scraper_Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Scraper_Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Scraper_Item_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deep_scrape_time?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  original_id?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Scraper_Item_Sum_Fields = {
  __typename?: 'scraper_item_sum_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "scraper.item" */
export enum Scraper_Item_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeepScrapeTime = 'deep_scrape_time',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Link = 'link',
  /** column name */
  OriginalId = 'original_id',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  RunId = 'run_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Scraper_Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Scraper_Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Scraper_Item_Set_Input>;
  /** filter the rows which have to be updated */
  where: Scraper_Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Scraper_Item_Var_Pop_Fields = {
  __typename?: 'scraper_item_var_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Scraper_Item_Var_Samp_Fields = {
  __typename?: 'scraper_item_var_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Scraper_Item_Variance_Fields = {
  __typename?: 'scraper_item_variance_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "scraper.run" */
export type Scraper_Run = {
  __typename?: 'scraper_run';
  category_id?: Maybe<Scalars['Int']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  creator?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  result_id?: Maybe<Array<Scalars['Int']['output']>>;
  run_id: Scalars['String']['output'];
  status: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "scraper.run" */
export type Scraper_Run_Aggregate = {
  __typename?: 'scraper_run_aggregate';
  aggregate?: Maybe<Scraper_Run_Aggregate_Fields>;
  nodes: Array<Scraper_Run>;
};

/** aggregate fields of "scraper.run" */
export type Scraper_Run_Aggregate_Fields = {
  __typename?: 'scraper_run_aggregate_fields';
  avg?: Maybe<Scraper_Run_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Scraper_Run_Max_Fields>;
  min?: Maybe<Scraper_Run_Min_Fields>;
  stddev?: Maybe<Scraper_Run_Stddev_Fields>;
  stddev_pop?: Maybe<Scraper_Run_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scraper_Run_Stddev_Samp_Fields>;
  sum?: Maybe<Scraper_Run_Sum_Fields>;
  var_pop?: Maybe<Scraper_Run_Var_Pop_Fields>;
  var_samp?: Maybe<Scraper_Run_Var_Samp_Fields>;
  variance?: Maybe<Scraper_Run_Variance_Fields>;
};


/** aggregate fields of "scraper.run" */
export type Scraper_Run_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scraper_Run_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Scraper_Run_Avg_Fields = {
  __typename?: 'scraper_run_avg_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "scraper.run". All fields are combined with a logical 'AND'. */
export type Scraper_Run_Bool_Exp = {
  _and?: InputMaybe<Array<Scraper_Run_Bool_Exp>>;
  _not?: InputMaybe<Scraper_Run_Bool_Exp>;
  _or?: InputMaybe<Array<Scraper_Run_Bool_Exp>>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  category_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  keywords?: InputMaybe<String_Comparison_Exp>;
  platform?: InputMaybe<String_Comparison_Exp>;
  result_id?: InputMaybe<Int_Array_Comparison_Exp>;
  run_id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "scraper.run" */
export enum Scraper_Run_Constraint {
  /** unique or primary key constraint on columns "id" */
  RunPkey = 'run_pkey'
}

/** input type for incrementing numeric columns in table "scraper.run" */
export type Scraper_Run_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "scraper.run" */
export type Scraper_Run_Insert_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  result_id?: InputMaybe<Array<Scalars['Int']['input']>>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Scraper_Run_Max_Fields = {
  __typename?: 'scraper_run_max_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  result_id?: Maybe<Array<Scalars['Int']['output']>>;
  run_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Scraper_Run_Min_Fields = {
  __typename?: 'scraper_run_min_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  category_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  result_id?: Maybe<Array<Scalars['Int']['output']>>;
  run_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "scraper.run" */
export type Scraper_Run_Mutation_Response = {
  __typename?: 'scraper_run_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Scraper_Run>;
};

/** on_conflict condition type for table "scraper.run" */
export type Scraper_Run_On_Conflict = {
  constraint: Scraper_Run_Constraint;
  update_columns?: Array<Scraper_Run_Update_Column>;
  where?: InputMaybe<Scraper_Run_Bool_Exp>;
};

/** Ordering options when selecting data from "scraper.run". */
export type Scraper_Run_Order_By = {
  category_id?: InputMaybe<Order_By>;
  category_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  result_id?: InputMaybe<Order_By>;
  run_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: scraper.run */
export type Scraper_Run_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "scraper.run" */
export enum Scraper_Run_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Creator = 'creator',
  /** column name */
  Id = 'id',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Platform = 'platform',
  /** column name */
  ResultId = 'result_id',
  /** column name */
  RunId = 'run_id',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "scraper.run" */
export type Scraper_Run_Set_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  result_id?: InputMaybe<Array<Scalars['Int']['input']>>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Scraper_Run_Stddev_Fields = {
  __typename?: 'scraper_run_stddev_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Scraper_Run_Stddev_Pop_Fields = {
  __typename?: 'scraper_run_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Scraper_Run_Stddev_Samp_Fields = {
  __typename?: 'scraper_run_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "scraper_run" */
export type Scraper_Run_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Scraper_Run_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Scraper_Run_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  category_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  result_id?: InputMaybe<Array<Scalars['Int']['input']>>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Scraper_Run_Sum_Fields = {
  __typename?: 'scraper_run_sum_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "scraper.run" */
export enum Scraper_Run_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Creator = 'creator',
  /** column name */
  Id = 'id',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Platform = 'platform',
  /** column name */
  ResultId = 'result_id',
  /** column name */
  RunId = 'run_id',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Scraper_Run_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Scraper_Run_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Scraper_Run_Set_Input>;
  /** filter the rows which have to be updated */
  where: Scraper_Run_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Scraper_Run_Var_Pop_Fields = {
  __typename?: 'scraper_run_var_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Scraper_Run_Var_Samp_Fields = {
  __typename?: 'scraper_run_var_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Scraper_Run_Variance_Fields = {
  __typename?: 'scraper_run_variance_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "scraper.scrape_later" */
export type Scraper_Scrape_Later = {
  __typename?: 'scraper_scrape_later';
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamptz']['output'];
  deep_scrape_time?: Maybe<Scalars['timestamptz']['output']>;
  from: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  link: Scalars['String']['output'];
  platform_id?: Maybe<Scalars['Int']['output']>;
  run_id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "scraper.scrape_later" */
export type Scraper_Scrape_Later_Aggregate = {
  __typename?: 'scraper_scrape_later_aggregate';
  aggregate?: Maybe<Scraper_Scrape_Later_Aggregate_Fields>;
  nodes: Array<Scraper_Scrape_Later>;
};

/** aggregate fields of "scraper.scrape_later" */
export type Scraper_Scrape_Later_Aggregate_Fields = {
  __typename?: 'scraper_scrape_later_aggregate_fields';
  avg?: Maybe<Scraper_Scrape_Later_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Scraper_Scrape_Later_Max_Fields>;
  min?: Maybe<Scraper_Scrape_Later_Min_Fields>;
  stddev?: Maybe<Scraper_Scrape_Later_Stddev_Fields>;
  stddev_pop?: Maybe<Scraper_Scrape_Later_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scraper_Scrape_Later_Stddev_Samp_Fields>;
  sum?: Maybe<Scraper_Scrape_Later_Sum_Fields>;
  var_pop?: Maybe<Scraper_Scrape_Later_Var_Pop_Fields>;
  var_samp?: Maybe<Scraper_Scrape_Later_Var_Samp_Fields>;
  variance?: Maybe<Scraper_Scrape_Later_Variance_Fields>;
};


/** aggregate fields of "scraper.scrape_later" */
export type Scraper_Scrape_Later_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scraper_Scrape_Later_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Scraper_Scrape_Later_Avg_Fields = {
  __typename?: 'scraper_scrape_later_avg_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "scraper.scrape_later". All fields are combined with a logical 'AND'. */
export type Scraper_Scrape_Later_Bool_Exp = {
  _and?: InputMaybe<Array<Scraper_Scrape_Later_Bool_Exp>>;
  _not?: InputMaybe<Scraper_Scrape_Later_Bool_Exp>;
  _or?: InputMaybe<Array<Scraper_Scrape_Later_Bool_Exp>>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deep_scrape_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  from?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  platform_id?: InputMaybe<Int_Comparison_Exp>;
  run_id?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "scraper.scrape_later" */
export enum Scraper_Scrape_Later_Constraint {
  /** unique or primary key constraint on columns "id" */
  ScrapeLaterPkey = 'scrape_later_pkey',
  /** unique or primary key constraint on columns "category_id", "platform_id", "link" */
  ScrapeLaterPlatformIdCategoryIdLinkKey = 'scrape_later_platform_id_category_id_link_key'
}

/** input type for incrementing numeric columns in table "scraper.scrape_later" */
export type Scraper_Scrape_Later_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "scraper.scrape_later" */
export type Scraper_Scrape_Later_Insert_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deep_scrape_time?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Scraper_Scrape_Later_Max_Fields = {
  __typename?: 'scraper_scrape_later_max_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deep_scrape_time?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  run_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Scraper_Scrape_Later_Min_Fields = {
  __typename?: 'scraper_scrape_later_min_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deep_scrape_time?: Maybe<Scalars['timestamptz']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
  run_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "scraper.scrape_later" */
export type Scraper_Scrape_Later_Mutation_Response = {
  __typename?: 'scraper_scrape_later_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Scraper_Scrape_Later>;
};

/** on_conflict condition type for table "scraper.scrape_later" */
export type Scraper_Scrape_Later_On_Conflict = {
  constraint: Scraper_Scrape_Later_Constraint;
  update_columns?: Array<Scraper_Scrape_Later_Update_Column>;
  where?: InputMaybe<Scraper_Scrape_Later_Bool_Exp>;
};

/** Ordering options when selecting data from "scraper.scrape_later". */
export type Scraper_Scrape_Later_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deep_scrape_time?: InputMaybe<Order_By>;
  from?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  platform_id?: InputMaybe<Order_By>;
  run_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: scraper.scrape_later */
export type Scraper_Scrape_Later_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "scraper.scrape_later" */
export enum Scraper_Scrape_Later_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeepScrapeTime = 'deep_scrape_time',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Link = 'link',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  RunId = 'run_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "scraper.scrape_later" */
export type Scraper_Scrape_Later_Set_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deep_scrape_time?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Scraper_Scrape_Later_Stddev_Fields = {
  __typename?: 'scraper_scrape_later_stddev_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Scraper_Scrape_Later_Stddev_Pop_Fields = {
  __typename?: 'scraper_scrape_later_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Scraper_Scrape_Later_Stddev_Samp_Fields = {
  __typename?: 'scraper_scrape_later_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "scraper_scrape_later" */
export type Scraper_Scrape_Later_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Scraper_Scrape_Later_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Scraper_Scrape_Later_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deep_scrape_time?: InputMaybe<Scalars['timestamptz']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  platform_id?: InputMaybe<Scalars['Int']['input']>;
  run_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Scraper_Scrape_Later_Sum_Fields = {
  __typename?: 'scraper_scrape_later_sum_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  platform_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "scraper.scrape_later" */
export enum Scraper_Scrape_Later_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeepScrapeTime = 'deep_scrape_time',
  /** column name */
  From = 'from',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Link = 'link',
  /** column name */
  PlatformId = 'platform_id',
  /** column name */
  RunId = 'run_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Scraper_Scrape_Later_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Scraper_Scrape_Later_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Scraper_Scrape_Later_Set_Input>;
  /** filter the rows which have to be updated */
  where: Scraper_Scrape_Later_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Scraper_Scrape_Later_Var_Pop_Fields = {
  __typename?: 'scraper_scrape_later_var_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Scraper_Scrape_Later_Var_Samp_Fields = {
  __typename?: 'scraper_scrape_later_var_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Scraper_Scrape_Later_Variance_Fields = {
  __typename?: 'scraper_scrape_later_variance_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  platform_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "nanisore.category" */
  nanisore_category: Array<Nanisore_Category>;
  /** fetch aggregated fields from the table: "nanisore.category" */
  nanisore_category_aggregate: Nanisore_Category_Aggregate;
  /** fetch data from the table: "nanisore.category" using primary key columns */
  nanisore_category_by_pk?: Maybe<Nanisore_Category>;
  /** fetch data from the table: "nanisore.category_material" */
  nanisore_category_material: Array<Nanisore_Category_Material>;
  /** fetch aggregated fields from the table: "nanisore.category_material" */
  nanisore_category_material_aggregate: Nanisore_Category_Material_Aggregate;
  /** fetch data from the table: "nanisore.category_material" using primary key columns */
  nanisore_category_material_by_pk?: Maybe<Nanisore_Category_Material>;
  /** fetch data from the table in a streaming manner: "nanisore.category_material" */
  nanisore_category_material_stream: Array<Nanisore_Category_Material>;
  /** fetch data from the table in a streaming manner: "nanisore.category" */
  nanisore_category_stream: Array<Nanisore_Category>;
  /** fetch data from the table: "nanisore.group" */
  nanisore_group: Array<Nanisore_Group>;
  /** fetch aggregated fields from the table: "nanisore.group" */
  nanisore_group_aggregate: Nanisore_Group_Aggregate;
  /** fetch data from the table: "nanisore.group" using primary key columns */
  nanisore_group_by_pk?: Maybe<Nanisore_Group>;
  /** fetch data from the table in a streaming manner: "nanisore.group" */
  nanisore_group_stream: Array<Nanisore_Group>;
  /** fetch data from the table: "nanisore.image" */
  nanisore_image: Array<Nanisore_Image>;
  /** fetch aggregated fields from the table: "nanisore.image" */
  nanisore_image_aggregate: Nanisore_Image_Aggregate;
  /** fetch data from the table: "nanisore.image" using primary key columns */
  nanisore_image_by_pk?: Maybe<Nanisore_Image>;
  /** fetch data from the table in a streaming manner: "nanisore.image" */
  nanisore_image_stream: Array<Nanisore_Image>;
  /** fetch data from the table: "nanisore.order" */
  nanisore_order: Array<Nanisore_Order>;
  /** fetch aggregated fields from the table: "nanisore.order" */
  nanisore_order_aggregate: Nanisore_Order_Aggregate;
  /** fetch data from the table: "nanisore.order" using primary key columns */
  nanisore_order_by_pk?: Maybe<Nanisore_Order>;
  /** fetch data from the table: "nanisore.order_item" */
  nanisore_order_item: Array<Nanisore_Order_Item>;
  /** fetch aggregated fields from the table: "nanisore.order_item" */
  nanisore_order_item_aggregate: Nanisore_Order_Item_Aggregate;
  /** fetch data from the table: "nanisore.order_item" using primary key columns */
  nanisore_order_item_by_pk?: Maybe<Nanisore_Order_Item>;
  /** fetch data from the table in a streaming manner: "nanisore.order_item" */
  nanisore_order_item_stream: Array<Nanisore_Order_Item>;
  /** fetch data from the table in a streaming manner: "nanisore.order" */
  nanisore_order_stream: Array<Nanisore_Order>;
  /** fetch data from the table: "nanisore.payment" */
  nanisore_payment: Array<Nanisore_Payment>;
  /** fetch aggregated fields from the table: "nanisore.payment" */
  nanisore_payment_aggregate: Nanisore_Payment_Aggregate;
  /** fetch data from the table: "nanisore.payment" using primary key columns */
  nanisore_payment_by_pk?: Maybe<Nanisore_Payment>;
  /** fetch data from the table in a streaming manner: "nanisore.payment" */
  nanisore_payment_stream: Array<Nanisore_Payment>;
  /** fetch data from the table: "nanisore.platform" */
  nanisore_platform: Array<Nanisore_Platform>;
  /** fetch aggregated fields from the table: "nanisore.platform" */
  nanisore_platform_aggregate: Nanisore_Platform_Aggregate;
  /** fetch data from the table: "nanisore.platform" using primary key columns */
  nanisore_platform_by_pk?: Maybe<Nanisore_Platform>;
  /** fetch data from the table: "nanisore.platform_order" */
  nanisore_platform_order: Array<Nanisore_Platform_Order>;
  /** fetch aggregated fields from the table: "nanisore.platform_order" */
  nanisore_platform_order_aggregate: Nanisore_Platform_Order_Aggregate;
  /** fetch data from the table: "nanisore.platform_order" using primary key columns */
  nanisore_platform_order_by_pk?: Maybe<Nanisore_Platform_Order>;
  /** fetch data from the table: "nanisore.platform_order_item" */
  nanisore_platform_order_item: Array<Nanisore_Platform_Order_Item>;
  /** fetch aggregated fields from the table: "nanisore.platform_order_item" */
  nanisore_platform_order_item_aggregate: Nanisore_Platform_Order_Item_Aggregate;
  /** fetch data from the table: "nanisore.platform_order_item" using primary key columns */
  nanisore_platform_order_item_by_pk?: Maybe<Nanisore_Platform_Order_Item>;
  /** fetch data from the table in a streaming manner: "nanisore.platform_order_item" */
  nanisore_platform_order_item_stream: Array<Nanisore_Platform_Order_Item>;
  /** fetch data from the table in a streaming manner: "nanisore.platform_order" */
  nanisore_platform_order_stream: Array<Nanisore_Platform_Order>;
  /** fetch data from the table in a streaming manner: "nanisore.platform" */
  nanisore_platform_stream: Array<Nanisore_Platform>;
  /** fetch data from the table: "nanisore.product" */
  nanisore_product: Array<Nanisore_Product>;
  /** fetch aggregated fields from the table: "nanisore.product" */
  nanisore_product_aggregate: Nanisore_Product_Aggregate;
  /** fetch data from the table: "nanisore.product" using primary key columns */
  nanisore_product_by_pk?: Maybe<Nanisore_Product>;
  /** fetch data from the table in a streaming manner: "nanisore.product" */
  nanisore_product_stream: Array<Nanisore_Product>;
  /** fetch data from the table: "nanisore.recommendation" */
  nanisore_recommendation: Array<Nanisore_Recommendation>;
  /** fetch aggregated fields from the table: "nanisore.recommendation" */
  nanisore_recommendation_aggregate: Nanisore_Recommendation_Aggregate;
  /** fetch data from the table: "nanisore.recommendation" using primary key columns */
  nanisore_recommendation_by_pk?: Maybe<Nanisore_Recommendation>;
  /** fetch data from the table in a streaming manner: "nanisore.recommendation" */
  nanisore_recommendation_stream: Array<Nanisore_Recommendation>;
  /** fetch data from the table: "nanisore.shipping" */
  nanisore_shipping: Array<Nanisore_Shipping>;
  /** fetch data from the table: "nanisore.shipping_address" */
  nanisore_shipping_address: Array<Nanisore_Shipping_Address>;
  /** fetch aggregated fields from the table: "nanisore.shipping_address" */
  nanisore_shipping_address_aggregate: Nanisore_Shipping_Address_Aggregate;
  /** fetch data from the table: "nanisore.shipping_address" using primary key columns */
  nanisore_shipping_address_by_pk?: Maybe<Nanisore_Shipping_Address>;
  /** fetch data from the table in a streaming manner: "nanisore.shipping_address" */
  nanisore_shipping_address_stream: Array<Nanisore_Shipping_Address>;
  /** fetch aggregated fields from the table: "nanisore.shipping" */
  nanisore_shipping_aggregate: Nanisore_Shipping_Aggregate;
  /** fetch data from the table: "nanisore.shipping" using primary key columns */
  nanisore_shipping_by_pk?: Maybe<Nanisore_Shipping>;
  /** fetch data from the table: "nanisore.shipping_log" */
  nanisore_shipping_log: Array<Nanisore_Shipping_Log>;
  /** fetch aggregated fields from the table: "nanisore.shipping_log" */
  nanisore_shipping_log_aggregate: Nanisore_Shipping_Log_Aggregate;
  /** fetch data from the table: "nanisore.shipping_log" using primary key columns */
  nanisore_shipping_log_by_pk?: Maybe<Nanisore_Shipping_Log>;
  /** fetch data from the table in a streaming manner: "nanisore.shipping_log" */
  nanisore_shipping_log_stream: Array<Nanisore_Shipping_Log>;
  /** fetch data from the table: "nanisore.shipping_method" */
  nanisore_shipping_method: Array<Nanisore_Shipping_Method>;
  /** fetch aggregated fields from the table: "nanisore.shipping_method" */
  nanisore_shipping_method_aggregate: Nanisore_Shipping_Method_Aggregate;
  /** fetch data from the table: "nanisore.shipping_method" using primary key columns */
  nanisore_shipping_method_by_pk?: Maybe<Nanisore_Shipping_Method>;
  /** fetch data from the table in a streaming manner: "nanisore.shipping_method" */
  nanisore_shipping_method_stream: Array<Nanisore_Shipping_Method>;
  /** fetch data from the table in a streaming manner: "nanisore.shipping" */
  nanisore_shipping_stream: Array<Nanisore_Shipping>;
  /** fetch data from the table: "nanisore.specification" */
  nanisore_specification: Array<Nanisore_Specification>;
  /** fetch aggregated fields from the table: "nanisore.specification" */
  nanisore_specification_aggregate: Nanisore_Specification_Aggregate;
  /** fetch data from the table: "nanisore.specification" using primary key columns */
  nanisore_specification_by_pk?: Maybe<Nanisore_Specification>;
  /** fetch data from the table in a streaming manner: "nanisore.specification" */
  nanisore_specification_stream: Array<Nanisore_Specification>;
  /** fetch data from the table: "nanisore.stock_info" */
  nanisore_stock_info: Array<Nanisore_Stock_Info>;
  /** fetch aggregated fields from the table: "nanisore.stock_info" */
  nanisore_stock_info_aggregate: Nanisore_Stock_Info_Aggregate;
  /** fetch data from the table: "nanisore.stock_info" using primary key columns */
  nanisore_stock_info_by_pk?: Maybe<Nanisore_Stock_Info>;
  /** fetch data from the table in a streaming manner: "nanisore.stock_info" */
  nanisore_stock_info_stream: Array<Nanisore_Stock_Info>;
  /** fetch data from the table: "nanisore.unity_category" */
  nanisore_unity_category: Array<Nanisore_Unity_Category>;
  /** fetch aggregated fields from the table: "nanisore.unity_category" */
  nanisore_unity_category_aggregate: Nanisore_Unity_Category_Aggregate;
  /** fetch data from the table: "nanisore.unity_category_bridge" */
  nanisore_unity_category_bridge: Array<Nanisore_Unity_Category_Bridge>;
  /** fetch aggregated fields from the table: "nanisore.unity_category_bridge" */
  nanisore_unity_category_bridge_aggregate: Nanisore_Unity_Category_Bridge_Aggregate;
  /** fetch data from the table: "nanisore.unity_category_bridge" using primary key columns */
  nanisore_unity_category_bridge_by_pk?: Maybe<Nanisore_Unity_Category_Bridge>;
  /** fetch data from the table in a streaming manner: "nanisore.unity_category_bridge" */
  nanisore_unity_category_bridge_stream: Array<Nanisore_Unity_Category_Bridge>;
  /** fetch data from the table: "nanisore.unity_category" using primary key columns */
  nanisore_unity_category_by_pk?: Maybe<Nanisore_Unity_Category>;
  /** fetch data from the table in a streaming manner: "nanisore.unity_category" */
  nanisore_unity_category_stream: Array<Nanisore_Unity_Category>;
  /** fetch data from the table: "nanisore.user" */
  nanisore_user: Array<Nanisore_User>;
  /** fetch aggregated fields from the table: "nanisore.user" */
  nanisore_user_aggregate: Nanisore_User_Aggregate;
  /** fetch data from the table: "nanisore.user" using primary key columns */
  nanisore_user_by_pk?: Maybe<Nanisore_User>;
  /** fetch data from the table in a streaming manner: "nanisore.user" */
  nanisore_user_stream: Array<Nanisore_User>;
  /** fetch data from the table: "scraper.item" */
  scraper_item: Array<Scraper_Item>;
  /** fetch aggregated fields from the table: "scraper.item" */
  scraper_item_aggregate: Scraper_Item_Aggregate;
  /** fetch data from the table: "scraper.item" using primary key columns */
  scraper_item_by_pk?: Maybe<Scraper_Item>;
  /** fetch data from the table in a streaming manner: "scraper.item" */
  scraper_item_stream: Array<Scraper_Item>;
  /** fetch data from the table: "scraper.run" */
  scraper_run: Array<Scraper_Run>;
  /** fetch aggregated fields from the table: "scraper.run" */
  scraper_run_aggregate: Scraper_Run_Aggregate;
  /** fetch data from the table: "scraper.run" using primary key columns */
  scraper_run_by_pk?: Maybe<Scraper_Run>;
  /** fetch data from the table in a streaming manner: "scraper.run" */
  scraper_run_stream: Array<Scraper_Run>;
  /** fetch data from the table: "scraper.scrape_later" */
  scraper_scrape_later: Array<Scraper_Scrape_Later>;
  /** fetch aggregated fields from the table: "scraper.scrape_later" */
  scraper_scrape_later_aggregate: Scraper_Scrape_Later_Aggregate;
  /** fetch data from the table: "scraper.scrape_later" using primary key columns */
  scraper_scrape_later_by_pk?: Maybe<Scraper_Scrape_Later>;
  /** fetch data from the table in a streaming manner: "scraper.scrape_later" */
  scraper_scrape_later_stream: Array<Scraper_Scrape_Later>;
};


export type Subscription_RootNanisore_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Category_Order_By>>;
  where?: InputMaybe<Nanisore_Category_Bool_Exp>;
};


export type Subscription_RootNanisore_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Category_Order_By>>;
  where?: InputMaybe<Nanisore_Category_Bool_Exp>;
};


export type Subscription_RootNanisore_Category_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootNanisore_Category_MaterialArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Category_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Category_Material_Order_By>>;
  where?: InputMaybe<Nanisore_Category_Material_Bool_Exp>;
};


export type Subscription_RootNanisore_Category_Material_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Category_Material_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Category_Material_Order_By>>;
  where?: InputMaybe<Nanisore_Category_Material_Bool_Exp>;
};


export type Subscription_RootNanisore_Category_Material_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootNanisore_Category_Material_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Category_Material_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Category_Material_Bool_Exp>;
};


export type Subscription_RootNanisore_Category_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Category_Bool_Exp>;
};


export type Subscription_RootNanisore_GroupArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Group_Order_By>>;
  where?: InputMaybe<Nanisore_Group_Bool_Exp>;
};


export type Subscription_RootNanisore_Group_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Group_Order_By>>;
  where?: InputMaybe<Nanisore_Group_Bool_Exp>;
};


export type Subscription_RootNanisore_Group_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Group_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Group_Bool_Exp>;
};


export type Subscription_RootNanisore_ImageArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Image_Order_By>>;
  where?: InputMaybe<Nanisore_Image_Bool_Exp>;
};


export type Subscription_RootNanisore_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Image_Order_By>>;
  where?: InputMaybe<Nanisore_Image_Bool_Exp>;
};


export type Subscription_RootNanisore_Image_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Image_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Image_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Image_Bool_Exp>;
};


export type Subscription_RootNanisore_OrderArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Order_Order_By>>;
  where?: InputMaybe<Nanisore_Order_Bool_Exp>;
};


export type Subscription_RootNanisore_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Order_Order_By>>;
  where?: InputMaybe<Nanisore_Order_Bool_Exp>;
};


export type Subscription_RootNanisore_Order_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Order_ItemArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Order_Item_Order_By>>;
  where?: InputMaybe<Nanisore_Order_Item_Bool_Exp>;
};


export type Subscription_RootNanisore_Order_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Order_Item_Order_By>>;
  where?: InputMaybe<Nanisore_Order_Item_Bool_Exp>;
};


export type Subscription_RootNanisore_Order_Item_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Order_Item_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Order_Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Order_Item_Bool_Exp>;
};


export type Subscription_RootNanisore_Order_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Order_Bool_Exp>;
};


export type Subscription_RootNanisore_PaymentArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Payment_Order_By>>;
  where?: InputMaybe<Nanisore_Payment_Bool_Exp>;
};


export type Subscription_RootNanisore_Payment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Payment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Payment_Order_By>>;
  where?: InputMaybe<Nanisore_Payment_Bool_Exp>;
};


export type Subscription_RootNanisore_Payment_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Payment_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Payment_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Payment_Bool_Exp>;
};


export type Subscription_RootNanisore_PlatformArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Bool_Exp>;
};


export type Subscription_RootNanisore_Platform_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Bool_Exp>;
};


export type Subscription_RootNanisore_Platform_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootNanisore_Platform_OrderArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Order_Bool_Exp>;
};


export type Subscription_RootNanisore_Platform_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Order_Bool_Exp>;
};


export type Subscription_RootNanisore_Platform_Order_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Platform_Order_ItemArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_Item_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Order_Item_Bool_Exp>;
};


export type Subscription_RootNanisore_Platform_Order_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Platform_Order_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Platform_Order_Item_Order_By>>;
  where?: InputMaybe<Nanisore_Platform_Order_Item_Bool_Exp>;
};


export type Subscription_RootNanisore_Platform_Order_Item_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Platform_Order_Item_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Platform_Order_Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Platform_Order_Item_Bool_Exp>;
};


export type Subscription_RootNanisore_Platform_Order_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Platform_Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Platform_Order_Bool_Exp>;
};


export type Subscription_RootNanisore_Platform_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Platform_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Platform_Bool_Exp>;
};


export type Subscription_RootNanisore_ProductArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Product_Order_By>>;
  where?: InputMaybe<Nanisore_Product_Bool_Exp>;
};


export type Subscription_RootNanisore_Product_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Product_Order_By>>;
  where?: InputMaybe<Nanisore_Product_Bool_Exp>;
};


export type Subscription_RootNanisore_Product_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Product_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Product_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Product_Bool_Exp>;
};


export type Subscription_RootNanisore_RecommendationArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Recommendation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Recommendation_Order_By>>;
  where?: InputMaybe<Nanisore_Recommendation_Bool_Exp>;
};


export type Subscription_RootNanisore_Recommendation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Recommendation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Recommendation_Order_By>>;
  where?: InputMaybe<Nanisore_Recommendation_Bool_Exp>;
};


export type Subscription_RootNanisore_Recommendation_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Recommendation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Recommendation_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Recommendation_Bool_Exp>;
};


export type Subscription_RootNanisore_ShippingArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_AddressArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Address_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Address_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_Address_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Address_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Address_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_Address_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Shipping_Address_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Shipping_Address_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Shipping_Address_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Shipping_LogArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Log_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Log_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Log_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Log_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_Log_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Shipping_Log_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Shipping_Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Shipping_Log_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_MethodArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Method_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Method_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_Method_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Shipping_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Shipping_Method_Order_By>>;
  where?: InputMaybe<Nanisore_Shipping_Method_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_Method_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Shipping_Method_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Shipping_Method_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Shipping_Method_Bool_Exp>;
};


export type Subscription_RootNanisore_Shipping_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Shipping_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Shipping_Bool_Exp>;
};


export type Subscription_RootNanisore_SpecificationArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Specification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Specification_Order_By>>;
  where?: InputMaybe<Nanisore_Specification_Bool_Exp>;
};


export type Subscription_RootNanisore_Specification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Specification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Specification_Order_By>>;
  where?: InputMaybe<Nanisore_Specification_Bool_Exp>;
};


export type Subscription_RootNanisore_Specification_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootNanisore_Specification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Specification_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Specification_Bool_Exp>;
};


export type Subscription_RootNanisore_Stock_InfoArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Stock_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Stock_Info_Order_By>>;
  where?: InputMaybe<Nanisore_Stock_Info_Bool_Exp>;
};


export type Subscription_RootNanisore_Stock_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Stock_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Stock_Info_Order_By>>;
  where?: InputMaybe<Nanisore_Stock_Info_Bool_Exp>;
};


export type Subscription_RootNanisore_Stock_Info_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootNanisore_Stock_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Stock_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Stock_Info_Bool_Exp>;
};


export type Subscription_RootNanisore_Unity_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
};


export type Subscription_RootNanisore_Unity_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
};


export type Subscription_RootNanisore_Unity_Category_BridgeArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
};


export type Subscription_RootNanisore_Unity_Category_Bridge_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_Unity_Category_Bridge_Order_By>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
};


export type Subscription_RootNanisore_Unity_Category_Bridge_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootNanisore_Unity_Category_Bridge_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Unity_Category_Bridge_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bridge_Bool_Exp>;
};


export type Subscription_RootNanisore_Unity_Category_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootNanisore_Unity_Category_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_Unity_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_Unity_Category_Bool_Exp>;
};


export type Subscription_RootNanisore_UserArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_User_Order_By>>;
  where?: InputMaybe<Nanisore_User_Bool_Exp>;
};


export type Subscription_RootNanisore_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nanisore_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nanisore_User_Order_By>>;
  where?: InputMaybe<Nanisore_User_Bool_Exp>;
};


export type Subscription_RootNanisore_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootNanisore_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nanisore_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Nanisore_User_Bool_Exp>;
};


export type Subscription_RootScraper_ItemArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Item_Order_By>>;
  where?: InputMaybe<Scraper_Item_Bool_Exp>;
};


export type Subscription_RootScraper_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Item_Order_By>>;
  where?: InputMaybe<Scraper_Item_Bool_Exp>;
};


export type Subscription_RootScraper_Item_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootScraper_Item_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Scraper_Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Scraper_Item_Bool_Exp>;
};


export type Subscription_RootScraper_RunArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Run_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Run_Order_By>>;
  where?: InputMaybe<Scraper_Run_Bool_Exp>;
};


export type Subscription_RootScraper_Run_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Run_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Run_Order_By>>;
  where?: InputMaybe<Scraper_Run_Bool_Exp>;
};


export type Subscription_RootScraper_Run_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootScraper_Run_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Scraper_Run_Stream_Cursor_Input>>;
  where?: InputMaybe<Scraper_Run_Bool_Exp>;
};


export type Subscription_RootScraper_Scrape_LaterArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Scrape_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Scrape_Later_Order_By>>;
  where?: InputMaybe<Scraper_Scrape_Later_Bool_Exp>;
};


export type Subscription_RootScraper_Scrape_Later_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scraper_Scrape_Later_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scraper_Scrape_Later_Order_By>>;
  where?: InputMaybe<Scraper_Scrape_Later_Bool_Exp>;
};


export type Subscription_RootScraper_Scrape_Later_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootScraper_Scrape_Later_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Scraper_Scrape_Later_Stream_Cursor_Input>>;
  where?: InputMaybe<Scraper_Scrape_Later_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};
