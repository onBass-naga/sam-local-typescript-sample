const path = require('path')
const entries = require('./entries.conf')

const findArgsEnv = (command) => {
  const env = /--env=([^\s]+).*/.exec(command)
  return env ? env[1] : "local"
}


module.exports = function() {
  // 起動時に指定したenvironmentを取得する
  // npm run ${command} --env=${environment}
  const argsEnv = process.env.npm_config_env
    ? process.env.npm_config_env
    : findArgsEnv(process.env.npm_lifecycle_script)
  const env = argsEnv === 'prod' ? 'prod' : 'local'
  const envPath =
    env === 'prod' ? 'src/environments/prod/' : 'src/environments/local/'

  console.log(`environment: ${env}`)

  // production: Uglifyする
  // development: Uglifyしない + ソースマップ有効
  const mode = env === 'prod' ? 'production' : 'development'

  return {
    mode,
    target: 'node',

    entry: entries,
    output: {
      path: process.cwd() + '/.dist',
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2'
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader'
        }
      ]
    },

    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: ['src/main', 'node_modules'].concat(envPath)
    }
  }
}
