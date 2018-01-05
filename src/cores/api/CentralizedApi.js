import { default as _ } from 'lodash'
import { Message } from './Result'
import { default as validate } from 'validate.js'
import { default as moment } from 'moment'

const REQUIRE_KEYS = [
  'application',
  'module',
  'className',
  'method',
  'parameters'
]
const OPTION_KEYS = [
  'validator',
  'skip',
  'limit',
  'fields'
]
// console.log(validate)
validate.extend(validate.validators.datetime, {
  // The value is guaranteed not to be null or undefined but otherwise it
  // could be anything.
  parse: function(value, options) {
    return +moment.utc(value)
  },
  // Input is a unix timestamp
  format: function(value, options) {
    var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
    return moment.utc(value).format(format)
  }
})

export class CentralizedApi {
  
  static async Execute (req, res, next) {
    let Result = Message(200)
    let execParams =  (req.method === "GET" ? req.query : req.body)
    try {
      let parameters = await CentralizedApi.ValidateParameters(execParams)
      console.log(parameters)
      let result = await CentralizedApi.Invoke(parameters)
      Result.result = result
    }
    catch(err) {
      if(!err.code) {
        Result = Message(500)
        Result.message = err
      } else {
        Result = err
      }
    }
    res.Result = Result
    res.send(Result)
    next()
  }

  static ValidateParameters (params) {
    return new Promise((resolve, reject) => {
      let inputKeys = _.keys(params)
      let interSecs = _.intersectionBy(REQUIRE_KEYS, inputKeys)

      if (inputKeys.length === 0) {
        reject(Message(530))
      }
      if ( !_.isEqual(REQUIRE_KEYS.sort(), interSecs.sort())) {
        reject(Message(530))
      }

      if (_.includes(inputKeys, 'validator')) {
        let message = CentralizedApi.ValidType(params)
        if (message !== undefined) {
          let msg = Message(530)
          msg.message.en_US = message
          reject(msg)
        }
      }

      resolve(params)
    })
  }

  static ValidType (params) {
    let validator = require('../validators')[params.validator + 'Validator']
    return validate(params.parameters, validator )
  }

  static Invoke (params) {
    return new Promise((resolve, reject) => {
      let { module, className, method, parameters } = params
      let lib = `../biz/${module}/${className}`
      let obj = require(lib).default
      obj = new obj()
      obj[method](parameters)
      .then(result => resolve(result))
      .catch(err => reject(err))
    })
  }

  static PrepareRequestLog (req, res, next) {
    let log = UserAgent.GetUAInfo(req)
    log.uuid = uuid.v1()
    log.sessionID = req.sessionID
    log.transType = 'input'
    req.log = log
    req.logPath = LOG_PATH.path
    next()
  }
}