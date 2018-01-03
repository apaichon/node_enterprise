/**
 * Member Mutation
 * -----
 *
 */

'use strict'

import { GraphQLList, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLBoolean } from 'graphql'
import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date'
import { Members as MemberModel } from '../../../../../../cores/biz'
import { MemberSchema } from './MemberSchema'
import { SexSchema } from '../Enums'

const memberModel = new MemberModel()
/** 
 * Get Member List 
*/

const CreateMember = {
  type: new GraphQLList(MemberSchema),
  description: 'Create a member.',
  args: {
    memberId: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    sex: { type: SexSchema },
    birthDate: { type: GraphQLDate },
    registeredDate: { type: new GraphQLNonNull(GraphQLDateTime) },
    createdDate: { type: new GraphQLNonNull(GraphQLDateTime) },
    modifiedDate: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    modifiedDate: { type: GraphQLString },
    isActive: { type: new GraphQLNonNull(GraphQLBoolean) },
    status: { type: GraphQLInt }
  },
  resolve: ( parent, args) => {
    let data = args
    data.createdDate = new Date()
    data.isActive = false
    data.status = 1
    return memberModel.Add(data)
  }
}

/**
 * Export query
 */
export default {
  CreateMember
}
