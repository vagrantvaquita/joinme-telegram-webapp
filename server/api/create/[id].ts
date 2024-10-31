import { H3Event } from 'h3'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: "us-east-1"});
const docClient = DynamoDBDocumentClient.from(client);

export default defineEventHandler(async (event: H3Event) => {
    const user_id = getRouterParam(event, "id")
    const form = getQuery(event)
    const datetime = new Date(`${form.date} ${form.time}`)
    const command = new PutCommand({
        TableName: "joinme-prod-events",
        Item: {
            user_id: user_id,
            timestamp: Date.now(),
            category: form.category,
            title: form.title,
            description: form.description,
            location: form.location,
            datetime: datetime.toISOString(),
            url: form.url,
            ttl: Math.floor(datetime.getTime() / 1000)
        }
    });
    await docClient.send(command);
})