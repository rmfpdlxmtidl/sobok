/* eslint-disable */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any
  /** Last value of pagination */
  LastValue: any
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any
  /** Integers that will have a value greater than 0. */
  PositiveInt: any
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any
}

export type Bucket = {
  __typename?: 'Bucket'
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  type: BucketType
  /** ?????? ????????? */
  user: User
  userId: Scalars['ID']
}

export enum BucketType {
  Menu = 'MENU',
  Store = 'STORE',
}

export type Comment = {
  __typename?: 'Comment'
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  /** ??? ????????? ?????? ?????? */
  feed: Feed
  id: Scalars['ID']
  imageUrl?: Maybe<Scalars['URL']>
  modificationTime: Scalars['DateTime']
  /** ??? ????????? ?????? ?????? */
  parentComment?: Maybe<Comment>
  /** ????????? ????????? ????????? */
  user: User
}

export type Feed = {
  __typename?: 'Feed'
  commentCount: Scalars['Int']
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  /** ????????? ?????? ???????????? */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  id: Scalars['ID']
  imageUrls: Array<Scalars['URL']>
  /** ?????? ????????? ?????? (????????? ??????) */
  isLiked: Scalars['Boolean']
  likeCount: Scalars['Int']
  modificationTime: Scalars['DateTime']
  rating: Scalars['NonEmptyString']
  /** ????????? ????????? ?????? */
  store: Store
  storeId: Scalars['ID']
  /** ?????? ????????? */
  user: User
  userId: Scalars['ID']
}

/** ?????????: ?????? ????????? */
export enum FeedOptions {
  /** ????????? ?????? */
  FollowingUser = 'FOLLOWING_USER',
  StarUser = 'STAR_USER',
}

export type FeedOrder = {
  by?: Maybe<FeedOrderBy>
  direction?: Maybe<OrderDirection>
}

/** ?????????: id */
export enum FeedOrderBy {
  CreationTime = 'CREATION_TIME',
}

/** ?????? */
export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
}

export type Menu = {
  __typename?: 'Menu'
  category: Scalars['NonEmptyString']
  creationTime: Scalars['DateTime']
  /** ????????? ?????? ???????????? */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  id: Scalars['ID']
  imageUrls: Array<Scalars['URL']>
  /** ???????????? ???????????? ??? ????????? ????????? ?????? ?????? */
  isInBucket: Scalars['Boolean']
  /** ???????????? ???????????? ??? ????????? ???????????? ?????? */
  isLiked: Scalars['Boolean']
  isSoldOut: Scalars['Boolean']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  price: Scalars['Int']
  /** ??? ????????? ???????????? ?????? */
  store: Store
  storeId: Scalars['ID']
}

export type MenuOrder = {
  by?: Maybe<MenuOrderBy>
  direction?: Maybe<OrderDirection>
}

/** ?????????: id */
export enum MenuOrderBy {
  Name = 'NAME',
  Price = 'PRICE',
}

export type Mutation = {
  __typename?: 'Mutation'
  /** ?????? ?????? ?????? ???????????? ??????????????? ???????????? JWT ?????? ????????? ????????? */
  login?: Maybe<UserAuthentication>
  /** JWT ?????? ????????? ?????? ???????????? ???????????? ?????? ????????? ????????? */
  logout: Scalars['Boolean']
  /** ??????????????? ????????? ????????? ?????? ???????????? ??? ?????? ????????? ????????? */
  register?: Maybe<UserAuthentication>
  /** ?????? ????????? ???????????? ?????? ?????? ????????? ???????????????. `True`: ??? ??????, `False`: ??? ?????? */
  toggleLikedStore?: Maybe<Store>
  /** ???????????? ??? ????????? ????????? ?????? ???????????? */
  unregister: Scalars['Boolean']
}

