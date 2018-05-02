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
    s3Handler.handler(null, null, callback)
  })
})
