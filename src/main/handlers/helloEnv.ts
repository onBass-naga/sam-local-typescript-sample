import { Callback, Context } from 'aws-lambda'
import { env } from 'env'
import { Logger } from 'shared/logger/Logger';

const logger = new Logger()

export function handler(event: any, context: Context, callback: Callback) {

  logger.printLogInfo()
  logger.info("helloEnv start")
  logger.debug(JSON.stringify(event))

  const message = `hello ${env.envName}`
  const serverMessage = process.env.SERVER_MESSAGE

  callback(null, {message, serverMessage})
}