export type MutationLoginArgs = {
  passwordHash: Scalars['NonEmptyString']
  uniqueNameOrEmail: Scalars['NonEmptyString']
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationToggleLikedStoreArgs = {
  id: Scalars['ID']
}

export type News = {
  __typename?: 'News'
  category: Scalars['NonEmptyString']
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** ?????? ????????? ?????? (????????? ??????) */
  isLiked: Scalars['Boolean']
  modificationTime: Scalars['DateTime']
  /** ??? ????????? ?????? ?????? */
  store: Store
  storeId: Scalars['ID']
  title: Scalars['NonEmptyString']
}

/** ?????????: ALL_STORE */
export enum NewsOptions {
  AllStore = 'ALL_STORE',
  /** ????????? ?????? */
  LikedStore = 'LIKED_STORE',
}

export type NewsOrder = {
  by?: Maybe<NewsOrderBy>
  direction?: Maybe<OrderDirection>
}

/** ?????????: id */
export enum NewsOrderBy {
  Name = 'NAME',
}

/** ?????????: ???????????? */
export enum OrderDirection {
  Asc = 'ASC',
}

export type Pagination = {
  lastId?: Maybe<Scalars['ID']>
  lastValue?: Maybe<Scalars['LastValue']>
  limit: Scalars['PositiveInt']
}

/** OAuth ????????? */
export enum Provider {
  Google = 'GOOGLE',
  Kakao = 'KAKAO',
  Naver = 'NAVER',
  Sobok = 'SOBOK',
}

export type Query = {
  __typename?: 'Query'
  /** ?????? ?????? ?????? ?????? ???????????? ??????, ????????? ?????? ?????? userId??? ???????????? ??? */
  buckets?: Maybe<Array<Bucket>>
  /** ????????? ?????? ?????? */
  comments?: Maybe<Array<Comment>>
  /** ?????? ???????????? ?????? ?????? */
  commentsByFeed?: Maybe<Array<Maybe<Comment>>>
  /** ?????? ?????? */
  feed?: Maybe<Feed>
  /** ?????? ?????? ?????? ?????? */
  feedListByStore?: Maybe<Array<Feed>>
  /** ?????? ?????? ?????? ?????? */
  feedListByTown?: Maybe<Array<Feed>>
  /** ????????? ?????? ?????? ?????? */
  isEmailUnique: Scalars['Boolean']
  /** ????????? ?????? ?????? ?????? ?????? ?????? */
  isUniqueNameUnique: Scalars['Boolean']
  /** ????????? ?????? ?????? */
  likedComments?: Maybe<Array<Comment>>
  /** ????????? ?????? ?????? */
  likedFeed?: Maybe<Array<Feed>>
  /** ????????? ?????? ?????? */
  likedMenus?: Maybe<Array<Menu>>
  /** ????????? ?????? ?????? */
  likedNews?: Maybe<Array<News>>
  /** ????????? ?????? ?????? */
  likedStores?: Maybe<Array<Store>>
  /** ????????? ?????? ????????? */
  likedTrends?: Maybe<Array<Trend>>
  /** ?????? ????????? ?????? ???????????? ????????? ????????? ?????? */
  me: User
  /** ?????? ?????? */
  menu?: Maybe<Menu>
  /** ?????? ?????? */
  menuByName?: Maybe<Menu>
  /** ????????? ????????? ?????? ?????? */
  menus?: Maybe<Array<Menu>>
  /** ?????? ?????? ?????? ?????? */
  menusByStore?: Maybe<Array<Menu>>
  /** ?????? ?????? ??? ?????? ???????????? ?????? ?????? */
  menusByTownAndCategory?: Maybe<Array<Menu>>
  /** ?????? ???????????? ?????? ???????????? */
  menusInBucket?: Maybe<Array<Menu>>
  /** ?????? ??? ?????? */
  myComments?: Maybe<Array<Comment>>
  /** ?????? ????????? ?????? ????????? */
  myFollowers?: Maybe<Array<User>>
  /** ?????? ????????? ?????? ?????? ????????? */
  myFollowings?: Maybe<Array<User>>
  /** ??? ?????? ?????? ????????? */
  myMenuBuckets?: Maybe<Array<Bucket>>
  /** ??? ?????? ?????? ????????? */
  myStoreBuckets?: Maybe<Array<Bucket>>
  /** ?????? ????????? ?????? */
  myStores?: Maybe<Array<Store>>
  /** ?????? ??? ?????? */
  myfeed?: Maybe<Array<Feed>>
  /** ?????? ?????? */
  news?: Maybe<News>
  /** ?????? ?????? ?????? ?????? */
  newsListByStore?: Maybe<Array<News>>
  /** ????????? ?????? ?????? ?????? */
  newsListByTown?: Maybe<Array<News>>
  /** ??????????????? ?????? ?????? */
  searchFeedList?: Maybe<Array<Feed>>
  /** ??????????????? ?????? ?????? */
  searchMenus?: Maybe<Array<Menu>>
  /** ??????????????? ?????? ?????? */
  searchStores?: Maybe<Array<Store>>
  /** ?????? ?????? ?????? */
  store?: Maybe<Store>
  /** ?????? ?????? ?????? */
  storeInfo?: Maybe<Store>
  /** ?????? ??? ??????????????? ?????? ?????? */
  storesByTownAndCategories?: Maybe<Array<Store>>
  /** ?????? ???????????? ?????? */
  storesInBucket?: Maybe<Array<Store>>
  /** ????????? */
  subComments?: Maybe<Array<Maybe<Comment>>>
}

export type QueryBucketsArgs = {
  type: BucketType
  userUniqueName?: Maybe<Scalars['NonEmptyString']>
}

export type QueryCommentsByFeedArgs = {
  feedId: Scalars['ID']
}

export type QueryFeedArgs = {
  id: Scalars['ID']
}

export type QueryFeedListByStoreArgs = {
  order?: Maybe<FeedOrder>
  pagination: Pagination
  storeId: Scalars['ID']
}

export type QueryFeedListByTownArgs = {
  option?: Maybe<FeedOptions>
  order?: Maybe<FeedOrder>
  pagination: Pagination
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QueryIsEmailUniqueArgs = {
  email: Scalars['EmailAddress']
}

export type QueryIsUniqueNameUniqueArgs = {
  uniqueName: Scalars['NonEmptyString']
}

export type QueryMenuArgs = {
  id: Scalars['ID']
}

export type QueryMenuByNameArgs = {
  name: Scalars['NonEmptyString']
  storeId: Scalars['ID']
}

export type QueryMenusByStoreArgs = {
  storeId: Scalars['ID']
}

export type QueryMenusByTownAndCategoryArgs = {
  category?: Maybe<Scalars['NonEmptyString']>
  order?: Maybe<MenuOrder>
  pagination: Pagination
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QueryMenusInBucketArgs = {
  bucketId: Scalars['ID']
  userUniqueName: Scalars['NonEmptyString']
}

export type QueryNewsArgs = {
  id: Scalars['ID']
}

export type QueryNewsListByStoreArgs = {
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
  order?: Maybe<NewsOrder>
  pagination: Pagination
  storeId: Scalars['ID']
}

export type QueryNewsListByTownArgs = {
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
  option?: Maybe<NewsOptions>
  order?: Maybe<NewsOrder>
  pagination: Pagination
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QuerySearchFeedListArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
  order?: Maybe<FeedOrder>
  pagination: Pagination
}

export type QuerySearchMenusArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
  order?: Maybe<MenuOrder>
  pagination: Pagination
}

export type QuerySearchStoresArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
  order?: Maybe<StoreOrder>
  pagination: Pagination
}

export type QueryStoreArgs = {
  id: Scalars['ID']
}

export type QueryStoreInfoArgs = {
  id: Scalars['ID']
}

export type QueryStoresByTownAndCategoriesArgs = {
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
  order?: Maybe<StoreOrder>
  pagination: Pagination
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QueryStoresInBucketArgs = {
  bucketId: Scalars['ID']
  userUniqueName: Scalars['NonEmptyString']
}

export type QuerySubCommentsArgs = {
  id: Scalars['ID']
}

export type RegisterInput = {
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  email: Scalars['EmailAddress']
  gender: Gender
  imageUrl?: Maybe<Scalars['URL']>
  name: Scalars['NonEmptyString']
  passwordHash: Scalars['NonEmptyString']
  phone: Scalars['NonEmptyString']
  uniqueName: Scalars['NonEmptyString']
}

export type Store = {
  __typename?: 'Store'
  address: Scalars['NonEmptyString']
  businessHours?: Maybe<Array<Scalars['NonEmptyString']>>
  categories: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  /** ????????? ?????? ???????????? */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  holidays?: Maybe<Array<Scalars['Date']>>
  id: Scalars['ID']
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** ???????????? ???????????? ??? ????????? ????????? ?????? ?????? */
  isInBucket: Scalars['Boolean']
  /** ???????????? ???????????? ??? ????????? ???????????? ?????? */
  isLiked: Scalars['Boolean']
  latitude: Scalars['Latitude']
  longitude: Scalars['Longitude']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  registrationNumber?: Maybe<Scalars['String']>
  tel?: Maybe<Scalars['String']>
  town: Scalars['NonEmptyString']
  /** ????????? ????????? ????????? ?????? */
  user?: Maybe<User>
  userId: Scalars['ID']
}

export type StoreOrder = {
  by?: Maybe<StoreOrderBy>
  direction?: Maybe<OrderDirection>
}

/** ?????????: id */
export enum StoreOrderBy {
  Name = 'NAME',
}

export type Trend = {
  __typename?: 'Trend'
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  modificationTime: Scalars['DateTime']
  /** ????????? ????????? */
  user: User
}

export type User = {
  __typename?: 'User'
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  creationTime: Scalars['DateTime']
  email: Scalars['EmailAddress']
  feedCount: Scalars['Int']
  followerCount: Scalars['Int']
  followingCount: Scalars['Int']
  gender: Gender
  id: Scalars['UUID']
  imageUrl?: Maybe<Scalars['URL']>
  isEmailVerified: Scalars['Boolean']
  isStarUser: Scalars['Boolean']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  nickname?: Maybe<Scalars['String']>
  phone: Scalars['NonEmptyString']
  providers: Array<Provider>
  uniqueName: Scalars['NonEmptyString']
}

export type UserAuthentication = {
  __typename?: 'UserAuthentication'
  jwt: Scalars['JWT']
  userUniqueName: Scalars['NonEmptyString']
}

export type FeedCardFragment = {
  __typename?: 'Feed'
  id: string
  creationTime: any
  contents: Array<any>
  imageUrls: Array<any>
  likeCount: number
  commentCount: number
  isLiked: boolean
  user: {
    __typename?: 'User'
    id: any
    imageUrl?: any | null | undefined
    nickname?: string | null | undefined
  }
}

export type MenuCardFragment = {
  __typename?: 'Menu'
  id: string
  name: any
  price: number
  isSoldOut: boolean
  imageUrls: Array<any>
  isLiked: boolean
  hashtags?: Array<any> | null | undefined
}

export type StoreCardFragment = {
  __typename?: 'Store'
  id: string
  name: any
  categories: Array<any>
  imageUrls?: Array<any> | null | undefined
  latitude: any
  longitude: any
  isLiked: boolean
  hashtags?: Array<any> | null | undefined
}

export type LoginMutationVariables = Exact<{
  uniqueNameOrEmail: Scalars['NonEmptyString']
  passwordHash: Scalars['NonEmptyString']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login?: { __typename?: 'UserAuthentication'; userUniqueName: any; jwt: any } | null | undefined
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean }

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = {
  __typename?: 'Mutation'
  register?: { __typename?: 'UserAuthentication'; userUniqueName: any; jwt: any } | null | undefined
}

export type ToggleLikedStoreMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type ToggleLikedStoreMutation = {
  __typename?: 'Mutation'
  toggleLikedStore?: { __typename?: 'Store'; id: string; isLiked: boolean } | null | undefined
}

export type BucketMenusQueryVariables = Exact<{
  bucketId: Scalars['ID']
  userUniqueName: Scalars['NonEmptyString']
}>

export type BucketMenusQuery = {
  __typename?: 'Query'
  menusInBucket?:
    | Array<{
        __typename?: 'Menu'
        id: string
        name: any
        price: number
        isSoldOut: boolean
        imageUrls: Array<any>
        isLiked: boolean
        hashtags?: Array<any> | null | undefined
        store: { __typename?: 'Store'; id: string; name: any; address: any }
      }>
    | null
    | undefined
}

export type BucketStoresQueryVariables = Exact<{
  bucketId: Scalars['ID']
  userUniqueName: Scalars['NonEmptyString']
}>

export type BucketStoresQuery = {
  __typename?: 'Query'
  storesInBucket?:
    | Array<{
        __typename?: 'Store'
        id: string
        name: any
        categories: Array<any>
        imageUrls?: Array<any> | null | undefined
        latitude: any
        longitude: any
        isLiked: boolean
        hashtags?: Array<any> | null | undefined
      }>
    | null
    | undefined
}

export type FeedListByStoreQueryVariables = Exact<{
  storeId: Scalars['ID']
  order?: Maybe<FeedOrder>
  pagination: Pagination
}>

export type FeedListByStoreQuery = {
  __typename?: 'Query'
  feedListByStore?:
    | Array<{
        __typename?: 'Feed'
        id: string
        creationTime: any
        contents: Array<any>
        imageUrls: Array<any>
        likeCount: number
        commentCount: number
        isLiked: boolean
        user: {
          __typename?: 'User'
          id: any
          imageUrl?: any | null | undefined
          nickname?: string | null | undefined
        }
      }>
    | null
    | undefined
}

export type FeedListByTownQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  option?: Maybe<FeedOptions>
  order?: Maybe<FeedOrder>
  pagination: Pagination
}>

export type FeedListByTownQuery = {
  __typename?: 'Query'
  feedListByTown?:
    | Array<{
        __typename?: 'Feed'
        id: string
        creationTime: any
        contents: Array<any>
        imageUrls: Array<any>
        likeCount: number
        commentCount: number
        isLiked: boolean
        user: {
          __typename?: 'User'
          id: any
          imageUrl?: any | null | undefined
          nickname?: string | null | undefined
        }
      }>
    | null
    | undefined
}

export type IsEmailUniqueQueryVariables = Exact<{
  email: Scalars['EmailAddress']
}>

export type IsEmailUniqueQuery = { __typename?: 'Query'; isEmailUnique: boolean }

export type IsLikedOfStoreQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type IsLikedOfStoreQuery = {
  __typename?: 'Query'
  store?: { __typename?: 'Store'; id: string; isLiked: boolean } | null | undefined
}

export type IsUniqueNameUniqueQueryVariables = Exact<{
  uniqueName: Scalars['NonEmptyString']
}>

export type IsUniqueNameUniqueQuery = { __typename?: 'Query'; isUniqueNameUnique: boolean }

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me: { __typename?: 'User'; id: any; uniqueName: any }
}

