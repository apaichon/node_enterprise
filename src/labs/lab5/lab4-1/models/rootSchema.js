/**
 * Root schema
 * -------
 * Create a qraphql schema
 */
'use strict'

import { GraphQLSchema } from 'graphql'
import query from './rootQuery'

export default new GraphQLSchema({ query })