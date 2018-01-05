
// All features
/*LogIn
LogOut
RegisterSession
ValidateUser
ValidateSession
*/
import { BaseBiz } from '../BaseBiz'
import { default as validate } from 'validate.js'
import { UserValidator } from '../../validators'
import { default as Users } from './Users'
import { default as bcrypt } from 'bcrypt'

export default class extends BaseBiz {
  constructor() {
    super({ 
      dataProvider: 'MongoDB',
      collection: 'userLogon'
    })
  }

  async LogIn (userInfo) {
    let { username, password } = userInfo
    let isValid = await this.ValidateUser(userInfo)
    let users = new Users()
    let user = await users.GetOne({ username })
    let result = bcrypt.compareSync(password, user.password)

    if (result) {
      delete userInfo.password
      let registered = await this.RegisterSession(userInfo)
      return registered
    }
    throw 'Invalid parameters!'
  }

  async LogOut (userInfo) {
    let { username, sessionID } = userInfo
    let removed = await this.Delete({ username, sessionID })
    return removed
  }

  // Insert data in MongoDB
  async RegisterSession (userInfo) {
    userInfo.logOn = new Date()
    let dataWithCondition = {
      data: userInfo,
      condition: { sessionID: userInfo.sessionID }
    }
    let registered = await this.EditAdd (dataWithCondition)
    return registered
  }

  ValidateUser (userInfo) {
    return new Promise((resolve, reject) => {
      let message = validate(userInfo, UserValidator )
      if (message) {
        reject('Invalid parameter!')
      } else {
        resolve(true)
      }
    })
  }

  async ValidateSession (sessionID) {
    // session is exist
    let sessionInfo = await this.GetOne({ sessionID: sessionID })
    return sessionInfo
  }
}