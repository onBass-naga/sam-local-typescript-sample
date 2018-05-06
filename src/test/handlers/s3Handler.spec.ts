import * as assert from 'power-assert';
import * as mocha from "mocha";
import * as s3Handler from 'handlers/s3Handler';

describe('s3Handler', () => {

  it('handler returns status 200', (done) => {
    
    const callback = (err, success) => {
      assert(success.statusCode === 200)
      assert(success.body === "{\"s3data\":\"mock data\"}")
      done()
    }
    s3Handler.handler(event, null, callback)
  })
})

const event = JSON.parse(`
{
  "Records": [
    {
      "eventVersion": "2.0",
      "eventTime": "1970-01-01T00:00:00.000Z",
      "requestParameters": {
        "sourceIPAddress": "127.0.0.1"
      },
      "s3": {
        "configurationId": "testConfigRule",
        "object": {
          "eTag": "0123456789abcdef0123456789abcdef",
          "sequencer": "0A1B2C3D4E5F678901",
          "key": "test.txt",
          "size": 1024
        },
        "bucket": {
          "arn": "arn:aws:s3:::test-bucket",
          "name": "test-bucket",
          "ownerIdentity": {
            "principalId": "EXAMPLE"
          }
        },
        "s3SchemaVersion": "1.0"
      },
      "responseElements": {
        "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH",
        "x-amz-request-id": "EXAMPLE123456789"
      },
      "awsRegion": "us-east-1",
      "eventName": "ObjectCreated:Put",
      "userIdentity": {
        "principalId": "EXAMPLE"
      },
      "eventSource": "aws:s3"
    }
  ]
}
`)