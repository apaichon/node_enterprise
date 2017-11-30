import { BaseBiz } from '../BaseBiz'

export default class extends BaseBiz {
  constructor() {
    super({ 
      dataProvider: 'MongoDB',
      collection: 'members'
    })
  }
}