import { BaseBiz } from '../BaseBiz'

export class ExceptionApi extends BaseBiz {
  constructor () {
    super({ 
      dataProvider: 'MongoDB',
      collection: 'exceptionApi'
    })
  }
}