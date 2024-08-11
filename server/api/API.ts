/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJoinmeProdEventsInput = {
  timestamp: number,
  user_id: string,
};

export type JoinmeProdEvents = {
  __typename: "JoinmeProdEvents",
  user_id: string,
  timestamp: number,
  category?: string | null,
  datetime?: string | null,
  description?: string | null,
  location?: string | null,
  title?: string | null,
  url?: string | null,
};

export type UpdateJoinmeProdEventsInput = {
  timestamp: number,
  user_id: string,
};

export type DeleteJoinmeProdEventsInput = {
  timestamp: number,
  user_id: string,
};

export type TableJoinmeProdEventsFilterInput = {
  timestamp?: TableIntFilterInput | null,
  user_id?: TableStringFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type JoinmeProdEventsConnection = {
  __typename: "JoinmeProdEventsConnection",
  items?:  Array<JoinmeProdEvents | null > | null,
  nextToken?: string | null,
};

export type CreateJoinmeProdEventsMutationVariables = {
  input: CreateJoinmeProdEventsInput,
};

export type CreateJoinmeProdEventsMutation = {
  createJoinmeProdEvents?:  {
    __typename: "JoinmeProdEvents",
    user_id: string,
    timestamp: number,
    category?: string | null,
    datetime?: string | null,
    description?: string | null,
    location?: string | null,
    title?: string | null,
    url?: string | null,
  } | null,
};

export type UpdateJoinmeProdEventsMutationVariables = {
  input: UpdateJoinmeProdEventsInput,
};

export type UpdateJoinmeProdEventsMutation = {
  updateJoinmeProdEvents?:  {
    __typename: "JoinmeProdEvents",
    user_id: string,
    timestamp: number,
    category?: string | null,
    datetime?: string | null,
    description?: string | null,
    location?: string | null,
    title?: string | null,
    url?: string | null,
  } | null,
};

export type DeleteJoinmeProdEventsMutationVariables = {
  input: DeleteJoinmeProdEventsInput,
};

export type DeleteJoinmeProdEventsMutation = {
  deleteJoinmeProdEvents?:  {
    __typename: "JoinmeProdEvents",
    user_id: string,
    timestamp: number,
    category?: string | null,
    datetime?: string | null,
    description?: string | null,
    location?: string | null,
    title?: string | null,
    url?: string | null,
  } | null,
};

export type GetJoinmeProdEventsQueryVariables = {
  user_id: string,
  timestamp: number,
};

export type GetJoinmeProdEventsQuery = {
  getJoinmeProdEvents?:  {
    __typename: "JoinmeProdEvents",
    user_id: string,
    timestamp: number,
    category?: string | null,
    datetime?: string | null,
    description?: string | null,
    location?: string | null,
    title?: string | null,
    url?: string | null,
  } | null,
};

export type ListJoinmeProdEventsQueryVariables = {
  filter?: TableJoinmeProdEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJoinmeProdEventsQuery = {
  listJoinmeProdEvents?:  {
    __typename: "JoinmeProdEventsConnection",
    items?:  Array< {
      __typename: "JoinmeProdEvents",
      user_id: string,
      timestamp: number,
      category?: string | null,
      datetime?: string | null,
      description?: string | null,
      location?: string | null,
      title?: string | null,
      url?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJoinmeProdEventsSubscriptionVariables = {
  timestamp?: number | null,
  user_id?: string | null,
};

export type OnCreateJoinmeProdEventsSubscription = {
  onCreateJoinmeProdEvents?:  {
    __typename: "JoinmeProdEvents",
    user_id: string,
    timestamp: number,
    category?: string | null,
    datetime?: string | null,
    description?: string | null,
    location?: string | null,
    title?: string | null,
    url?: string | null,
  } | null,
};

export type OnUpdateJoinmeProdEventsSubscriptionVariables = {
  timestamp?: number | null,
  user_id?: string | null,
};

export type OnUpdateJoinmeProdEventsSubscription = {
  onUpdateJoinmeProdEvents?:  {
    __typename: "JoinmeProdEvents",
    user_id: string,
    timestamp: number,
    category?: string | null,
    datetime?: string | null,
    description?: string | null,
    location?: string | null,
    title?: string | null,
    url?: string | null,
  } | null,
};

export type OnDeleteJoinmeProdEventsSubscriptionVariables = {
  timestamp?: number | null,
  user_id?: string | null,
};

export type OnDeleteJoinmeProdEventsSubscription = {
  onDeleteJoinmeProdEvents?:  {
    __typename: "JoinmeProdEvents",
    user_id: string,
    timestamp: number,
    category?: string | null,
    datetime?: string | null,
    description?: string | null,
    location?: string | null,
    title?: string | null,
    url?: string | null,
  } | null,
};
