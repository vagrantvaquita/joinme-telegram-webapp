/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateJoinmeProdEvents = /* GraphQL */ `subscription OnCreateJoinmeProdEvents($timestamp: Int, $user_id: String) {
  onCreateJoinmeProdEvents(timestamp: $timestamp, user_id: $user_id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJoinmeProdEventsSubscriptionVariables,
  APITypes.OnCreateJoinmeProdEventsSubscription
>;
export const onUpdateJoinmeProdEvents = /* GraphQL */ `subscription OnUpdateJoinmeProdEvents($timestamp: Int, $user_id: String) {
  onUpdateJoinmeProdEvents(timestamp: $timestamp, user_id: $user_id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJoinmeProdEventsSubscriptionVariables,
  APITypes.OnUpdateJoinmeProdEventsSubscription
>;
export const onDeleteJoinmeProdEvents = /* GraphQL */ `subscription OnDeleteJoinmeProdEvents($timestamp: Int, $user_id: String) {
  onDeleteJoinmeProdEvents(timestamp: $timestamp, user_id: $user_id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJoinmeProdEventsSubscriptionVariables,
  APITypes.OnDeleteJoinmeProdEventsSubscription
>;
