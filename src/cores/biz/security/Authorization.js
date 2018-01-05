import { BaseBiz } from '../BaseBiz'

const MAIN_COLLECTION = 'authorization'
const EXCEPTION_API_COLLECTION = 'exceptionApi'

export default class extends BaseBiz {
  constructor() {
    super({ 
      dataProvider: 'MongoDB',
      collection: MAIN_COLLECTION
    })
  }

  async ValidateApiPermission (reqInfo) {
    let isGrant = await this.GetApiPermission(reqInfo)
    if (isGrant) {
      return true
    } else {
      return false
    }
  }

  async IsExceptionApi (methodInfo) {
    let exceptApiDb = new BaseBiz({
      dataProvider: 'MongoDB',
      collection: EXCEPTION_API_COLLECTION
    })
    let isException = await exceptApiDb.Count(methodInfo)
    return isException
  }

  async GetApiPermission (reqInfo) {
    let { username, application, className, method } = reqInfo
    let isGrant = await this.Get({username, application, className, method})
    return isGrant
  }

}