export type MenuBucketsQueryVariables = Exact<{
  userUniqueName?: Maybe<Scalars['NonEmptyString']>
}>

export type MenuBucketsQuery = {
  __typename?: 'Query'
  buckets?: Array<{ __typename?: 'Bucket'; id: string; name: any }> | null | undefined
}

export type MenusByTownAndCategoryQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  category?: Maybe<Scalars['NonEmptyString']>
  order?: Maybe<MenuOrder>
  pagination: Pagination
}>

export type MenusByTownAndCategoryQuery = {
  __typename?: 'Query'
  menusByTownAndCategory?:
    | Array<{
        __typename?: 'Menu'
        id: string
        name: any
        price: number
        isSoldOut: boolean
        imageUrls: Array<any>
        isLiked: boolean
        hashtags?: Array<any> | null | undefined
        store: { __typename?: 'Store'; id: string; name: any; latitude: any; longitude: any }
      }>
    | null
    | undefined
}

export type NewsListByStoreQueryVariables = Exact<{
  categories?: Maybe<Array<Scalars['NonEmptyString']> | Scalars['NonEmptyString']>
  order?: Maybe<NewsOrder>
  pagination: Pagination
  storeId: Scalars['ID']
}>

export type NewsListByStoreQuery = {
  __typename?: 'Query'
  newsListByStore?:
    | Array<{
        __typename?: 'News'
        id: string
        creationTime: any
        title: any
        contents: Array<any>
        category: any
        imageUrls?: Array<any> | null | undefined
      }>
    | null
    | undefined
}

