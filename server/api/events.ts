import { Amplify } from "aws-amplify";
import { get } from 'aws-amplify/api';
import { a, type ClientSchema } from "@aws-amplify/backend";
import { generateClient } from 'aws-amplify/data';
import { listJoinmeProdEvents } from './graphql/queries';

Amplify.configure({
  API: {
      REST: {
          PetStore: {
              endpoint: "https://vm85zn7rz8.execute-api.us-east-1.amazonaws.com/dev",
              region: "us-east-1"
          }
      },
      GraphQL: {
        endpoint: 'https://iamizgujbfdrli6qyppharzpgm.appsync-api.us-east-1.amazonaws.com/graphql',
        region: 'us-east-1',
        defaultAuthMode: 'iam'
        // defaultAuthMode: 'apiKey',
        // apiKey: "<example of an api key>"
      }
  }
});

// const schema = a.schema({
//   Event: a.customType({
//     user_id: a.string().required(),
//     timestamp: a.integer().required(),
//     category: a.string(),
//     datetime: a.string(),
//     description: a.string(),
//     location: a.string(),
//     title: a.string(),
//     url: a.string()
//   }),
// });

// type Schema = ClientSchema<typeof schema>;

export default defineEventHandler(async (event) => {
  const client = generateClient();

  const { data } = await client.graphql({
    query: "query ListJoinmeProdEvents( $filter: TableJoinmeProdEventsFilterInput $limit: Int $nextToken: String ) { listJoinmeProdEvents(filter: $filter, limit: $limit, nextToken: $nextToken) { items { user_id timestamp category datetime description location title url } nextToken } }",
    variables: {
      limit: 2
    },
    authMode: "iam"
  });

  const restOperation = get({ apiName: 'PetStore', path: '/pets' });
  const { body } = await restOperation.response;
  const json = await body.json();
  return {
    status: 200,
    pets: json,
    events: data.listJoinmeProdEvents.items,
    message: "OK"
  }
})

