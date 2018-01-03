/**
 * Member Model
 */

'use strict'

import { Members } from '../../../../../../cores/biz'

export class MemberModel {
  constructor () {
    this.model = new Members()
  }

  async findByMemberId ( memberId ) {
    const condition = { memberId: memberId }
    let data = await this.model.Get(condition)
    return data
  }
}