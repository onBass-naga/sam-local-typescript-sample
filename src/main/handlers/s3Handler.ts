import { S3, Endpoint } from 'aws-sdk'
import { Callback, Context } from 'aws-lambda'
import { modules } from 'modules'

export function handler(event: any, context: Context, callback: Callback) {

  console.log("read S3 start: " + JSON.stringify(event))

  const service = modules.s3Service
  service.getObject('test-bucket', 'test.txt').then(
    data => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          s3data: data['Body'].toString()
        }),
      };
      callback(null, response)
    },
    error => {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          s3data: error.toString()
        }),
      };
      callback(null, response)
    }
  )
}
