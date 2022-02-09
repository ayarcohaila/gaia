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
  date: any;
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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
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

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
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
  /** delete data from the table: "nfl_all_day_editions" */
  delete_nfl_all_day_editions?: Maybe<Nfl_All_Day_Editions_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_editions" */
  delete_nfl_all_day_editions_by_pk?: Maybe<Nfl_All_Day_Editions>;
  /** delete data from the table: "nfl_all_day_listings" */
  delete_nfl_all_day_listings?: Maybe<Nfl_All_Day_Listings_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_listings" */
  delete_nfl_all_day_listings_by_pk?: Maybe<Nfl_All_Day_Listings>;
  /** delete data from the table: "nfl_all_day_moment_transfers" */
  delete_nfl_all_day_moment_transfers?: Maybe<Nfl_All_Day_Moment_Transfers_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_moment_transfers" */
  delete_nfl_all_day_moment_transfers_by_pk?: Maybe<Nfl_All_Day_Moment_Transfers>;
  /** delete data from the table: "nfl_all_day_moments" */
  delete_nfl_all_day_moments?: Maybe<Nfl_All_Day_Moments_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_moments" */
  delete_nfl_all_day_moments_by_pk?: Maybe<Nfl_All_Day_Moments>;
  /** delete data from the table: "nfl_all_day_pack_moments" */
  delete_nfl_all_day_pack_moments?: Maybe<Nfl_All_Day_Pack_Moments_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_pack_moments" */
  delete_nfl_all_day_pack_moments_by_pk?: Maybe<Nfl_All_Day_Pack_Moments>;
  /** delete data from the table: "nfl_all_day_pack_transfers" */
  delete_nfl_all_day_pack_transfers?: Maybe<Nfl_All_Day_Pack_Transfers_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_pack_transfers" */
  delete_nfl_all_day_pack_transfers_by_pk?: Maybe<Nfl_All_Day_Pack_Transfers>;
  /** delete data from the table: "nfl_all_day_packs" */
  delete_nfl_all_day_packs?: Maybe<Nfl_All_Day_Packs_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_packs" */
  delete_nfl_all_day_packs_by_pk?: Maybe<Nfl_All_Day_Packs>;
  /** delete data from the table: "nfl_all_day_plays" */
  delete_nfl_all_day_plays?: Maybe<Nfl_All_Day_Plays_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_plays" */
  delete_nfl_all_day_plays_by_pk?: Maybe<Nfl_All_Day_Plays>;
  /** delete data from the table: "nfl_all_day_purchases" */
  delete_nfl_all_day_purchases?: Maybe<Nfl_All_Day_Purchases_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_purchases" */
  delete_nfl_all_day_purchases_by_pk?: Maybe<Nfl_All_Day_Purchases>;
  /** delete data from the table: "nfl_all_day_series" */
  delete_nfl_all_day_series?: Maybe<Nfl_All_Day_Series_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_series" */
  delete_nfl_all_day_series_by_pk?: Maybe<Nfl_All_Day_Series>;
  /** delete data from the table: "nfl_all_day_sets" */
  delete_nfl_all_day_sets?: Maybe<Nfl_All_Day_Sets_Mutation_Response>;
  /** delete single row from the table: "nfl_all_day_sets" */
  delete_nfl_all_day_sets_by_pk?: Maybe<Nfl_All_Day_Sets>;
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
  /** delete data from the table: "nft_favorites" */
  delete_nft_favorites?: Maybe<Nft_Favorites_Mutation_Response>;
  /** delete single row from the table: "nft_favorites" */
  delete_nft_favorites_by_pk?: Maybe<Nft_Favorites>;
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
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "notifications_types" */
  delete_notifications_types?: Maybe<Notifications_Types_Mutation_Response>;
  /** delete single row from the table: "notifications_types" */
  delete_notifications_types_by_pk?: Maybe<Notifications_Types>;
  /** insert data into the table: "nfl_all_day_editions" */
  insert_nfl_all_day_editions?: Maybe<Nfl_All_Day_Editions_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_editions" */
  insert_nfl_all_day_editions_one?: Maybe<Nfl_All_Day_Editions>;
  /** insert data into the table: "nfl_all_day_listings" */
  insert_nfl_all_day_listings?: Maybe<Nfl_All_Day_Listings_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_listings" */
  insert_nfl_all_day_listings_one?: Maybe<Nfl_All_Day_Listings>;
  /** insert data into the table: "nfl_all_day_moment_transfers" */
  insert_nfl_all_day_moment_transfers?: Maybe<Nfl_All_Day_Moment_Transfers_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_moment_transfers" */
  insert_nfl_all_day_moment_transfers_one?: Maybe<Nfl_All_Day_Moment_Transfers>;
  /** insert data into the table: "nfl_all_day_moments" */
  insert_nfl_all_day_moments?: Maybe<Nfl_All_Day_Moments_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_moments" */
  insert_nfl_all_day_moments_one?: Maybe<Nfl_All_Day_Moments>;
  /** insert data into the table: "nfl_all_day_pack_moments" */
  insert_nfl_all_day_pack_moments?: Maybe<Nfl_All_Day_Pack_Moments_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_pack_moments" */
  insert_nfl_all_day_pack_moments_one?: Maybe<Nfl_All_Day_Pack_Moments>;
  /** insert data into the table: "nfl_all_day_pack_transfers" */
  insert_nfl_all_day_pack_transfers?: Maybe<Nfl_All_Day_Pack_Transfers_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_pack_transfers" */
  insert_nfl_all_day_pack_transfers_one?: Maybe<Nfl_All_Day_Pack_Transfers>;
  /** insert data into the table: "nfl_all_day_packs" */
  insert_nfl_all_day_packs?: Maybe<Nfl_All_Day_Packs_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_packs" */
  insert_nfl_all_day_packs_one?: Maybe<Nfl_All_Day_Packs>;
  /** insert data into the table: "nfl_all_day_plays" */
  insert_nfl_all_day_plays?: Maybe<Nfl_All_Day_Plays_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_plays" */
  insert_nfl_all_day_plays_one?: Maybe<Nfl_All_Day_Plays>;
  /** insert data into the table: "nfl_all_day_purchases" */
  insert_nfl_all_day_purchases?: Maybe<Nfl_All_Day_Purchases_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_purchases" */
  insert_nfl_all_day_purchases_one?: Maybe<Nfl_All_Day_Purchases>;
  /** insert data into the table: "nfl_all_day_series" */
  insert_nfl_all_day_series?: Maybe<Nfl_All_Day_Series_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_series" */
  insert_nfl_all_day_series_one?: Maybe<Nfl_All_Day_Series>;
  /** insert data into the table: "nfl_all_day_sets" */
  insert_nfl_all_day_sets?: Maybe<Nfl_All_Day_Sets_Mutation_Response>;
  /** insert a single row into the table: "nfl_all_day_sets" */
  insert_nfl_all_day_sets_one?: Maybe<Nfl_All_Day_Sets>;
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
  /** insert data into the table: "nft_favorites" */
  insert_nft_favorites?: Maybe<Nft_Favorites_Mutation_Response>;
  /** insert a single row into the table: "nft_favorites" */
  insert_nft_favorites_one?: Maybe<Nft_Favorites>;
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
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "notifications_types" */
  insert_notifications_types?: Maybe<Notifications_Types_Mutation_Response>;
  /** insert a single row into the table: "notifications_types" */
  insert_notifications_types_one?: Maybe<Notifications_Types>;
  mint?: Maybe<MintOutput>;
  /** update data of the table: "nfl_all_day_editions" */
  update_nfl_all_day_editions?: Maybe<Nfl_All_Day_Editions_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_editions" */
  update_nfl_all_day_editions_by_pk?: Maybe<Nfl_All_Day_Editions>;
  /** update data of the table: "nfl_all_day_listings" */
  update_nfl_all_day_listings?: Maybe<Nfl_All_Day_Listings_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_listings" */
  update_nfl_all_day_listings_by_pk?: Maybe<Nfl_All_Day_Listings>;
  /** update data of the table: "nfl_all_day_moment_transfers" */
  update_nfl_all_day_moment_transfers?: Maybe<Nfl_All_Day_Moment_Transfers_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_moment_transfers" */
  update_nfl_all_day_moment_transfers_by_pk?: Maybe<Nfl_All_Day_Moment_Transfers>;
  /** update data of the table: "nfl_all_day_moments" */
  update_nfl_all_day_moments?: Maybe<Nfl_All_Day_Moments_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_moments" */
  update_nfl_all_day_moments_by_pk?: Maybe<Nfl_All_Day_Moments>;
  /** update data of the table: "nfl_all_day_pack_moments" */
  update_nfl_all_day_pack_moments?: Maybe<Nfl_All_Day_Pack_Moments_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_pack_moments" */
  update_nfl_all_day_pack_moments_by_pk?: Maybe<Nfl_All_Day_Pack_Moments>;
  /** update data of the table: "nfl_all_day_pack_transfers" */
  update_nfl_all_day_pack_transfers?: Maybe<Nfl_All_Day_Pack_Transfers_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_pack_transfers" */
  update_nfl_all_day_pack_transfers_by_pk?: Maybe<Nfl_All_Day_Pack_Transfers>;
  /** update data of the table: "nfl_all_day_packs" */
  update_nfl_all_day_packs?: Maybe<Nfl_All_Day_Packs_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_packs" */
  update_nfl_all_day_packs_by_pk?: Maybe<Nfl_All_Day_Packs>;
  /** update data of the table: "nfl_all_day_plays" */
  update_nfl_all_day_plays?: Maybe<Nfl_All_Day_Plays_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_plays" */
  update_nfl_all_day_plays_by_pk?: Maybe<Nfl_All_Day_Plays>;
  /** update data of the table: "nfl_all_day_purchases" */
  update_nfl_all_day_purchases?: Maybe<Nfl_All_Day_Purchases_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_purchases" */
  update_nfl_all_day_purchases_by_pk?: Maybe<Nfl_All_Day_Purchases>;
  /** update data of the table: "nfl_all_day_series" */
  update_nfl_all_day_series?: Maybe<Nfl_All_Day_Series_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_series" */
  update_nfl_all_day_series_by_pk?: Maybe<Nfl_All_Day_Series>;
  /** update data of the table: "nfl_all_day_sets" */
  update_nfl_all_day_sets?: Maybe<Nfl_All_Day_Sets_Mutation_Response>;
  /** update single row of the table: "nfl_all_day_sets" */
  update_nfl_all_day_sets_by_pk?: Maybe<Nfl_All_Day_Sets>;
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
  /** update data of the table: "nft_favorites" */
  update_nft_favorites?: Maybe<Nft_Favorites_Mutation_Response>;
  /** update single row of the table: "nft_favorites" */
  update_nft_favorites_by_pk?: Maybe<Nft_Favorites>;
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
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update data of the table: "notifications_types" */
  update_notifications_types?: Maybe<Notifications_Types_Mutation_Response>;
  /** update single row of the table: "notifications_types" */
  update_notifications_types_by_pk?: Maybe<Notifications_Types>;
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
export type Mutation_RootDelete_Nfl_All_Day_EditionsArgs = {
  where: Nfl_All_Day_Editions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Editions_By_PkArgs = {
  edition_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_ListingsArgs = {
  where: Nfl_All_Day_Listings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Listings_By_PkArgs = {
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Moment_TransfersArgs = {
  where: Nfl_All_Day_Moment_Transfers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Moment_Transfers_By_PkArgs = {
  block_height: Scalars['bigint'];
  event_index: Scalars['Int'];
  moment_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_MomentsArgs = {
  where: Nfl_All_Day_Moments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Moments_By_PkArgs = {
  moment_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Pack_MomentsArgs = {
  where: Nfl_All_Day_Pack_Moments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Pack_Moments_By_PkArgs = {
  moment_id: Scalars['bigint'];
  pack_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Pack_TransfersArgs = {
  where: Nfl_All_Day_Pack_Transfers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Pack_Transfers_By_PkArgs = {
  block_height: Scalars['bigint'];
  event_index: Scalars['Int'];
  pack_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_PacksArgs = {
  where: Nfl_All_Day_Packs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Packs_By_PkArgs = {
  pack_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_PlaysArgs = {
  where: Nfl_All_Day_Plays_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Plays_By_PkArgs = {
  play_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_PurchasesArgs = {
  where: Nfl_All_Day_Purchases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Purchases_By_PkArgs = {
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_SeriesArgs = {
  where: Nfl_All_Day_Series_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Series_By_PkArgs = {
  series_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_SetsArgs = {
  where: Nfl_All_Day_Sets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nfl_All_Day_Sets_By_PkArgs = {
  set_id: Scalars['bigint'];
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
export type Mutation_RootDelete_Nft_FavoritesArgs = {
  where: Nft_Favorites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nft_Favorites_By_PkArgs = {
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
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Notifications_TypesArgs = {
  where: Notifications_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_Types_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_EditionsArgs = {
  objects: Array<Nfl_All_Day_Editions_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Editions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Editions_OneArgs = {
  object: Nfl_All_Day_Editions_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Editions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_ListingsArgs = {
  objects: Array<Nfl_All_Day_Listings_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Listings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Listings_OneArgs = {
  object: Nfl_All_Day_Listings_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Listings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Moment_TransfersArgs = {
  objects: Array<Nfl_All_Day_Moment_Transfers_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Moment_Transfers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Moment_Transfers_OneArgs = {
  object: Nfl_All_Day_Moment_Transfers_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Moment_Transfers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_MomentsArgs = {
  objects: Array<Nfl_All_Day_Moments_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Moments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Moments_OneArgs = {
  object: Nfl_All_Day_Moments_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Moments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Pack_MomentsArgs = {
  objects: Array<Nfl_All_Day_Pack_Moments_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Pack_Moments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Pack_Moments_OneArgs = {
  object: Nfl_All_Day_Pack_Moments_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Pack_Moments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Pack_TransfersArgs = {
  objects: Array<Nfl_All_Day_Pack_Transfers_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Pack_Transfers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Pack_Transfers_OneArgs = {
  object: Nfl_All_Day_Pack_Transfers_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Pack_Transfers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_PacksArgs = {
  objects: Array<Nfl_All_Day_Packs_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Packs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Packs_OneArgs = {
  object: Nfl_All_Day_Packs_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Packs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_PlaysArgs = {
  objects: Array<Nfl_All_Day_Plays_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Plays_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Plays_OneArgs = {
  object: Nfl_All_Day_Plays_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Plays_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_PurchasesArgs = {
  objects: Array<Nfl_All_Day_Purchases_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Purchases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Purchases_OneArgs = {
  object: Nfl_All_Day_Purchases_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Purchases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_SeriesArgs = {
  objects: Array<Nfl_All_Day_Series_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Series_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Series_OneArgs = {
  object: Nfl_All_Day_Series_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Series_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_SetsArgs = {
  objects: Array<Nfl_All_Day_Sets_Insert_Input>;
  on_conflict?: InputMaybe<Nfl_All_Day_Sets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nfl_All_Day_Sets_OneArgs = {
  object: Nfl_All_Day_Sets_Insert_Input;
  on_conflict?: InputMaybe<Nfl_All_Day_Sets_On_Conflict>;
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
export type Mutation_RootInsert_Nft_FavoritesArgs = {
  objects: Array<Nft_Favorites_Insert_Input>;
  on_conflict?: InputMaybe<Nft_Favorites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nft_Favorites_OneArgs = {
  object: Nft_Favorites_Insert_Input;
  on_conflict?: InputMaybe<Nft_Favorites_On_Conflict>;
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
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_TypesArgs = {
  objects: Array<Notifications_Types_Insert_Input>;
  on_conflict?: InputMaybe<Notifications_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_Types_OneArgs = {
  object: Notifications_Types_Insert_Input;
  on_conflict?: InputMaybe<Notifications_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootMintArgs = {
  arg1: MintInput;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_EditionsArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Editions_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Editions_Set_Input>;
  where: Nfl_All_Day_Editions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Editions_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Editions_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Editions_Set_Input>;
  pk_columns: Nfl_All_Day_Editions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_ListingsArgs = {
  _append?: InputMaybe<Nfl_All_Day_Listings_Append_Input>;
  _delete_at_path?: InputMaybe<Nfl_All_Day_Listings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nfl_All_Day_Listings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nfl_All_Day_Listings_Delete_Key_Input>;
  _inc?: InputMaybe<Nfl_All_Day_Listings_Inc_Input>;
  _prepend?: InputMaybe<Nfl_All_Day_Listings_Prepend_Input>;
  _set?: InputMaybe<Nfl_All_Day_Listings_Set_Input>;
  where: Nfl_All_Day_Listings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Listings_By_PkArgs = {
  _append?: InputMaybe<Nfl_All_Day_Listings_Append_Input>;
  _delete_at_path?: InputMaybe<Nfl_All_Day_Listings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nfl_All_Day_Listings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nfl_All_Day_Listings_Delete_Key_Input>;
  _inc?: InputMaybe<Nfl_All_Day_Listings_Inc_Input>;
  _prepend?: InputMaybe<Nfl_All_Day_Listings_Prepend_Input>;
  _set?: InputMaybe<Nfl_All_Day_Listings_Set_Input>;
  pk_columns: Nfl_All_Day_Listings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Moment_TransfersArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Moment_Transfers_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Moment_Transfers_Set_Input>;
  where: Nfl_All_Day_Moment_Transfers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Moment_Transfers_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Moment_Transfers_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Moment_Transfers_Set_Input>;
  pk_columns: Nfl_All_Day_Moment_Transfers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_MomentsArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Moments_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Moments_Set_Input>;
  where: Nfl_All_Day_Moments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Moments_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Moments_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Moments_Set_Input>;
  pk_columns: Nfl_All_Day_Moments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Pack_MomentsArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Pack_Moments_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Pack_Moments_Set_Input>;
  where: Nfl_All_Day_Pack_Moments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Pack_Moments_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Pack_Moments_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Pack_Moments_Set_Input>;
  pk_columns: Nfl_All_Day_Pack_Moments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Pack_TransfersArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Pack_Transfers_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Pack_Transfers_Set_Input>;
  where: Nfl_All_Day_Pack_Transfers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Pack_Transfers_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Pack_Transfers_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Pack_Transfers_Set_Input>;
  pk_columns: Nfl_All_Day_Pack_Transfers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_PacksArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Packs_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Packs_Set_Input>;
  where: Nfl_All_Day_Packs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Packs_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Packs_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Packs_Set_Input>;
  pk_columns: Nfl_All_Day_Packs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_PlaysArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Plays_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Plays_Set_Input>;
  where: Nfl_All_Day_Plays_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Plays_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Plays_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Plays_Set_Input>;
  pk_columns: Nfl_All_Day_Plays_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_PurchasesArgs = {
  _append?: InputMaybe<Nfl_All_Day_Purchases_Append_Input>;
  _delete_at_path?: InputMaybe<Nfl_All_Day_Purchases_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nfl_All_Day_Purchases_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nfl_All_Day_Purchases_Delete_Key_Input>;
  _inc?: InputMaybe<Nfl_All_Day_Purchases_Inc_Input>;
  _prepend?: InputMaybe<Nfl_All_Day_Purchases_Prepend_Input>;
  _set?: InputMaybe<Nfl_All_Day_Purchases_Set_Input>;
  where: Nfl_All_Day_Purchases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Purchases_By_PkArgs = {
  _append?: InputMaybe<Nfl_All_Day_Purchases_Append_Input>;
  _delete_at_path?: InputMaybe<Nfl_All_Day_Purchases_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nfl_All_Day_Purchases_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nfl_All_Day_Purchases_Delete_Key_Input>;
  _inc?: InputMaybe<Nfl_All_Day_Purchases_Inc_Input>;
  _prepend?: InputMaybe<Nfl_All_Day_Purchases_Prepend_Input>;
  _set?: InputMaybe<Nfl_All_Day_Purchases_Set_Input>;
  pk_columns: Nfl_All_Day_Purchases_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_SeriesArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Series_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Series_Set_Input>;
  where: Nfl_All_Day_Series_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Series_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Series_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Series_Set_Input>;
  pk_columns: Nfl_All_Day_Series_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_SetsArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Sets_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Sets_Set_Input>;
  where: Nfl_All_Day_Sets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nfl_All_Day_Sets_By_PkArgs = {
  _inc?: InputMaybe<Nfl_All_Day_Sets_Inc_Input>;
  _set?: InputMaybe<Nfl_All_Day_Sets_Set_Input>;
  pk_columns: Nfl_All_Day_Sets_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Nft_FavoritesArgs = {
  _set?: InputMaybe<Nft_Favorites_Set_Input>;
  where: Nft_Favorites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nft_Favorites_By_PkArgs = {
  _set?: InputMaybe<Nft_Favorites_Set_Input>;
  pk_columns: Nft_Favorites_Pk_Columns_Input;
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


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_TypesArgs = {
  _set?: InputMaybe<Notifications_Types_Set_Input>;
  where: Notifications_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_Types_By_PkArgs = {
  _set?: InputMaybe<Notifications_Types_Set_Input>;
  pk_columns: Notifications_Types_Pk_Columns_Input;
};

/** columns and relationships of "nfl_all_day_editions" */
export type Nfl_All_Day_Editions = {
  block_height: Scalars['bigint'];
  circulation_count?: Maybe<Scalars['Int']>;
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  edition_id: Scalars['bigint'];
  event_index: Scalars['Int'];
  hidden_in_packs_count?: Maybe<Scalars['Int']>;
  inserted_at: Scalars['timestamptz'];
  max_list_price?: Maybe<Scalars['float8']>;
  max_mint_size?: Maybe<Scalars['Int']>;
  min_list_price?: Maybe<Scalars['float8']>;
  /** An array relationship */
  moments: Array<Nfl_All_Day_Moments>;
  /** An aggregate relationship */
  moments_aggregate: Nfl_All_Day_Moments_Aggregate;
  number_of_active_listings?: Maybe<Scalars['Int']>;
  /** An object relationship */
  play?: Maybe<Nfl_All_Day_Plays>;
  play_id: Scalars['bigint'];
  /** An object relationship */
  series?: Maybe<Nfl_All_Day_Series>;
  series_id: Scalars['bigint'];
  /** An object relationship */
  set?: Maybe<Nfl_All_Day_Sets>;
  set_id: Scalars['bigint'];
  tier: Scalars['String'];
  transaction_index: Scalars['Int'];
  unavailable_count?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "nfl_all_day_editions" */
export type Nfl_All_Day_EditionsMomentsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
};


/** columns and relationships of "nfl_all_day_editions" */
export type Nfl_All_Day_EditionsMoments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
};

/** aggregated selection of "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Editions_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Editions>;
};

/** aggregate fields of "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Editions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Editions_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Editions_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Editions_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Editions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Editions_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Editions_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Editions_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Editions_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Editions_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Editions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Editions_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  circulation_count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  hidden_in_packs_count?: Maybe<Scalars['Float']>;
  max_list_price?: Maybe<Scalars['Float']>;
  max_mint_size?: Maybe<Scalars['Float']>;
  min_list_price?: Maybe<Scalars['Float']>;
  number_of_active_listings?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
  unavailable_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_editions". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Editions_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Editions_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Editions_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Editions_Bool_Exp>>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  circulation_count?: InputMaybe<Int_Comparison_Exp>;
  closed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  edition_id?: InputMaybe<Bigint_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  hidden_in_packs_count?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  max_list_price?: InputMaybe<Float8_Comparison_Exp>;
  max_mint_size?: InputMaybe<Int_Comparison_Exp>;
  min_list_price?: InputMaybe<Float8_Comparison_Exp>;
  moments?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
  number_of_active_listings?: InputMaybe<Int_Comparison_Exp>;
  play?: InputMaybe<Nfl_All_Day_Plays_Bool_Exp>;
  play_id?: InputMaybe<Bigint_Comparison_Exp>;
  series?: InputMaybe<Nfl_All_Day_Series_Bool_Exp>;
  series_id?: InputMaybe<Bigint_Comparison_Exp>;
  set?: InputMaybe<Nfl_All_Day_Sets_Bool_Exp>;
  set_id?: InputMaybe<Bigint_Comparison_Exp>;
  tier?: InputMaybe<String_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
  unavailable_count?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_editions" */
export enum Nfl_All_Day_Editions_Constraint {
  /** unique or primary key constraint */
  NflAllDayEditionsPkey = 'nfl_all_day_editions_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  circulation_count?: InputMaybe<Scalars['Int']>;
  edition_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  hidden_in_packs_count?: InputMaybe<Scalars['Int']>;
  max_list_price?: InputMaybe<Scalars['float8']>;
  max_mint_size?: InputMaybe<Scalars['Int']>;
  min_list_price?: InputMaybe<Scalars['float8']>;
  number_of_active_listings?: InputMaybe<Scalars['Int']>;
  play_id?: InputMaybe<Scalars['bigint']>;
  series_id?: InputMaybe<Scalars['bigint']>;
  set_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
  unavailable_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_Insert_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  circulation_count?: InputMaybe<Scalars['Int']>;
  closed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  edition_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  hidden_in_packs_count?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  max_list_price?: InputMaybe<Scalars['float8']>;
  max_mint_size?: InputMaybe<Scalars['Int']>;
  min_list_price?: InputMaybe<Scalars['float8']>;
  moments?: InputMaybe<Nfl_All_Day_Moments_Arr_Rel_Insert_Input>;
  number_of_active_listings?: InputMaybe<Scalars['Int']>;
  play?: InputMaybe<Nfl_All_Day_Plays_Obj_Rel_Insert_Input>;
  play_id?: InputMaybe<Scalars['bigint']>;
  series?: InputMaybe<Nfl_All_Day_Series_Obj_Rel_Insert_Input>;
  series_id?: InputMaybe<Scalars['bigint']>;
  set?: InputMaybe<Nfl_All_Day_Sets_Obj_Rel_Insert_Input>;
  set_id?: InputMaybe<Scalars['bigint']>;
  tier?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
  unavailable_count?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Editions_Max_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  circulation_count?: Maybe<Scalars['Int']>;
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  hidden_in_packs_count?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  max_list_price?: Maybe<Scalars['float8']>;
  max_mint_size?: Maybe<Scalars['Int']>;
  min_list_price?: Maybe<Scalars['float8']>;
  number_of_active_listings?: Maybe<Scalars['Int']>;
  play_id?: Maybe<Scalars['bigint']>;
  series_id?: Maybe<Scalars['bigint']>;
  set_id?: Maybe<Scalars['bigint']>;
  tier?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Int']>;
  unavailable_count?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Editions_Min_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  circulation_count?: Maybe<Scalars['Int']>;
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  hidden_in_packs_count?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  max_list_price?: Maybe<Scalars['float8']>;
  max_mint_size?: Maybe<Scalars['Int']>;
  min_list_price?: Maybe<Scalars['float8']>;
  number_of_active_listings?: Maybe<Scalars['Int']>;
  play_id?: Maybe<Scalars['bigint']>;
  series_id?: Maybe<Scalars['bigint']>;
  set_id?: Maybe<Scalars['bigint']>;
  tier?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Int']>;
  unavailable_count?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Editions>;
};

/** input type for inserting object relation for remote table "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_Obj_Rel_Insert_Input = {
  data: Nfl_All_Day_Editions_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nfl_All_Day_Editions_On_Conflict>;
};

/** on conflict condition type for table "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_On_Conflict = {
  constraint: Nfl_All_Day_Editions_Constraint;
  update_columns?: Array<Nfl_All_Day_Editions_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Editions_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_editions". */
export type Nfl_All_Day_Editions_Order_By = {
  block_height?: InputMaybe<Order_By>;
  circulation_count?: InputMaybe<Order_By>;
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  hidden_in_packs_count?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  max_list_price?: InputMaybe<Order_By>;
  max_mint_size?: InputMaybe<Order_By>;
  min_list_price?: InputMaybe<Order_By>;
  moments_aggregate?: InputMaybe<Nfl_All_Day_Moments_Aggregate_Order_By>;
  number_of_active_listings?: InputMaybe<Order_By>;
  play?: InputMaybe<Nfl_All_Day_Plays_Order_By>;
  play_id?: InputMaybe<Order_By>;
  series?: InputMaybe<Nfl_All_Day_Series_Order_By>;
  series_id?: InputMaybe<Order_By>;
  set?: InputMaybe<Nfl_All_Day_Sets_Order_By>;
  set_id?: InputMaybe<Order_By>;
  tier?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
  unavailable_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_editions */
export type Nfl_All_Day_Editions_Pk_Columns_Input = {
  edition_id: Scalars['bigint'];
};

/** select columns of table "nfl_all_day_editions" */
export enum Nfl_All_Day_Editions_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CirculationCount = 'circulation_count',
  /** column name */
  ClosedAt = 'closed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  HiddenInPacksCount = 'hidden_in_packs_count',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  MaxListPrice = 'max_list_price',
  /** column name */
  MaxMintSize = 'max_mint_size',
  /** column name */
  MinListPrice = 'min_list_price',
  /** column name */
  NumberOfActiveListings = 'number_of_active_listings',
  /** column name */
  PlayId = 'play_id',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  SetId = 'set_id',
  /** column name */
  Tier = 'tier',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  UnavailableCount = 'unavailable_count'
}

/** input type for updating data in table "nfl_all_day_editions" */
export type Nfl_All_Day_Editions_Set_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  circulation_count?: InputMaybe<Scalars['Int']>;
  closed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  edition_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  hidden_in_packs_count?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  max_list_price?: InputMaybe<Scalars['float8']>;
  max_mint_size?: InputMaybe<Scalars['Int']>;
  min_list_price?: InputMaybe<Scalars['float8']>;
  number_of_active_listings?: InputMaybe<Scalars['Int']>;
  play_id?: InputMaybe<Scalars['bigint']>;
  series_id?: InputMaybe<Scalars['bigint']>;
  set_id?: InputMaybe<Scalars['bigint']>;
  tier?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
  unavailable_count?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Editions_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  circulation_count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  hidden_in_packs_count?: Maybe<Scalars['Float']>;
  max_list_price?: Maybe<Scalars['Float']>;
  max_mint_size?: Maybe<Scalars['Float']>;
  min_list_price?: Maybe<Scalars['Float']>;
  number_of_active_listings?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
  unavailable_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Editions_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  circulation_count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  hidden_in_packs_count?: Maybe<Scalars['Float']>;
  max_list_price?: Maybe<Scalars['Float']>;
  max_mint_size?: Maybe<Scalars['Float']>;
  min_list_price?: Maybe<Scalars['Float']>;
  number_of_active_listings?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
  unavailable_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Editions_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  circulation_count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  hidden_in_packs_count?: Maybe<Scalars['Float']>;
  max_list_price?: Maybe<Scalars['Float']>;
  max_mint_size?: Maybe<Scalars['Float']>;
  min_list_price?: Maybe<Scalars['Float']>;
  number_of_active_listings?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
  unavailable_count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Editions_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  circulation_count?: Maybe<Scalars['Int']>;
  edition_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  hidden_in_packs_count?: Maybe<Scalars['Int']>;
  max_list_price?: Maybe<Scalars['float8']>;
  max_mint_size?: Maybe<Scalars['Int']>;
  min_list_price?: Maybe<Scalars['float8']>;
  number_of_active_listings?: Maybe<Scalars['Int']>;
  play_id?: Maybe<Scalars['bigint']>;
  series_id?: Maybe<Scalars['bigint']>;
  set_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
  unavailable_count?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_editions" */
export enum Nfl_All_Day_Editions_Update_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CirculationCount = 'circulation_count',
  /** column name */
  ClosedAt = 'closed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  HiddenInPacksCount = 'hidden_in_packs_count',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  MaxListPrice = 'max_list_price',
  /** column name */
  MaxMintSize = 'max_mint_size',
  /** column name */
  MinListPrice = 'min_list_price',
  /** column name */
  NumberOfActiveListings = 'number_of_active_listings',
  /** column name */
  PlayId = 'play_id',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  SetId = 'set_id',
  /** column name */
  Tier = 'tier',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  UnavailableCount = 'unavailable_count'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Editions_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  circulation_count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  hidden_in_packs_count?: Maybe<Scalars['Float']>;
  max_list_price?: Maybe<Scalars['Float']>;
  max_mint_size?: Maybe<Scalars['Float']>;
  min_list_price?: Maybe<Scalars['Float']>;
  number_of_active_listings?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
  unavailable_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Editions_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  circulation_count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  hidden_in_packs_count?: Maybe<Scalars['Float']>;
  max_list_price?: Maybe<Scalars['Float']>;
  max_mint_size?: Maybe<Scalars['Float']>;
  min_list_price?: Maybe<Scalars['Float']>;
  number_of_active_listings?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
  unavailable_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Editions_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  circulation_count?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  hidden_in_packs_count?: Maybe<Scalars['Float']>;
  max_list_price?: Maybe<Scalars['Float']>;
  max_mint_size?: Maybe<Scalars['Float']>;
  min_list_price?: Maybe<Scalars['Float']>;
  number_of_active_listings?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
  unavailable_count?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_listings" */
export type Nfl_All_Day_Listings = {
  block_height: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  nft_id: Scalars['bigint'];
  nft_type: Scalars['String'];
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
  payments: Scalars['jsonb'];
  price: Scalars['float8'];
  purchased_at?: Maybe<Scalars['timestamptz']>;
  removed_at?: Maybe<Scalars['timestamptz']>;
  transaction_index: Scalars['Int'];
  vault_type: Scalars['String'];
};


/** columns and relationships of "nfl_all_day_listings" */
export type Nfl_All_Day_ListingsPaymentsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "nfl_all_day_listings" */
export type Nfl_All_Day_Listings_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Listings_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Listings>;
};

/** aggregate fields of "nfl_all_day_listings" */
export type Nfl_All_Day_Listings_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Listings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Listings_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Listings_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Listings_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Listings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Listings_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Listings_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Listings_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Listings_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Listings_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_listings" */
export type Nfl_All_Day_Listings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Listings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Nfl_All_Day_Listings_Append_Input = {
  payments?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Listings_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_listings". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Listings_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Listings_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Listings_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Listings_Bool_Exp>>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  nft_id?: InputMaybe<Bigint_Comparison_Exp>;
  nft_type?: InputMaybe<String_Comparison_Exp>;
  order_address?: InputMaybe<String_Comparison_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  payments?: InputMaybe<Jsonb_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  purchased_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  removed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
  vault_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_listings" */
export enum Nfl_All_Day_Listings_Constraint {
  /** unique or primary key constraint */
  NflAllDayListingsPkey = 'nfl_all_day_listings_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Nfl_All_Day_Listings_Delete_At_Path_Input = {
  payments?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Nfl_All_Day_Listings_Delete_Elem_Input = {
  payments?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Nfl_All_Day_Listings_Delete_Key_Input = {
  payments?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "nfl_all_day_listings" */
export type Nfl_All_Day_Listings_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  nft_id?: InputMaybe<Scalars['bigint']>;
  order_id?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['float8']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_listings" */
export type Nfl_All_Day_Listings_Insert_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  nft_id?: InputMaybe<Scalars['bigint']>;
  nft_type?: InputMaybe<Scalars['String']>;
  order_address?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['bigint']>;
  payments?: InputMaybe<Scalars['jsonb']>;
  price?: InputMaybe<Scalars['float8']>;
  purchased_at?: InputMaybe<Scalars['timestamptz']>;
  removed_at?: InputMaybe<Scalars['timestamptz']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
  vault_type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Listings_Max_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  nft_id?: Maybe<Scalars['bigint']>;
  nft_type?: Maybe<Scalars['String']>;
  order_address?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  purchased_at?: Maybe<Scalars['timestamptz']>;
  removed_at?: Maybe<Scalars['timestamptz']>;
  transaction_index?: Maybe<Scalars['Int']>;
  vault_type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Listings_Min_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  nft_id?: Maybe<Scalars['bigint']>;
  nft_type?: Maybe<Scalars['String']>;
  order_address?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  purchased_at?: Maybe<Scalars['timestamptz']>;
  removed_at?: Maybe<Scalars['timestamptz']>;
  transaction_index?: Maybe<Scalars['Int']>;
  vault_type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "nfl_all_day_listings" */
export type Nfl_All_Day_Listings_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Listings>;
};

/** on conflict condition type for table "nfl_all_day_listings" */
export type Nfl_All_Day_Listings_On_Conflict = {
  constraint: Nfl_All_Day_Listings_Constraint;
  update_columns?: Array<Nfl_All_Day_Listings_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Listings_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_listings". */
export type Nfl_All_Day_Listings_Order_By = {
  block_height?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  nft_type?: InputMaybe<Order_By>;
  order_address?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  payments?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  purchased_at?: InputMaybe<Order_By>;
  removed_at?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_listings */
export type Nfl_All_Day_Listings_Pk_Columns_Input = {
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Nfl_All_Day_Listings_Prepend_Input = {
  payments?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "nfl_all_day_listings" */
export enum Nfl_All_Day_Listings_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  OrderAddress = 'order_address',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Payments = 'payments',
  /** column name */
  Price = 'price',
  /** column name */
  PurchasedAt = 'purchased_at',
  /** column name */
  RemovedAt = 'removed_at',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  VaultType = 'vault_type'
}

/** input type for updating data in table "nfl_all_day_listings" */
export type Nfl_All_Day_Listings_Set_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  nft_id?: InputMaybe<Scalars['bigint']>;
  nft_type?: InputMaybe<Scalars['String']>;
  order_address?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['bigint']>;
  payments?: InputMaybe<Scalars['jsonb']>;
  price?: InputMaybe<Scalars['float8']>;
  purchased_at?: InputMaybe<Scalars['timestamptz']>;
  removed_at?: InputMaybe<Scalars['timestamptz']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
  vault_type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Listings_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Listings_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Listings_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Listings_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  nft_id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_listings" */
export enum Nfl_All_Day_Listings_Update_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  OrderAddress = 'order_address',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Payments = 'payments',
  /** column name */
  Price = 'price',
  /** column name */
  PurchasedAt = 'purchased_at',
  /** column name */
  RemovedAt = 'removed_at',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  VaultType = 'vault_type'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Listings_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Listings_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Listings_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers = {
  block_height: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  moment_id: Scalars['bigint'];
  owner?: Maybe<Scalars['String']>;
  transaction_index: Scalars['Int'];
};

/** aggregated selection of "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Moment_Transfers_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Moment_Transfers>;
};

/** aggregate fields of "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Moment_Transfers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Moment_Transfers_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Moment_Transfers_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Moment_Transfers_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Moment_Transfers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Moment_Transfers_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Moment_Transfers_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Moment_Transfers_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Moment_Transfers_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Moment_Transfers_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Moment_Transfers_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_moment_transfers". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Moment_Transfers_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Moment_Transfers_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Bool_Exp>>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  moment_id?: InputMaybe<Bigint_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_moment_transfers" */
export enum Nfl_All_Day_Moment_Transfers_Constraint {
  /** unique or primary key constraint */
  MomentTransfersPkey = 'moment_transfers_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers_Insert_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  owner?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Moment_Transfers_Max_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  moment_id?: Maybe<Scalars['bigint']>;
  owner?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Moment_Transfers_Min_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  moment_id?: Maybe<Scalars['bigint']>;
  owner?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Moment_Transfers>;
};

/** on conflict condition type for table "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers_On_Conflict = {
  constraint: Nfl_All_Day_Moment_Transfers_Constraint;
  update_columns?: Array<Nfl_All_Day_Moment_Transfers_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Moment_Transfers_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_moment_transfers". */
export type Nfl_All_Day_Moment_Transfers_Order_By = {
  block_height?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_moment_transfers */
export type Nfl_All_Day_Moment_Transfers_Pk_Columns_Input = {
  block_height: Scalars['bigint'];
  event_index: Scalars['Int'];
  moment_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};

/** select columns of table "nfl_all_day_moment_transfers" */
export enum Nfl_All_Day_Moment_Transfers_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  MomentId = 'moment_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "nfl_all_day_moment_transfers" */
export type Nfl_All_Day_Moment_Transfers_Set_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  owner?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Moment_Transfers_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Moment_Transfers_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Moment_Transfers_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Moment_Transfers_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  moment_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_moment_transfers" */
export enum Nfl_All_Day_Moment_Transfers_Update_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  MomentId = 'moment_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Moment_Transfers_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Moment_Transfers_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Moment_Transfers_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_moments" */
export type Nfl_All_Day_Moments = {
  acquired_at?: Maybe<Scalars['timestamptz']>;
  active_listing_block_height?: Maybe<Scalars['bigint']>;
  active_listing_date?: Maybe<Scalars['timestamptz']>;
  active_listing_event_index?: Maybe<Scalars['Int']>;
  active_listing_order_address?: Maybe<Scalars['String']>;
  active_listing_order_id?: Maybe<Scalars['bigint']>;
  active_listing_price?: Maybe<Scalars['float8']>;
  active_listing_transaction_index?: Maybe<Scalars['Int']>;
  active_listing_vault_type?: Maybe<Scalars['String']>;
  block_height: Scalars['bigint'];
  burned_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  edition?: Maybe<Nfl_All_Day_Editions>;
  edition_id: Scalars['bigint'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  moment_id: Scalars['bigint'];
  owner?: Maybe<Scalars['String']>;
  serial_number: Scalars['Int'];
  transaction_index: Scalars['Int'];
};

/** aggregated selection of "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Moments_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Moments>;
};

/** aggregate fields of "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Moments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Moments_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Moments_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Moments_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Moments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Moments_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Moments_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Moments_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Moments_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Moments_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Moments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Aggregate_Order_By = {
  avg?: InputMaybe<Nfl_All_Day_Moments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nfl_All_Day_Moments_Max_Order_By>;
  min?: InputMaybe<Nfl_All_Day_Moments_Min_Order_By>;
  stddev?: InputMaybe<Nfl_All_Day_Moments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nfl_All_Day_Moments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nfl_All_Day_Moments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nfl_All_Day_Moments_Sum_Order_By>;
  var_pop?: InputMaybe<Nfl_All_Day_Moments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nfl_All_Day_Moments_Var_Samp_Order_By>;
  variance?: InputMaybe<Nfl_All_Day_Moments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Arr_Rel_Insert_Input = {
  data: Array<Nfl_All_Day_Moments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nfl_All_Day_Moments_On_Conflict>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Moments_Avg_Fields = {
  active_listing_block_height?: Maybe<Scalars['Float']>;
  active_listing_event_index?: Maybe<Scalars['Float']>;
  active_listing_order_id?: Maybe<Scalars['Float']>;
  active_listing_price?: Maybe<Scalars['Float']>;
  active_listing_transaction_index?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Avg_Order_By = {
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_moments". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Moments_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Moments_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Moments_Bool_Exp>>;
  acquired_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  active_listing_block_height?: InputMaybe<Bigint_Comparison_Exp>;
  active_listing_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  active_listing_event_index?: InputMaybe<Int_Comparison_Exp>;
  active_listing_order_address?: InputMaybe<String_Comparison_Exp>;
  active_listing_order_id?: InputMaybe<Bigint_Comparison_Exp>;
  active_listing_price?: InputMaybe<Float8_Comparison_Exp>;
  active_listing_transaction_index?: InputMaybe<Int_Comparison_Exp>;
  active_listing_vault_type?: InputMaybe<String_Comparison_Exp>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  burned_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  edition?: InputMaybe<Nfl_All_Day_Editions_Bool_Exp>;
  edition_id?: InputMaybe<Bigint_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  moment_id?: InputMaybe<Bigint_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  serial_number?: InputMaybe<Int_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_moments" */
export enum Nfl_All_Day_Moments_Constraint {
  /** unique or primary key constraint */
  NflAllDayMomentsEditionIdSerialNumberKey = 'nfl_all_day_moments_edition_id_serial_number_key',
  /** unique or primary key constraint */
  NflAllDayMomentsPkey = 'nfl_all_day_moments_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Inc_Input = {
  active_listing_block_height?: InputMaybe<Scalars['bigint']>;
  active_listing_event_index?: InputMaybe<Scalars['Int']>;
  active_listing_order_id?: InputMaybe<Scalars['bigint']>;
  active_listing_price?: InputMaybe<Scalars['float8']>;
  active_listing_transaction_index?: InputMaybe<Scalars['Int']>;
  block_height?: InputMaybe<Scalars['bigint']>;
  edition_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  serial_number?: InputMaybe<Scalars['Int']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Insert_Input = {
  acquired_at?: InputMaybe<Scalars['timestamptz']>;
  active_listing_block_height?: InputMaybe<Scalars['bigint']>;
  active_listing_date?: InputMaybe<Scalars['timestamptz']>;
  active_listing_event_index?: InputMaybe<Scalars['Int']>;
  active_listing_order_address?: InputMaybe<Scalars['String']>;
  active_listing_order_id?: InputMaybe<Scalars['bigint']>;
  active_listing_price?: InputMaybe<Scalars['float8']>;
  active_listing_transaction_index?: InputMaybe<Scalars['Int']>;
  active_listing_vault_type?: InputMaybe<Scalars['String']>;
  block_height?: InputMaybe<Scalars['bigint']>;
  burned_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  edition?: InputMaybe<Nfl_All_Day_Editions_Obj_Rel_Insert_Input>;
  edition_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  owner?: InputMaybe<Scalars['String']>;
  serial_number?: InputMaybe<Scalars['Int']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Moments_Max_Fields = {
  acquired_at?: Maybe<Scalars['timestamptz']>;
  active_listing_block_height?: Maybe<Scalars['bigint']>;
  active_listing_date?: Maybe<Scalars['timestamptz']>;
  active_listing_event_index?: Maybe<Scalars['Int']>;
  active_listing_order_address?: Maybe<Scalars['String']>;
  active_listing_order_id?: Maybe<Scalars['bigint']>;
  active_listing_price?: Maybe<Scalars['float8']>;
  active_listing_transaction_index?: Maybe<Scalars['Int']>;
  active_listing_vault_type?: Maybe<Scalars['String']>;
  block_height?: Maybe<Scalars['bigint']>;
  burned_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  moment_id?: Maybe<Scalars['bigint']>;
  owner?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['Int']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Max_Order_By = {
  acquired_at?: InputMaybe<Order_By>;
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_date?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_address?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  active_listing_vault_type?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  burned_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Moments_Min_Fields = {
  acquired_at?: Maybe<Scalars['timestamptz']>;
  active_listing_block_height?: Maybe<Scalars['bigint']>;
  active_listing_date?: Maybe<Scalars['timestamptz']>;
  active_listing_event_index?: Maybe<Scalars['Int']>;
  active_listing_order_address?: Maybe<Scalars['String']>;
  active_listing_order_id?: Maybe<Scalars['bigint']>;
  active_listing_price?: Maybe<Scalars['float8']>;
  active_listing_transaction_index?: Maybe<Scalars['Int']>;
  active_listing_vault_type?: Maybe<Scalars['String']>;
  block_height?: Maybe<Scalars['bigint']>;
  burned_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  edition_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  moment_id?: Maybe<Scalars['bigint']>;
  owner?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['Int']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Min_Order_By = {
  acquired_at?: InputMaybe<Order_By>;
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_date?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_address?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  active_listing_vault_type?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  burned_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Moments>;
};

/** on conflict condition type for table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_On_Conflict = {
  constraint: Nfl_All_Day_Moments_Constraint;
  update_columns?: Array<Nfl_All_Day_Moments_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_moments". */
export type Nfl_All_Day_Moments_Order_By = {
  acquired_at?: InputMaybe<Order_By>;
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_date?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_address?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  active_listing_vault_type?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  burned_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  edition?: InputMaybe<Nfl_All_Day_Editions_Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_moments */
export type Nfl_All_Day_Moments_Pk_Columns_Input = {
  moment_id: Scalars['bigint'];
};

/** select columns of table "nfl_all_day_moments" */
export enum Nfl_All_Day_Moments_Select_Column {
  /** column name */
  AcquiredAt = 'acquired_at',
  /** column name */
  ActiveListingBlockHeight = 'active_listing_block_height',
  /** column name */
  ActiveListingDate = 'active_listing_date',
  /** column name */
  ActiveListingEventIndex = 'active_listing_event_index',
  /** column name */
  ActiveListingOrderAddress = 'active_listing_order_address',
  /** column name */
  ActiveListingOrderId = 'active_listing_order_id',
  /** column name */
  ActiveListingPrice = 'active_listing_price',
  /** column name */
  ActiveListingTransactionIndex = 'active_listing_transaction_index',
  /** column name */
  ActiveListingVaultType = 'active_listing_vault_type',
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  BurnedAt = 'burned_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  MomentId = 'moment_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Set_Input = {
  acquired_at?: InputMaybe<Scalars['timestamptz']>;
  active_listing_block_height?: InputMaybe<Scalars['bigint']>;
  active_listing_date?: InputMaybe<Scalars['timestamptz']>;
  active_listing_event_index?: InputMaybe<Scalars['Int']>;
  active_listing_order_address?: InputMaybe<Scalars['String']>;
  active_listing_order_id?: InputMaybe<Scalars['bigint']>;
  active_listing_price?: InputMaybe<Scalars['float8']>;
  active_listing_transaction_index?: InputMaybe<Scalars['Int']>;
  active_listing_vault_type?: InputMaybe<Scalars['String']>;
  block_height?: InputMaybe<Scalars['bigint']>;
  burned_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  edition_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  owner?: InputMaybe<Scalars['String']>;
  serial_number?: InputMaybe<Scalars['Int']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Moments_Stddev_Fields = {
  active_listing_block_height?: Maybe<Scalars['Float']>;
  active_listing_event_index?: Maybe<Scalars['Float']>;
  active_listing_order_id?: Maybe<Scalars['Float']>;
  active_listing_price?: Maybe<Scalars['Float']>;
  active_listing_transaction_index?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Stddev_Order_By = {
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Moments_Stddev_Pop_Fields = {
  active_listing_block_height?: Maybe<Scalars['Float']>;
  active_listing_event_index?: Maybe<Scalars['Float']>;
  active_listing_order_id?: Maybe<Scalars['Float']>;
  active_listing_price?: Maybe<Scalars['Float']>;
  active_listing_transaction_index?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Stddev_Pop_Order_By = {
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Moments_Stddev_Samp_Fields = {
  active_listing_block_height?: Maybe<Scalars['Float']>;
  active_listing_event_index?: Maybe<Scalars['Float']>;
  active_listing_order_id?: Maybe<Scalars['Float']>;
  active_listing_price?: Maybe<Scalars['Float']>;
  active_listing_transaction_index?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Stddev_Samp_Order_By = {
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Moments_Sum_Fields = {
  active_listing_block_height?: Maybe<Scalars['bigint']>;
  active_listing_event_index?: Maybe<Scalars['Int']>;
  active_listing_order_id?: Maybe<Scalars['bigint']>;
  active_listing_price?: Maybe<Scalars['float8']>;
  active_listing_transaction_index?: Maybe<Scalars['Int']>;
  block_height?: Maybe<Scalars['bigint']>;
  edition_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  moment_id?: Maybe<Scalars['bigint']>;
  serial_number?: Maybe<Scalars['Int']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Sum_Order_By = {
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** update columns of table "nfl_all_day_moments" */
export enum Nfl_All_Day_Moments_Update_Column {
  /** column name */
  AcquiredAt = 'acquired_at',
  /** column name */
  ActiveListingBlockHeight = 'active_listing_block_height',
  /** column name */
  ActiveListingDate = 'active_listing_date',
  /** column name */
  ActiveListingEventIndex = 'active_listing_event_index',
  /** column name */
  ActiveListingOrderAddress = 'active_listing_order_address',
  /** column name */
  ActiveListingOrderId = 'active_listing_order_id',
  /** column name */
  ActiveListingPrice = 'active_listing_price',
  /** column name */
  ActiveListingTransactionIndex = 'active_listing_transaction_index',
  /** column name */
  ActiveListingVaultType = 'active_listing_vault_type',
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  BurnedAt = 'burned_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EditionId = 'edition_id',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  MomentId = 'moment_id',
  /** column name */
  Owner = 'owner',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Moments_Var_Pop_Fields = {
  active_listing_block_height?: Maybe<Scalars['Float']>;
  active_listing_event_index?: Maybe<Scalars['Float']>;
  active_listing_order_id?: Maybe<Scalars['Float']>;
  active_listing_price?: Maybe<Scalars['Float']>;
  active_listing_transaction_index?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Var_Pop_Order_By = {
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Moments_Var_Samp_Fields = {
  active_listing_block_height?: Maybe<Scalars['Float']>;
  active_listing_event_index?: Maybe<Scalars['Float']>;
  active_listing_order_id?: Maybe<Scalars['Float']>;
  active_listing_price?: Maybe<Scalars['Float']>;
  active_listing_transaction_index?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Var_Samp_Order_By = {
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Moments_Variance_Fields = {
  active_listing_block_height?: Maybe<Scalars['Float']>;
  active_listing_event_index?: Maybe<Scalars['Float']>;
  active_listing_order_id?: Maybe<Scalars['Float']>;
  active_listing_price?: Maybe<Scalars['Float']>;
  active_listing_transaction_index?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  edition_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nfl_all_day_moments" */
export type Nfl_All_Day_Moments_Variance_Order_By = {
  active_listing_block_height?: InputMaybe<Order_By>;
  active_listing_event_index?: InputMaybe<Order_By>;
  active_listing_order_id?: InputMaybe<Order_By>;
  active_listing_price?: InputMaybe<Order_By>;
  active_listing_transaction_index?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  edition_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments = {
  block_height: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  moment_id: Scalars['bigint'];
  pack_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};

/** aggregated selection of "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Pack_Moments_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Pack_Moments>;
};

/** aggregate fields of "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Pack_Moments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Pack_Moments_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Pack_Moments_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Pack_Moments_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Pack_Moments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Pack_Moments_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Pack_Moments_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Pack_Moments_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Pack_Moments_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Pack_Moments_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Pack_Moments_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_pack_moments". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Pack_Moments_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Pack_Moments_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Bool_Exp>>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  moment_id?: InputMaybe<Bigint_Comparison_Exp>;
  pack_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_pack_moments" */
export enum Nfl_All_Day_Pack_Moments_Constraint {
  /** unique or primary key constraint */
  PackMomentsPkey = 'pack_moments_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments_Insert_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Pack_Moments_Max_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  moment_id?: Maybe<Scalars['bigint']>;
  pack_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Pack_Moments_Min_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  moment_id?: Maybe<Scalars['bigint']>;
  pack_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Pack_Moments>;
};

/** on conflict condition type for table "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments_On_Conflict = {
  constraint: Nfl_All_Day_Pack_Moments_Constraint;
  update_columns?: Array<Nfl_All_Day_Pack_Moments_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Pack_Moments_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_pack_moments". */
export type Nfl_All_Day_Pack_Moments_Order_By = {
  block_height?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  moment_id?: InputMaybe<Order_By>;
  pack_id?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_pack_moments */
export type Nfl_All_Day_Pack_Moments_Pk_Columns_Input = {
  moment_id: Scalars['bigint'];
  pack_id: Scalars['bigint'];
};

/** select columns of table "nfl_all_day_pack_moments" */
export enum Nfl_All_Day_Pack_Moments_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  MomentId = 'moment_id',
  /** column name */
  PackId = 'pack_id',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "nfl_all_day_pack_moments" */
export type Nfl_All_Day_Pack_Moments_Set_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  moment_id?: InputMaybe<Scalars['bigint']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Pack_Moments_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Pack_Moments_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Pack_Moments_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Pack_Moments_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  moment_id?: Maybe<Scalars['bigint']>;
  pack_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_pack_moments" */
export enum Nfl_All_Day_Pack_Moments_Update_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  MomentId = 'moment_id',
  /** column name */
  PackId = 'pack_id',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Pack_Moments_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Pack_Moments_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Pack_Moments_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  moment_id?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers = {
  block_height: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  owner?: Maybe<Scalars['String']>;
  pack_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};

/** aggregated selection of "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Pack_Transfers_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Pack_Transfers>;
};

/** aggregate fields of "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Pack_Transfers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Pack_Transfers_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Pack_Transfers_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Pack_Transfers_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Pack_Transfers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Pack_Transfers_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Pack_Transfers_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Pack_Transfers_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Pack_Transfers_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Pack_Transfers_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Pack_Transfers_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_pack_transfers". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Pack_Transfers_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Pack_Transfers_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Bool_Exp>>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  pack_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_pack_transfers" */
export enum Nfl_All_Day_Pack_Transfers_Constraint {
  /** unique or primary key constraint */
  NflAllDayPackTransfersPkey = 'nfl_all_day_pack_transfers_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers_Insert_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  owner?: InputMaybe<Scalars['String']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Pack_Transfers_Max_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  owner?: Maybe<Scalars['String']>;
  pack_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Pack_Transfers_Min_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  owner?: Maybe<Scalars['String']>;
  pack_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Pack_Transfers>;
};

/** on conflict condition type for table "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers_On_Conflict = {
  constraint: Nfl_All_Day_Pack_Transfers_Constraint;
  update_columns?: Array<Nfl_All_Day_Pack_Transfers_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Pack_Transfers_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_pack_transfers". */
export type Nfl_All_Day_Pack_Transfers_Order_By = {
  block_height?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  pack_id?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_pack_transfers */
export type Nfl_All_Day_Pack_Transfers_Pk_Columns_Input = {
  block_height: Scalars['bigint'];
  event_index: Scalars['Int'];
  pack_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};

/** select columns of table "nfl_all_day_pack_transfers" */
export enum Nfl_All_Day_Pack_Transfers_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  Owner = 'owner',
  /** column name */
  PackId = 'pack_id',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "nfl_all_day_pack_transfers" */
export type Nfl_All_Day_Pack_Transfers_Set_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  owner?: InputMaybe<Scalars['String']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Pack_Transfers_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Pack_Transfers_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Pack_Transfers_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Pack_Transfers_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  pack_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_pack_transfers" */
export enum Nfl_All_Day_Pack_Transfers_Update_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  Owner = 'owner',
  /** column name */
  PackId = 'pack_id',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Pack_Transfers_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Pack_Transfers_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Pack_Transfers_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_packs" */
export type Nfl_All_Day_Packs = {
  acquired_at?: Maybe<Scalars['timestamptz']>;
  block_height: Scalars['bigint'];
  commit_hash: Scalars['String'];
  created_at: Scalars['timestamptz'];
  dist_id: Scalars['bigint'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  nfts?: Maybe<Scalars['String']>;
  opened_at?: Maybe<Scalars['timestamptz']>;
  owner?: Maybe<Scalars['String']>;
  pack_id: Scalars['bigint'];
  revealed_at?: Maybe<Scalars['timestamptz']>;
  status: Scalars['String'];
  transaction_index: Scalars['Int'];
};

/** aggregated selection of "nfl_all_day_packs" */
export type Nfl_All_Day_Packs_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Packs_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Packs>;
};

/** aggregate fields of "nfl_all_day_packs" */
export type Nfl_All_Day_Packs_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Packs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Packs_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Packs_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Packs_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Packs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Packs_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Packs_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Packs_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Packs_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Packs_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_packs" */
export type Nfl_All_Day_Packs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Packs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Packs_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  dist_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_packs". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Packs_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Packs_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Packs_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Packs_Bool_Exp>>;
  acquired_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  commit_hash?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dist_id?: InputMaybe<Bigint_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  nfts?: InputMaybe<String_Comparison_Exp>;
  opened_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  pack_id?: InputMaybe<Bigint_Comparison_Exp>;
  revealed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_packs" */
export enum Nfl_All_Day_Packs_Constraint {
  /** unique or primary key constraint */
  NflAllDayPacksPkey = 'nfl_all_day_packs_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_packs" */
export type Nfl_All_Day_Packs_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  dist_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_packs" */
export type Nfl_All_Day_Packs_Insert_Input = {
  acquired_at?: InputMaybe<Scalars['timestamptz']>;
  block_height?: InputMaybe<Scalars['bigint']>;
  commit_hash?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dist_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  nfts?: InputMaybe<Scalars['String']>;
  opened_at?: InputMaybe<Scalars['timestamptz']>;
  owner?: InputMaybe<Scalars['String']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  revealed_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Packs_Max_Fields = {
  acquired_at?: Maybe<Scalars['timestamptz']>;
  block_height?: Maybe<Scalars['bigint']>;
  commit_hash?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dist_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  nfts?: Maybe<Scalars['String']>;
  opened_at?: Maybe<Scalars['timestamptz']>;
  owner?: Maybe<Scalars['String']>;
  pack_id?: Maybe<Scalars['bigint']>;
  revealed_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Packs_Min_Fields = {
  acquired_at?: Maybe<Scalars['timestamptz']>;
  block_height?: Maybe<Scalars['bigint']>;
  commit_hash?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dist_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  nfts?: Maybe<Scalars['String']>;
  opened_at?: Maybe<Scalars['timestamptz']>;
  owner?: Maybe<Scalars['String']>;
  pack_id?: Maybe<Scalars['bigint']>;
  revealed_at?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "nfl_all_day_packs" */
export type Nfl_All_Day_Packs_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Packs>;
};

/** on conflict condition type for table "nfl_all_day_packs" */
export type Nfl_All_Day_Packs_On_Conflict = {
  constraint: Nfl_All_Day_Packs_Constraint;
  update_columns?: Array<Nfl_All_Day_Packs_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Packs_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_packs". */
export type Nfl_All_Day_Packs_Order_By = {
  acquired_at?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  commit_hash?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dist_id?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  nfts?: InputMaybe<Order_By>;
  opened_at?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  pack_id?: InputMaybe<Order_By>;
  revealed_at?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_packs */
export type Nfl_All_Day_Packs_Pk_Columns_Input = {
  pack_id: Scalars['bigint'];
};

/** select columns of table "nfl_all_day_packs" */
export enum Nfl_All_Day_Packs_Select_Column {
  /** column name */
  AcquiredAt = 'acquired_at',
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CommitHash = 'commit_hash',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DistId = 'dist_id',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  Nfts = 'nfts',
  /** column name */
  OpenedAt = 'opened_at',
  /** column name */
  Owner = 'owner',
  /** column name */
  PackId = 'pack_id',
  /** column name */
  RevealedAt = 'revealed_at',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "nfl_all_day_packs" */
export type Nfl_All_Day_Packs_Set_Input = {
  acquired_at?: InputMaybe<Scalars['timestamptz']>;
  block_height?: InputMaybe<Scalars['bigint']>;
  commit_hash?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dist_id?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  nfts?: InputMaybe<Scalars['String']>;
  opened_at?: InputMaybe<Scalars['timestamptz']>;
  owner?: InputMaybe<Scalars['String']>;
  pack_id?: InputMaybe<Scalars['bigint']>;
  revealed_at?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Packs_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  dist_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Packs_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  dist_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Packs_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  dist_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Packs_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  dist_id?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  pack_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_packs" */
export enum Nfl_All_Day_Packs_Update_Column {
  /** column name */
  AcquiredAt = 'acquired_at',
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CommitHash = 'commit_hash',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DistId = 'dist_id',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  Nfts = 'nfts',
  /** column name */
  OpenedAt = 'opened_at',
  /** column name */
  Owner = 'owner',
  /** column name */
  PackId = 'pack_id',
  /** column name */
  RevealedAt = 'revealed_at',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Packs_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  dist_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Packs_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  dist_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Packs_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  dist_id?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  pack_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_plays" */
export type Nfl_All_Day_Plays = {
  away_team_name: Scalars['String'];
  away_team_score: Scalars['Int'];
  block_height: Scalars['bigint'];
  classification: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  event_index: Scalars['Int'];
  external_id?: Maybe<Scalars['String']>;
  game_date: Scalars['date'];
  home_team_name: Scalars['String'];
  home_team_score: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  play_id: Scalars['bigint'];
  play_type: Scalars['String'];
  player_first_name: Scalars['String'];
  player_full_name: Scalars['String'];
  player_last_name: Scalars['String'];
  player_number: Scalars['String'];
  player_position: Scalars['String'];
  team_name: Scalars['String'];
  transaction_index: Scalars['Int'];
};

/** aggregated selection of "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Plays_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Plays>;
};

/** aggregate fields of "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Plays_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Plays_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Plays_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Plays_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Plays_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Plays_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Plays_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Plays_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Plays_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Plays_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Plays_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Plays_Avg_Fields = {
  away_team_score?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  home_team_score?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_plays". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Plays_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Plays_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Plays_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Plays_Bool_Exp>>;
  away_team_name?: InputMaybe<String_Comparison_Exp>;
  away_team_score?: InputMaybe<Int_Comparison_Exp>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  classification?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  external_id?: InputMaybe<String_Comparison_Exp>;
  game_date?: InputMaybe<Date_Comparison_Exp>;
  home_team_name?: InputMaybe<String_Comparison_Exp>;
  home_team_score?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  play_id?: InputMaybe<Bigint_Comparison_Exp>;
  play_type?: InputMaybe<String_Comparison_Exp>;
  player_first_name?: InputMaybe<String_Comparison_Exp>;
  player_full_name?: InputMaybe<String_Comparison_Exp>;
  player_last_name?: InputMaybe<String_Comparison_Exp>;
  player_number?: InputMaybe<String_Comparison_Exp>;
  player_position?: InputMaybe<String_Comparison_Exp>;
  team_name?: InputMaybe<String_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_plays" */
export enum Nfl_All_Day_Plays_Constraint {
  /** unique or primary key constraint */
  NflAllDayPlaysPkey = 'nfl_all_day_plays_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_Inc_Input = {
  away_team_score?: InputMaybe<Scalars['Int']>;
  block_height?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  home_team_score?: InputMaybe<Scalars['Int']>;
  play_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_Insert_Input = {
  away_team_name?: InputMaybe<Scalars['String']>;
  away_team_score?: InputMaybe<Scalars['Int']>;
  block_height?: InputMaybe<Scalars['bigint']>;
  classification?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  event_index?: InputMaybe<Scalars['Int']>;
  external_id?: InputMaybe<Scalars['String']>;
  game_date?: InputMaybe<Scalars['date']>;
  home_team_name?: InputMaybe<Scalars['String']>;
  home_team_score?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  play_id?: InputMaybe<Scalars['bigint']>;
  play_type?: InputMaybe<Scalars['String']>;
  player_first_name?: InputMaybe<Scalars['String']>;
  player_full_name?: InputMaybe<Scalars['String']>;
  player_last_name?: InputMaybe<Scalars['String']>;
  player_number?: InputMaybe<Scalars['String']>;
  player_position?: InputMaybe<Scalars['String']>;
  team_name?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Plays_Max_Fields = {
  away_team_name?: Maybe<Scalars['String']>;
  away_team_score?: Maybe<Scalars['Int']>;
  block_height?: Maybe<Scalars['bigint']>;
  classification?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event_index?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['String']>;
  game_date?: Maybe<Scalars['date']>;
  home_team_name?: Maybe<Scalars['String']>;
  home_team_score?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  play_id?: Maybe<Scalars['bigint']>;
  play_type?: Maybe<Scalars['String']>;
  player_first_name?: Maybe<Scalars['String']>;
  player_full_name?: Maybe<Scalars['String']>;
  player_last_name?: Maybe<Scalars['String']>;
  player_number?: Maybe<Scalars['String']>;
  player_position?: Maybe<Scalars['String']>;
  team_name?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Plays_Min_Fields = {
  away_team_name?: Maybe<Scalars['String']>;
  away_team_score?: Maybe<Scalars['Int']>;
  block_height?: Maybe<Scalars['bigint']>;
  classification?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  event_index?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['String']>;
  game_date?: Maybe<Scalars['date']>;
  home_team_name?: Maybe<Scalars['String']>;
  home_team_score?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  play_id?: Maybe<Scalars['bigint']>;
  play_type?: Maybe<Scalars['String']>;
  player_first_name?: Maybe<Scalars['String']>;
  player_full_name?: Maybe<Scalars['String']>;
  player_last_name?: Maybe<Scalars['String']>;
  player_number?: Maybe<Scalars['String']>;
  player_position?: Maybe<Scalars['String']>;
  team_name?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Plays>;
};

/** input type for inserting object relation for remote table "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_Obj_Rel_Insert_Input = {
  data: Nfl_All_Day_Plays_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nfl_All_Day_Plays_On_Conflict>;
};

/** on conflict condition type for table "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_On_Conflict = {
  constraint: Nfl_All_Day_Plays_Constraint;
  update_columns?: Array<Nfl_All_Day_Plays_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Plays_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_plays". */
export type Nfl_All_Day_Plays_Order_By = {
  away_team_name?: InputMaybe<Order_By>;
  away_team_score?: InputMaybe<Order_By>;
  block_height?: InputMaybe<Order_By>;
  classification?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  external_id?: InputMaybe<Order_By>;
  game_date?: InputMaybe<Order_By>;
  home_team_name?: InputMaybe<Order_By>;
  home_team_score?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  play_id?: InputMaybe<Order_By>;
  play_type?: InputMaybe<Order_By>;
  player_first_name?: InputMaybe<Order_By>;
  player_full_name?: InputMaybe<Order_By>;
  player_last_name?: InputMaybe<Order_By>;
  player_number?: InputMaybe<Order_By>;
  player_position?: InputMaybe<Order_By>;
  team_name?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_plays */
export type Nfl_All_Day_Plays_Pk_Columns_Input = {
  play_id: Scalars['bigint'];
};

/** select columns of table "nfl_all_day_plays" */
export enum Nfl_All_Day_Plays_Select_Column {
  /** column name */
  AwayTeamName = 'away_team_name',
  /** column name */
  AwayTeamScore = 'away_team_score',
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  Classification = 'classification',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  GameDate = 'game_date',
  /** column name */
  HomeTeamName = 'home_team_name',
  /** column name */
  HomeTeamScore = 'home_team_score',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  PlayId = 'play_id',
  /** column name */
  PlayType = 'play_type',
  /** column name */
  PlayerFirstName = 'player_first_name',
  /** column name */
  PlayerFullName = 'player_full_name',
  /** column name */
  PlayerLastName = 'player_last_name',
  /** column name */
  PlayerNumber = 'player_number',
  /** column name */
  PlayerPosition = 'player_position',
  /** column name */
  TeamName = 'team_name',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "nfl_all_day_plays" */
export type Nfl_All_Day_Plays_Set_Input = {
  away_team_name?: InputMaybe<Scalars['String']>;
  away_team_score?: InputMaybe<Scalars['Int']>;
  block_height?: InputMaybe<Scalars['bigint']>;
  classification?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  event_index?: InputMaybe<Scalars['Int']>;
  external_id?: InputMaybe<Scalars['String']>;
  game_date?: InputMaybe<Scalars['date']>;
  home_team_name?: InputMaybe<Scalars['String']>;
  home_team_score?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  play_id?: InputMaybe<Scalars['bigint']>;
  play_type?: InputMaybe<Scalars['String']>;
  player_first_name?: InputMaybe<Scalars['String']>;
  player_full_name?: InputMaybe<Scalars['String']>;
  player_last_name?: InputMaybe<Scalars['String']>;
  player_number?: InputMaybe<Scalars['String']>;
  player_position?: InputMaybe<Scalars['String']>;
  team_name?: InputMaybe<Scalars['String']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Plays_Stddev_Fields = {
  away_team_score?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  home_team_score?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Plays_Stddev_Pop_Fields = {
  away_team_score?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  home_team_score?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Plays_Stddev_Samp_Fields = {
  away_team_score?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  home_team_score?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Plays_Sum_Fields = {
  away_team_score?: Maybe<Scalars['Int']>;
  block_height?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  home_team_score?: Maybe<Scalars['Int']>;
  play_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_plays" */
export enum Nfl_All_Day_Plays_Update_Column {
  /** column name */
  AwayTeamName = 'away_team_name',
  /** column name */
  AwayTeamScore = 'away_team_score',
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  Classification = 'classification',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  ExternalId = 'external_id',
  /** column name */
  GameDate = 'game_date',
  /** column name */
  HomeTeamName = 'home_team_name',
  /** column name */
  HomeTeamScore = 'home_team_score',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  PlayId = 'play_id',
  /** column name */
  PlayType = 'play_type',
  /** column name */
  PlayerFirstName = 'player_first_name',
  /** column name */
  PlayerFullName = 'player_full_name',
  /** column name */
  PlayerLastName = 'player_last_name',
  /** column name */
  PlayerNumber = 'player_number',
  /** column name */
  PlayerPosition = 'player_position',
  /** column name */
  TeamName = 'team_name',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Plays_Var_Pop_Fields = {
  away_team_score?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  home_team_score?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Plays_Var_Samp_Fields = {
  away_team_score?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  home_team_score?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Plays_Variance_Fields = {
  away_team_score?: Maybe<Scalars['Float']>;
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  home_team_score?: Maybe<Scalars['Float']>;
  play_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases = {
  block_height: Scalars['bigint'];
  buyer: Scalars['String'];
  created_at: Scalars['timestamptz'];
  cuts: Scalars['jsonb'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  nft_id: Scalars['bigint'];
  nft_type: Scalars['String'];
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
  price: Scalars['float8'];
  transaction_index: Scalars['Int'];
  vault_type: Scalars['String'];
};


/** columns and relationships of "nfl_all_day_purchases" */
export type Nfl_All_Day_PurchasesCutsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Purchases_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Purchases>;
};

/** aggregate fields of "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Purchases_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Purchases_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Purchases_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Purchases_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Purchases_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Purchases_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Purchases_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Purchases_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Purchases_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Purchases_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Purchases_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Nfl_All_Day_Purchases_Append_Input = {
  cuts?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Purchases_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_purchases". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Purchases_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Purchases_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Purchases_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Purchases_Bool_Exp>>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  buyer?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cuts?: InputMaybe<Jsonb_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  nft_id?: InputMaybe<Bigint_Comparison_Exp>;
  nft_type?: InputMaybe<String_Comparison_Exp>;
  order_address?: InputMaybe<String_Comparison_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
  vault_type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_purchases" */
export enum Nfl_All_Day_Purchases_Constraint {
  /** unique or primary key constraint */
  NflAllDayPurchasesPkey = 'nfl_all_day_purchases_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Nfl_All_Day_Purchases_Delete_At_Path_Input = {
  cuts?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Nfl_All_Day_Purchases_Delete_Elem_Input = {
  cuts?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Nfl_All_Day_Purchases_Delete_Key_Input = {
  cuts?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  nft_id?: InputMaybe<Scalars['bigint']>;
  order_id?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['float8']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases_Insert_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  buyer?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cuts?: InputMaybe<Scalars['jsonb']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  nft_id?: InputMaybe<Scalars['bigint']>;
  nft_type?: InputMaybe<Scalars['String']>;
  order_address?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['float8']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
  vault_type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Purchases_Max_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  buyer?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  nft_id?: Maybe<Scalars['bigint']>;
  nft_type?: Maybe<Scalars['String']>;
  order_address?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  transaction_index?: Maybe<Scalars['Int']>;
  vault_type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Purchases_Min_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  buyer?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  nft_id?: Maybe<Scalars['bigint']>;
  nft_type?: Maybe<Scalars['String']>;
  order_address?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  transaction_index?: Maybe<Scalars['Int']>;
  vault_type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Purchases>;
};

/** on conflict condition type for table "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases_On_Conflict = {
  constraint: Nfl_All_Day_Purchases_Constraint;
  update_columns?: Array<Nfl_All_Day_Purchases_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Purchases_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_purchases". */
export type Nfl_All_Day_Purchases_Order_By = {
  block_height?: InputMaybe<Order_By>;
  buyer?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cuts?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  nft_type?: InputMaybe<Order_By>;
  order_address?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
  vault_type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_purchases */
export type Nfl_All_Day_Purchases_Pk_Columns_Input = {
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Nfl_All_Day_Purchases_Prepend_Input = {
  cuts?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "nfl_all_day_purchases" */
export enum Nfl_All_Day_Purchases_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  Buyer = 'buyer',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cuts = 'cuts',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  OrderAddress = 'order_address',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  VaultType = 'vault_type'
}

/** input type for updating data in table "nfl_all_day_purchases" */
export type Nfl_All_Day_Purchases_Set_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  buyer?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cuts?: InputMaybe<Scalars['jsonb']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  nft_id?: InputMaybe<Scalars['bigint']>;
  nft_type?: InputMaybe<Scalars['String']>;
  order_address?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['float8']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
  vault_type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Purchases_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Purchases_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Purchases_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Purchases_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  nft_id?: Maybe<Scalars['bigint']>;
  order_id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_purchases" */
export enum Nfl_All_Day_Purchases_Update_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  Buyer = 'buyer',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cuts = 'cuts',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  NftType = 'nft_type',
  /** column name */
  OrderAddress = 'order_address',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  VaultType = 'vault_type'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Purchases_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Purchases_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Purchases_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  nft_id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_series" */
export type Nfl_All_Day_Series = {
  block_height: Scalars['bigint'];
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  name: Scalars['String'];
  series_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};

/** aggregated selection of "nfl_all_day_series" */
export type Nfl_All_Day_Series_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Series_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Series>;
};

/** aggregate fields of "nfl_all_day_series" */
export type Nfl_All_Day_Series_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Series_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Series_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Series_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Series_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Series_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Series_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Series_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Series_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Series_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Series_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_series" */
export type Nfl_All_Day_Series_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Series_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Series_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_series". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Series_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Series_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Series_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Series_Bool_Exp>>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  closed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  series_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_series" */
export enum Nfl_All_Day_Series_Constraint {
  /** unique or primary key constraint */
  NflAllDaySeriesPkey = 'nfl_all_day_series_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_series" */
export type Nfl_All_Day_Series_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  series_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_series" */
export type Nfl_All_Day_Series_Insert_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  closed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  series_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Series_Max_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Series_Min_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  closed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "nfl_all_day_series" */
export type Nfl_All_Day_Series_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Series>;
};

/** input type for inserting object relation for remote table "nfl_all_day_series" */
export type Nfl_All_Day_Series_Obj_Rel_Insert_Input = {
  data: Nfl_All_Day_Series_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nfl_All_Day_Series_On_Conflict>;
};

/** on conflict condition type for table "nfl_all_day_series" */
export type Nfl_All_Day_Series_On_Conflict = {
  constraint: Nfl_All_Day_Series_Constraint;
  update_columns?: Array<Nfl_All_Day_Series_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Series_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_series". */
export type Nfl_All_Day_Series_Order_By = {
  block_height?: InputMaybe<Order_By>;
  closed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_series */
export type Nfl_All_Day_Series_Pk_Columns_Input = {
  series_id: Scalars['bigint'];
};

/** select columns of table "nfl_all_day_series" */
export enum Nfl_All_Day_Series_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  ClosedAt = 'closed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  Name = 'name',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "nfl_all_day_series" */
export type Nfl_All_Day_Series_Set_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  closed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  series_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Series_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Series_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Series_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Series_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  series_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_series" */
export enum Nfl_All_Day_Series_Update_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  ClosedAt = 'closed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  Name = 'name',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Series_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Series_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Series_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  series_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_sets" */
export type Nfl_All_Day_Sets = {
  block_height: Scalars['bigint'];
  created_at: Scalars['timestamptz'];
  event_index: Scalars['Int'];
  inserted_at: Scalars['timestamptz'];
  name: Scalars['String'];
  set_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};

/** aggregated selection of "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Sets_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Sets>;
};

/** aggregate fields of "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Sets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Sets_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Sets_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Sets_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Sets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Sets_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Sets_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Sets_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Sets_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Sets_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Sets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Sets_Avg_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_sets". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Sets_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Sets_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Sets_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Sets_Bool_Exp>>;
  block_height?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_index?: InputMaybe<Int_Comparison_Exp>;
  inserted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  set_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nfl_all_day_sets" */
export enum Nfl_All_Day_Sets_Constraint {
  /** unique or primary key constraint */
  NflAllDaySetsPkey = 'nfl_all_day_sets_pkey'
}

/** input type for incrementing numeric columns in table "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_Inc_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  event_index?: InputMaybe<Scalars['Int']>;
  set_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_Insert_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  set_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Sets_Max_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  set_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Sets_Min_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  event_index?: Maybe<Scalars['Int']>;
  inserted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  set_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nfl_All_Day_Sets>;
};

/** input type for inserting object relation for remote table "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_Obj_Rel_Insert_Input = {
  data: Nfl_All_Day_Sets_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nfl_All_Day_Sets_On_Conflict>;
};

/** on conflict condition type for table "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_On_Conflict = {
  constraint: Nfl_All_Day_Sets_Constraint;
  update_columns?: Array<Nfl_All_Day_Sets_Update_Column>;
  where?: InputMaybe<Nfl_All_Day_Sets_Bool_Exp>;
};

/** Ordering options when selecting data from "nfl_all_day_sets". */
export type Nfl_All_Day_Sets_Order_By = {
  block_height?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_index?: InputMaybe<Order_By>;
  inserted_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nfl_all_day_sets */
export type Nfl_All_Day_Sets_Pk_Columns_Input = {
  set_id: Scalars['bigint'];
};

/** select columns of table "nfl_all_day_sets" */
export enum Nfl_All_Day_Sets_Select_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  Name = 'name',
  /** column name */
  SetId = 'set_id',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "nfl_all_day_sets" */
export type Nfl_All_Day_Sets_Set_Input = {
  block_height?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  event_index?: InputMaybe<Scalars['Int']>;
  inserted_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  set_id?: InputMaybe<Scalars['bigint']>;
  transaction_index?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Nfl_All_Day_Sets_Stddev_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Sets_Stddev_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Sets_Stddev_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Sets_Sum_Fields = {
  block_height?: Maybe<Scalars['bigint']>;
  event_index?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['bigint']>;
  transaction_index?: Maybe<Scalars['Int']>;
};

/** update columns of table "nfl_all_day_sets" */
export enum Nfl_All_Day_Sets_Update_Column {
  /** column name */
  BlockHeight = 'block_height',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  InsertedAt = 'inserted_at',
  /** column name */
  Name = 'name',
  /** column name */
  SetId = 'set_id',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Nfl_All_Day_Sets_Var_Pop_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Sets_Var_Samp_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Sets_Variance_Fields = {
  block_height?: Maybe<Scalars['Float']>;
  event_index?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  transaction_index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nfl_all_day_taxonomies" */
export type Nfl_All_Day_Taxonomies = {
  moment_count?: Maybe<Scalars['bigint']>;
  taxonomy_attribute?: Maybe<Scalars['String']>;
  taxonomy_label?: Maybe<Scalars['String']>;
  taxonomy_value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "nfl_all_day_taxonomies" */
export type Nfl_All_Day_Taxonomies_Aggregate = {
  aggregate?: Maybe<Nfl_All_Day_Taxonomies_Aggregate_Fields>;
  nodes: Array<Nfl_All_Day_Taxonomies>;
};

/** aggregate fields of "nfl_all_day_taxonomies" */
export type Nfl_All_Day_Taxonomies_Aggregate_Fields = {
  avg?: Maybe<Nfl_All_Day_Taxonomies_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nfl_All_Day_Taxonomies_Max_Fields>;
  min?: Maybe<Nfl_All_Day_Taxonomies_Min_Fields>;
  stddev?: Maybe<Nfl_All_Day_Taxonomies_Stddev_Fields>;
  stddev_pop?: Maybe<Nfl_All_Day_Taxonomies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nfl_All_Day_Taxonomies_Stddev_Samp_Fields>;
  sum?: Maybe<Nfl_All_Day_Taxonomies_Sum_Fields>;
  var_pop?: Maybe<Nfl_All_Day_Taxonomies_Var_Pop_Fields>;
  var_samp?: Maybe<Nfl_All_Day_Taxonomies_Var_Samp_Fields>;
  variance?: Maybe<Nfl_All_Day_Taxonomies_Variance_Fields>;
};


/** aggregate fields of "nfl_all_day_taxonomies" */
export type Nfl_All_Day_Taxonomies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nfl_All_Day_Taxonomies_Avg_Fields = {
  moment_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nfl_all_day_taxonomies". All fields are combined with a logical 'AND'. */
export type Nfl_All_Day_Taxonomies_Bool_Exp = {
  _and?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Bool_Exp>>;
  _not?: InputMaybe<Nfl_All_Day_Taxonomies_Bool_Exp>;
  _or?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Bool_Exp>>;
  moment_count?: InputMaybe<Bigint_Comparison_Exp>;
  taxonomy_attribute?: InputMaybe<String_Comparison_Exp>;
  taxonomy_label?: InputMaybe<String_Comparison_Exp>;
  taxonomy_value?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nfl_All_Day_Taxonomies_Max_Fields = {
  moment_count?: Maybe<Scalars['bigint']>;
  taxonomy_attribute?: Maybe<Scalars['String']>;
  taxonomy_label?: Maybe<Scalars['String']>;
  taxonomy_value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Nfl_All_Day_Taxonomies_Min_Fields = {
  moment_count?: Maybe<Scalars['bigint']>;
  taxonomy_attribute?: Maybe<Scalars['String']>;
  taxonomy_label?: Maybe<Scalars['String']>;
  taxonomy_value?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nfl_all_day_taxonomies". */
export type Nfl_All_Day_Taxonomies_Order_By = {
  moment_count?: InputMaybe<Order_By>;
  taxonomy_attribute?: InputMaybe<Order_By>;
  taxonomy_label?: InputMaybe<Order_By>;
  taxonomy_value?: InputMaybe<Order_By>;
};

/** select columns of table "nfl_all_day_taxonomies" */
export enum Nfl_All_Day_Taxonomies_Select_Column {
  /** column name */
  MomentCount = 'moment_count',
  /** column name */
  TaxonomyAttribute = 'taxonomy_attribute',
  /** column name */
  TaxonomyLabel = 'taxonomy_label',
  /** column name */
  TaxonomyValue = 'taxonomy_value'
}

/** aggregate stddev on columns */
export type Nfl_All_Day_Taxonomies_Stddev_Fields = {
  moment_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nfl_All_Day_Taxonomies_Stddev_Pop_Fields = {
  moment_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nfl_All_Day_Taxonomies_Stddev_Samp_Fields = {
  moment_count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nfl_All_Day_Taxonomies_Sum_Fields = {
  moment_count?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Nfl_All_Day_Taxonomies_Var_Pop_Fields = {
  moment_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nfl_All_Day_Taxonomies_Var_Samp_Fields = {
  moment_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nfl_All_Day_Taxonomies_Variance_Fields = {
  moment_count?: Maybe<Scalars['Float']>;
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
  minted_at?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  nft_favorites: Array<Nft_Favorites>;
  /** An aggregate relationship */
  nft_favorites_aggregate: Nft_Favorites_Aggregate;
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
export type NftNft_FavoritesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Favorites_Order_By>>;
  where?: InputMaybe<Nft_Favorites_Bool_Exp>;
};


/** columns and relationships of "nft" */
export type NftNft_Favorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Favorites_Order_By>>;
  where?: InputMaybe<Nft_Favorites_Bool_Exp>;
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
  minted_at?: InputMaybe<Timestamp_Comparison_Exp>;
  nft_favorites?: InputMaybe<Nft_Favorites_Bool_Exp>;
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

/** columns and relationships of "nft_favorites" */
export type Nft_Favorites = {
  id: Scalars['uuid'];
  /** An object relationship */
  nft: Nft;
  nft_id: Scalars['uuid'];
  wallet_address: Scalars['String'];
};

/** aggregated selection of "nft_favorites" */
export type Nft_Favorites_Aggregate = {
  aggregate?: Maybe<Nft_Favorites_Aggregate_Fields>;
  nodes: Array<Nft_Favorites>;
};

/** aggregate fields of "nft_favorites" */
export type Nft_Favorites_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Nft_Favorites_Max_Fields>;
  min?: Maybe<Nft_Favorites_Min_Fields>;
};


/** aggregate fields of "nft_favorites" */
export type Nft_Favorites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Favorites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft_favorites" */
export type Nft_Favorites_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nft_Favorites_Max_Order_By>;
  min?: InputMaybe<Nft_Favorites_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nft_favorites" */
export type Nft_Favorites_Arr_Rel_Insert_Input = {
  data: Array<Nft_Favorites_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Nft_Favorites_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nft_favorites". All fields are combined with a logical 'AND'. */
export type Nft_Favorites_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Favorites_Bool_Exp>>;
  _not?: InputMaybe<Nft_Favorites_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Favorites_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nft?: InputMaybe<Nft_Bool_Exp>;
  nft_id?: InputMaybe<Uuid_Comparison_Exp>;
  wallet_address?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nft_favorites" */
export enum Nft_Favorites_Constraint {
  /** unique or primary key constraint */
  NftFavoritesNftIdWalletAddressKey = 'nft_favorites_nft_id_wallet_address_key',
  /** unique or primary key constraint */
  NftFavoritesPkey = 'nft_favorites_pkey'
}

/** input type for inserting data into table "nft_favorites" */
export type Nft_Favorites_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  nft?: InputMaybe<Nft_Obj_Rel_Insert_Input>;
  nft_id?: InputMaybe<Scalars['uuid']>;
  wallet_address?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Nft_Favorites_Max_Fields = {
  id?: Maybe<Scalars['uuid']>;
  nft_id?: Maybe<Scalars['uuid']>;
  wallet_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "nft_favorites" */
export type Nft_Favorites_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  wallet_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Favorites_Min_Fields = {
  id?: Maybe<Scalars['uuid']>;
  nft_id?: Maybe<Scalars['uuid']>;
  wallet_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "nft_favorites" */
export type Nft_Favorites_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  wallet_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nft_favorites" */
export type Nft_Favorites_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Nft_Favorites>;
};

/** on conflict condition type for table "nft_favorites" */
export type Nft_Favorites_On_Conflict = {
  constraint: Nft_Favorites_Constraint;
  update_columns?: Array<Nft_Favorites_Update_Column>;
  where?: InputMaybe<Nft_Favorites_Bool_Exp>;
};

/** Ordering options when selecting data from "nft_favorites". */
export type Nft_Favorites_Order_By = {
  id?: InputMaybe<Order_By>;
  nft?: InputMaybe<Nft_Order_By>;
  nft_id?: InputMaybe<Order_By>;
  wallet_address?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nft_favorites */
export type Nft_Favorites_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "nft_favorites" */
export enum Nft_Favorites_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  WalletAddress = 'wallet_address'
}

/** input type for updating data in table "nft_favorites" */
export type Nft_Favorites_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  nft_id?: InputMaybe<Scalars['uuid']>;
  wallet_address?: InputMaybe<Scalars['String']>;
};

/** update columns of table "nft_favorites" */
export enum Nft_Favorites_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  WalletAddress = 'wallet_address'
}

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
  minted_at?: InputMaybe<Scalars['timestamp']>;
  nft_favorites?: InputMaybe<Nft_Favorites_Arr_Rel_Insert_Input>;
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
  minted_at?: Maybe<Scalars['timestamp']>;
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
  minted_at?: InputMaybe<Order_By>;
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
  minted_at?: Maybe<Scalars['timestamp']>;
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
  minted_at?: InputMaybe<Order_By>;
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
  minted_at?: InputMaybe<Order_By>;
  nft_favorites_aggregate?: InputMaybe<Nft_Favorites_Aggregate_Order_By>;
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
  listed_at?: Maybe<Scalars['timestamptz']>;
  listing_resource_id: Scalars['bigint'];
  /** An object relationship */
  nft: Nft;
  nft_id: Scalars['uuid'];
  /** A computed field, executes function "saleparseprice" */
  parsed_price?: Maybe<Scalars['float8']>;
  price: Scalars['String'];
  status: Scalars['String'];
  status_at?: Maybe<Scalars['timestamptz']>;
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
  listed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  listing_resource_id?: InputMaybe<Bigint_Comparison_Exp>;
  nft?: InputMaybe<Nft_Bool_Exp>;
  nft_id?: InputMaybe<Uuid_Comparison_Exp>;
  parsed_price?: InputMaybe<Float8_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  status_at?: InputMaybe<Timestamptz_Comparison_Exp>;
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
  listed_at?: InputMaybe<Scalars['timestamptz']>;
  listing_resource_id?: InputMaybe<Scalars['bigint']>;
  nft?: InputMaybe<Nft_Obj_Rel_Insert_Input>;
  nft_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  status_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Nft_Sale_Offer_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  listed_at?: Maybe<Scalars['timestamptz']>;
  listing_resource_id?: Maybe<Scalars['bigint']>;
  nft_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  status_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listed_at?: InputMaybe<Order_By>;
  listing_resource_id?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nft_Sale_Offer_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  listed_at?: Maybe<Scalars['timestamptz']>;
  listing_resource_id?: Maybe<Scalars['bigint']>;
  nft_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  status_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "nft_sale_offer" */
export type Nft_Sale_Offer_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listed_at?: InputMaybe<Order_By>;
  listing_resource_id?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_at?: InputMaybe<Order_By>;
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
  listed_at?: InputMaybe<Order_By>;
  listing_resource_id?: InputMaybe<Order_By>;
  nft?: InputMaybe<Nft_Order_By>;
  nft_id?: InputMaybe<Order_By>;
  parsed_price?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  status_at?: InputMaybe<Order_By>;
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
  ListedAt = 'listed_at',
  /** column name */
  ListingResourceId = 'listing_resource_id',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Price = 'price',
  /** column name */
  Status = 'status',
  /** column name */
  StatusAt = 'status_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nft_sale_offer" */
export type Nft_Sale_Offer_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  listed_at?: InputMaybe<Scalars['timestamptz']>;
  listing_resource_id?: InputMaybe<Scalars['bigint']>;
  nft_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  status_at?: InputMaybe<Scalars['timestamptz']>;
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
  ListedAt = 'listed_at',
  /** column name */
  ListingResourceId = 'listing_resource_id',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  Price = 'price',
  /** column name */
  Status = 'status',
  /** column name */
  StatusAt = 'status_at',
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
  MintedAt = 'minted_at',
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
  minted_at?: InputMaybe<Scalars['timestamp']>;
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
  MintedAt = 'minted_at',
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

/**
 * Holds information about SELL, OFFER, etc, notifications
 *
 *
 * columns and relationships of "notifications"
 *
 */
export type Notifications = {
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  message?: Maybe<Scalars['String']>;
  nft_id?: Maybe<Scalars['uuid']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  receiver: Scalars['String'];
  sender?: Maybe<Scalars['String']>;
  type: Notifications_Types_Enum;
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
};


/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  nft_id?: InputMaybe<Uuid_Comparison_Exp>;
  read_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  receiver?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Notifications_Types_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint */
  NotificationsPkey = 'notifications_pkey'
}

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  nft_id?: InputMaybe<Scalars['uuid']>;
  read_at?: InputMaybe<Scalars['timestamptz']>;
  receiver?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Notifications_Types_Enum>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  nft_id?: Maybe<Scalars['uuid']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  receiver?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  nft_id?: Maybe<Scalars['uuid']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  receiver?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  nft_id?: InputMaybe<Order_By>;
  read_at?: InputMaybe<Order_By>;
  receiver?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  ReadAt = 'read_at',
  /** column name */
  Receiver = 'receiver',
  /** column name */
  Sender = 'sender',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  nft_id?: InputMaybe<Scalars['uuid']>;
  read_at?: InputMaybe<Scalars['timestamptz']>;
  receiver?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Notifications_Types_Enum>;
};

/**
 * Holds the possible types of the notifications (ENUM)
 *
 *
 * columns and relationships of "notifications_types"
 *
 */
export type Notifications_Types = {
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

/** aggregated selection of "notifications_types" */
export type Notifications_Types_Aggregate = {
  aggregate?: Maybe<Notifications_Types_Aggregate_Fields>;
  nodes: Array<Notifications_Types>;
};

/** aggregate fields of "notifications_types" */
export type Notifications_Types_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Notifications_Types_Max_Fields>;
  min?: Maybe<Notifications_Types_Min_Fields>;
};


/** aggregate fields of "notifications_types" */
export type Notifications_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notifications_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "notifications_types". All fields are combined with a logical 'AND'. */
export type Notifications_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Types_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Types_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications_types" */
export enum Notifications_Types_Constraint {
  /** unique or primary key constraint */
  NotificationsTypesPkey = 'notifications_types_pkey'
}

export enum Notifications_Types_Enum {
  /** An NFT listed for sale received an OFFER */
  Offer = 'OFFER'
}

/** Boolean expression to compare columns of type "notifications_types_enum". All fields are combined with logical 'AND'. */
export type Notifications_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Notifications_Types_Enum>;
  _in?: InputMaybe<Array<Notifications_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Notifications_Types_Enum>;
  _nin?: InputMaybe<Array<Notifications_Types_Enum>>;
};

/** input type for inserting data into table "notifications_types" */
export type Notifications_Types_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notifications_Types_Max_Fields = {
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Notifications_Types_Min_Fields = {
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "notifications_types" */
export type Notifications_Types_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications_Types>;
};

/** on conflict condition type for table "notifications_types" */
export type Notifications_Types_On_Conflict = {
  constraint: Notifications_Types_Constraint;
  update_columns?: Array<Notifications_Types_Update_Column>;
  where?: InputMaybe<Notifications_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications_types". */
export type Notifications_Types_Order_By = {
  description?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notifications_types */
export type Notifications_Types_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "notifications_types" */
export enum Notifications_Types_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "notifications_types" */
export type Notifications_Types_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "notifications_types" */
export enum Notifications_Types_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Type = 'type'
}

/** update columns of table "notifications" */
export enum Notifications_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  NftId = 'nft_id',
  /** column name */
  ReadAt = 'read_at',
  /** column name */
  Receiver = 'receiver',
  /** column name */
  Sender = 'sender',
  /** column name */
  Type = 'type'
}

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
  /** fetch data from the table: "nfl_all_day_editions" */
  nfl_all_day_editions: Array<Nfl_All_Day_Editions>;
  /** fetch aggregated fields from the table: "nfl_all_day_editions" */
  nfl_all_day_editions_aggregate: Nfl_All_Day_Editions_Aggregate;
  /** fetch data from the table: "nfl_all_day_editions" using primary key columns */
  nfl_all_day_editions_by_pk?: Maybe<Nfl_All_Day_Editions>;
  /** fetch data from the table: "nfl_all_day_listings" */
  nfl_all_day_listings: Array<Nfl_All_Day_Listings>;
  /** fetch aggregated fields from the table: "nfl_all_day_listings" */
  nfl_all_day_listings_aggregate: Nfl_All_Day_Listings_Aggregate;
  /** fetch data from the table: "nfl_all_day_listings" using primary key columns */
  nfl_all_day_listings_by_pk?: Maybe<Nfl_All_Day_Listings>;
  /** fetch data from the table: "nfl_all_day_moment_transfers" */
  nfl_all_day_moment_transfers: Array<Nfl_All_Day_Moment_Transfers>;
  /** fetch aggregated fields from the table: "nfl_all_day_moment_transfers" */
  nfl_all_day_moment_transfers_aggregate: Nfl_All_Day_Moment_Transfers_Aggregate;
  /** fetch data from the table: "nfl_all_day_moment_transfers" using primary key columns */
  nfl_all_day_moment_transfers_by_pk?: Maybe<Nfl_All_Day_Moment_Transfers>;
  /** fetch data from the table: "nfl_all_day_moments" */
  nfl_all_day_moments: Array<Nfl_All_Day_Moments>;
  /** fetch aggregated fields from the table: "nfl_all_day_moments" */
  nfl_all_day_moments_aggregate: Nfl_All_Day_Moments_Aggregate;
  /** fetch data from the table: "nfl_all_day_moments" using primary key columns */
  nfl_all_day_moments_by_pk?: Maybe<Nfl_All_Day_Moments>;
  /** fetch data from the table: "nfl_all_day_pack_moments" */
  nfl_all_day_pack_moments: Array<Nfl_All_Day_Pack_Moments>;
  /** fetch aggregated fields from the table: "nfl_all_day_pack_moments" */
  nfl_all_day_pack_moments_aggregate: Nfl_All_Day_Pack_Moments_Aggregate;
  /** fetch data from the table: "nfl_all_day_pack_moments" using primary key columns */
  nfl_all_day_pack_moments_by_pk?: Maybe<Nfl_All_Day_Pack_Moments>;
  /** fetch data from the table: "nfl_all_day_pack_transfers" */
  nfl_all_day_pack_transfers: Array<Nfl_All_Day_Pack_Transfers>;
  /** fetch aggregated fields from the table: "nfl_all_day_pack_transfers" */
  nfl_all_day_pack_transfers_aggregate: Nfl_All_Day_Pack_Transfers_Aggregate;
  /** fetch data from the table: "nfl_all_day_pack_transfers" using primary key columns */
  nfl_all_day_pack_transfers_by_pk?: Maybe<Nfl_All_Day_Pack_Transfers>;
  /** fetch data from the table: "nfl_all_day_packs" */
  nfl_all_day_packs: Array<Nfl_All_Day_Packs>;
  /** fetch aggregated fields from the table: "nfl_all_day_packs" */
  nfl_all_day_packs_aggregate: Nfl_All_Day_Packs_Aggregate;
  /** fetch data from the table: "nfl_all_day_packs" using primary key columns */
  nfl_all_day_packs_by_pk?: Maybe<Nfl_All_Day_Packs>;
  /** fetch data from the table: "nfl_all_day_plays" */
  nfl_all_day_plays: Array<Nfl_All_Day_Plays>;
  /** fetch aggregated fields from the table: "nfl_all_day_plays" */
  nfl_all_day_plays_aggregate: Nfl_All_Day_Plays_Aggregate;
  /** fetch data from the table: "nfl_all_day_plays" using primary key columns */
  nfl_all_day_plays_by_pk?: Maybe<Nfl_All_Day_Plays>;
  /** fetch data from the table: "nfl_all_day_purchases" */
  nfl_all_day_purchases: Array<Nfl_All_Day_Purchases>;
  /** fetch aggregated fields from the table: "nfl_all_day_purchases" */
  nfl_all_day_purchases_aggregate: Nfl_All_Day_Purchases_Aggregate;
  /** fetch data from the table: "nfl_all_day_purchases" using primary key columns */
  nfl_all_day_purchases_by_pk?: Maybe<Nfl_All_Day_Purchases>;
  /** fetch data from the table: "nfl_all_day_series" */
  nfl_all_day_series: Array<Nfl_All_Day_Series>;
  /** fetch aggregated fields from the table: "nfl_all_day_series" */
  nfl_all_day_series_aggregate: Nfl_All_Day_Series_Aggregate;
  /** fetch data from the table: "nfl_all_day_series" using primary key columns */
  nfl_all_day_series_by_pk?: Maybe<Nfl_All_Day_Series>;
  /** fetch data from the table: "nfl_all_day_sets" */
  nfl_all_day_sets: Array<Nfl_All_Day_Sets>;
  /** fetch aggregated fields from the table: "nfl_all_day_sets" */
  nfl_all_day_sets_aggregate: Nfl_All_Day_Sets_Aggregate;
  /** fetch data from the table: "nfl_all_day_sets" using primary key columns */
  nfl_all_day_sets_by_pk?: Maybe<Nfl_All_Day_Sets>;
  /** fetch data from the table: "nfl_all_day_taxonomies" */
  nfl_all_day_taxonomies: Array<Nfl_All_Day_Taxonomies>;
  /** fetch aggregated fields from the table: "nfl_all_day_taxonomies" */
  nfl_all_day_taxonomies_aggregate: Nfl_All_Day_Taxonomies_Aggregate;
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
  /** An array relationship */
  nft_favorites: Array<Nft_Favorites>;
  /** An aggregate relationship */
  nft_favorites_aggregate: Nft_Favorites_Aggregate;
  /** fetch data from the table: "nft_favorites" using primary key columns */
  nft_favorites_by_pk?: Maybe<Nft_Favorites>;
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
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "notifications_types" */
  notifications_types: Array<Notifications_Types>;
  /** fetch aggregated fields from the table: "notifications_types" */
  notifications_types_aggregate: Notifications_Types_Aggregate;
  /** fetch data from the table: "notifications_types" using primary key columns */
  notifications_types_by_pk?: Maybe<Notifications_Types>;
  /** execute function "random_sale_offer" which returns "nft_sale_offer" */
  random_sale_offer: Array<Nft_Sale_Offer>;
  /** execute function "random_sale_offer" and query aggregates on result of table type "nft_sale_offer" */
  random_sale_offer_aggregate: Nft_Sale_Offer_Aggregate;
};


export type Query_RootNfl_All_Day_EditionsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Editions_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Editions_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Editions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Editions_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Editions_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Editions_By_PkArgs = {
  edition_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_ListingsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Listings_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Listings_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Listings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Listings_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Listings_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Listings_By_PkArgs = {
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_Moment_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moment_Transfers_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Moment_Transfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moment_Transfers_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Moment_Transfers_By_PkArgs = {
  block_height: Scalars['bigint'];
  event_index: Scalars['Int'];
  moment_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};


export type Query_RootNfl_All_Day_MomentsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Moments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Moments_By_PkArgs = {
  moment_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_Pack_MomentsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Pack_Moments_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Pack_Moments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Pack_Moments_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Pack_Moments_By_PkArgs = {
  moment_id: Scalars['bigint'];
  pack_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_Pack_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Pack_Transfers_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Pack_Transfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Pack_Transfers_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Pack_Transfers_By_PkArgs = {
  block_height: Scalars['bigint'];
  event_index: Scalars['Int'];
  pack_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};


export type Query_RootNfl_All_Day_PacksArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Packs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Packs_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Packs_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Packs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Packs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Packs_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Packs_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Packs_By_PkArgs = {
  pack_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_PlaysArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Plays_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Plays_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Plays_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Plays_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Plays_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Plays_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Plays_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Plays_By_PkArgs = {
  play_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_PurchasesArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Purchases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Purchases_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Purchases_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Purchases_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Purchases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Purchases_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Purchases_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Purchases_By_PkArgs = {
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_SeriesArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Series_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Series_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Series_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Series_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Series_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Series_By_PkArgs = {
  series_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_SetsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Sets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Sets_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Sets_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Sets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Sets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Sets_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Sets_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Sets_By_PkArgs = {
  set_id: Scalars['bigint'];
};


export type Query_RootNfl_All_Day_TaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Taxonomies_Bool_Exp>;
};


export type Query_RootNfl_All_Day_Taxonomies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Taxonomies_Bool_Exp>;
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


export type Query_RootNft_FavoritesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Favorites_Order_By>>;
  where?: InputMaybe<Nft_Favorites_Bool_Exp>;
};


export type Query_RootNft_Favorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Favorites_Order_By>>;
  where?: InputMaybe<Nft_Favorites_Bool_Exp>;
};


export type Query_RootNft_Favorites_By_PkArgs = {
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


export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNotifications_TypesArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Types_Order_By>>;
  where?: InputMaybe<Notifications_Types_Bool_Exp>;
};


export type Query_RootNotifications_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Types_Order_By>>;
  where?: InputMaybe<Notifications_Types_Bool_Exp>;
};


export type Query_RootNotifications_Types_By_PkArgs = {
  type: Scalars['String'];
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
  /** fetch data from the table: "nfl_all_day_editions" */
  nfl_all_day_editions: Array<Nfl_All_Day_Editions>;
  /** fetch aggregated fields from the table: "nfl_all_day_editions" */
  nfl_all_day_editions_aggregate: Nfl_All_Day_Editions_Aggregate;
  /** fetch data from the table: "nfl_all_day_editions" using primary key columns */
  nfl_all_day_editions_by_pk?: Maybe<Nfl_All_Day_Editions>;
  /** fetch data from the table: "nfl_all_day_listings" */
  nfl_all_day_listings: Array<Nfl_All_Day_Listings>;
  /** fetch aggregated fields from the table: "nfl_all_day_listings" */
  nfl_all_day_listings_aggregate: Nfl_All_Day_Listings_Aggregate;
  /** fetch data from the table: "nfl_all_day_listings" using primary key columns */
  nfl_all_day_listings_by_pk?: Maybe<Nfl_All_Day_Listings>;
  /** fetch data from the table: "nfl_all_day_moment_transfers" */
  nfl_all_day_moment_transfers: Array<Nfl_All_Day_Moment_Transfers>;
  /** fetch aggregated fields from the table: "nfl_all_day_moment_transfers" */
  nfl_all_day_moment_transfers_aggregate: Nfl_All_Day_Moment_Transfers_Aggregate;
  /** fetch data from the table: "nfl_all_day_moment_transfers" using primary key columns */
  nfl_all_day_moment_transfers_by_pk?: Maybe<Nfl_All_Day_Moment_Transfers>;
  /** fetch data from the table: "nfl_all_day_moments" */
  nfl_all_day_moments: Array<Nfl_All_Day_Moments>;
  /** fetch aggregated fields from the table: "nfl_all_day_moments" */
  nfl_all_day_moments_aggregate: Nfl_All_Day_Moments_Aggregate;
  /** fetch data from the table: "nfl_all_day_moments" using primary key columns */
  nfl_all_day_moments_by_pk?: Maybe<Nfl_All_Day_Moments>;
  /** fetch data from the table: "nfl_all_day_pack_moments" */
  nfl_all_day_pack_moments: Array<Nfl_All_Day_Pack_Moments>;
  /** fetch aggregated fields from the table: "nfl_all_day_pack_moments" */
  nfl_all_day_pack_moments_aggregate: Nfl_All_Day_Pack_Moments_Aggregate;
  /** fetch data from the table: "nfl_all_day_pack_moments" using primary key columns */
  nfl_all_day_pack_moments_by_pk?: Maybe<Nfl_All_Day_Pack_Moments>;
  /** fetch data from the table: "nfl_all_day_pack_transfers" */
  nfl_all_day_pack_transfers: Array<Nfl_All_Day_Pack_Transfers>;
  /** fetch aggregated fields from the table: "nfl_all_day_pack_transfers" */
  nfl_all_day_pack_transfers_aggregate: Nfl_All_Day_Pack_Transfers_Aggregate;
  /** fetch data from the table: "nfl_all_day_pack_transfers" using primary key columns */
  nfl_all_day_pack_transfers_by_pk?: Maybe<Nfl_All_Day_Pack_Transfers>;
  /** fetch data from the table: "nfl_all_day_packs" */
  nfl_all_day_packs: Array<Nfl_All_Day_Packs>;
  /** fetch aggregated fields from the table: "nfl_all_day_packs" */
  nfl_all_day_packs_aggregate: Nfl_All_Day_Packs_Aggregate;
  /** fetch data from the table: "nfl_all_day_packs" using primary key columns */
  nfl_all_day_packs_by_pk?: Maybe<Nfl_All_Day_Packs>;
  /** fetch data from the table: "nfl_all_day_plays" */
  nfl_all_day_plays: Array<Nfl_All_Day_Plays>;
  /** fetch aggregated fields from the table: "nfl_all_day_plays" */
  nfl_all_day_plays_aggregate: Nfl_All_Day_Plays_Aggregate;
  /** fetch data from the table: "nfl_all_day_plays" using primary key columns */
  nfl_all_day_plays_by_pk?: Maybe<Nfl_All_Day_Plays>;
  /** fetch data from the table: "nfl_all_day_purchases" */
  nfl_all_day_purchases: Array<Nfl_All_Day_Purchases>;
  /** fetch aggregated fields from the table: "nfl_all_day_purchases" */
  nfl_all_day_purchases_aggregate: Nfl_All_Day_Purchases_Aggregate;
  /** fetch data from the table: "nfl_all_day_purchases" using primary key columns */
  nfl_all_day_purchases_by_pk?: Maybe<Nfl_All_Day_Purchases>;
  /** fetch data from the table: "nfl_all_day_series" */
  nfl_all_day_series: Array<Nfl_All_Day_Series>;
  /** fetch aggregated fields from the table: "nfl_all_day_series" */
  nfl_all_day_series_aggregate: Nfl_All_Day_Series_Aggregate;
  /** fetch data from the table: "nfl_all_day_series" using primary key columns */
  nfl_all_day_series_by_pk?: Maybe<Nfl_All_Day_Series>;
  /** fetch data from the table: "nfl_all_day_sets" */
  nfl_all_day_sets: Array<Nfl_All_Day_Sets>;
  /** fetch aggregated fields from the table: "nfl_all_day_sets" */
  nfl_all_day_sets_aggregate: Nfl_All_Day_Sets_Aggregate;
  /** fetch data from the table: "nfl_all_day_sets" using primary key columns */
  nfl_all_day_sets_by_pk?: Maybe<Nfl_All_Day_Sets>;
  /** fetch data from the table: "nfl_all_day_taxonomies" */
  nfl_all_day_taxonomies: Array<Nfl_All_Day_Taxonomies>;
  /** fetch aggregated fields from the table: "nfl_all_day_taxonomies" */
  nfl_all_day_taxonomies_aggregate: Nfl_All_Day_Taxonomies_Aggregate;
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
  /** An array relationship */
  nft_favorites: Array<Nft_Favorites>;
  /** An aggregate relationship */
  nft_favorites_aggregate: Nft_Favorites_Aggregate;
  /** fetch data from the table: "nft_favorites" using primary key columns */
  nft_favorites_by_pk?: Maybe<Nft_Favorites>;
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
  /** fetch data from the table: "notifications" */
  notifications: Array<Notifications>;
  /** fetch aggregated fields from the table: "notifications" */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "notifications_types" */
  notifications_types: Array<Notifications_Types>;
  /** fetch aggregated fields from the table: "notifications_types" */
  notifications_types_aggregate: Notifications_Types_Aggregate;
  /** fetch data from the table: "notifications_types" using primary key columns */
  notifications_types_by_pk?: Maybe<Notifications_Types>;
  /** execute function "random_sale_offer" which returns "nft_sale_offer" */
  random_sale_offer: Array<Nft_Sale_Offer>;
  /** execute function "random_sale_offer" and query aggregates on result of table type "nft_sale_offer" */
  random_sale_offer_aggregate: Nft_Sale_Offer_Aggregate;
};


export type Subscription_RootNfl_All_Day_EditionsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Editions_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Editions_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Editions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Editions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Editions_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Editions_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Editions_By_PkArgs = {
  edition_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_ListingsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Listings_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Listings_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Listings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Listings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Listings_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Listings_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Listings_By_PkArgs = {
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_Moment_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moment_Transfers_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Moment_Transfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moment_Transfers_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moment_Transfers_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Moment_Transfers_By_PkArgs = {
  block_height: Scalars['bigint'];
  event_index: Scalars['Int'];
  moment_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};


export type Subscription_RootNfl_All_Day_MomentsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Moments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Moments_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Moments_By_PkArgs = {
  moment_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_Pack_MomentsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Pack_Moments_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Pack_Moments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Pack_Moments_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Pack_Moments_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Pack_Moments_By_PkArgs = {
  moment_id: Scalars['bigint'];
  pack_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_Pack_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Pack_Transfers_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Pack_Transfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Pack_Transfers_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Pack_Transfers_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Pack_Transfers_By_PkArgs = {
  block_height: Scalars['bigint'];
  event_index: Scalars['Int'];
  pack_id: Scalars['bigint'];
  transaction_index: Scalars['Int'];
};


export type Subscription_RootNfl_All_Day_PacksArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Packs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Packs_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Packs_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Packs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Packs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Packs_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Packs_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Packs_By_PkArgs = {
  pack_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_PlaysArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Plays_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Plays_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Plays_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Plays_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Plays_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Plays_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Plays_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Plays_By_PkArgs = {
  play_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_PurchasesArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Purchases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Purchases_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Purchases_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Purchases_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Purchases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Purchases_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Purchases_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Purchases_By_PkArgs = {
  order_address: Scalars['String'];
  order_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_SeriesArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Series_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Series_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Series_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Series_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Series_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Series_By_PkArgs = {
  series_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_SetsArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Sets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Sets_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Sets_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Sets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Sets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Sets_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Sets_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Sets_By_PkArgs = {
  set_id: Scalars['bigint'];
};


export type Subscription_RootNfl_All_Day_TaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Taxonomies_Bool_Exp>;
};


export type Subscription_RootNfl_All_Day_Taxonomies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nfl_All_Day_Taxonomies_Order_By>>;
  where?: InputMaybe<Nfl_All_Day_Taxonomies_Bool_Exp>;
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


export type Subscription_RootNft_FavoritesArgs = {
  distinct_on?: InputMaybe<Array<Nft_Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Favorites_Order_By>>;
  where?: InputMaybe<Nft_Favorites_Bool_Exp>;
};


export type Subscription_RootNft_Favorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Favorites_Order_By>>;
  where?: InputMaybe<Nft_Favorites_Bool_Exp>;
};


export type Subscription_RootNft_Favorites_By_PkArgs = {
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


export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNotifications_TypesArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Types_Order_By>>;
  where?: InputMaybe<Notifications_Types_Bool_Exp>;
};


export type Subscription_RootNotifications_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Notifications_Types_Order_By>>;
  where?: InputMaybe<Notifications_Types_Bool_Exp>;
};


export type Subscription_RootNotifications_Types_By_PkArgs = {
  type: Scalars['String'];
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

export type AddFavoriteMutationVariables = Exact<{
  nftId?: InputMaybe<Scalars['uuid']>;
  address?: InputMaybe<Scalars['String']>;
}>;


export type AddFavoriteMutation = { insert_nft_favorites?: { returning: Array<{ id: any, nft_id: any, wallet_address: string }> } | null | undefined };

export type RemoveFavoriteMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
}>;


export type RemoveFavoriteMutation = { delete_nft_favorites?: { returning: Array<{ id: any }> } | null | undefined };

export type GetCollectionByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetCollectionByIdQuery = { nft_collection: Array<{ id: any, image: string, author: string, description: string, name: string }> };

export type GetNftByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['jsonb']>;
  collection_id: Scalars['uuid'];
}>;


export type GetNftByIdQuery = { nft: Array<{ id: any, asset_id: any, is_for_sale: boolean, collection_id?: any | null | undefined, created_at?: any | null | undefined, updated_at?: any | null | undefined, minted_at?: any | null | undefined, mint_number?: any | null | undefined, has_sale_offers?: boolean | null | undefined, transaction_status?: boolean | null | undefined, owner: string, collection?: { collection_id?: any | null | undefined, name: string, market_fee: any, image: string, description: string, author: string } | null | undefined, template?: { metadata?: any | null | undefined } | null | undefined, sale_offers: Array<{ listing_resource_id: any, price: string, status: string, updated_at: any }> }> };

export type GetNflEditionByIdQueryVariables = Exact<{
  _eq: Scalars['bigint'];
}>;


export type GetNflEditionByIdQuery = { nfl_all_day_moments_aggregate: { aggregate?: { count: number } | null | undefined }, nfl_all_day_editions: Array<{ edition_id: any, max_mint_size?: number | null | undefined, inserted_at: any, number_of_active_listings?: number | null | undefined, unavailable_count?: number | null | undefined, hidden_in_packs_count?: number | null | undefined, circulation_count?: number | null | undefined, tier: string, play?: { player_full_name: string, team_name: string, game_date: any, play_type: string, player_position: string, description?: string | null | undefined, classification: string, away_team_name: string, away_team_score: number, home_team_name: string, home_team_score: number, external_id?: string | null | undefined } | null | undefined, series?: { name: string, series_id: any } | null | undefined, set?: { name: string, set_id: any } | null | undefined }> };

export type GetMomentsByEditionIdQueryVariables = Exact<{
  _eq: Scalars['bigint'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetMomentsByEditionIdQuery = { nfl_all_day_moments: Array<{ transaction_index: number, serial_number: number, owner?: string | null | undefined, moment_id: any, inserted_at: any, event_index: number, edition_id: any, created_at: any, burned_at?: any | null | undefined, block_height: any, active_listing_vault_type?: string | null | undefined, active_listing_transaction_index?: number | null | undefined, active_listing_price?: any | null | undefined, active_listing_order_id?: any | null | undefined, active_listing_order_address?: string | null | undefined, active_listing_event_index?: number | null | undefined, active_listing_date?: any | null | undefined, active_listing_block_height?: any | null | undefined, acquired_at?: any | null | undefined }> };

export type GetNftByMintNumberQueryVariables = Exact<{
  filter?: InputMaybe<Nft_Bool_Exp>;
}>;


export type GetNftByMintNumberQuery = { nft: Array<{ id: any, asset_id: any, mint_number?: any | null | undefined, owner: string, is_for_sale: boolean, created_at?: any | null | undefined, updated_at?: any | null | undefined, minted_at?: any | null | undefined, collection_id?: any | null | undefined, transaction_status?: boolean | null | undefined, has_sale_offers?: boolean | null | undefined, collection?: { collection_id?: any | null | undefined, name: string, market_fee: any, image: string, description: string, author: string } | null | undefined, sale_offers: Array<{ status: string, price: string, listing_resource_id: any, updated_at: any }>, template?: { metadata?: any | null | undefined } | null | undefined }> };

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

export type CheckFavoriteNftQueryVariables = Exact<{
  nftId: Scalars['uuid'];
  address?: InputMaybe<Scalars['String']>;
}>;


export type CheckFavoriteNftQuery = { nft_favorites: Array<{ id: any }> };

export type GetFavoriteListQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type GetFavoriteListQuery = { nft_favorites: Array<{ nft: { asset_id: any, mint_number?: any | null | undefined, is_for_sale: boolean, has_sale_offers?: boolean | null | undefined, collection_id?: any | null | undefined, transaction_status?: boolean | null | undefined, owner: string, collection?: { collection_id?: any | null | undefined, name: string, market_fee: any, image: string, description: string, author: string } | null | undefined, template?: { metadata?: any | null | undefined } | null | undefined, sale_offers: Array<{ listing_resource_id: any, price: string, status: string, updated_at: any }> } }> };

export type GetLowerNftPriceByCollectionQueryVariables = Exact<{
  collection_id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetLowerNftPriceByCollectionQuery = { nft: Array<{ id: any, last_active_price?: any | null | undefined, template?: { collection?: { description: string, image: string, name: string, collection_id?: any | null | undefined, id: any } | null | undefined } | null | undefined, sale_offers: Array<{ id: any, price: string }> }> };

export type GetNflFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNflFiltersQuery = { nfl_all_day_taxonomies: Array<{ moment_count?: any | null | undefined, taxonomy_attribute?: string | null | undefined, taxonomy_label?: string | null | undefined, taxonomy_value?: string | null | undefined }> };

export type GetNFlEditionsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  plays?: InputMaybe<Nfl_All_Day_Plays_Bool_Exp>;
  sets?: InputMaybe<Nfl_All_Day_Sets_Bool_Exp>;
  tier?: InputMaybe<Array<Nfl_All_Day_Editions_Bool_Exp> | Nfl_All_Day_Editions_Bool_Exp>;
  orderBy?: InputMaybe<Array<Nfl_All_Day_Editions_Order_By> | Nfl_All_Day_Editions_Order_By>;
}>;


export type GetNFlEditionsQuery = { nfl_all_day_editions_aggregate: { aggregate?: { count: number } | null | undefined }, nfl_all_day_editions: Array<{ edition_id: any, max_list_price?: any | null | undefined, min_list_price?: any | null | undefined, max_mint_size?: number | null | undefined, inserted_at: any, number_of_active_listings?: number | null | undefined, circulation_count?: number | null | undefined, tier: string, play?: { player_full_name: string, description?: string | null | undefined, external_id?: string | null | undefined, team_name: string, game_date: any, play_type: string, player_position: string } | null | undefined, series?: { name: string, series_id: any } | null | undefined, set?: { name: string, set_id: any } | null | undefined }> };

export type GetNflnfTsByAddressQueryVariables = Exact<{
  address: Scalars['String'];
  collections?: InputMaybe<Array<Nft_Bool_Exp> | Nft_Bool_Exp>;
}>;


export type GetNflnfTsByAddressQuery = { nft: { nfl: Array<{ serial_number: number, active_listing_price?: any | null | undefined, active_listing_order_id?: any | null | undefined, created_at: any, owner?: string | null | undefined, id: any, asset_id: any, edition?: { edition_id: any, max_mint_size?: number | null | undefined, min_list_price?: any | null | undefined, max_list_price?: any | null | undefined, number_of_active_listings?: number | null | undefined, tier: string, play?: { team_name: string, play_id: any, description?: string | null | undefined, classification: string, created_at: any, play_type: string, external_id?: string | null | undefined, game_date: any, player_full_name: string, player_position: string } | null | undefined, series?: { name: string, series_id: any } | null | undefined, set?: { name: string, set_id: any } | null | undefined } | null | undefined }> } };

export type GetNflMomentQueryVariables = Exact<{
  edition_id?: InputMaybe<Scalars['bigint']>;
  serial_number?: InputMaybe<Scalars['Int']>;
}>;


export type GetNflMomentQuery = { nfl_all_day_moments: Array<{ moment_id: any, active_listing_price?: any | null | undefined, owner?: string | null | undefined, serial_number: number, active_listing_order_id?: any | null | undefined, active_listing_order_address?: string | null | undefined, edition?: { edition_id: any, max_mint_size?: number | null | undefined, inserted_at: any, circulation_count?: number | null | undefined, hidden_in_packs_count?: number | null | undefined, tier: string, play?: { player_full_name: string, description?: string | null | undefined, external_id?: string | null | undefined, team_name: string, game_date: any, play_type: string, player_position: string, home_team_name: string, away_team_name: string } | null | undefined, series?: { name: string, series_id: any } | null | undefined, set?: { name: string, set_id: any } | null | undefined } | null | undefined }> };


export const AddFavoriteDocument = gql`
    mutation addFavorite($nftId: uuid, $address: String) {
  insert_nft_favorites(objects: {nft_id: $nftId, wallet_address: $address}) {
    returning {
      id
      nft_id
      wallet_address
    }
  }
}
    `;
export type AddFavoriteMutationFn = Apollo.MutationFunction<AddFavoriteMutation, AddFavoriteMutationVariables>;

/**
 * __useAddFavoriteMutation__
 *
 * To run a mutation, you first call `useAddFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteMutation, { data, loading, error }] = useAddFavoriteMutation({
 *   variables: {
 *      nftId: // value for 'nftId'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteMutation, AddFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFavoriteMutation, AddFavoriteMutationVariables>(AddFavoriteDocument, options);
      }
export type AddFavoriteMutationHookResult = ReturnType<typeof useAddFavoriteMutation>;
export type AddFavoriteMutationResult = Apollo.MutationResult<AddFavoriteMutation>;
export type AddFavoriteMutationOptions = Apollo.BaseMutationOptions<AddFavoriteMutation, AddFavoriteMutationVariables>;
export const RemoveFavoriteDocument = gql`
    mutation removeFavorite($id: uuid) {
  delete_nft_favorites(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type RemoveFavoriteMutationFn = Apollo.MutationFunction<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;

/**
 * __useRemoveFavoriteMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteMutation, { data, loading, error }] = useRemoveFavoriteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>(RemoveFavoriteDocument, options);
      }
export type RemoveFavoriteMutationHookResult = ReturnType<typeof useRemoveFavoriteMutation>;
export type RemoveFavoriteMutationResult = Apollo.MutationResult<RemoveFavoriteMutation>;
export type RemoveFavoriteMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteMutation, RemoveFavoriteMutationVariables>;
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
    id
    asset_id
    is_for_sale
    collection_id
    created_at
    updated_at
    minted_at
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
export const GetNflEditionByIdDocument = gql`
    query getNflEditionById($_eq: bigint!) {
  nfl_all_day_moments_aggregate(where: {edition_id: {_eq: $_eq}}) {
    aggregate {
      count
    }
  }
  nfl_all_day_editions(where: {edition_id: {_eq: $_eq}}) {
    edition_id
    max_mint_size
    inserted_at
    play {
      player_full_name
      team_name
      game_date
      play_type
      player_position
      description
      classification
      away_team_name
      away_team_score
      home_team_name
      home_team_score
      external_id
    }
    series {
      name
      series_id
    }
    set {
      name
      set_id
    }
    number_of_active_listings
    unavailable_count
    hidden_in_packs_count
    circulation_count
    tier
  }
}
    `;

/**
 * __useGetNflEditionByIdQuery__
 *
 * To run a query within a React component, call `useGetNflEditionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNflEditionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNflEditionByIdQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetNflEditionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetNflEditionByIdQuery, GetNflEditionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNflEditionByIdQuery, GetNflEditionByIdQueryVariables>(GetNflEditionByIdDocument, options);
      }
export function useGetNflEditionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNflEditionByIdQuery, GetNflEditionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNflEditionByIdQuery, GetNflEditionByIdQueryVariables>(GetNflEditionByIdDocument, options);
        }
export type GetNflEditionByIdQueryHookResult = ReturnType<typeof useGetNflEditionByIdQuery>;
export type GetNflEditionByIdLazyQueryHookResult = ReturnType<typeof useGetNflEditionByIdLazyQuery>;
export type GetNflEditionByIdQueryResult = Apollo.QueryResult<GetNflEditionByIdQuery, GetNflEditionByIdQueryVariables>;
export const GetMomentsByEditionIdDocument = gql`
    query getMomentsByEditionId($_eq: bigint!, $offset: Int!, $limit: Int!) {
  nfl_all_day_moments(
    where: {active_listing_price: {_is_null: false}, edition_id: {_eq: $_eq}}
    limit: $limit
    offset: $offset
  ) {
    transaction_index
    serial_number
    owner
    moment_id
    inserted_at
    event_index
    edition_id
    created_at
    burned_at
    block_height
    active_listing_vault_type
    active_listing_transaction_index
    active_listing_price
    active_listing_order_id
    active_listing_order_address
    active_listing_event_index
    active_listing_date
    active_listing_block_height
    acquired_at
  }
}
    `;

/**
 * __useGetMomentsByEditionIdQuery__
 *
 * To run a query within a React component, call `useGetMomentsByEditionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMomentsByEditionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMomentsByEditionIdQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetMomentsByEditionIdQuery(baseOptions: Apollo.QueryHookOptions<GetMomentsByEditionIdQuery, GetMomentsByEditionIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMomentsByEditionIdQuery, GetMomentsByEditionIdQueryVariables>(GetMomentsByEditionIdDocument, options);
      }
export function useGetMomentsByEditionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMomentsByEditionIdQuery, GetMomentsByEditionIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMomentsByEditionIdQuery, GetMomentsByEditionIdQueryVariables>(GetMomentsByEditionIdDocument, options);
        }
export type GetMomentsByEditionIdQueryHookResult = ReturnType<typeof useGetMomentsByEditionIdQuery>;
export type GetMomentsByEditionIdLazyQueryHookResult = ReturnType<typeof useGetMomentsByEditionIdLazyQuery>;
export type GetMomentsByEditionIdQueryResult = Apollo.QueryResult<GetMomentsByEditionIdQuery, GetMomentsByEditionIdQueryVariables>;
export const GetNftByMintNumberDocument = gql`
    query getNftByMintNumber($filter: nft_bool_exp) {
  nft(where: $filter) {
    id
    asset_id
    mint_number
    owner
    is_for_sale
    created_at
    updated_at
    minted_at
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
export const CheckFavoriteNftDocument = gql`
    query checkFavoriteNft($nftId: uuid!, $address: String) {
  nft_favorites(where: {nft_id: {_eq: $nftId}, wallet_address: {_eq: $address}}) {
    id
  }
}
    `;

/**
 * __useCheckFavoriteNftQuery__
 *
 * To run a query within a React component, call `useCheckFavoriteNftQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckFavoriteNftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckFavoriteNftQuery({
 *   variables: {
 *      nftId: // value for 'nftId'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCheckFavoriteNftQuery(baseOptions: Apollo.QueryHookOptions<CheckFavoriteNftQuery, CheckFavoriteNftQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckFavoriteNftQuery, CheckFavoriteNftQueryVariables>(CheckFavoriteNftDocument, options);
      }
export function useCheckFavoriteNftLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckFavoriteNftQuery, CheckFavoriteNftQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckFavoriteNftQuery, CheckFavoriteNftQueryVariables>(CheckFavoriteNftDocument, options);
        }
export type CheckFavoriteNftQueryHookResult = ReturnType<typeof useCheckFavoriteNftQuery>;
export type CheckFavoriteNftLazyQueryHookResult = ReturnType<typeof useCheckFavoriteNftLazyQuery>;
export type CheckFavoriteNftQueryResult = Apollo.QueryResult<CheckFavoriteNftQuery, CheckFavoriteNftQueryVariables>;
export const GetFavoriteListDocument = gql`
    query getFavoriteList($address: String) {
  nft_favorites(where: {wallet_address: {_eq: $address}}) {
    nft {
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
}
    `;

/**
 * __useGetFavoriteListQuery__
 *
 * To run a query within a React component, call `useGetFavoriteListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoriteListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoriteListQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetFavoriteListQuery(baseOptions?: Apollo.QueryHookOptions<GetFavoriteListQuery, GetFavoriteListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavoriteListQuery, GetFavoriteListQueryVariables>(GetFavoriteListDocument, options);
      }
export function useGetFavoriteListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavoriteListQuery, GetFavoriteListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavoriteListQuery, GetFavoriteListQueryVariables>(GetFavoriteListDocument, options);
        }
export type GetFavoriteListQueryHookResult = ReturnType<typeof useGetFavoriteListQuery>;
export type GetFavoriteListLazyQueryHookResult = ReturnType<typeof useGetFavoriteListLazyQuery>;
export type GetFavoriteListQueryResult = Apollo.QueryResult<GetFavoriteListQuery, GetFavoriteListQueryVariables>;
export const GetLowerNftPriceByCollectionDocument = gql`
    query getLowerNftPriceByCollection($collection_id: uuid) {
  nft(where: {template: {collection: {id: {_eq: $collection_id}}}}) {
    id
    template {
      collection {
        description
        image
        name
        collection_id
        id
      }
    }
    last_active_price
    sale_offers(order_by: {price: asc}) {
      id
      price
    }
  }
}
    `;

/**
 * __useGetLowerNftPriceByCollectionQuery__
 *
 * To run a query within a React component, call `useGetLowerNftPriceByCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLowerNftPriceByCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLowerNftPriceByCollectionQuery({
 *   variables: {
 *      collection_id: // value for 'collection_id'
 *   },
 * });
 */
export function useGetLowerNftPriceByCollectionQuery(baseOptions?: Apollo.QueryHookOptions<GetLowerNftPriceByCollectionQuery, GetLowerNftPriceByCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLowerNftPriceByCollectionQuery, GetLowerNftPriceByCollectionQueryVariables>(GetLowerNftPriceByCollectionDocument, options);
      }
export function useGetLowerNftPriceByCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLowerNftPriceByCollectionQuery, GetLowerNftPriceByCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLowerNftPriceByCollectionQuery, GetLowerNftPriceByCollectionQueryVariables>(GetLowerNftPriceByCollectionDocument, options);
        }
export type GetLowerNftPriceByCollectionQueryHookResult = ReturnType<typeof useGetLowerNftPriceByCollectionQuery>;
export type GetLowerNftPriceByCollectionLazyQueryHookResult = ReturnType<typeof useGetLowerNftPriceByCollectionLazyQuery>;
export type GetLowerNftPriceByCollectionQueryResult = Apollo.QueryResult<GetLowerNftPriceByCollectionQuery, GetLowerNftPriceByCollectionQueryVariables>;
export const GetNflFiltersDocument = gql`
    query getNflFilters {
  nfl_all_day_taxonomies {
    moment_count
    taxonomy_attribute
    taxonomy_label
    taxonomy_value
  }
}
    `;

/**
 * __useGetNflFiltersQuery__
 *
 * To run a query within a React component, call `useGetNflFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNflFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNflFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNflFiltersQuery(baseOptions?: Apollo.QueryHookOptions<GetNflFiltersQuery, GetNflFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNflFiltersQuery, GetNflFiltersQueryVariables>(GetNflFiltersDocument, options);
      }
export function useGetNflFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNflFiltersQuery, GetNflFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNflFiltersQuery, GetNflFiltersQueryVariables>(GetNflFiltersDocument, options);
        }
export type GetNflFiltersQueryHookResult = ReturnType<typeof useGetNflFiltersQuery>;
export type GetNflFiltersLazyQueryHookResult = ReturnType<typeof useGetNflFiltersLazyQuery>;
export type GetNflFiltersQueryResult = Apollo.QueryResult<GetNflFiltersQuery, GetNflFiltersQueryVariables>;
export const GetNFlEditionsDocument = gql`
    query getNFlEditions($offset: Int, $plays: nfl_all_day_plays_bool_exp, $sets: nfl_all_day_sets_bool_exp, $tier: [nfl_all_day_editions_bool_exp!], $orderBy: [nfl_all_day_editions_order_by!]) {
  nfl_all_day_editions_aggregate(
    where: {_and: {_or: $tier, play: $plays, set: $sets}}
  ) {
    aggregate {
      count
    }
  }
  nfl_all_day_editions(
    where: {_and: [{number_of_active_listings: {_gt: 0}}, {_or: $tier, play: $plays, set: $sets}]}
    limit: 40
    offset: $offset
    order_by: $orderBy
  ) {
    edition_id
    max_list_price
    min_list_price
    max_mint_size
    inserted_at
    number_of_active_listings
    circulation_count
    tier
    play {
      player_full_name
      description
      external_id
      team_name
      game_date
      play_type
      player_position
    }
    series {
      name
      series_id
    }
    set {
      name
      set_id
    }
  }
}
    `;

/**
 * __useGetNFlEditionsQuery__
 *
 * To run a query within a React component, call `useGetNFlEditionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNFlEditionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNFlEditionsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      plays: // value for 'plays'
 *      sets: // value for 'sets'
 *      tier: // value for 'tier'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetNFlEditionsQuery(baseOptions?: Apollo.QueryHookOptions<GetNFlEditionsQuery, GetNFlEditionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNFlEditionsQuery, GetNFlEditionsQueryVariables>(GetNFlEditionsDocument, options);
      }
export function useGetNFlEditionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNFlEditionsQuery, GetNFlEditionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNFlEditionsQuery, GetNFlEditionsQueryVariables>(GetNFlEditionsDocument, options);
        }
export type GetNFlEditionsQueryHookResult = ReturnType<typeof useGetNFlEditionsQuery>;
export type GetNFlEditionsLazyQueryHookResult = ReturnType<typeof useGetNFlEditionsLazyQuery>;
export type GetNFlEditionsQueryResult = Apollo.QueryResult<GetNFlEditionsQuery, GetNFlEditionsQueryVariables>;
export const GetNflnfTsByAddressDocument = gql`
    query getNFLNFTsByAddress($address: String!, $collections: [nft_bool_exp!]) {
  nft: nfl_all_day_moments_aggregate(where: {owner: {_eq: $address}}) {
    nfl: nodes {
      id: moment_id
      asset_id: moment_id
      serial_number
      active_listing_price
      active_listing_order_id
      created_at
      owner
      edition {
        edition_id
        max_mint_size
        min_list_price
        max_list_price
        number_of_active_listings
        tier
        play {
          team_name
          play_id
          description
          classification
          created_at
          play_type
          external_id
          game_date
          player_full_name
          player_position
        }
        series {
          name
          series_id
        }
        set {
          name
          set_id
        }
      }
    }
  }
}
    `;

/**
 * __useGetNflnfTsByAddressQuery__
 *
 * To run a query within a React component, call `useGetNflnfTsByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNflnfTsByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNflnfTsByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *      collections: // value for 'collections'
 *   },
 * });
 */
export function useGetNflnfTsByAddressQuery(baseOptions: Apollo.QueryHookOptions<GetNflnfTsByAddressQuery, GetNflnfTsByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNflnfTsByAddressQuery, GetNflnfTsByAddressQueryVariables>(GetNflnfTsByAddressDocument, options);
      }
export function useGetNflnfTsByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNflnfTsByAddressQuery, GetNflnfTsByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNflnfTsByAddressQuery, GetNflnfTsByAddressQueryVariables>(GetNflnfTsByAddressDocument, options);
        }
export type GetNflnfTsByAddressQueryHookResult = ReturnType<typeof useGetNflnfTsByAddressQuery>;
export type GetNflnfTsByAddressLazyQueryHookResult = ReturnType<typeof useGetNflnfTsByAddressLazyQuery>;
export type GetNflnfTsByAddressQueryResult = Apollo.QueryResult<GetNflnfTsByAddressQuery, GetNflnfTsByAddressQueryVariables>;
export const GetNflMomentDocument = gql`
    query getNFLMoment($edition_id: bigint, $serial_number: Int) {
  nfl_all_day_moments(
    where: {serial_number: {_eq: $serial_number}, edition: {edition_id: {_eq: $edition_id}}}
  ) {
    moment_id
    active_listing_price
    owner
    serial_number
    active_listing_order_id
    active_listing_order_address
    edition {
      edition_id
      max_mint_size
      inserted_at
      circulation_count
      hidden_in_packs_count
      tier
      play {
        player_full_name
        description
        external_id
        team_name
        game_date
        play_type
        player_position
        home_team_name
        away_team_name
      }
      series {
        name
        series_id
      }
      set {
        name
        set_id
      }
    }
  }
}
    `;

/**
 * __useGetNflMomentQuery__
 *
 * To run a query within a React component, call `useGetNflMomentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNflMomentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNflMomentQuery({
 *   variables: {
 *      edition_id: // value for 'edition_id'
 *      serial_number: // value for 'serial_number'
 *   },
 * });
 */
export function useGetNflMomentQuery(baseOptions?: Apollo.QueryHookOptions<GetNflMomentQuery, GetNflMomentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNflMomentQuery, GetNflMomentQueryVariables>(GetNflMomentDocument, options);
      }
export function useGetNflMomentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNflMomentQuery, GetNflMomentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNflMomentQuery, GetNflMomentQueryVariables>(GetNflMomentDocument, options);
        }
export type GetNflMomentQueryHookResult = ReturnType<typeof useGetNflMomentQuery>;
export type GetNflMomentLazyQueryHookResult = ReturnType<typeof useGetNflMomentLazyQuery>;
export type GetNflMomentQueryResult = Apollo.QueryResult<GetNflMomentQuery, GetNflMomentQueryVariables>;