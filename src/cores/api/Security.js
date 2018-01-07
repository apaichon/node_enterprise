import { Authentication, Authorization } from '../biz/security'
import { default as validate } from 'validate.js'
import { SessionInfoValidator } from '../validators'
import { Message } from '../api'

export class Security {

  static async IsExceptApi (req, res, next) {
    let { application, module, className, method } = req.body
    let appInfo = { application, module, className, method }
    let auth = new Authorization ()
    let isExcepted = await auth.IsExceptionApi (appInfo)
    if (isExcepted === 1) {
      next()
    } else {
      Security.ValidateSession( req, res, next)
    }
  }

  static async ValidateSession (req, res, next) {
    let auth = new Authentication ()
    console.log('sessionID',req.sessionID)
    let sessionInfo = await auth.ValidateSession(req.sessionID)
    let isInvalid = validate(sessionInfo, SessionInfoValidator)
    req.sessionInfo = sessionInfo
    console.log('sessionInfo', sessionInfo)
    if (isInvalid) {
      let result = Message(401)
      res.send(result)
    } else {
     Security.HasPermission(req, res, next)
    }
  }

  static async HasPermission ( req, res, next ) {
    let authorize = new Authorization ()
      let { username } = req.sessionInfo
      let { application, module, className, method } = req.body
      let appParams = { username, application, module, className, method }
      console.log(appParams)
      let isGrant = await authorize.GetApiPermission(appParams)
      if (isGrant) {
        next()
      } else {
        let result = Message(401)
        res.send(result)
      }
  }
}