export type NewsListByTownQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  option?: Maybe<NewsOptions>
  categories?: Maybe<Array<Scalars['NonEmptyString']> | Scalars['NonEmptyString']>
  order?: Maybe<NewsOrder>
  pagination: Pagination
}>

export type NewsListByTownQuery = {
  __typename?: 'Query'
  newsListByTown?:
    | Array<{
        __typename?: 'News'
        id: string
        creationTime: any
        title: any
        contents: Array<any>
        category: any
        imageUrls?: Array<any> | null | undefined
        store: {
          __typename?: 'Store'
          id: string
          name: any
          imageUrls?: Array<any> | null | undefined
        }
      }>
    | null
    | undefined
}

export type StoreQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreQuery = {
  __typename?: 'Query'
  store?:
    | {
        __typename?: 'Store'
        id: string
        name: any
        description?: string | null | undefined
        imageUrls?: Array<any> | null | undefined
        isLiked: boolean
      }
    | null
    | undefined
}

export type StoreBucketsQueryVariables = Exact<{
  userUniqueName?: Maybe<Scalars['NonEmptyString']>
}>

export type StoreBucketsQuery = {
  __typename?: 'Query'
  buckets?: Array<{ __typename?: 'Bucket'; id: string; name: any }> | null | undefined
}

export type StoreDetailQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreDetailQuery = {
  __typename?: 'Query'
  store?:
    | {
        __typename?: 'Store'
        id: string
        tel?: string | null | undefined
        address: any
        latitude: any
        longitude: any
        registrationNumber?: string | null | undefined
        businessHours?: Array<any> | null | undefined
        holidays?: Array<any> | null | undefined
        categories: Array<any>
        hashtags?: Array<any> | null | undefined
      }
    | null
    | undefined
}

export type StoreMenuQueryVariables = Exact<{
  storeId: Scalars['ID']
  menuName: Scalars['NonEmptyString']
}>

export type StoreMenuQuery = {
  __typename?: 'Query'
  menuByName?:
    | {
        __typename?: 'Menu'
        id: string
        name: any
        price: number
        isSoldOut: boolean
        imageUrls: Array<any>
        isLiked: boolean
        hashtags?: Array<any> | null | undefined
        store: { __typename?: 'Store'; id: string; name: any }
      }
    | null
    | undefined
}

export type StoreMenusQueryVariables = Exact<{
  storeId: Scalars['ID']
}>

export type StoreMenusQuery = {
  __typename?: 'Query'
  menusByStore?:
    | Array<{
        __typename?: 'Menu'
        id: string
        name: any
        price: number
        isSoldOut: boolean
        imageUrls: Array<any>
        isLiked: boolean
        hashtags?: Array<any> | null | undefined
      }>
    | null
    | undefined
}

export type StoresByTownAndCategoriesQueryVariables = Exact<{
  town?: Maybe<Scalars['NonEmptyString']>
  categories?: Maybe<Array<Scalars['NonEmptyString']> | Scalars['NonEmptyString']>
  order?: Maybe<StoreOrder>
  pagination: Pagination
}>

export type StoresByTownAndCategoriesQuery = {
  __typename?: 'Query'
  storesByTownAndCategories?:
    | Array<{
        __typename?: 'Store'
        id: string
        name: any
        categories: Array<any>
        imageUrls?: Array<any> | null | undefined
        latitude: any
        longitude: any
        isLiked: boolean
        hashtags?: Array<any> | null | undefined
      }>
    | null
    | undefined
}

