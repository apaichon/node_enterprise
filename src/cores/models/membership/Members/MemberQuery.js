/**
 * Member Query
 * -----
 *
 */

'use strict'

import { GraphQLList, GraphQLString, GraphQLInt} from 'graphql'
import { MemberModel } from './MemberModel'
import { MemberSchema } from './MemberSchema'

const memberModel = new MemberModel()
/** 
 * Get Member List 
*/

const Members = {
  type: new GraphQLList(MemberSchema),
  description: 'Query member list',
  args: {
    findByMemberId: { type: GraphQLString }
  },
  resolve: ( parent, args) => {
    if (args.findByMemberId) {
      return memberModel.findByMemberId(args.findByMemberId)
    }
  }
}


/**
 * Export query
 */
export default {
  Members
}
