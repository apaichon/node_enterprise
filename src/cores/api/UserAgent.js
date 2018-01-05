import { default as ua } from 'useragent'

export class UserAgent {

  static GetUAInfo (req) {
    let info = {}
    let agent = ua.parse(req.headers['user-agent'])
    
    info.uuid = req.uuid || ''
    info.sessionID = req.sessionID || ''
    info.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    info.application = req.body.application || ''
    info.className = req.body.className || ''
    info.method = req.body.method || ''
    info.os = agent.os
    info.device = agent.device
    info.browser = agent.toString()
    info.level = 'info'
    
    return info
  }

}