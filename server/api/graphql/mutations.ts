/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createJoinmeProdEvents = /* GraphQL */ `mutation CreateJoinmeProdEvents($input: CreateJoinmeProdEventsInput!) {
  createJoinmeProdEvents(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateJoinmeProdEventsMutationVariables,
  APITypes.CreateJoinmeProdEventsMutation
>;
export const updateJoinmeProdEvents = /* GraphQL */ `mutation UpdateJoinmeProdEvents($input: UpdateJoinmeProdEventsInput!) {
  updateJoinmeProdEvents(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateJoinmeProdEventsMutationVariables,
  APITypes.UpdateJoinmeProdEventsMutation
>;
export const deleteJoinmeProdEvents = /* GraphQL */ `mutation DeleteJoinmeProdEvents($input: DeleteJoinmeProdEventsInput!) {
  deleteJoinmeProdEvents(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteJoinmeProdEventsMutationVariables,
  APITypes.DeleteJoinmeProdEventsMutation
>;
