/**
 * Root Query
 * ----------
 * combine all query
 */

'use strict'

import { GraphQLObjectType } from 'graphql'
import { MemberQuery as Members } from './membership/Members'

// create root query
const rootQuery = Object.assign({},
  Members
)

// export root query
export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => rootQuery
})
