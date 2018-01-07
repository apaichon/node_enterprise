import { BaseBiz } from '../BaseBiz'

export default class ExceptionApi extends BaseBiz {
  constructor () {
    super({ 
      dataProvider: 'MongoDB',
      collection: 'exceptionApi'
    })
  }
}