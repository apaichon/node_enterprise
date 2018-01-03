/**
 * Root Mutation
 * ----------
 * combine all mutation
 */

'use strict'

import { GraphQLObjectType } from 'graphql'
import { MemberMutation as Members } from './membership/Members'

// create root mutation
const rootMutation = Object.assign({},
  Members
)

// export root mutation
export default new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => rootMutation
})