export const FeedCardFragmentDoc = gql`
  fragment feedCard on Feed {
    id
    creationTime
    contents
    imageUrls
    likeCount
    commentCount
    isLiked
    user {
      id
      imageUrl
      nickname
    }
  }
`
export const MenuCardFragmentDoc = gql`
  fragment menuCard on Menu {
    id
    name
    price
    isSoldOut
    imageUrls
    isLiked
    hashtags
  }
`
export const StoreCardFragmentDoc = gql`
  fragment storeCard on Store {
    id
    name
    categories
    imageUrls
    latitude
    longitude
    isLiked
    hashtags
  }
`
export const LoginDocument = gql`
  mutation Login($uniqueNameOrEmail: NonEmptyString!, $passwordHash: NonEmptyString!) {
    login(uniqueNameOrEmail: $uniqueNameOrEmail, passwordHash: $passwordHash) {
      userUniqueName
      jwt
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      uniqueNameOrEmail: // value for 'uniqueNameOrEmail'
 *      passwordHash: // value for 'passwordHash'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options)
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      userUniqueName
      jwt
    }
  }
`
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>
export const ToggleLikedStoreDocument = gql`
  mutation ToggleLikedStore($id: ID!) {
    toggleLikedStore(id: $id) {
      id
      isLiked
    }
  }
`
export type ToggleLikedStoreMutationFn = Apollo.MutationFunction<
  ToggleLikedStoreMutation,
  ToggleLikedStoreMutationVariables
>

/**
 * __useToggleLikedStoreMutation__
 *
 * To run a mutation, you first call `useToggleLikedStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikedStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikedStoreMutation, { data, loading, error }] = useToggleLikedStoreMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleLikedStoreMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleLikedStoreMutation,
    ToggleLikedStoreMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ToggleLikedStoreMutation, ToggleLikedStoreMutationVariables>(
    ToggleLikedStoreDocument,
    options
  )
}
export type ToggleLikedStoreMutationHookResult = ReturnType<typeof useToggleLikedStoreMutation>
export type ToggleLikedStoreMutationResult = Apollo.MutationResult<ToggleLikedStoreMutation>
export type ToggleLikedStoreMutationOptions = Apollo.BaseMutationOptions<
  ToggleLikedStoreMutation,
  ToggleLikedStoreMutationVariables
>
export const BucketMenusDocument = gql`
  query BucketMenus($bucketId: ID!, $userUniqueName: NonEmptyString!) {
    menusInBucket(bucketId: $bucketId, userUniqueName: $userUniqueName) {
      ...menuCard
      store {
        id
        name
        address
      }
    }
  }
  ${MenuCardFragmentDoc}
`

/**
 * __useBucketMenusQuery__
 *
 * To run a query within a React component, call `useBucketMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useBucketMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBucketMenusQuery({
 *   variables: {
 *      bucketId: // value for 'bucketId'
 *      userUniqueName: // value for 'userUniqueName'
 *   },
 * });
 */
export function useBucketMenusQuery(
  baseOptions: Apollo.QueryHookOptions<BucketMenusQuery, BucketMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BucketMenusQuery, BucketMenusQueryVariables>(BucketMenusDocument, options)
}
export function useBucketMenusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BucketMenusQuery, BucketMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BucketMenusQuery, BucketMenusQueryVariables>(
    BucketMenusDocument,
    options
  )
}
export type BucketMenusQueryHookResult = ReturnType<typeof useBucketMenusQuery>
export type BucketMenusLazyQueryHookResult = ReturnType<typeof useBucketMenusLazyQuery>
export type BucketMenusQueryResult = Apollo.QueryResult<BucketMenusQuery, BucketMenusQueryVariables>
export const BucketStoresDocument = gql`
  query BucketStores($bucketId: ID!, $userUniqueName: NonEmptyString!) {
    storesInBucket(bucketId: $bucketId, userUniqueName: $userUniqueName) {
      ...storeCard
    }
  }
  ${StoreCardFragmentDoc}
`

/**
 * __useBucketStoresQuery__
 *
 * To run a query within a React component, call `useBucketStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useBucketStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBucketStoresQuery({
 *   variables: {
 *      bucketId: // value for 'bucketId'
 *      userUniqueName: // value for 'userUniqueName'
 *   },
 * });
 */
export function useBucketStoresQuery(
  baseOptions: Apollo.QueryHookOptions<BucketStoresQuery, BucketStoresQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BucketStoresQuery, BucketStoresQueryVariables>(
    BucketStoresDocument,
    options
  )
}
export function useBucketStoresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BucketStoresQuery, BucketStoresQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BucketStoresQuery, BucketStoresQueryVariables>(
    BucketStoresDocument,
    options
  )
}
export type BucketStoresQueryHookResult = ReturnType<typeof useBucketStoresQuery>
export type BucketStoresLazyQueryHookResult = ReturnType<typeof useBucketStoresLazyQuery>
export type BucketStoresQueryResult = Apollo.QueryResult<
  BucketStoresQuery,
  BucketStoresQueryVariables
>
export const FeedListByStoreDocument = gql`
  query FeedListByStore($storeId: ID!, $order: FeedOrder, $pagination: Pagination!) {
    feedListByStore(storeId: $storeId, order: $order, pagination: $pagination) {
      ...feedCard
    }
  }
  ${FeedCardFragmentDoc}
`

