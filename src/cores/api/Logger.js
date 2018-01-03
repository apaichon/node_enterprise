import { default as winston } from 'winston'

export class Logger {

  constructor (path) {
    let fileDate = Date.now.toISOString().substring(0,10)
    let fileName = `${path}/combined_${fileDate}.log`
    let errorFile = `${path}/error_${fileDate}.log`
    
    this.Logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: errorFile, level: 'error' }),
        new winston.transports.File({ filename: fileName }),
        new winston.transports.Console({ format: winston.format.simple() })
      ]
    });
  }

  get Logger () {
    return this._logger
  }
  set Logger (logger) {
    this._logger = logger
  }

}