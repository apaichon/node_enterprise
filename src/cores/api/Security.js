import { Authentication, Authorization } from '../biz/security'
import { default as validate } from 'validate.js'
import { SessionInfoValidator } from '../validators'
import { Message } from '../api'

export class Security {

  static async IsExceptApi (req, res, next) {
    let { application, module, className, method } = req.body
    let auth = new Authorization ()
    let isExcepted = await auth.IsExceptionApi ({ application, module, className, method })
    if (isExcepted === 1) {
      next()
    } else {
      Security.ValidateSession( req, res, next)
    }
  }

  static async ValidateSession (req, res, next) {
    let auth = new Authentication ()
    let sessionInfo = await auth.ValidateSession(req.sessionID)
    let isInvalid = validate(sessionInfo, SessionInfoValidator)
    if (isInvalid) {
      let result = Message(401)
      res.send(result)
    } else {
      next()
    }
  }
}