import { Context, CognitoIdentity, ClientContext } from 'aws-lambda'

export class MockContext implements Context {
  callbackWaitsForEmptyEventLoop: boolean;
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  memoryLimitInMB: number;
  awsRequestId: string;
  identity?: CognitoIdentity;
  clientContext?: ClientContext;
  getRemainingTimeInMillis(): number {
    throw new Error("Method not implemented.");
  }
  done(error?: Error, result?: any): void {
    throw new Error("Method not implemented.");
  }
  fail(error: Error): void;
  fail(message: string): void;
  fail(message: any) {
    throw new Error("Method not implemented.");
  }
  succeed(message: string): void;
  succeed(object: any): void;
  succeed(message: string, object: any): void;
  succeed(message: any, object?: any) {
    throw new Error("Method not implemented.");
  }
  logGroupName: ''
  logStreamName: ''
}