/**
 * __useFeedListByStoreQuery__
 *
 * To run a query within a React component, call `useFeedListByStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedListByStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedListByStoreQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useFeedListByStoreQuery(
  baseOptions: Apollo.QueryHookOptions<FeedListByStoreQuery, FeedListByStoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FeedListByStoreQuery, FeedListByStoreQueryVariables>(
    FeedListByStoreDocument,
    options
  )
}
export function useFeedListByStoreLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedListByStoreQuery, FeedListByStoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FeedListByStoreQuery, FeedListByStoreQueryVariables>(
    FeedListByStoreDocument,
    options
  )
}
export type FeedListByStoreQueryHookResult = ReturnType<typeof useFeedListByStoreQuery>
export type FeedListByStoreLazyQueryHookResult = ReturnType<typeof useFeedListByStoreLazyQuery>
export type FeedListByStoreQueryResult = Apollo.QueryResult<
  FeedListByStoreQuery,
  FeedListByStoreQueryVariables
>
export const FeedListByTownDocument = gql`
  query FeedListByTown(
    $town: NonEmptyString
    $option: FeedOptions
    $order: FeedOrder
    $pagination: Pagination!
  ) {
    feedListByTown(town: $town, option: $option, order: $order, pagination: $pagination) {
      ...feedCard
    }
  }
  ${FeedCardFragmentDoc}
`

/**
 * __useFeedListByTownQuery__
 *
 * To run a query within a React component, call `useFeedListByTownQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedListByTownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedListByTownQuery({
 *   variables: {
 *      town: // value for 'town'
 *      option: // value for 'option'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useFeedListByTownQuery(
  baseOptions: Apollo.QueryHookOptions<FeedListByTownQuery, FeedListByTownQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FeedListByTownQuery, FeedListByTownQueryVariables>(
    FeedListByTownDocument,
    options
  )
}
export function useFeedListByTownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedListByTownQuery, FeedListByTownQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FeedListByTownQuery, FeedListByTownQueryVariables>(
    FeedListByTownDocument,
    options
  )
}
export type FeedListByTownQueryHookResult = ReturnType<typeof useFeedListByTownQuery>
export type FeedListByTownLazyQueryHookResult = ReturnType<typeof useFeedListByTownLazyQuery>
export type FeedListByTownQueryResult = Apollo.QueryResult<
  FeedListByTownQuery,
  FeedListByTownQueryVariables
>
export const IsEmailUniqueDocument = gql`
  query IsEmailUnique($email: EmailAddress!) {
    isEmailUnique(email: $email)
  }
`

/**
 * __useIsEmailUniqueQuery__
 *
 * To run a query within a React component, call `useIsEmailUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsEmailUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsEmailUniqueQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useIsEmailUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>(
    IsEmailUniqueDocument,
    options
  )
}
export function useIsEmailUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsEmailUniqueQuery, IsEmailUniqueQueryVariables>(
    IsEmailUniqueDocument,
    options
  )
}
export type IsEmailUniqueQueryHookResult = ReturnType<typeof useIsEmailUniqueQuery>
export type IsEmailUniqueLazyQueryHookResult = ReturnType<typeof useIsEmailUniqueLazyQuery>
export type IsEmailUniqueQueryResult = Apollo.QueryResult<
  IsEmailUniqueQuery,
  IsEmailUniqueQueryVariables
>
export const IsLikedOfStoreDocument = gql`
  query IsLikedOfStore($id: ID!) {
    store(id: $id) {
      id
      isLiked
    }
  }
`

/**
 * __useIsLikedOfStoreQuery__
 *
 * To run a query within a React component, call `useIsLikedOfStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsLikedOfStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsLikedOfStoreQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIsLikedOfStoreQuery(
  baseOptions: Apollo.QueryHookOptions<IsLikedOfStoreQuery, IsLikedOfStoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsLikedOfStoreQuery, IsLikedOfStoreQueryVariables>(
    IsLikedOfStoreDocument,
    options
  )
}
export function useIsLikedOfStoreLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IsLikedOfStoreQuery, IsLikedOfStoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsLikedOfStoreQuery, IsLikedOfStoreQueryVariables>(
    IsLikedOfStoreDocument,
    options
  )
}
export type IsLikedOfStoreQueryHookResult = ReturnType<typeof useIsLikedOfStoreQuery>
export type IsLikedOfStoreLazyQueryHookResult = ReturnType<typeof useIsLikedOfStoreLazyQuery>
export type IsLikedOfStoreQueryResult = Apollo.QueryResult<
  IsLikedOfStoreQuery,
  IsLikedOfStoreQueryVariables
>
export const IsUniqueNameUniqueDocument = gql`
  query IsUniqueNameUnique($uniqueName: NonEmptyString!) {
    isUniqueNameUnique(uniqueName: $uniqueName)
  }
`

/**
 * __useIsUniqueNameUniqueQuery__
 *
 * To run a query within a React component, call `useIsUniqueNameUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUniqueNameUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUniqueNameUniqueQuery({
 *   variables: {
 *      uniqueName: // value for 'uniqueName'
 *   },
 * });
 */
export function useIsUniqueNameUniqueQuery(
  baseOptions: Apollo.QueryHookOptions<IsUniqueNameUniqueQuery, IsUniqueNameUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsUniqueNameUniqueQuery, IsUniqueNameUniqueQueryVariables>(
    IsUniqueNameUniqueDocument,
    options
  )
}
export function useIsUniqueNameUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsUniqueNameUniqueQuery,
    IsUniqueNameUniqueQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsUniqueNameUniqueQuery, IsUniqueNameUniqueQueryVariables>(
    IsUniqueNameUniqueDocument,
    options
  )
}
export type IsUniqueNameUniqueQueryHookResult = ReturnType<typeof useIsUniqueNameUniqueQuery>
export type IsUniqueNameUniqueLazyQueryHookResult = ReturnType<
  typeof useIsUniqueNameUniqueLazyQuery
>
export type IsUniqueNameUniqueQueryResult = Apollo.QueryResult<
  IsUniqueNameUniqueQuery,
  IsUniqueNameUniqueQueryVariables
>
export const MeDocument = gql`
  query Me {
    me {
      id
      uniqueName
    }
  }
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export const MenuBucketsDocument = gql`
  query MenuBuckets($userUniqueName: NonEmptyString) {
    buckets(type: MENU, userUniqueName: $userUniqueName) {
      id
      name
    }
  }
`

/**
 * __useMenuBucketsQuery__
 *
 * To run a query within a React component, call `useMenuBucketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuBucketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuBucketsQuery({
 *   variables: {
 *      userUniqueName: // value for 'userUniqueName'
 *   },
 * });
 */
