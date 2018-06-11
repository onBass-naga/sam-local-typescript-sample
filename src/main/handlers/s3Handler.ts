import { S3, Endpoint } from 'aws-sdk'
import { Callback, Context } from 'aws-lambda'
import { modules } from 'modules'
import { Logger } from 'shared/logger/Logger';

const logger = new Logger()

export function handler(event: S3PutEvent, context: Context, callback: Callback) {

  context.logGroupName = 'S3Handler'
  // context.logStreamName = 'S3Handler'
  logger.printLogInfo()
  logger.info("read S3 start")
  logger.debug(JSON.stringify(event))

  const bukcetName = event.Records[0].s3.bucket.name

  const service = modules.s3Service
  const onRead = (error, list) => {
    if (error) {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          s3data: error.toString()
        }),
      };
      callback(null, response)
      return
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        objectNames: list
      }),
    };

    // logger.debug("objects: " + JSON.stringify(response.body))
    callback(null, response)
  }

  service.listObjectNames(bukcetName, onRead)
}
