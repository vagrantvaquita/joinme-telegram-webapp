/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getJoinmeProdEvents = /* GraphQL */ `query GetJoinmeProdEvents($user_id: String!, $timestamp: Int!) {
  getJoinmeProdEvents(user_id: $user_id, timestamp: $timestamp) {
    user_id
    timestamp
    category
    datetime
    description
    location
    title
    url
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJoinmeProdEventsQueryVariables,
  APITypes.GetJoinmeProdEventsQuery
>;
export const listJoinmeProdEvents = /* GraphQL */ `query ListJoinmeProdEvents(
  $filter: TableJoinmeProdEventsFilterInput
  $limit: Int
  $nextToken: String
) {
  listJoinmeProdEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      user_id
      timestamp
      category
      datetime
      description
      location
      title
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJoinmeProdEventsQueryVariables,
  APITypes.ListJoinmeProdEventsQuery
>;