export function useMenuBucketsQuery(
  baseOptions?: Apollo.QueryHookOptions<MenuBucketsQuery, MenuBucketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MenuBucketsQuery, MenuBucketsQueryVariables>(MenuBucketsDocument, options)
}
export function useMenuBucketsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MenuBucketsQuery, MenuBucketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MenuBucketsQuery, MenuBucketsQueryVariables>(
    MenuBucketsDocument,
    options
  )
}
export type MenuBucketsQueryHookResult = ReturnType<typeof useMenuBucketsQuery>
export type MenuBucketsLazyQueryHookResult = ReturnType<typeof useMenuBucketsLazyQuery>
export type MenuBucketsQueryResult = Apollo.QueryResult<MenuBucketsQuery, MenuBucketsQueryVariables>
export const MenusByTownAndCategoryDocument = gql`
  query MenusByTownAndCategory(
    $town: NonEmptyString
    $category: NonEmptyString
    $order: MenuOrder
    $pagination: Pagination!
  ) {
    menusByTownAndCategory(
      town: $town
      category: $category
      order: $order
      pagination: $pagination
    ) {
      ...menuCard
      store {
        id
        name
        latitude
        longitude
      }
    }
  }
  ${MenuCardFragmentDoc}
`

/**
 * __useMenusByTownAndCategoryQuery__
 *
 * To run a query within a React component, call `useMenusByTownAndCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenusByTownAndCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenusByTownAndCategoryQuery({
 *   variables: {
 *      town: // value for 'town'
 *      category: // value for 'category'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useMenusByTownAndCategoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    MenusByTownAndCategoryQuery,
    MenusByTownAndCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MenusByTownAndCategoryQuery, MenusByTownAndCategoryQueryVariables>(
    MenusByTownAndCategoryDocument,
    options
  )
}
export function useMenusByTownAndCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MenusByTownAndCategoryQuery,
    MenusByTownAndCategoryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MenusByTownAndCategoryQuery, MenusByTownAndCategoryQueryVariables>(
    MenusByTownAndCategoryDocument,
    options
  )
}
export type MenusByTownAndCategoryQueryHookResult = ReturnType<
  typeof useMenusByTownAndCategoryQuery
>
export type MenusByTownAndCategoryLazyQueryHookResult = ReturnType<
  typeof useMenusByTownAndCategoryLazyQuery
>
export type MenusByTownAndCategoryQueryResult = Apollo.QueryResult<
  MenusByTownAndCategoryQuery,
  MenusByTownAndCategoryQueryVariables
>
export const NewsListByStoreDocument = gql`
  query NewsListByStore(
    $categories: [NonEmptyString!]
    $order: NewsOrder
    $pagination: Pagination!
    $storeId: ID!
  ) {
    newsListByStore(
      categories: $categories
      order: $order
      pagination: $pagination
      storeId: $storeId
    ) {
      id
      creationTime
      title
      contents
      category
      imageUrls
    }
  }
`

/**
 * __useNewsListByStoreQuery__
 *
 * To run a query within a React component, call `useNewsListByStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsListByStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsListByStoreQuery({
 *   variables: {
 *      categories: // value for 'categories'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useNewsListByStoreQuery(
  baseOptions: Apollo.QueryHookOptions<NewsListByStoreQuery, NewsListByStoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NewsListByStoreQuery, NewsListByStoreQueryVariables>(
    NewsListByStoreDocument,
    options
  )
}
export function useNewsListByStoreLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NewsListByStoreQuery, NewsListByStoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NewsListByStoreQuery, NewsListByStoreQueryVariables>(
    NewsListByStoreDocument,
    options
  )
}
export type NewsListByStoreQueryHookResult = ReturnType<typeof useNewsListByStoreQuery>
export type NewsListByStoreLazyQueryHookResult = ReturnType<typeof useNewsListByStoreLazyQuery>
export type NewsListByStoreQueryResult = Apollo.QueryResult<
  NewsListByStoreQuery,
  NewsListByStoreQueryVariables
>
export const NewsListByTownDocument = gql`
  query NewsListByTown(
    $town: NonEmptyString
    $option: NewsOptions
    $categories: [NonEmptyString!]
    $order: NewsOrder
    $pagination: Pagination!
  ) {
    newsListByTown(
      town: $town
      option: $option
      categories: $categories
      order: $order
      pagination: $pagination
    ) {
      id
      creationTime
      title
      contents
      category
      imageUrls
      store {
        id
        name
        imageUrls
      }
    }
  }
`

/**
 * __useNewsListByTownQuery__
 *
 * To run a query within a React component, call `useNewsListByTownQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsListByTownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsListByTownQuery({
 *   variables: {
 *      town: // value for 'town'
 *      option: // value for 'option'
 *      categories: // value for 'categories'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useNewsListByTownQuery(
  baseOptions: Apollo.QueryHookOptions<NewsListByTownQuery, NewsListByTownQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<NewsListByTownQuery, NewsListByTownQueryVariables>(
    NewsListByTownDocument,
    options
  )
}
export function useNewsListByTownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<NewsListByTownQuery, NewsListByTownQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<NewsListByTownQuery, NewsListByTownQueryVariables>(
    NewsListByTownDocument,
    options
  )
}
export type NewsListByTownQueryHookResult = ReturnType<typeof useNewsListByTownQuery>
export type NewsListByTownLazyQueryHookResult = ReturnType<typeof useNewsListByTownLazyQuery>
export type NewsListByTownQueryResult = Apollo.QueryResult<
  NewsListByTownQuery,
  NewsListByTownQueryVariables
>
export const StoreDocument = gql`
  query Store($storeId: ID!) {
    store(id: $storeId) {
      id
      name
      description
      imageUrls
      isLiked
    }
  }
`

/**
 * __useStoreQuery__
 *
 * To run a query within a React component, call `useStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreQuery(
  baseOptions: Apollo.QueryHookOptions<StoreQuery, StoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreQuery, StoreQueryVariables>(StoreDocument, options)
}
export function useStoreLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreQuery, StoreQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreQuery, StoreQueryVariables>(StoreDocument, options)
}
export type StoreQueryHookResult = ReturnType<typeof useStoreQuery>
export type StoreLazyQueryHookResult = ReturnType<typeof useStoreLazyQuery>
export type StoreQueryResult = Apollo.QueryResult<StoreQuery, StoreQueryVariables>
export const StoreBucketsDocument = gql`
  query StoreBuckets($userUniqueName: NonEmptyString) {
    buckets(type: STORE, userUniqueName: $userUniqueName) {
      id
      name
    }
  }
`

/**
 * __useStoreBucketsQuery__
 *
 * To run a query within a React component, call `useStoreBucketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreBucketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreBucketsQuery({
 *   variables: {
 *      userUniqueName: // value for 'userUniqueName'
 *   },
 * });
 */
