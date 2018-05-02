import * as assert from 'power-assert';
import * as mocha from "mocha";
import * as hello from 'handlers/helloEnv';

describe('helloEnv', () => {

  it('handler reads envName from config', () => {
    let actual
    const callback = (err, success) => {actual = success}
    hello.handler(null, null, callback)

    assert(actual.message === "hello local")
  })
})
