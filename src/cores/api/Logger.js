import { default as winston } from 'winston'
import { UserAgent } from './UserAgent'
import { default as uuid } from 'uuid'
import { LOG_PATH } from '../config'

export class Logger {

  static PrepareLogger (path) {
    let now = new Date()
    let fileDate = now.toISOString().substring(0,10)
    let fileName = `${path}/${fileDate}.log`
    return new winston.Logger({
      level: 'info',
      transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: fileName }),
        new winston.transports.Console()
      ]
    })
  }

  static WriteReqLog (req, res, next) {
    let log = UserAgent.GetUAInfo(req)
    log.uuid = uuid.v1()
    log.sessionID = req.sessionID
    log.transType = 'input'
    req.log = log
    req.logPath = LOG_PATH.path
    Logger.WriteLog(req.log, req.logPath, next)
  }

  static WriteResLog (req, res, next) {
    let { code, status, message } = res.Result
    let level = (code === 200 ? 'info' : 'error')
    let log = {}
    log.uuid = req.log.uuid
    log.sessionID = req.sessionID
    log.code = code
    log.status = status
    log.message = message || ''
    log.transType = 'output'
    log.level = level
    Logger.WriteLog(log, req.logPath, next)
  }

  static WriteLog (log, path, next) {
    let logger = Logger.PrepareLogger(path)
    logger.log(log.level, log)
    next()
  }

}