import { BaseBiz } from '../BaseBiz'
import ExceptionApi from './ExceptionApi'
const MAIN_COLLECTION = 'authorization'

export default class extends BaseBiz {
  constructor() {
    super({ 
      dataProvider: 'MongoDB',
      collection: MAIN_COLLECTION
    })
  }

  async IsExceptionApi (methodInfo) {
    let exceptApiDb = new ExceptionApi ()
    let isException = await exceptApiDb.Count(methodInfo)
    return isException
  }

  async GetApiPermission (reqInfo) {
    let isGrant = await this.Count(reqInfo)
    return isGrant
  }

}
