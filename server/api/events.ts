import AWS from 'aws-sdk';

var storage = new AWS.DynamoDB({ apiVersion: "2012-08-10", region: "us-east-1" });

var params = {
  TableName: "joinme-prod-events",
  ExpressionAttributeValues: {":b": { N: "0" }},
  ExpressionAttributeNames: {"#ts": "timestamp"},
  FilterExpression: " #ts >= :b",
};

export default defineEventHandler(async (event) => {
  const data = await storage.scan(params).promise();
  const response = data.Items?.map((e) => {
      return AWS.DynamoDB.Converter.unmarshall(e)
  })
  return {
    status: 200,
    events: response
  }
})

