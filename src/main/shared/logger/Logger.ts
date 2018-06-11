
class Logger {

  private static LEVEL_ERROR = 5
  private static LEVEL_WARN = 4
  private static LEVEL_INFO = 3
  private static LEVEL_DEBUG = 2
  private static LEVEL_TRACE = 1
  private static LEVEL_DEFAULT: number = Logger.LEVEL_INFO

  private level: number

  public constructor() {
    const envLevel = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : ''
    this.level = this.initLevel(envLevel.toLowerCase())
  }

  private initLevel(logLevel: string): number {
    return logLevel === 'error' ? Logger.LEVEL_ERROR
        : logLevel === 'warn' ? Logger.LEVEL_WARN
        : logLevel === 'info' ? Logger.LEVEL_INFO
        : logLevel === 'debug' ? Logger.LEVEL_DEBUG
        : logLevel === 'trace' ? Logger.LEVEL_TRACE
        : Logger.LEVEL_DEFAULT
  }

  printLogInfo() {
    console.log(`process.env.LOG_LEVEL: ${process.env.LOG_LEVEL}, log level: ${this.level}`)
  }

  error(log) {
    console.log(log)
  }

  warn(log) {
    this.level <= Logger.LEVEL_WARN && console.log(log)
  }

  info(log) {
    this.level <= Logger.LEVEL_INFO && console.log(log)
  }

  debug(log) {
    this.level <= Logger.LEVEL_DEBUG && console.log(log)
  }

  trace(log) {
    this.level <= Logger.LEVEL_TRACE && console.log(log)
  }
}

export { Logger }
