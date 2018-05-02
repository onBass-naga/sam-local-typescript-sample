import { Callback, Context } from 'aws-lambda'
import { env } from 'env'

export function handler(event: any, context: Context, callback: Callback) {

  console.log("helloEnv start: " + JSON.stringify(event))

  const message = `hello ${env.envName}`
  callback(null, {message})
}
