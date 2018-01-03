/**
 * Member Query
 * -----
 *
 */

'use strict'

import { GraphQLList, GraphQLString, GraphQLInt} from 'graphql'
import { Members as MemberModel } from '../../../../../../cores/biz'
import { MemberSchema } from './MemberSchema'

const memberModel = new MemberModel()
/** 
 * Get Member List 
*/

const Members = {
  type: new GraphQLList(MemberSchema),
  description: 'Query member list',
  args: {
    memberId: { type: GraphQLString }
  },
  resolve: ( parent, { memberId }) => {
    return memberModel.Get({
      memberId: memberId
    })
  }
}

/**
 * Export query
 */
export default {
  Members
}