export function useStoreBucketsQuery(
  baseOptions?: Apollo.QueryHookOptions<StoreBucketsQuery, StoreBucketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreBucketsQuery, StoreBucketsQueryVariables>(
    StoreBucketsDocument,
    options
  )
}
export function useStoreBucketsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreBucketsQuery, StoreBucketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreBucketsQuery, StoreBucketsQueryVariables>(
    StoreBucketsDocument,
    options
  )
}
export type StoreBucketsQueryHookResult = ReturnType<typeof useStoreBucketsQuery>
export type StoreBucketsLazyQueryHookResult = ReturnType<typeof useStoreBucketsLazyQuery>
export type StoreBucketsQueryResult = Apollo.QueryResult<
  StoreBucketsQuery,
  StoreBucketsQueryVariables
>
export const StoreDetailDocument = gql`
  query StoreDetail($storeId: ID!) {
    store(id: $storeId) {
      id
      tel
      address
      latitude
      longitude
      registrationNumber
      businessHours
      holidays
      categories
      hashtags
    }
  }
`

/**
 * __useStoreDetailQuery__
 *
 * To run a query within a React component, call `useStoreDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreDetailQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreDetailQuery(
  baseOptions: Apollo.QueryHookOptions<StoreDetailQuery, StoreDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreDetailQuery, StoreDetailQueryVariables>(StoreDetailDocument, options)
}
export function useStoreDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreDetailQuery, StoreDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreDetailQuery, StoreDetailQueryVariables>(
    StoreDetailDocument,
    options
  )
}
export type StoreDetailQueryHookResult = ReturnType<typeof useStoreDetailQuery>
export type StoreDetailLazyQueryHookResult = ReturnType<typeof useStoreDetailLazyQuery>
export type StoreDetailQueryResult = Apollo.QueryResult<StoreDetailQuery, StoreDetailQueryVariables>
export const StoreMenuDocument = gql`
  query StoreMenu($storeId: ID!, $menuName: NonEmptyString!) {
    menuByName(storeId: $storeId, name: $menuName) {
      id
      name
      price
      isSoldOut
      imageUrls
      isLiked
      hashtags
      store {
        id
        name
      }
    }
  }
`

/**
 * __useStoreMenuQuery__
 *
 * To run a query within a React component, call `useStoreMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreMenuQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *      menuName: // value for 'menuName'
 *   },
 * });
 */
export function useStoreMenuQuery(
  baseOptions: Apollo.QueryHookOptions<StoreMenuQuery, StoreMenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreMenuQuery, StoreMenuQueryVariables>(StoreMenuDocument, options)
}
export function useStoreMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreMenuQuery, StoreMenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreMenuQuery, StoreMenuQueryVariables>(StoreMenuDocument, options)
}
export type StoreMenuQueryHookResult = ReturnType<typeof useStoreMenuQuery>
export type StoreMenuLazyQueryHookResult = ReturnType<typeof useStoreMenuLazyQuery>
export type StoreMenuQueryResult = Apollo.QueryResult<StoreMenuQuery, StoreMenuQueryVariables>
export const StoreMenusDocument = gql`
  query StoreMenus($storeId: ID!) {
    menusByStore(storeId: $storeId) {
      ...menuCard
    }
  }
  ${MenuCardFragmentDoc}
`

/**
 * __useStoreMenusQuery__
 *
 * To run a query within a React component, call `useStoreMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreMenusQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreMenusQuery(
  baseOptions: Apollo.QueryHookOptions<StoreMenusQuery, StoreMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoreMenusQuery, StoreMenusQueryVariables>(StoreMenusDocument, options)
}
export function useStoreMenusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StoreMenusQuery, StoreMenusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StoreMenusQuery, StoreMenusQueryVariables>(StoreMenusDocument, options)
}
export type StoreMenusQueryHookResult = ReturnType<typeof useStoreMenusQuery>
export type StoreMenusLazyQueryHookResult = ReturnType<typeof useStoreMenusLazyQuery>
export type StoreMenusQueryResult = Apollo.QueryResult<StoreMenusQuery, StoreMenusQueryVariables>
export const StoresByTownAndCategoriesDocument = gql`
  query StoresByTownAndCategories(
    $town: NonEmptyString
    $categories: [NonEmptyString!]
    $order: StoreOrder
    $pagination: Pagination!
  ) {
    storesByTownAndCategories(
      town: $town
      categories: $categories
      order: $order
      pagination: $pagination
    ) {
      ...storeCard
    }
  }
  ${StoreCardFragmentDoc}
`

/**
 * __useStoresByTownAndCategoriesQuery__
 *
 * To run a query within a React component, call `useStoresByTownAndCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoresByTownAndCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoresByTownAndCategoriesQuery({
 *   variables: {
 *      town: // value for 'town'
 *      categories: // value for 'categories'
 *      order: // value for 'order'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useStoresByTownAndCategoriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    StoresByTownAndCategoriesQuery,
    StoresByTownAndCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StoresByTownAndCategoriesQuery, StoresByTownAndCategoriesQueryVariables>(
    StoresByTownAndCategoriesDocument,
    options
  )
}
export function useStoresByTownAndCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StoresByTownAndCategoriesQuery,
    StoresByTownAndCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    StoresByTownAndCategoriesQuery,
    StoresByTownAndCategoriesQueryVariables
  >(StoresByTownAndCategoriesDocument, options)
}
export type StoresByTownAndCategoriesQueryHookResult = ReturnType<
  typeof useStoresByTownAndCategoriesQuery
>
export type StoresByTownAndCategoriesLazyQueryHookResult = ReturnType<
  typeof useStoresByTownAndCategoriesLazyQuery
>
export type StoresByTownAndCategoriesQueryResult = Apollo.QueryResult<
  StoresByTownAndCategoriesQuery,
  StoresByTownAndCategoriesQueryVariables
>
