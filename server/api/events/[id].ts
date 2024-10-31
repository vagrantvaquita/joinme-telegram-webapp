import { H3Event } from 'h3'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: "us-east-1"});
const docClient = DynamoDBDocumentClient.from(client);

export default defineEventHandler(async (event: H3Event) => {

    const user_id = getRouterParam(event, "id")

    const command = new ScanCommand({
        TableName: "joinme-prod-events",
        FilterExpression: "user_id = :uid",
        ExpressionAttributeValues: {
          ":uid": user_id,
        },
    });
    const response = await docClient.send(command);
    return response.Items?.sort((a, b) => a.datetime - b.datetime)
})