import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  float8: any;
  json: any;
  jsonb: any;
  seed_float: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type CreateSetInput = {
  creator: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  marketFee: Scalars['float8'];
  name: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type CreateSetOutput = {
  errors?: Maybe<Scalars['json']>;
  transaction: Scalars['json'];
};

export type CreateTemplateInput = {
  metadata: Scalars['json'];
  setID: Scalars['bigint'];
};

export type CreateTemplateOutput = {
  errors?: Maybe<Scalars['json']>;
  transaction: Scalars['json'];
};

export type MintInput = {
  recipientAddr: Scalars['String'];
  setID: Scalars['bigint'];
  templateID: Scalars['bigint'];
};

export type MintOutput = {
  errors?: Maybe<Scalars['json']>;
  transaction: Scalars['json'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "block_cursor" */
export type Block_Cursor = {
  created_at: Scalars['timestamptz'];
  current_block_height: Scalars['bigint'];
  flow_event_name: Scalars['String'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "block_cursor" */
export type Block_Cursor_Aggregate = {
  aggregate?: Maybe<Block_Cursor_Aggregate_Fields>;
  nodes: Array<Block_Cursor>;
};

/** aggregate fields of "block_cursor" */
export type Block_Cursor_Aggregate_Fields = {
  avg?: Maybe<Block_Cursor_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Cursor_Max_Fields>;
  min?: Maybe<Block_Cursor_Min_Fields>;
  stddev?: Maybe<Block_Cursor_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Cursor_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Cursor_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Cursor_Sum_Fields>;
  var_pop?: Maybe<Block_Cursor_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Cursor_Var_Samp_Fields>;
  variance?: Maybe<Block_Cursor_Variance_Fields>;
};


/** aggregate fields of "block_cursor" */
export type Block_Cursor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Block_Cursor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Block_Cursor_Avg_Fields = {
  current_block_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "block_cursor". All fields are combined with a logical 'AND'. */
export type Block_Cursor_Bool_Exp = {
  _and?: InputMaybe<Array<Block_Cursor_Bool_Exp>>;
  _not?: InputMaybe<Block_Cursor_Bool_Exp>;
  _or?: InputMaybe<Array<Block_Cursor_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  current_block_height?: InputMaybe<Bigint_Comparison_Exp>;
  flow_event_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "block_cursor" */
export enum Block_Cursor_Constraint {
  /** unique or primary key constraint */
  BlockCursorFlowEventNameKey = 'block_cursor_flow_event_name_key',
  /** unique or primary key constraint */
  BlockCursorPkey = 'block_cursor_pkey'
}

/** input type for incrementing numeric columns in table "block_cursor" */
export type Block_Cursor_Inc_Input = {
  current_block_height?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "block_cursor" */
export type Block_Cursor_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  current_block_height?: InputMaybe<Scalars['bigint']>;
  flow_event_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Block_Cursor_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  current_block_height?: Maybe<Scalars['bigint']>;
  flow_event_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Block_Cursor_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  current_block_height?: Maybe<Scalars['bigint']>;
  flow_event_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "block_cursor" */
export type Block_Cursor_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Block_Cursor>;
};

/** on conflict condition type for table "block_cursor" */
export type Block_Cursor_On_Conflict = {
  constraint: Block_Cursor_Constraint;
  update_columns?: Array<Block_Cursor_Update_Column>;
  where?: InputMaybe<Block_Cursor_Bool_Exp>;
};

/** Ordering options when selecting data from "block_cursor". */
export type Block_Cursor_Order_By = {
  created_at?: InputMaybe<Order_By>;
  current_block_height?: InputMaybe<Order_By>;
  flow_event_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: block_cursor */
export type Block_Cursor_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "block_cursor" */
export enum Block_Cursor_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentBlockHeight = 'current_block_height',
  /** column name */
  FlowEventName = 'flow_event_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "block_cursor" */
export type Block_Cursor_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  current_block_height?: InputMaybe<Scalars['bigint']>;
  flow_event_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Block_Cursor_Stddev_Fields = {
  current_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Block_Cursor_Stddev_Pop_Fields = {
  current_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Block_Cursor_Stddev_Samp_Fields = {
  current_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Block_Cursor_Sum_Fields = {
  current_block_height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "block_cursor" */
export enum Block_Cursor_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentBlockHeight = 'current_block_height',
  /** column name */
  FlowEventName = 'flow_event_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Block_Cursor_Var_Pop_Fields = {
  current_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Block_Cursor_Var_Samp_Fields = {
  current_block_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Block_Cursor_Variance_Fields = {
  current_block_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  createSet?: Maybe<CreateSetOutput>;
  createTemplate?: Maybe<CreateTemplateOutput>;
  /** delete data from the table: "block_cursor" */
  delete_block_cursor?: Maybe<Block_Cursor_Mutation_Response>;
  /** delete single row from the table: "block_cursor" */
  delete_block_cursor_by_pk?: Maybe<Block_Cursor>;
  /** delete data from the table: "nft" */
  delete_nft?: Maybe<Nft_Mutation_Response>;
  /** delete single row from the table: "nft" */
  delete_nft_by_pk?: Maybe<Nft>;
  /** delete data from the table: "nft_collection" */
  delete_nft_collection?: Maybe<Nft_Collection_Mutation_Response>;
  /** delete single row from the table: "nft_collection" */
  delete_nft_collection_by_pk?: Maybe<Nft_Collection>;
  /** delete data from the table: "nft_drops" */
  delete_nft_drops?: Maybe<Nft_Drops_Mutation_Response>;
  /** delete single row from the table: "nft_drops" */
  delete_nft_drops_by_pk?: Maybe<Nft_Drops>;
  /** delete data from the table: "nft_sale_offer" */
  delete_nft_sale_offer?: Maybe<Nft_Sale_Offer_Mutation_Response>;
  /** delete single row from the table: "nft_sale_offer" */
  delete_nft_sale_offer_by_pk?: Maybe<Nft_Sale_Offer>;
  /** delete data from the table: "nft_sale_offer_cut" */
  delete_nft_sale_offer_cut?: Maybe<Nft_Sale_Offer_Cut_Mutation_Response>;
  /** delete single row from the table: "nft_sale_offer_cut" */
  delete_nft_sale_offer_cut_by_pk?: Maybe<Nft_Sale_Offer_Cut>;
  /** delete data from the table: "nft_template" */
  delete_nft_template?: Maybe<Nft_Template_Mutation_Response>;
  /** delete single row from the table: "nft_template" */
  delete_nft_template_by_pk?: Maybe<Nft_Template>;
  /** insert data into the table: "block_cursor" */
  insert_block_cursor?: Maybe<Block_Cursor_Mutation_Response>;
  /** insert a single row into the table: "block_cursor" */
  insert_block_cursor_one?: Maybe<Block_Cursor>;
  /** insert data into the table: "nft" */
  insert_nft?: Maybe<Nft_Mutation_Response>;
  /** insert data into the table: "nft_collection" */
  insert_nft_collection?: Maybe<Nft_Collection_Mutation_Response>;
  /** insert a single row into the table: "nft_collection" */
  insert_nft_collection_one?: Maybe<Nft_Collection>;
  /** insert data into the table: "nft_drops" */
  insert_nft_drops?: Maybe<Nft_Drops_Mutation_Response>;
  /** insert a single row into the table: "nft_drops" */
  insert_nft_drops_one?: Maybe<Nft_Drops>;
  /** insert a single row into the table: "nft" */
  insert_nft_one?: Maybe<Nft>;
  /** insert data into the table: "nft_sale_offer" */
  insert_nft_sale_offer?: Maybe<Nft_Sale_Offer_Mutation_Response>;
  /** insert data into the table: "nft_sale_offer_cut" */
  insert_nft_sale_offer_cut?: Maybe<Nft_Sale_Offer_Cut_Mutation_Response>;
  /** insert a single row into the table: "nft_sale_offer_cut" */
  insert_nft_sale_offer_cut_one?: Maybe<Nft_Sale_Offer_Cut>;
  /** insert a single row into the table: "nft_sale_offer" */
  insert_nft_sale_offer_one?: Maybe<Nft_Sale_Offer>;
  /** insert data into the table: "nft_template" */
  insert_nft_template?: Maybe<Nft_Template_Mutation_Response>;
  /** insert a single row into the table: "nft_template" */
  insert_nft_template_one?: Maybe<Nft_Template>;
  mint?: Maybe<MintOutput>;
  /** update data of the table: "block_cursor" */
  update_block_cursor?: Maybe<Block_Cursor_Mutation_Response>;
  /** update single row of the table: "block_cursor" */
  update_block_cursor_by_pk?: Maybe<Block_Cursor>;
  /** update data of the table: "nft" */
  update_nft?: Maybe<Nft_Mutation_Response>;
  /** update single row of the table: "nft" */
  update_nft_by_pk?: Maybe<Nft>;
  /** update data of the table: "nft_collection" */
  update_nft_collection?: Maybe<Nft_Collection_Mutation_Response>;
  /** update single row of the table: "nft_collection" */
  update_nft_collection_by_pk?: Maybe<Nft_Collection>;
  /** update data of the table: "nft_drops" */
  update_nft_drops?: Maybe<Nft_Drops_Mutation_Response>;
  /** update single row of the table: "nft_drops" */
  update_nft_drops_by_pk?: Maybe<Nft_Drops>;
  /** update data of the table: "nft_sale_offer" */
  update_nft_sale_offer?: Maybe<Nft_Sale_Offer_Mutation_Response>;
  /** update single row of the table: "nft_sale_offer" */
  update_nft_sale_offer_by_pk?: Maybe<Nft_Sale_Offer>;
  /** update data of the table: "nft_sale_offer_cut" */
  update_nft_sale_offer_cut?: Maybe<Nft_Sale_Offer_Cut_Mutation_Response>;
  /** update single row of the table: "nft_sale_offer_cut" */
  update_nft_sale_offer_cut_by_pk?: Maybe<Nft_Sale_Offer_Cut>;
  /** update data of the table: "nft_template" */
  update_nft_template?: Maybe<Nft_Template_Mutation_Response>;
  /** update single row of the table: "nft_template" */
  update_nft_template_by_pk?: Maybe<Nft_Template>;
};


/** mutation root */
export type Mutation_RootCreateSetArgs = {
  arg1: CreateSetInput;
};


/** mutation root */
export type Mutation_RootCreateTemplateArgs = {
  arg1: CreateTemplateInput;
};


/** mutation root */
export type Mutation_RootDelete_Block_CursorArgs = {
  where: Block_Cursor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Block_Cursor_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NftArgs = {
  where: Nft_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Nft_CollectionArgs = {
  where: Nft_Collection_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_Collection_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Nft_DropsArgs = {
  where: Nft_Drops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_Drops_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Nft_Sale_OfferArgs = {
  where: Nft_Sale_Offer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_Sale_Offer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Nft_Sale_Offer_CutArgs = {
  where: Nft_Sale_Offer_Cut_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_Sale_Offer_Cut_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Nft_TemplateArgs = {
  where: Nft_Template_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_Template_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Block_CursorArgs = {
  objects: Array<Block_Cursor_Insert_Input>;
  on_conflict?: InputMaybe<Block_Cursor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Block_Cursor_OneArgs = {
  object: Block_Cursor_Insert_Input;
  on_conflict?: InputMaybe<Block_Cursor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NftArgs = {
  objects: Array<Nft_Insert_Input>;
  on_conflict?: InputMaybe<Nft_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_CollectionArgs = {
  objects: Array<Nft_Collection_Insert_Input>;
  on_conflict?: InputMaybe<Nft_Collection_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Collection_OneArgs = {
  object: Nft_Collection_Insert_Input;
  on_conflict?: InputMaybe<Nft_Collection_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_DropsArgs = {
  objects: Array<Nft_Drops_Insert_Input>;
  on_conflict?: InputMaybe<Nft_Drops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Drops_OneArgs = {
  object: Nft_Drops_Insert_Input;
  on_conflict?: InputMaybe<Nft_Drops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_OneArgs = {
  object: Nft_Insert_Input;
  on_conflict?: InputMaybe<Nft_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Sale_OfferArgs = {
  objects: Array<Nft_Sale_Offer_Insert_Input>;
  on_conflict?: InputMaybe<Nft_Sale_Offer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Sale_Offer_CutArgs = {
  objects: Array<Nft_Sale_Offer_Cut_Insert_Input>;
  on_conflict?: InputMaybe<Nft_Sale_Offer_Cut_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Sale_Offer_Cut_OneArgs = {
  object: Nft_Sale_Offer_Cut_Insert_Input;
  on_conflict?: InputMaybe<Nft_Sale_Offer_Cut_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Sale_Offer_OneArgs = {
  object: Nft_Sale_Offer_Insert_Input;
  on_conflict?: InputMaybe<Nft_Sale_Offer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_TemplateArgs = {
  objects: Array<Nft_Template_Insert_Input>;
  on_conflict?: InputMaybe<Nft_Template_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Template_OneArgs = {
  object: Nft_Template_Insert_Input;
  on_conflict?: InputMaybe<Nft_Template_On_Conflict>;
};


/** mutation root */
export type Mutation_RootMintArgs = {
  arg1: MintInput;
};


/** mutation root */
export type Mutation_RootUpdate_Block_CursorArgs = {
  _inc?: InputMaybe<Block_Cursor_Inc_Input>;
  _set?: InputMaybe<Block_Cursor_Set_Input>;
  where: Block_Cursor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Block_Cursor_By_PkArgs = {
  _inc?: InputMaybe<Block_Cursor_Inc_Input>;
  _set?: InputMaybe<Block_Cursor_Set_Input>;
  pk_columns: Block_Cursor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NftArgs = {
  _inc?: InputMaybe<Nft_Inc_Input>;
  _set?: InputMaybe<Nft_Set_Input>;
  where: Nft_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_By_PkArgs = {
  _inc?: InputMaybe<Nft_Inc_Input>;
  _set?: InputMaybe<Nft_Set_Input>;
  pk_columns: Nft_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_CollectionArgs = {
  _append?: InputMaybe<Nft_Collection_Append_Input>;
  _delete_at_path?: InputMaybe<Nft_Collection_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nft_Collection_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nft_Collection_Delete_Key_Input>;
  _inc?: InputMaybe<Nft_Collection_Inc_Input>;
  _prepend?: InputMaybe<Nft_Collection_Prepend_Input>;
  _set?: InputMaybe<Nft_Collection_Set_Input>;
  where: Nft_Collection_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Collection_By_PkArgs = {
  _append?: InputMaybe<Nft_Collection_Append_Input>;
  _delete_at_path?: InputMaybe<Nft_Collection_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nft_Collection_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nft_Collection_Delete_Key_Input>;
  _inc?: InputMaybe<Nft_Collection_Inc_Input>;
  _prepend?: InputMaybe<Nft_Collection_Prepend_Input>;
  _set?: InputMaybe<Nft_Collection_Set_Input>;
  pk_columns: Nft_Collection_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_DropsArgs = {
  _inc?: InputMaybe<Nft_Drops_Inc_Input>;
  _set?: InputMaybe<Nft_Drops_Set_Input>;
  where: Nft_Drops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Drops_By_PkArgs = {
  _inc?: InputMaybe<Nft_Drops_Inc_Input>;
  _set?: InputMaybe<Nft_Drops_Set_Input>;
  pk_columns: Nft_Drops_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Sale_OfferArgs = {
  _inc?: InputMaybe<Nft_Sale_Offer_Inc_Input>;
  _set?: InputMaybe<Nft_Sale_Offer_Set_Input>;
  where: Nft_Sale_Offer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Sale_Offer_By_PkArgs = {
  _inc?: InputMaybe<Nft_Sale_Offer_Inc_Input>;
  _set?: InputMaybe<Nft_Sale_Offer_Set_Input>;
  pk_columns: Nft_Sale_Offer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Sale_Offer_CutArgs = {
  _set?: InputMaybe<Nft_Sale_Offer_Cut_Set_Input>;
  where: Nft_Sale_Offer_Cut_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Sale_Offer_Cut_By_PkArgs = {
  _set?: InputMaybe<Nft_Sale_Offer_Cut_Set_Input>;
  pk_columns: Nft_Sale_Offer_Cut_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_TemplateArgs = {
  _append?: InputMaybe<Nft_Template_Append_Input>;
  _delete_at_path?: InputMaybe<Nft_Template_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nft_Template_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nft_Template_Delete_Key_Input>;
  _inc?: InputMaybe<Nft_Template_Inc_Input>;
  _prepend?: InputMaybe<Nft_Template_Prepend_Input>;
  _set?: InputMaybe<Nft_Template_Set_Input>;
  where: Nft_Template_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Template_By_PkArgs = {
  _append?: InputMaybe<Nft_Template_Append_Input>;
  _delete_at_path?: InputMaybe<Nft_Template_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nft_Template_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nft_Template_Delete_Key_Input>;
  _inc?: InputMaybe<Nft_Template_Inc_Input>;
  _prepend?: InputMaybe<Nft_Template_Prepend_Input>;
  _set?: InputMaybe<Nft_Template_Set_Input>;
  pk_columns: Nft_Template_Pk_Columns_Input;
};

/** columns and relationships of "nft" */
export type Nft = {
  asset_id: Scalars['bigint'];
  /** An object relationship */
  collection?: Maybe<Nft_Collection>;
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['json']>;
  /** A computed field, executes function "nft_has_sale_offer" */
  has_sale_offers?: Maybe<Scalars['Boolean']>;
  id: Scalars['uuid'];
  is_for_sale: Scalars['Boolean'];
  is_tradable: Scalars['Boolean'];
  /** A computed field, executes function "nft_last_active_price" */
  last_active_price?: Maybe<Scalars['float8']>;
  mint_number?: Maybe<Scalars['bigint']>;
  owner: Scalars['String'];
  /** An array relationship */
  sale_offers: Array<Nft_Sale_Offer>;
  /** An aggregate relationship */
  sale_offers_aggregate: Nft_Sale_Offer_Aggregate;
  standard: Scalars['String'];
  /** An object relationship */
  template?: Maybe<Nft_Template>;
  template_id?: Maybe<Scalars['uuid']>;
  transaction_status?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "nft" */
export type NftDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "nft" */
export type NftSale_OffersArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};


/** columns and relationships of "nft" */
export type NftSale_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};

/** aggregated selection of "nft" */
export type Nft_Aggregate = {
  aggregate?: Maybe<Nft_Aggregate_Fields>;
  nodes: Array<Nft>;
};

/** aggregate fields of "nft" */
export type Nft_Aggregate_Fields = {
  avg?: Maybe<Nft_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nft_Max_Fields>;
  min?: Maybe<Nft_Min_Fields>;
  stddev?: Maybe<Nft_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Sum_Fields>;
  var_pop?: Maybe<Nft_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Var_Samp_Fields>;
  variance?: Maybe<Nft_Variance_Fields>;
};


/** aggregate fields of "nft" */
export type Nft_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft" */
export type Nft_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Max_Order_By>;
  min?: InputMaybe<Nft_Min_Order_By>;
  stddev?: InputMaybe<Nft_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nft" */
export type Nft_Arr_Rel_Insert_Input = {
  data: Array<Nft_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nft_On_Conflict>;
};

/** aggregate avg on columns */
export type Nft_Avg_Fields = {
  asset_id?: Maybe<Scalars['Float']>;
  mint_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nft" */
export type Nft_Avg_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft". All fields are combined with a logical 'AND'. */
export type Nft_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Bool_Exp>>;
  _not?: InputMaybe<Nft_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Bool_Exp>>;
  asset_id?: InputMaybe<Bigint_Comparison_Exp>;
  collection?: InputMaybe<Nft_Collection_Bool_Exp>;
  collection_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Json_Comparison_Exp>;
  has_sale_offers?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_for_sale?: InputMaybe<Boolean_Comparison_Exp>;
  is_tradable?: InputMaybe<Boolean_Comparison_Exp>;
  last_active_price?: InputMaybe<Float8_Comparison_Exp>;
  mint_number?: InputMaybe<Bigint_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  sale_offers?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
  standard?: InputMaybe<String_Comparison_Exp>;
  template?: InputMaybe<Nft_Template_Bool_Exp>;
  template_id?: InputMaybe<Uuid_Comparison_Exp>;
  transaction_status?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "nft_collection" */
export type Nft_Collection = {
  allowed_accounts?: Maybe<Scalars['jsonb']>;
  author: Scalars['String'];
  collection_id?: Maybe<Scalars['bigint']>;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  market_fee: Scalars['float8'];
  name: Scalars['String'];
  /** An array relationship */
  nfts: Array<Nft>;
  /** An aggregate relationship */
  nfts_aggregate: Nft_Aggregate;
  standard: Scalars['String'];
  /** An array relationship */
  templates: Array<Nft_Template>;
  /** An aggregate relationship */
  templates_aggregate: Nft_Template_Aggregate;
  updated_at: Scalars['timestamptz'];
  website?: Maybe<Scalars['String']>;
};


/** columns and relationships of "nft_collection" */
export type Nft_CollectionAllowed_AccountsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "nft_collection" */
export type Nft_CollectionNftsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


/** columns and relationships of "nft_collection" */
export type Nft_CollectionNfts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


/** columns and relationships of "nft_collection" */
export type Nft_CollectionTemplatesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Template_Order_By>>;
  where?: InputMaybe<Nft_Template_Bool_Exp>;
};


/** columns and relationships of "nft_collection" */
export type Nft_CollectionTemplates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Template_Order_By>>;
  where?: InputMaybe<Nft_Template_Bool_Exp>;
};

/** aggregated selection of "nft_collection" */
export type Nft_Collection_Aggregate = {
  aggregate?: Maybe<Nft_Collection_Aggregate_Fields>;
  nodes: Array<Nft_Collection>;
};

/** aggregate fields of "nft_collection" */
export type Nft_Collection_Aggregate_Fields = {
  avg?: Maybe<Nft_Collection_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nft_Collection_Max_Fields>;
  min?: Maybe<Nft_Collection_Min_Fields>;
  stddev?: Maybe<Nft_Collection_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Collection_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Collection_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Collection_Sum_Fields>;
  var_pop?: Maybe<Nft_Collection_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Collection_Var_Samp_Fields>;
  variance?: Maybe<Nft_Collection_Variance_Fields>;
};


/** aggregate fields of "nft_collection" */
export type Nft_Collection_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Collection_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Nft_Collection_Append_Input = {
  allowed_accounts?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Nft_Collection_Avg_Fields = {
  collection_id?: Maybe<Scalars['Float']>;
  market_fee?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nft_collection". All fields are combined with a logical 'AND'. */
export type Nft_Collection_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Collection_Bool_Exp>>;
  _not?: InputMaybe<Nft_Collection_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Collection_Bool_Exp>>;
  allowed_accounts?: InputMaybe<Jsonb_Comparison_Exp>;
  author?: InputMaybe<String_Comparison_Exp>;
  collection_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  market_fee?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nfts?: InputMaybe<Nft_Bool_Exp>;
  standard?: InputMaybe<String_Comparison_Exp>;
  templates?: InputMaybe<Nft_Template_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nft_collection" */
export enum Nft_Collection_Constraint {
  /** unique or primary key constraint */
  NftCollectionCollectionIdStandardKey = 'nft_collection_collection_id_standard_key',
  /** unique or primary key constraint */
  NftCollectionPkey = 'nft_collection_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Nft_Collection_Delete_At_Path_Input = {
  allowed_accounts?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Nft_Collection_Delete_Elem_Input = {
  allowed_accounts?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Nft_Collection_Delete_Key_Input = {
  allowed_accounts?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "nft_collection" */
export type Nft_Collection_Inc_Input = {
  collection_id?: InputMaybe<Scalars['bigint']>;
  market_fee?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "nft_collection" */
export type Nft_Collection_Insert_Input = {
  allowed_accounts?: InputMaybe<Scalars['jsonb']>;
  author?: InputMaybe<Scalars['String']>;
  collection_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  market_fee?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  nfts?: InputMaybe<Nft_Arr_Rel_Insert_Input>;
  standard?: InputMaybe<Scalars['String']>;
  templates?: InputMaybe<Nft_Template_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Nft_Collection_Max_Fields = {
  author?: Maybe<Scalars['String']>;
  collection_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  market_fee?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  standard?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Nft_Collection_Min_Fields = {
  author?: Maybe<Scalars['String']>;
  collection_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  market_fee?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  standard?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "nft_collection" */
export type Nft_Collection_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft_Collection>;
};

/** input type for inserting object relation for remote table "nft_collection" */
export type Nft_Collection_Obj_Rel_Insert_Input = {
  data: Nft_Collection_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nft_Collection_On_Conflict>;
};

/** on conflict condition type for table "nft_collection" */
export type Nft_Collection_On_Conflict = {
  constraint: Nft_Collection_Constraint;
  update_columns?: Array<Nft_Collection_Update_Column>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};

/** Ordering options when selecting data from "nft_collection". */
export type Nft_Collection_Order_By = {
  allowed_accounts?: InputMaybe<Order_By>;
  author?: InputMaybe<Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  market_fee?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nfts_aggregate?: InputMaybe<Nft_Aggregate_Order_By>;
  standard?: InputMaybe<Order_By>;
  templates_aggregate?: InputMaybe<Nft_Template_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_collection */
export type Nft_Collection_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Nft_Collection_Prepend_Input = {
  allowed_accounts?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "nft_collection" */
export enum Nft_Collection_Select_Column {
  /** column name */
  AllowedAccounts = 'allowed_accounts',
  /** column name */
  Author = 'author',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  MarketFee = 'market_fee',
  /** column name */
  Name = 'name',
  /** column name */
  Standard = 'standard',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "nft_collection" */
export type Nft_Collection_Set_Input = {
  allowed_accounts?: InputMaybe<Scalars['jsonb']>;
  author?: InputMaybe<Scalars['String']>;
  collection_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  market_fee?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  standard?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Nft_Collection_Stddev_Fields = {
  collection_id?: Maybe<Scalars['Float']>;
  market_fee?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Collection_Stddev_Pop_Fields = {
  collection_id?: Maybe<Scalars['Float']>;
  market_fee?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Collection_Stddev_Samp_Fields = {
  collection_id?: Maybe<Scalars['Float']>;
  market_fee?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nft_Collection_Sum_Fields = {
  collection_id?: Maybe<Scalars['bigint']>;
  market_fee?: Maybe<Scalars['float8']>;
};

/** update columns of table "nft_collection" */
export enum Nft_Collection_Update_Column {
  /** column name */
  AllowedAccounts = 'allowed_accounts',
  /** column name */
  Author = 'author',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  MarketFee = 'market_fee',
  /** column name */
  Name = 'name',
  /** column name */
  Standard = 'standard',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** aggregate var_pop on columns */
export type Nft_Collection_Var_Pop_Fields = {
  collection_id?: Maybe<Scalars['Float']>;
  market_fee?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nft_Collection_Var_Samp_Fields = {
  collection_id?: Maybe<Scalars['Float']>;
  market_fee?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nft_Collection_Variance_Fields = {
  collection_id?: Maybe<Scalars['Float']>;
  market_fee?: Maybe<Scalars['Float']>;
};

/** unique or primary key constraints on table "nft" */
export enum Nft_Constraint {
  /** unique or primary key constraint */
  NftPkey = 'nft_pkey'
}

/** columns and relationships of "nft_drops" */
export type Nft_Drops = {
  claimed: Scalars['bigint'];
  /** An object relationship */
  collection: Nft_Collection;
  collection_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  drop_id: Scalars['bigint'];
  end_time: Scalars['timestamp'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  price: Scalars['float8'];
  start_time: Scalars['timestamp'];
  temaplate_id: Scalars['uuid'];
  /** An object relationship */
  template: Nft_Template;
  total_claimable: Scalars['bigint'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "nft_drops" */
export type Nft_Drops_Aggregate = {
  aggregate?: Maybe<Nft_Drops_Aggregate_Fields>;
  nodes: Array<Nft_Drops>;
};

/** aggregate fields of "nft_drops" */
export type Nft_Drops_Aggregate_Fields = {
  avg?: Maybe<Nft_Drops_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nft_Drops_Max_Fields>;
  min?: Maybe<Nft_Drops_Min_Fields>;
  stddev?: Maybe<Nft_Drops_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Drops_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Drops_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Drops_Sum_Fields>;
  var_pop?: Maybe<Nft_Drops_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Drops_Var_Samp_Fields>;
  variance?: Maybe<Nft_Drops_Variance_Fields>;
};


/** aggregate fields of "nft_drops" */
export type Nft_Drops_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Drops_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nft_Drops_Avg_Fields = {
  claimed?: Maybe<Scalars['Float']>;
  drop_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_claimable?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nft_drops". All fields are combined with a logical 'AND'. */
export type Nft_Drops_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Drops_Bool_Exp>>;
  _not?: InputMaybe<Nft_Drops_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Drops_Bool_Exp>>;
  claimed?: InputMaybe<Bigint_Comparison_Exp>;
  collection?: InputMaybe<Nft_Collection_Bool_Exp>;
  collection_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  drop_id?: InputMaybe<Bigint_Comparison_Exp>;
  end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  start_time?: InputMaybe<Timestamp_Comparison_Exp>;
  temaplate_id?: InputMaybe<Uuid_Comparison_Exp>;
  template?: InputMaybe<Nft_Template_Bool_Exp>;
  total_claimable?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nft_drops" */
export enum Nft_Drops_Constraint {
  /** unique or primary key constraint */
  NftDropsPkey = 'nft_drops_pkey'
}

/** input type for incrementing numeric columns in table "nft_drops" */
export type Nft_Drops_Inc_Input = {
  claimed?: InputMaybe<Scalars['bigint']>;
  drop_id?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['float8']>;
  total_claimable?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "nft_drops" */
export type Nft_Drops_Insert_Input = {
  claimed?: InputMaybe<Scalars['bigint']>;
  collection?: InputMaybe<Nft_Collection_Obj_Rel_Insert_Input>;
  collection_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  drop_id?: InputMaybe<Scalars['bigint']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['float8']>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  temaplate_id?: InputMaybe<Scalars['uuid']>;
  template?: InputMaybe<Nft_Template_Obj_Rel_Insert_Input>;
  total_claimable?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Nft_Drops_Max_Fields = {
  claimed?: Maybe<Scalars['bigint']>;
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  drop_id?: Maybe<Scalars['bigint']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  start_time?: Maybe<Scalars['timestamp']>;
  temaplate_id?: Maybe<Scalars['uuid']>;
  total_claimable?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Nft_Drops_Min_Fields = {
  claimed?: Maybe<Scalars['bigint']>;
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  drop_id?: Maybe<Scalars['bigint']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  start_time?: Maybe<Scalars['timestamp']>;
  temaplate_id?: Maybe<Scalars['uuid']>;
  total_claimable?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "nft_drops" */
export type Nft_Drops_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft_Drops>;
};

/** on conflict condition type for table "nft_drops" */
export type Nft_Drops_On_Conflict = {
  constraint: Nft_Drops_Constraint;
  update_columns?: Array<Nft_Drops_Update_Column>;
  where?: InputMaybe<Nft_Drops_Bool_Exp>;
};

/** Ordering options when selecting data from "nft_drops". */
export type Nft_Drops_Order_By = {
  claimed?: InputMaybe<Order_By>;
  collection?: InputMaybe<Nft_Collection_Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  drop_id?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  temaplate_id?: InputMaybe<Order_By>;
  template?: InputMaybe<Nft_Template_Order_By>;
  total_claimable?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_drops */
export type Nft_Drops_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "nft_drops" */
export enum Nft_Drops_Select_Column {
  /** column name */
  Claimed = 'claimed',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DropId = 'drop_id',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  TemaplateId = 'temaplate_id',
  /** column name */
  TotalClaimable = 'total_claimable',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nft_drops" */
export type Nft_Drops_Set_Input = {
  claimed?: InputMaybe<Scalars['bigint']>;
  collection_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  drop_id?: InputMaybe<Scalars['bigint']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['float8']>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  temaplate_id?: InputMaybe<Scalars['uuid']>;
  total_claimable?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Nft_Drops_Stddev_Fields = {
  claimed?: Maybe<Scalars['Float']>;
  drop_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_claimable?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Drops_Stddev_Pop_Fields = {
  claimed?: Maybe<Scalars['Float']>;
  drop_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_claimable?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Drops_Stddev_Samp_Fields = {
  claimed?: Maybe<Scalars['Float']>;
  drop_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_claimable?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nft_Drops_Sum_Fields = {
  claimed?: Maybe<Scalars['bigint']>;
  drop_id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  total_claimable?: Maybe<Scalars['bigint']>;
};

/** update columns of table "nft_drops" */
export enum Nft_Drops_Update_Column {
  /** column name */
  Claimed = 'claimed',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DropId = 'drop_id',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  TemaplateId = 'temaplate_id',
  /** column name */
  TotalClaimable = 'total_claimable',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Nft_Drops_Var_Pop_Fields = {
  claimed?: Maybe<Scalars['Float']>;
  drop_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_claimable?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nft_Drops_Var_Samp_Fields = {
  claimed?: Maybe<Scalars['Float']>;
  drop_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_claimable?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nft_Drops_Variance_Fields = {
  claimed?: Maybe<Scalars['Float']>;
  drop_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  total_claimable?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "nft" */
export type Nft_Inc_Input = {
  asset_id?: InputMaybe<Scalars['bigint']>;
  mint_number?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "nft" */
export type Nft_Insert_Input = {
  asset_id?: InputMaybe<Scalars['bigint']>;
  collection?: InputMaybe<Nft_Collection_Obj_Rel_Insert_Input>;
  collection_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_for_sale?: InputMaybe<Scalars['Boolean']>;
  is_tradable?: InputMaybe<Scalars['Boolean']>;
  mint_number?: InputMaybe<Scalars['bigint']>;
  owner?: InputMaybe<Scalars['String']>;
  sale_offers?: InputMaybe<Nft_Sale_Offer_Arr_Rel_Insert_Input>;
  standard?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Nft_Template_Obj_Rel_Insert_Input>;
  template_id?: InputMaybe<Scalars['uuid']>;
  transaction_status?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Nft_Max_Fields = {
  asset_id?: Maybe<Scalars['bigint']>;
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mint_number?: Maybe<Scalars['bigint']>;
  owner?: Maybe<Scalars['String']>;
  standard?: Maybe<Scalars['String']>;
  template_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "nft" */
export type Nft_Max_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  standard?: InputMaybe<Order_By>;
  template_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Min_Fields = {
  asset_id?: Maybe<Scalars['bigint']>;
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mint_number?: Maybe<Scalars['bigint']>;
  owner?: Maybe<Scalars['String']>;
  standard?: Maybe<Scalars['String']>;
  template_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "nft" */
export type Nft_Min_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  standard?: InputMaybe<Order_By>;
  template_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nft" */
export type Nft_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft>;
};

/** input type for inserting object relation for remote table "nft" */
export type Nft_Obj_Rel_Insert_Input = {
  data: Nft_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nft_On_Conflict>;
};

/** on conflict condition type for table "nft" */
export type Nft_On_Conflict = {
  constraint: Nft_Constraint;
  update_columns?: Array<Nft_Update_Column>;
  where?: InputMaybe<Nft_Bool_Exp>;
};

/** Ordering options when selecting data from "nft". */
export type Nft_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  collection?: InputMaybe<Nft_Collection_Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  has_sale_offers?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_for_sale?: InputMaybe<Order_By>;
  is_tradable?: InputMaybe<Order_By>;
  last_active_price?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  sale_offers_aggregate?: InputMaybe<Nft_Sale_Offer_Aggregate_Order_By>;
  standard?: InputMaybe<Order_By>;
  template?: InputMaybe<Nft_Template_Order_By>;
  template_id?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft */
export type Nft_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "nft_sale_offer" */
export type Nft_Sale_Offer = {
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  listing_resource_id: Scalars['bigint'];
  /** An object relationship */
  nft: Nft;
  nft_id: Scalars['uuid'];
  /** A computed field, executes function "saleparseprice" */
  parsed_price?: Maybe<Scalars['float8']>;
  price: Scalars['String'];
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "nft_sale_offer" */
export type Nft_Sale_Offer_Aggregate = {
  aggregate?: Maybe<Nft_Sale_Offer_Aggregate_Fields>;
  nodes: Array<Nft_Sale_Offer>;
};

/** aggregate fields of "nft_sale_offer" */
export type Nft_Sale_Offer_Aggregate_Fields = {
  avg?: Maybe<Nft_Sale_Offer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nft_Sale_Offer_Max_Fields>;
  min?: Maybe<Nft_Sale_Offer_Min_Fields>;
  stddev?: Maybe<Nft_Sale_Offer_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Sale_Offer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Sale_Offer_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Sale_Offer_Sum_Fields>;
  var_pop?: Maybe<Nft_Sale_Offer_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Sale_Offer_Var_Samp_Fields>;
  variance?: Maybe<Nft_Sale_Offer_Variance_Fields>;
};


/** aggregate fields of "nft_sale_offer" */
export type Nft_Sale_Offer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft_sale_offer" */
export type Nft_Sale_Offer_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_Sale_Offer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Sale_Offer_Max_Order_By>;
  min?: InputMaybe<Nft_Sale_Offer_Min_Order_By>;
  stddev?: InputMaybe<Nft_Sale_Offer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_Sale_Offer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_Sale_Offer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_Sale_Offer_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_Sale_Offer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_Sale_Offer_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_Sale_Offer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nft_sale_offer" */
export type Nft_Sale_Offer_Arr_Rel_Insert_Input = {
  data: Array<Nft_Sale_Offer_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nft_Sale_Offer_On_Conflict>;
};

/** aggregate avg on columns */
export type Nft_Sale_Offer_Avg_Fields = {
  listing_resource_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Avg_Order_By = {
  listing_resource_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_sale_offer". All fields are combined with a logical 'AND'. */
export type Nft_Sale_Offer_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Sale_Offer_Bool_Exp>>;
  _not?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Sale_Offer_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  listing_resource_id?: InputMaybe<Bigint_Comparison_Exp>;
  nft?: InputMaybe<Nft_Bool_Exp>;
  nft_id?: InputMaybe<Uuid_Comparison_Exp>;
  parsed_price?: InputMaybe<Float8_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nft_sale_offer" */
export enum Nft_Sale_Offer_Constraint {
  /** unique or primary key constraint */
  NftSaleOfferListingResourceIdKey = 'nft_sale_offer_listing_resource_id_key',
  /** unique or primary key constraint */
  NftSaleOfferPkey = 'nft_sale_offer_pkey'
}

/** columns and relationships of "nft_sale_offer_cut" */
export type Nft_Sale_Offer_Cut = {
  amount: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  receiver_address: Scalars['String'];
  /** An object relationship */
  sale_offer: Nft_Sale_Offer;
  sale_offer_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "nft_sale_offer_cut" */
export type Nft_Sale_Offer_Cut_Aggregate = {
  aggregate?: Maybe<Nft_Sale_Offer_Cut_Aggregate_Fields>;
  nodes: Array<Nft_Sale_Offer_Cut>;
};

/** aggregate fields of "nft_sale_offer_cut" */
export type Nft_Sale_Offer_Cut_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Nft_Sale_Offer_Cut_Max_Fields>;
  min?: Maybe<Nft_Sale_Offer_Cut_Min_Fields>;
};


/** aggregate fields of "nft_sale_offer_cut" */
export type Nft_Sale_Offer_Cut_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Sale_Offer_Cut_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "nft_sale_offer_cut". All fields are combined with a logical 'AND'. */
export type Nft_Sale_Offer_Cut_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Sale_Offer_Cut_Bool_Exp>>;
  _not?: InputMaybe<Nft_Sale_Offer_Cut_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Sale_Offer_Cut_Bool_Exp>>;
  amount?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  receiver_address?: InputMaybe<String_Comparison_Exp>;
  sale_offer?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
  sale_offer_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nft_sale_offer_cut" */
export enum Nft_Sale_Offer_Cut_Constraint {
  /** unique or primary key constraint */
  NftSaleOfferCutPkey = 'nft_sale_offer_cut_pkey'
}

/** input type for inserting data into table "nft_sale_offer_cut" */
export type Nft_Sale_Offer_Cut_Insert_Input = {
  amount?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  receiver_address?: InputMaybe<Scalars['String']>;
  sale_offer?: InputMaybe<Nft_Sale_Offer_Obj_Rel_Insert_Input>;
  sale_offer_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Nft_Sale_Offer_Cut_Max_Fields = {
  amount?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_address?: Maybe<Scalars['String']>;
  sale_offer_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Nft_Sale_Offer_Cut_Min_Fields = {
  amount?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  receiver_address?: Maybe<Scalars['String']>;
  sale_offer_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "nft_sale_offer_cut" */
export type Nft_Sale_Offer_Cut_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft_Sale_Offer_Cut>;
};

/** on conflict condition type for table "nft_sale_offer_cut" */
export type Nft_Sale_Offer_Cut_On_Conflict = {
  constraint: Nft_Sale_Offer_Cut_Constraint;
  update_columns?: Array<Nft_Sale_Offer_Cut_Update_Column>;
  where?: InputMaybe<Nft_Sale_Offer_Cut_Bool_Exp>;
};

/** Ordering options when selecting data from "nft_sale_offer_cut". */
export type Nft_Sale_Offer_Cut_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  receiver_address?: InputMaybe<Order_By>;
  sale_offer?: InputMaybe<Nft_Sale_Offer_Order_By>;
  sale_offer_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_sale_offer_cut */
export type Nft_Sale_Offer_Cut_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "nft_sale_offer_cut" */
export enum Nft_Sale_Offer_Cut_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverAddress = 'receiver_address',
  /** column name */
  SaleOfferId = 'sale_offer_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nft_sale_offer_cut" */
export type Nft_Sale_Offer_Cut_Set_Input = {
  amount?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  receiver_address?: InputMaybe<Scalars['String']>;
  sale_offer_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "nft_sale_offer_cut" */
export enum Nft_Sale_Offer_Cut_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ReceiverAddress = 'receiver_address',
  /** column name */
  SaleOfferId = 'sale_offer_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for incrementing numeric columns in table "nft_sale_offer" */
export type Nft_Sale_Offer_Inc_Input = {
  listing_resource_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "nft_sale_offer" */
export type Nft_Sale_Offer_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  listing_resource_id?: InputMaybe<Scalars['bigint']>;
  nft?: InputMaybe<Nft_Obj_Rel_Insert_Input>;
  nft_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Nft_Sale_Offer_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  listing_resource_id?: Maybe<Scalars['bigint']>;
  nft_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listing_resource_id?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Sale_Offer_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  listing_resource_id?: Maybe<Scalars['bigint']>;
  nft_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listing_resource_id?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nft_sale_offer" */
export type Nft_Sale_Offer_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft_Sale_Offer>;
};

/** input type for inserting object relation for remote table "nft_sale_offer" */
export type Nft_Sale_Offer_Obj_Rel_Insert_Input = {
  data: Nft_Sale_Offer_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nft_Sale_Offer_On_Conflict>;
};

/** on conflict condition type for table "nft_sale_offer" */
export type Nft_Sale_Offer_On_Conflict = {
  constraint: Nft_Sale_Offer_Constraint;
  update_columns?: Array<Nft_Sale_Offer_Update_Column>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};

/** Ordering options when selecting data from "nft_sale_offer". */
export type Nft_Sale_Offer_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listing_resource_id?: InputMaybe<Order_By>;
  nft?: InputMaybe<Nft_Order_By>;
  nft_id?: InputMaybe<Order_By>;
  parsed_price?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_sale_offer */
export type Nft_Sale_Offer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "nft_sale_offer" */
export enum Nft_Sale_Offer_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListingResourceId = 'listing_resource_id',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Price = 'price',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nft_sale_offer" */
export type Nft_Sale_Offer_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  listing_resource_id?: InputMaybe<Scalars['bigint']>;
  nft_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Nft_Sale_Offer_Stddev_Fields = {
  listing_resource_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Stddev_Order_By = {
  listing_resource_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_Sale_Offer_Stddev_Pop_Fields = {
  listing_resource_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Stddev_Pop_Order_By = {
  listing_resource_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_Sale_Offer_Stddev_Samp_Fields = {
  listing_resource_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Stddev_Samp_Order_By = {
  listing_resource_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nft_Sale_Offer_Sum_Fields = {
  listing_resource_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Sum_Order_By = {
  listing_resource_id?: InputMaybe<Order_By>;
};

/** update columns of table "nft_sale_offer" */
export enum Nft_Sale_Offer_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListingResourceId = 'listing_resource_id',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Price = 'price',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Nft_Sale_Offer_Var_Pop_Fields = {
  listing_resource_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Var_Pop_Order_By = {
  listing_resource_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_Sale_Offer_Var_Samp_Fields = {
  listing_resource_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Var_Samp_Order_By = {
  listing_resource_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_Sale_Offer_Variance_Fields = {
  listing_resource_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Variance_Order_By = {
  listing_resource_id?: InputMaybe<Order_By>;
};

/** select columns of table "nft" */
export enum Nft_Select_Column {
  /** column name */
  AssetId = 'asset_id',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IsForSale = 'is_for_sale',
  /** column name */
  IsTradable = 'is_tradable',
  /** column name */
  MintNumber = 'mint_number',
  /** column name */
  Owner = 'owner',
  /** column name */
  Standard = 'standard',
  /** column name */
  TemplateId = 'template_id',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nft" */
export type Nft_Set_Input = {
  asset_id?: InputMaybe<Scalars['bigint']>;
  collection_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_for_sale?: InputMaybe<Scalars['Boolean']>;
  is_tradable?: InputMaybe<Scalars['Boolean']>;
  mint_number?: InputMaybe<Scalars['bigint']>;
  owner?: InputMaybe<Scalars['String']>;
  standard?: InputMaybe<Scalars['String']>;
  template_id?: InputMaybe<Scalars['uuid']>;
  transaction_status?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Nft_Stddev_Fields = {
  asset_id?: Maybe<Scalars['Float']>;
  mint_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nft" */
export type Nft_Stddev_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_Stddev_Pop_Fields = {
  asset_id?: Maybe<Scalars['Float']>;
  mint_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nft" */
export type Nft_Stddev_Pop_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_Stddev_Samp_Fields = {
  asset_id?: Maybe<Scalars['Float']>;
  mint_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nft" */
export type Nft_Stddev_Samp_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nft_Sum_Fields = {
  asset_id?: Maybe<Scalars['bigint']>;
  mint_number?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "nft" */
export type Nft_Sum_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
};

/** columns and relationships of "nft_template" */
export type Nft_Template = {
  /** A computed field, executes function "nft_template_accessories" */
  accessories?: Maybe<Scalars['String']>;
  /** A computed field, executes function "nft_template_body" */
  body?: Maybe<Scalars['String']>;
  /** An object relationship */
  collection?: Maybe<Nft_Collection>;
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** A computed field, executes function "nft_template_defense" */
  defense?: Maybe<Scalars['String']>;
  /** A computed field, executes function "nft_template_dunks" */
  dunks?: Maybe<Scalars['String']>;
  /** A computed field, executes function "nft_template_hair" */
  hair?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** A computed field, executes function "nft_template_jersey" */
  jersey?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  nfts: Array<Nft>;
  /** An aggregate relationship */
  nfts_aggregate: Nft_Aggregate;
  /** A computed field, executes function "nft_template_number" */
  number?: Maybe<Scalars['String']>;
  /** A computed field, executes function "nft_template_playmaking" */
  playmaking?: Maybe<Scalars['String']>;
  /** A computed field, executes function "nft_template" */
  raw_metadata?: Maybe<Scalars['String']>;
  /** A computed field, executes function "nft_template_role" */
  role?: Maybe<Scalars['String']>;
  /** A computed field, executes function "nft_template_shooting" */
  shooting?: Maybe<Scalars['String']>;
  standard: Scalars['String'];
  /** A computed field, executes function "nft_template_team" */
  team?: Maybe<Scalars['String']>;
  template_id: Scalars['bigint'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "nft_template" */
export type Nft_TemplateMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "nft_template" */
export type Nft_TemplateNftsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


/** columns and relationships of "nft_template" */
export type Nft_TemplateNfts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};

/** aggregated selection of "nft_template" */
export type Nft_Template_Aggregate = {
  aggregate?: Maybe<Nft_Template_Aggregate_Fields>;
  nodes: Array<Nft_Template>;
};

/** aggregate fields of "nft_template" */
export type Nft_Template_Aggregate_Fields = {
  avg?: Maybe<Nft_Template_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nft_Template_Max_Fields>;
  min?: Maybe<Nft_Template_Min_Fields>;
  stddev?: Maybe<Nft_Template_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Template_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Template_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Template_Sum_Fields>;
  var_pop?: Maybe<Nft_Template_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Template_Var_Samp_Fields>;
  variance?: Maybe<Nft_Template_Variance_Fields>;
};


/** aggregate fields of "nft_template" */
export type Nft_Template_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Template_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft_template" */
export type Nft_Template_Aggregate_Order_By = {
  avg?: InputMaybe<Nft_Template_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Template_Max_Order_By>;
  min?: InputMaybe<Nft_Template_Min_Order_By>;
  stddev?: InputMaybe<Nft_Template_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nft_Template_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nft_Template_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nft_Template_Sum_Order_By>;
  var_pop?: InputMaybe<Nft_Template_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nft_Template_Var_Samp_Order_By>;
  variance?: InputMaybe<Nft_Template_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Nft_Template_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "nft_template" */
export type Nft_Template_Arr_Rel_Insert_Input = {
  data: Array<Nft_Template_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nft_Template_On_Conflict>;
};

/** aggregate avg on columns */
export type Nft_Template_Avg_Fields = {
  template_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nft_template" */
export type Nft_Template_Avg_Order_By = {
  template_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nft_template". All fields are combined with a logical 'AND'. */
export type Nft_Template_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Template_Bool_Exp>>;
  _not?: InputMaybe<Nft_Template_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Template_Bool_Exp>>;
  accessories?: InputMaybe<String_Comparison_Exp>;
  body?: InputMaybe<String_Comparison_Exp>;
  collection?: InputMaybe<Nft_Collection_Bool_Exp>;
  collection_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  defense?: InputMaybe<String_Comparison_Exp>;
  dunks?: InputMaybe<String_Comparison_Exp>;
  hair?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  jersey?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  nfts?: InputMaybe<Nft_Bool_Exp>;
  number?: InputMaybe<String_Comparison_Exp>;
  playmaking?: InputMaybe<String_Comparison_Exp>;
  raw_metadata?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  shooting?: InputMaybe<String_Comparison_Exp>;
  standard?: InputMaybe<String_Comparison_Exp>;
  team?: InputMaybe<String_Comparison_Exp>;
  template_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nft_template" */
export enum Nft_Template_Constraint {
  /** unique or primary key constraint */
  NftTemplatePkey = 'nft_template_pkey',
  /** unique or primary key constraint */
  NftTemplateTemplateIdStandardKey = 'nft_template_template_id_standard_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Nft_Template_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Nft_Template_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Nft_Template_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "nft_template" */
export type Nft_Template_Inc_Input = {
  template_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "nft_template" */
export type Nft_Template_Insert_Input = {
  collection?: InputMaybe<Nft_Collection_Obj_Rel_Insert_Input>;
  collection_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  nfts?: InputMaybe<Nft_Arr_Rel_Insert_Input>;
  standard?: InputMaybe<Scalars['String']>;
  template_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Nft_Template_Max_Fields = {
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  standard?: Maybe<Scalars['String']>;
  template_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "nft_template" */
export type Nft_Template_Max_Order_By = {
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  standard?: InputMaybe<Order_By>;
  template_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Template_Min_Fields = {
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  standard?: Maybe<Scalars['String']>;
  template_id?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "nft_template" */
export type Nft_Template_Min_Order_By = {
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  standard?: InputMaybe<Order_By>;
  template_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nft_template" */
export type Nft_Template_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft_Template>;
};

/** input type for inserting object relation for remote table "nft_template" */
export type Nft_Template_Obj_Rel_Insert_Input = {
  data: Nft_Template_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nft_Template_On_Conflict>;
};

/** on conflict condition type for table "nft_template" */
export type Nft_Template_On_Conflict = {
  constraint: Nft_Template_Constraint;
  update_columns?: Array<Nft_Template_Update_Column>;
  where?: InputMaybe<Nft_Template_Bool_Exp>;
};

/** Ordering options when selecting data from "nft_template". */
export type Nft_Template_Order_By = {
  accessories?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  collection?: InputMaybe<Nft_Collection_Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  defense?: InputMaybe<Order_By>;
  dunks?: InputMaybe<Order_By>;
  hair?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jersey?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  nfts_aggregate?: InputMaybe<Nft_Aggregate_Order_By>;
  number?: InputMaybe<Order_By>;
  playmaking?: InputMaybe<Order_By>;
  raw_metadata?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  shooting?: InputMaybe<Order_By>;
  standard?: InputMaybe<Order_By>;
  team?: InputMaybe<Order_By>;
  template_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_template */
export type Nft_Template_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Nft_Template_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "nft_template" */
export enum Nft_Template_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Standard = 'standard',
  /** column name */
  TemplateId = 'template_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nft_template" */
export type Nft_Template_Set_Input = {
  collection_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  standard?: InputMaybe<Scalars['String']>;
  template_id?: InputMaybe<Scalars['bigint']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Nft_Template_Stddev_Fields = {
  template_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nft_template" */
export type Nft_Template_Stddev_Order_By = {
  template_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nft_Template_Stddev_Pop_Fields = {
  template_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nft_template" */
export type Nft_Template_Stddev_Pop_Order_By = {
  template_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nft_Template_Stddev_Samp_Fields = {
  template_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nft_template" */
export type Nft_Template_Stddev_Samp_Order_By = {
  template_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nft_Template_Sum_Fields = {
  template_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "nft_template" */
export type Nft_Template_Sum_Order_By = {
  template_id?: InputMaybe<Order_By>;
};

/** update columns of table "nft_template" */
export enum Nft_Template_Update_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Standard = 'standard',
  /** column name */
  TemplateId = 'template_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Nft_Template_Var_Pop_Fields = {
  template_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nft_template" */
export type Nft_Template_Var_Pop_Order_By = {
  template_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_Template_Var_Samp_Fields = {
  template_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nft_template" */
export type Nft_Template_Var_Samp_Order_By = {
  template_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_Template_Variance_Fields = {
  template_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nft_template" */
export type Nft_Template_Variance_Order_By = {
  template_id?: InputMaybe<Order_By>;
};

/** update columns of table "nft" */
export enum Nft_Update_Column {
  /** column name */
  AssetId = 'asset_id',
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  IsForSale = 'is_for_sale',
  /** column name */
  IsTradable = 'is_tradable',
  /** column name */
  MintNumber = 'mint_number',
  /** column name */
  Owner = 'owner',
  /** column name */
  Standard = 'standard',
  /** column name */
  TemplateId = 'template_id',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Nft_Var_Pop_Fields = {
  asset_id?: Maybe<Scalars['Float']>;
  mint_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nft" */
export type Nft_Var_Pop_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nft_Var_Samp_Fields = {
  asset_id?: Maybe<Scalars['Float']>;
  mint_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nft" */
export type Nft_Var_Samp_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nft_Variance_Fields = {
  asset_id?: Maybe<Scalars['Float']>;
  mint_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nft" */
export type Nft_Variance_Order_By = {
  asset_id?: InputMaybe<Order_By>;
  mint_number?: InputMaybe<Order_By>;
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
  /** fetch data from the table: "block_cursor" */
  block_cursor: Array<Block_Cursor>;
  /** fetch aggregated fields from the table: "block_cursor" */
  block_cursor_aggregate: Block_Cursor_Aggregate;
  /** fetch data from the table: "block_cursor" using primary key columns */
  block_cursor_by_pk?: Maybe<Block_Cursor>;
  /** fetch data from the table: "nft" */
  nft: Array<Nft>;
  /** fetch aggregated fields from the table: "nft" */
  nft_aggregate: Nft_Aggregate;
  /** fetch data from the table: "nft" using primary key columns */
  nft_by_pk?: Maybe<Nft>;
  /** fetch data from the table: "nft_collection" */
  nft_collection: Array<Nft_Collection>;
  /** fetch aggregated fields from the table: "nft_collection" */
  nft_collection_aggregate: Nft_Collection_Aggregate;
  /** fetch data from the table: "nft_collection" using primary key columns */
  nft_collection_by_pk?: Maybe<Nft_Collection>;
  /** fetch data from the table: "nft_drops" */
  nft_drops: Array<Nft_Drops>;
  /** fetch aggregated fields from the table: "nft_drops" */
  nft_drops_aggregate: Nft_Drops_Aggregate;
  /** fetch data from the table: "nft_drops" using primary key columns */
  nft_drops_by_pk?: Maybe<Nft_Drops>;
  /** fetch data from the table: "nft_sale_offer" */
  nft_sale_offer: Array<Nft_Sale_Offer>;
  /** fetch aggregated fields from the table: "nft_sale_offer" */
  nft_sale_offer_aggregate: Nft_Sale_Offer_Aggregate;
  /** fetch data from the table: "nft_sale_offer" using primary key columns */
  nft_sale_offer_by_pk?: Maybe<Nft_Sale_Offer>;
  /** fetch data from the table: "nft_sale_offer_cut" */
  nft_sale_offer_cut: Array<Nft_Sale_Offer_Cut>;
  /** fetch aggregated fields from the table: "nft_sale_offer_cut" */
  nft_sale_offer_cut_aggregate: Nft_Sale_Offer_Cut_Aggregate;
  /** fetch data from the table: "nft_sale_offer_cut" using primary key columns */
  nft_sale_offer_cut_by_pk?: Maybe<Nft_Sale_Offer_Cut>;
  /** fetch data from the table: "nft_template" */
  nft_template: Array<Nft_Template>;
  /** fetch aggregated fields from the table: "nft_template" */
  nft_template_aggregate: Nft_Template_Aggregate;
  /** fetch data from the table: "nft_template" using primary key columns */
  nft_template_by_pk?: Maybe<Nft_Template>;
  /** execute function "random_sale_offer" which returns "nft_sale_offer" */
  random_sale_offer: Array<Nft_Sale_Offer>;
  /** execute function "random_sale_offer" and query aggregates on result of table type "nft_sale_offer" */
  random_sale_offer_aggregate: Nft_Sale_Offer_Aggregate;
};


export type Query_RootBlock_CursorArgs = {
  distinct_on?: InputMaybe<Array<Block_Cursor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Cursor_Order_By>>;
  where?: InputMaybe<Block_Cursor_Bool_Exp>;
};


export type Query_RootBlock_Cursor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Cursor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Cursor_Order_By>>;
  where?: InputMaybe<Block_Cursor_Bool_Exp>;
};


export type Query_RootBlock_Cursor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNftArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Query_RootNft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Query_RootNft_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNft_CollectionArgs = {
  distinct_on?: InputMaybe<Array<Nft_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Collection_Order_By>>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};


export type Query_RootNft_Collection_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Collection_Order_By>>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};


export type Query_RootNft_Collection_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNft_DropsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Drops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Drops_Order_By>>;
  where?: InputMaybe<Nft_Drops_Bool_Exp>;
};


export type Query_RootNft_Drops_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Drops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Drops_Order_By>>;
  where?: InputMaybe<Nft_Drops_Bool_Exp>;
};


export type Query_RootNft_Drops_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNft_Sale_OfferArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};


export type Query_RootNft_Sale_Offer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};


export type Query_RootNft_Sale_Offer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNft_Sale_Offer_CutArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Cut_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Cut_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Cut_Bool_Exp>;
};


export type Query_RootNft_Sale_Offer_Cut_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Cut_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Cut_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Cut_Bool_Exp>;
};


export type Query_RootNft_Sale_Offer_Cut_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNft_TemplateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Template_Order_By>>;
  where?: InputMaybe<Nft_Template_Bool_Exp>;
};


export type Query_RootNft_Template_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Template_Order_By>>;
  where?: InputMaybe<Nft_Template_Bool_Exp>;
};


export type Query_RootNft_Template_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRandom_Sale_OfferArgs = {
  args: Random_Sale_Offer_Args;
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};


export type Query_RootRandom_Sale_Offer_AggregateArgs = {
  args: Random_Sale_Offer_Args;
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};

export type Random_Sale_Offer_Args = {
  israndom?: InputMaybe<Scalars['Int']>;
  seed?: InputMaybe<Scalars['seed_float']>;
};

export type Subscription_Root = {
  /** fetch data from the table: "block_cursor" */
  block_cursor: Array<Block_Cursor>;
  /** fetch aggregated fields from the table: "block_cursor" */
  block_cursor_aggregate: Block_Cursor_Aggregate;
  /** fetch data from the table: "block_cursor" using primary key columns */
  block_cursor_by_pk?: Maybe<Block_Cursor>;
  /** fetch data from the table: "nft" */
  nft: Array<Nft>;
  /** fetch aggregated fields from the table: "nft" */
  nft_aggregate: Nft_Aggregate;
  /** fetch data from the table: "nft" using primary key columns */
  nft_by_pk?: Maybe<Nft>;
  /** fetch data from the table: "nft_collection" */
  nft_collection: Array<Nft_Collection>;
  /** fetch aggregated fields from the table: "nft_collection" */
  nft_collection_aggregate: Nft_Collection_Aggregate;
  /** fetch data from the table: "nft_collection" using primary key columns */
  nft_collection_by_pk?: Maybe<Nft_Collection>;
  /** fetch data from the table: "nft_drops" */
  nft_drops: Array<Nft_Drops>;
  /** fetch aggregated fields from the table: "nft_drops" */
  nft_drops_aggregate: Nft_Drops_Aggregate;
  /** fetch data from the table: "nft_drops" using primary key columns */
  nft_drops_by_pk?: Maybe<Nft_Drops>;
  /** fetch data from the table: "nft_sale_offer" */
  nft_sale_offer: Array<Nft_Sale_Offer>;
  /** fetch aggregated fields from the table: "nft_sale_offer" */
  nft_sale_offer_aggregate: Nft_Sale_Offer_Aggregate;
  /** fetch data from the table: "nft_sale_offer" using primary key columns */
  nft_sale_offer_by_pk?: Maybe<Nft_Sale_Offer>;
  /** fetch data from the table: "nft_sale_offer_cut" */
  nft_sale_offer_cut: Array<Nft_Sale_Offer_Cut>;
  /** fetch aggregated fields from the table: "nft_sale_offer_cut" */
  nft_sale_offer_cut_aggregate: Nft_Sale_Offer_Cut_Aggregate;
  /** fetch data from the table: "nft_sale_offer_cut" using primary key columns */
  nft_sale_offer_cut_by_pk?: Maybe<Nft_Sale_Offer_Cut>;
  /** fetch data from the table: "nft_template" */
  nft_template: Array<Nft_Template>;
  /** fetch aggregated fields from the table: "nft_template" */
  nft_template_aggregate: Nft_Template_Aggregate;
  /** fetch data from the table: "nft_template" using primary key columns */
  nft_template_by_pk?: Maybe<Nft_Template>;
  /** execute function "random_sale_offer" which returns "nft_sale_offer" */
  random_sale_offer: Array<Nft_Sale_Offer>;
  /** execute function "random_sale_offer" and query aggregates on result of table type "nft_sale_offer" */
  random_sale_offer_aggregate: Nft_Sale_Offer_Aggregate;
};


export type Subscription_RootBlock_CursorArgs = {
  distinct_on?: InputMaybe<Array<Block_Cursor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Cursor_Order_By>>;
  where?: InputMaybe<Block_Cursor_Bool_Exp>;
};


export type Subscription_RootBlock_Cursor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Cursor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Cursor_Order_By>>;
  where?: InputMaybe<Block_Cursor_Bool_Exp>;
};


export type Subscription_RootBlock_Cursor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNftArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Subscription_RootNft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Order_By>>;
  where?: InputMaybe<Nft_Bool_Exp>;
};


export type Subscription_RootNft_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNft_CollectionArgs = {
  distinct_on?: InputMaybe<Array<Nft_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Collection_Order_By>>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};


export type Subscription_RootNft_Collection_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Collection_Order_By>>;
  where?: InputMaybe<Nft_Collection_Bool_Exp>;
};


export type Subscription_RootNft_Collection_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNft_DropsArgs = {
  distinct_on?: InputMaybe<Array<Nft_Drops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Drops_Order_By>>;
  where?: InputMaybe<Nft_Drops_Bool_Exp>;
};


export type Subscription_RootNft_Drops_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Drops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Drops_Order_By>>;
  where?: InputMaybe<Nft_Drops_Bool_Exp>;
};


export type Subscription_RootNft_Drops_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNft_Sale_OfferArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};


export type Subscription_RootNft_Sale_Offer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};


export type Subscription_RootNft_Sale_Offer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNft_Sale_Offer_CutArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Cut_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Cut_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Cut_Bool_Exp>;
};


export type Subscription_RootNft_Sale_Offer_Cut_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Cut_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Cut_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Cut_Bool_Exp>;
};


export type Subscription_RootNft_Sale_Offer_Cut_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNft_TemplateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Template_Order_By>>;
  where?: InputMaybe<Nft_Template_Bool_Exp>;
};


export type Subscription_RootNft_Template_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Template_Order_By>>;
  where?: InputMaybe<Nft_Template_Bool_Exp>;
};


export type Subscription_RootNft_Template_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRandom_Sale_OfferArgs = {
  args: Random_Sale_Offer_Args;
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};


export type Subscription_RootRandom_Sale_Offer_AggregateArgs = {
  args: Random_Sale_Offer_Args;
  distinct_on?: InputMaybe<Array<Nft_Sale_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Sale_Offer_Order_By>>;
  where?: InputMaybe<Nft_Sale_Offer_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UpdateTransactionStatusMutationVariables = Exact<{
  filters: Nft_Bool_Exp;
}>;


export type UpdateTransactionStatusMutation = { update_nft?: { returning: Array<{ transaction_status?: boolean | null | undefined }> } | null | undefined };

export type GetCollectionByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetCollectionByIdQuery = { nft_collection: Array<{ id: any, image: string, author: string, description: string, name: string }> };

export type GetNftByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['jsonb']>;
  collection_id: Scalars['uuid'];
}>;


export type GetNftByIdQuery = { nft: Array<{ asset_id: any, is_for_sale: boolean, collection_id?: any | null | undefined, created_at?: any | null | undefined, updated_at?: any | null | undefined, mint_number?: any | null | undefined, has_sale_offers?: boolean | null | undefined, transaction_status?: boolean | null | undefined, owner: string, collection?: { collection_id?: any | null | undefined, name: string, market_fee: any, image: string, description: string, author: string } | null | undefined, template?: { metadata?: any | null | undefined } | null | undefined, sale_offers: Array<{ listing_resource_id: any, price: string, status: string, updated_at: any }> }> };

export type GetNftByMintNumberQueryVariables = Exact<{
  filter?: InputMaybe<Nft_Bool_Exp>;
}>;


export type GetNftByMintNumberQuery = { nft: Array<{ asset_id: any, mint_number?: any | null | undefined, owner: string, is_for_sale: boolean, created_at?: any | null | undefined, updated_at?: any | null | undefined, collection_id?: any | null | undefined, transaction_status?: boolean | null | undefined, has_sale_offers?: boolean | null | undefined, collection?: { collection_id?: any | null | undefined, name: string, market_fee: any, image: string, description: string, author: string } | null | undefined, sale_offers: Array<{ status: string, price: string, listing_resource_id: any, updated_at: any }>, template?: { metadata?: any | null | undefined } | null | undefined }> };

export type GetNfTsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNfTsQuery = { nft: Array<{ asset_id: any, owner: string, id: any }> };

export type GetMetadataIDsQueryVariables = Exact<{
  collections?: InputMaybe<Array<Nft_Template_Bool_Exp> | Nft_Template_Bool_Exp>;
}>;


export type GetMetadataIDsQuery = { nft_template: Array<{ id?: any | null | undefined }> };

export type GetNfTsMintNumberQueryVariables = Exact<{
  collection_id: Scalars['uuid'];
}>;


export type GetNfTsMintNumberQuery = { nft_collection: Array<{ nfts: Array<{ mint_number?: any | null | undefined }> }> };

export type GetNfTsByAddressQueryVariables = Exact<{
  address: Scalars['String'];
  collections?: InputMaybe<Array<Nft_Bool_Exp> | Nft_Bool_Exp>;
}>;


export type GetNfTsByAddressQuery = { nft: Array<{ asset_id: any, mint_number?: any | null | undefined, is_for_sale: boolean, has_sale_offers?: boolean | null | undefined, collection_id?: any | null | undefined, transaction_status?: boolean | null | undefined, owner: string, collection?: { collection_id?: any | null | undefined, name: string, market_fee: any, image: string, description: string, author: string } | null | undefined, template?: { metadata?: any | null | undefined } | null | undefined, sale_offers: Array<{ listing_resource_id: any, price: string, status: string, updated_at: any }> }> };

export type Nft_Sale_OfferQueryVariables = Exact<{
  id: Scalars['uuid'];
  address: Scalars['String'];
}>;


export type Nft_Sale_OfferQuery = { nft_sale_offer: Array<{ id: any, listing_resource_id: any, price: string, status: string, nft: { asset_id: any, is_for_sale: boolean, has_sale_offers?: boolean | null | undefined, owner: string, collection_id?: any | null | undefined, mint_number?: any | null | undefined, transaction_status?: boolean | null | undefined, template?: { id: any, metadata?: any | null | undefined, template_id: any } | null | undefined } }> };

export type GetSingleNfTsForSalQueryVariables = Exact<{
  id: Scalars['uuid'];
  address: Scalars['String'];
}>;


export type GetSingleNfTsForSalQuery = { nft_sale_offer: Array<{ listing_resource_id: any, price: string, status: string, nft: { asset_id: any, mint_number?: any | null | undefined, is_for_sale: boolean, has_sale_offers?: boolean | null | undefined, collection_id?: any | null | undefined, owner: string, template?: { metadata?: any | null | undefined } | null | undefined } }> };

export type Nfts_MarketplaceQueryVariables = Exact<{
  has_sale_offers?: InputMaybe<Boolean_Comparison_Exp>;
  price?: InputMaybe<Array<Nft_Bool_Exp> | Nft_Bool_Exp>;
  collections?: InputMaybe<Array<Nft_Bool_Exp> | Nft_Bool_Exp>;
  properties?: InputMaybe<Array<Nft_Template_Bool_Exp> | Nft_Template_Bool_Exp>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Nft_Order_By> | Nft_Order_By>;
  marketPlaceAddress?: InputMaybe<Scalars['String']>;
}>;


export type Nfts_MarketplaceQuery = { nft_aggregate: { aggregate?: { count: number } | null | undefined }, nft: Array<{ asset_id: any, mint_number?: any | null | undefined, owner: string, has_sale_offers?: boolean | null | undefined, is_for_sale: boolean, collection_id?: any | null | undefined, template?: { metadata?: any | null | undefined } | null | undefined, sale_offers: Array<{ updated_at: any, listing_resource_id: any, price: string, parsed_price?: any | null | undefined, status: string }> }> };

export type GetMarketplaceNfTsCountQueryVariables = Exact<{
  has_sale_offers?: InputMaybe<Boolean_Comparison_Exp>;
  price?: InputMaybe<Array<Nft_Sale_Offer_Bool_Exp> | Nft_Sale_Offer_Bool_Exp>;
  collections?: InputMaybe<Array<Nft_Bool_Exp> | Nft_Bool_Exp>;
  properties?: InputMaybe<Array<Nft_Template_Bool_Exp> | Nft_Template_Bool_Exp>;
  marketPlaceAddress?: InputMaybe<Scalars['String']>;
}>;


export type GetMarketplaceNfTsCountQuery = { nft_sale_offer_aggregate: { aggregate?: { count: number } | null | undefined, nodes: Array<{ nft: { asset_id: any } }> } };

export type GetCollectionFloorValueByIdQueryVariables = Exact<{
  collection_id: Scalars['uuid'];
  marketPlaceAddress?: InputMaybe<Scalars['String']>;
}>;


export type GetCollectionFloorValueByIdQuery = { nft_sale_offer: Array<{ parsed_price?: any | null | undefined }> };


export const UpdateTransactionStatusDocument = gql`
    mutation updateTransactionStatus($filters: nft_bool_exp!) {
  update_nft(where: $filters, _set: {transaction_status: true}) {
    returning {
      transaction_status
    }
  }
}
    `;
export type UpdateTransactionStatusMutationFn = Apollo.MutationFunction<UpdateTransactionStatusMutation, UpdateTransactionStatusMutationVariables>;

/**
 * __useUpdateTransactionStatusMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionStatusMutation, { data, loading, error }] = useUpdateTransactionStatusMutation({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useUpdateTransactionStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionStatusMutation, UpdateTransactionStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransactionStatusMutation, UpdateTransactionStatusMutationVariables>(UpdateTransactionStatusDocument, options);
      }
export type UpdateTransactionStatusMutationHookResult = ReturnType<typeof useUpdateTransactionStatusMutation>;
export type UpdateTransactionStatusMutationResult = Apollo.MutationResult<UpdateTransactionStatusMutation>;
export type UpdateTransactionStatusMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionStatusMutation, UpdateTransactionStatusMutationVariables>;
export const GetCollectionByIdDocument = gql`
    query getCollectionById($id: uuid!) {
  nft_collection(where: {id: {_eq: $id}}) {
    id
    image
    author
    description
    name
  }
}
    `;

/**
 * __useGetCollectionByIdQuery__
 *
 * To run a query within a React component, call `useGetCollectionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCollectionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCollectionByIdQuery, GetCollectionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCollectionByIdQuery, GetCollectionByIdQueryVariables>(GetCollectionByIdDocument, options);
      }
export function useGetCollectionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionByIdQuery, GetCollectionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCollectionByIdQuery, GetCollectionByIdQueryVariables>(GetCollectionByIdDocument, options);
        }
export type GetCollectionByIdQueryHookResult = ReturnType<typeof useGetCollectionByIdQuery>;
export type GetCollectionByIdLazyQueryHookResult = ReturnType<typeof useGetCollectionByIdLazyQuery>;
export type GetCollectionByIdQueryResult = Apollo.QueryResult<GetCollectionByIdQuery, GetCollectionByIdQueryVariables>;
export const GetNftByIdDocument = gql`
    query getNftById($id: jsonb, $collection_id: uuid!) {
  nft(
    where: {collection_id: {_eq: $collection_id}, template: {metadata: {_contains: $id}}}
  ) {
    asset_id
    is_for_sale
    collection_id
    created_at
    updated_at
    mint_number
    has_sale_offers
    transaction_status
    collection {
      collection_id
      name
      market_fee
      image
      description
      author
    }
    owner
    template {
      metadata
    }
    sale_offers {
      listing_resource_id
      price
      status
      updated_at
    }
  }
}
    `;

/**
 * __useGetNftByIdQuery__
 *
 * To run a query within a React component, call `useGetNftByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNftByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNftByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      collection_id: // value for 'collection_id'
 *   },
 * });
 */
export function useGetNftByIdQuery(baseOptions: Apollo.QueryHookOptions<GetNftByIdQuery, GetNftByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNftByIdQuery, GetNftByIdQueryVariables>(GetNftByIdDocument, options);
      }
export function useGetNftByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNftByIdQuery, GetNftByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNftByIdQuery, GetNftByIdQueryVariables>(GetNftByIdDocument, options);
        }
export type GetNftByIdQueryHookResult = ReturnType<typeof useGetNftByIdQuery>;
export type GetNftByIdLazyQueryHookResult = ReturnType<typeof useGetNftByIdLazyQuery>;
export type GetNftByIdQueryResult = Apollo.QueryResult<GetNftByIdQuery, GetNftByIdQueryVariables>;
export const GetNftByMintNumberDocument = gql`
    query getNftByMintNumber($filter: nft_bool_exp) {
  nft(where: $filter) {
    asset_id
    mint_number
    owner
    is_for_sale
    created_at
    updated_at
    collection_id
    transaction_status
    has_sale_offers
    collection {
      collection_id
      name
      market_fee
      image
      description
      author
    }
    sale_offers {
      status
      price
      listing_resource_id
      updated_at
    }
    template {
      metadata
    }
  }
}
    `;

/**
 * __useGetNftByMintNumberQuery__
 *
 * To run a query within a React component, call `useGetNftByMintNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNftByMintNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNftByMintNumberQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetNftByMintNumberQuery(baseOptions?: Apollo.QueryHookOptions<GetNftByMintNumberQuery, GetNftByMintNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNftByMintNumberQuery, GetNftByMintNumberQueryVariables>(GetNftByMintNumberDocument, options);
      }
export function useGetNftByMintNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNftByMintNumberQuery, GetNftByMintNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNftByMintNumberQuery, GetNftByMintNumberQueryVariables>(GetNftByMintNumberDocument, options);
        }
export type GetNftByMintNumberQueryHookResult = ReturnType<typeof useGetNftByMintNumberQuery>;
export type GetNftByMintNumberLazyQueryHookResult = ReturnType<typeof useGetNftByMintNumberLazyQuery>;
export type GetNftByMintNumberQueryResult = Apollo.QueryResult<GetNftByMintNumberQuery, GetNftByMintNumberQueryVariables>;
export const GetNfTsDocument = gql`
    query getNFTs {
  nft {
    asset_id
    owner
    id
  }
}
    `;

/**
 * __useGetNfTsQuery__
 *
 * To run a query within a React component, call `useGetNfTsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNfTsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNfTsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNfTsQuery(baseOptions?: Apollo.QueryHookOptions<GetNfTsQuery, GetNfTsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNfTsQuery, GetNfTsQueryVariables>(GetNfTsDocument, options);
      }
export function useGetNfTsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNfTsQuery, GetNfTsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNfTsQuery, GetNfTsQueryVariables>(GetNfTsDocument, options);
        }
export type GetNfTsQueryHookResult = ReturnType<typeof useGetNfTsQuery>;
export type GetNfTsLazyQueryHookResult = ReturnType<typeof useGetNfTsLazyQuery>;
export type GetNfTsQueryResult = Apollo.QueryResult<GetNfTsQuery, GetNfTsQueryVariables>;
export const GetMetadataIDsDocument = gql`
    query getMetadataIDs($collections: [nft_template_bool_exp!]) {
  nft_template(where: {_or: $collections}) {
    id: metadata(path: "$.id")
  }
}
    `;

/**
 * __useGetMetadataIDsQuery__
 *
 * To run a query within a React component, call `useGetMetadataIDsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMetadataIDsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMetadataIDsQuery({
 *   variables: {
 *      collections: // value for 'collections'
 *   },
 * });
 */
export function useGetMetadataIDsQuery(baseOptions?: Apollo.QueryHookOptions<GetMetadataIDsQuery, GetMetadataIDsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMetadataIDsQuery, GetMetadataIDsQueryVariables>(GetMetadataIDsDocument, options);
      }
export function useGetMetadataIDsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMetadataIDsQuery, GetMetadataIDsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMetadataIDsQuery, GetMetadataIDsQueryVariables>(GetMetadataIDsDocument, options);
        }
export type GetMetadataIDsQueryHookResult = ReturnType<typeof useGetMetadataIDsQuery>;
export type GetMetadataIDsLazyQueryHookResult = ReturnType<typeof useGetMetadataIDsLazyQuery>;
export type GetMetadataIDsQueryResult = Apollo.QueryResult<GetMetadataIDsQuery, GetMetadataIDsQueryVariables>;
export const GetNfTsMintNumberDocument = gql`
    query getNFTsMintNumber($collection_id: uuid!) {
  nft_collection(where: {id: {_eq: $collection_id}}) {
    nfts(order_by: {mint_number: asc}) {
      mint_number
    }
  }
}
    `;

/**
 * __useGetNfTsMintNumberQuery__
 *
 * To run a query within a React component, call `useGetNfTsMintNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNfTsMintNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNfTsMintNumberQuery({
 *   variables: {
 *      collection_id: // value for 'collection_id'
 *   },
 * });
 */
export function useGetNfTsMintNumberQuery(baseOptions: Apollo.QueryHookOptions<GetNfTsMintNumberQuery, GetNfTsMintNumberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNfTsMintNumberQuery, GetNfTsMintNumberQueryVariables>(GetNfTsMintNumberDocument, options);
      }
export function useGetNfTsMintNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNfTsMintNumberQuery, GetNfTsMintNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNfTsMintNumberQuery, GetNfTsMintNumberQueryVariables>(GetNfTsMintNumberDocument, options);
        }
export type GetNfTsMintNumberQueryHookResult = ReturnType<typeof useGetNfTsMintNumberQuery>;
export type GetNfTsMintNumberLazyQueryHookResult = ReturnType<typeof useGetNfTsMintNumberLazyQuery>;
export type GetNfTsMintNumberQueryResult = Apollo.QueryResult<GetNfTsMintNumberQuery, GetNfTsMintNumberQueryVariables>;
export const GetNfTsByAddressDocument = gql`
    query getNFTsByAddress($address: String!, $collections: [nft_bool_exp!]) {
  nft(where: {_or: $collections, owner: {_eq: $address}}) {
    asset_id
    mint_number
    is_for_sale
    has_sale_offers
    collection_id
    transaction_status
    collection {
      collection_id
      name
      market_fee
      image
      description
      author
    }
    owner
    template {
      metadata
    }
    sale_offers {
      listing_resource_id
      price
      status
      updated_at
    }
  }
}
    `;

/**
 * __useGetNfTsByAddressQuery__
 *
 * To run a query within a React component, call `useGetNfTsByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNfTsByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNfTsByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *      collections: // value for 'collections'
 *   },
 * });
 */
export function useGetNfTsByAddressQuery(baseOptions: Apollo.QueryHookOptions<GetNfTsByAddressQuery, GetNfTsByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNfTsByAddressQuery, GetNfTsByAddressQueryVariables>(GetNfTsByAddressDocument, options);
      }
export function useGetNfTsByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNfTsByAddressQuery, GetNfTsByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNfTsByAddressQuery, GetNfTsByAddressQueryVariables>(GetNfTsByAddressDocument, options);
        }
export type GetNfTsByAddressQueryHookResult = ReturnType<typeof useGetNfTsByAddressQuery>;
export type GetNfTsByAddressLazyQueryHookResult = ReturnType<typeof useGetNfTsByAddressLazyQuery>;
export type GetNfTsByAddressQueryResult = Apollo.QueryResult<GetNfTsByAddressQuery, GetNfTsByAddressQueryVariables>;
export const Nft_Sale_OfferDocument = gql`
    query nft_sale_offer($id: uuid!, $address: String!) {
  nft_sale_offer(
    where: {nft: {collection_id: {_eq: $id}, has_sale_offers: {_eq: true}, transaction_status: {_eq: false}, owner: {_eq: $address}}, status: {_eq: "active"}}
  ) {
    id
    listing_resource_id
    price
    status
    nft {
      asset_id
      is_for_sale
      has_sale_offers
      owner
      collection_id
      mint_number
      transaction_status
      template {
        id
        metadata
        template_id
      }
    }
  }
}
    `;

/**
 * __useNft_Sale_OfferQuery__
 *
 * To run a query within a React component, call `useNft_Sale_OfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useNft_Sale_OfferQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNft_Sale_OfferQuery({
 *   variables: {
 *      id: // value for 'id'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useNft_Sale_OfferQuery(baseOptions: Apollo.QueryHookOptions<Nft_Sale_OfferQuery, Nft_Sale_OfferQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Nft_Sale_OfferQuery, Nft_Sale_OfferQueryVariables>(Nft_Sale_OfferDocument, options);
      }
export function useNft_Sale_OfferLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Nft_Sale_OfferQuery, Nft_Sale_OfferQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Nft_Sale_OfferQuery, Nft_Sale_OfferQueryVariables>(Nft_Sale_OfferDocument, options);
        }
export type Nft_Sale_OfferQueryHookResult = ReturnType<typeof useNft_Sale_OfferQuery>;
export type Nft_Sale_OfferLazyQueryHookResult = ReturnType<typeof useNft_Sale_OfferLazyQuery>;
export type Nft_Sale_OfferQueryResult = Apollo.QueryResult<Nft_Sale_OfferQuery, Nft_Sale_OfferQueryVariables>;
export const GetSingleNfTsForSalDocument = gql`
    query getSingleNFTsForSal($id: uuid!, $address: String!) {
  nft_sale_offer(
    where: {status: {_eq: "active"}, nft: {collection_id: {_eq: $id}, has_sale_offers: {_eq: true}, transaction_status: {_eq: false}, owner: {_eq: $address}}}
  ) {
    listing_resource_id
    nft {
      asset_id
      mint_number
      is_for_sale
      has_sale_offers
      collection_id
      owner
      template {
        metadata
      }
    }
    price
    status
  }
}
    `;

/**
 * __useGetSingleNfTsForSalQuery__
 *
 * To run a query within a React component, call `useGetSingleNfTsForSalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleNfTsForSalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleNfTsForSalQuery({
 *   variables: {
 *      id: // value for 'id'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetSingleNfTsForSalQuery(baseOptions: Apollo.QueryHookOptions<GetSingleNfTsForSalQuery, GetSingleNfTsForSalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSingleNfTsForSalQuery, GetSingleNfTsForSalQueryVariables>(GetSingleNfTsForSalDocument, options);
      }
export function useGetSingleNfTsForSalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSingleNfTsForSalQuery, GetSingleNfTsForSalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSingleNfTsForSalQuery, GetSingleNfTsForSalQueryVariables>(GetSingleNfTsForSalDocument, options);
        }
export type GetSingleNfTsForSalQueryHookResult = ReturnType<typeof useGetSingleNfTsForSalQuery>;
export type GetSingleNfTsForSalLazyQueryHookResult = ReturnType<typeof useGetSingleNfTsForSalLazyQuery>;
export type GetSingleNfTsForSalQueryResult = Apollo.QueryResult<GetSingleNfTsForSalQuery, GetSingleNfTsForSalQueryVariables>;
export const Nfts_MarketplaceDocument = gql`
    query nfts_marketplace($has_sale_offers: Boolean_comparison_exp, $price: [nft_bool_exp!], $collections: [nft_bool_exp!], $properties: [nft_template_bool_exp!], $offset: Int, $orderBy: [nft_order_by!], $marketPlaceAddress: String) @cached(ttl: 120) {
  nft_aggregate(
    where: {_not: {owner: {_eq: $marketPlaceAddress}}, _or: $collections, has_sale_offers: $has_sale_offers, template: {_and: $properties}, _and: $price}
  ) {
    aggregate {
      count
    }
  }
  nft(
    where: {_not: {owner: {_eq: $marketPlaceAddress}}, _or: $collections, has_sale_offers: $has_sale_offers, template: {_and: $properties}, _and: $price}
    order_by: $orderBy
    limit: 40
    offset: $offset
  ) {
    asset_id
    mint_number
    owner
    has_sale_offers
    is_for_sale
    collection_id
    template {
      metadata
    }
    sale_offers {
      updated_at
      listing_resource_id
      price
      parsed_price
      status
    }
  }
}
    `;

/**
 * __useNfts_MarketplaceQuery__
 *
 * To run a query within a React component, call `useNfts_MarketplaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useNfts_MarketplaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNfts_MarketplaceQuery({
 *   variables: {
 *      has_sale_offers: // value for 'has_sale_offers'
 *      price: // value for 'price'
 *      collections: // value for 'collections'
 *      properties: // value for 'properties'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      marketPlaceAddress: // value for 'marketPlaceAddress'
 *   },
 * });
 */
export function useNfts_MarketplaceQuery(baseOptions?: Apollo.QueryHookOptions<Nfts_MarketplaceQuery, Nfts_MarketplaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Nfts_MarketplaceQuery, Nfts_MarketplaceQueryVariables>(Nfts_MarketplaceDocument, options);
      }
export function useNfts_MarketplaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Nfts_MarketplaceQuery, Nfts_MarketplaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Nfts_MarketplaceQuery, Nfts_MarketplaceQueryVariables>(Nfts_MarketplaceDocument, options);
        }
export type Nfts_MarketplaceQueryHookResult = ReturnType<typeof useNfts_MarketplaceQuery>;
export type Nfts_MarketplaceLazyQueryHookResult = ReturnType<typeof useNfts_MarketplaceLazyQuery>;
export type Nfts_MarketplaceQueryResult = Apollo.QueryResult<Nfts_MarketplaceQuery, Nfts_MarketplaceQueryVariables>;
export const GetMarketplaceNfTsCountDocument = gql`
    query getMarketplaceNFTsCount($has_sale_offers: Boolean_comparison_exp, $price: [nft_sale_offer_bool_exp!], $collections: [nft_bool_exp!], $properties: [nft_template_bool_exp!], $marketPlaceAddress: String) {
  nft_sale_offer_aggregate(
    where: {_and: $price, nft: {_not: {owner: {_eq: $marketPlaceAddress}}, _or: $collections, has_sale_offers: $has_sale_offers, template: {_and: $properties}}}
  ) {
    aggregate {
      count
    }
    nodes {
      nft {
        asset_id
      }
    }
  }
}
    `;

/**
 * __useGetMarketplaceNfTsCountQuery__
 *
 * To run a query within a React component, call `useGetMarketplaceNfTsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMarketplaceNfTsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMarketplaceNfTsCountQuery({
 *   variables: {
 *      has_sale_offers: // value for 'has_sale_offers'
 *      price: // value for 'price'
 *      collections: // value for 'collections'
 *      properties: // value for 'properties'
 *      marketPlaceAddress: // value for 'marketPlaceAddress'
 *   },
 * });
 */
export function useGetMarketplaceNfTsCountQuery(baseOptions?: Apollo.QueryHookOptions<GetMarketplaceNfTsCountQuery, GetMarketplaceNfTsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMarketplaceNfTsCountQuery, GetMarketplaceNfTsCountQueryVariables>(GetMarketplaceNfTsCountDocument, options);
      }
export function useGetMarketplaceNfTsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMarketplaceNfTsCountQuery, GetMarketplaceNfTsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMarketplaceNfTsCountQuery, GetMarketplaceNfTsCountQueryVariables>(GetMarketplaceNfTsCountDocument, options);
        }
export type GetMarketplaceNfTsCountQueryHookResult = ReturnType<typeof useGetMarketplaceNfTsCountQuery>;
export type GetMarketplaceNfTsCountLazyQueryHookResult = ReturnType<typeof useGetMarketplaceNfTsCountLazyQuery>;
export type GetMarketplaceNfTsCountQueryResult = Apollo.QueryResult<GetMarketplaceNfTsCountQuery, GetMarketplaceNfTsCountQueryVariables>;
export const GetCollectionFloorValueByIdDocument = gql`
    query getCollectionFloorValueById($collection_id: uuid!, $marketPlaceAddress: String) {
  nft_sale_offer(
    limit: 1
    where: {nft: {collection_id: {_eq: $collection_id}, _not: {owner: {_eq: $marketPlaceAddress}}}, status: {_eq: "active"}}
    order_by: {parsed_price: asc}
  ) {
    parsed_price
  }
}
    `;

/**
 * __useGetCollectionFloorValueByIdQuery__
 *
 * To run a query within a React component, call `useGetCollectionFloorValueByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionFloorValueByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionFloorValueByIdQuery({
 *   variables: {
 *      collection_id: // value for 'collection_id'
 *      marketPlaceAddress: // value for 'marketPlaceAddress'
 *   },
 * });
 */
export function useGetCollectionFloorValueByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCollectionFloorValueByIdQuery, GetCollectionFloorValueByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCollectionFloorValueByIdQuery, GetCollectionFloorValueByIdQueryVariables>(GetCollectionFloorValueByIdDocument, options);
      }
export function useGetCollectionFloorValueByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionFloorValueByIdQuery, GetCollectionFloorValueByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCollectionFloorValueByIdQuery, GetCollectionFloorValueByIdQueryVariables>(GetCollectionFloorValueByIdDocument, options);
        }
export type GetCollectionFloorValueByIdQueryHookResult = ReturnType<typeof useGetCollectionFloorValueByIdQuery>;
export type GetCollectionFloorValueByIdLazyQueryHookResult = ReturnType<typeof useGetCollectionFloorValueByIdLazyQuery>;
export type GetCollectionFloorValueByIdQueryResult = Apollo.QueryResult<GetCollectionFloorValueByIdQuery, GetCollectionFloorValueByIdQueryVariables>;