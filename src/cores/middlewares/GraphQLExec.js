/**
 * GraphQL middleware
 */

'use strict'

import { graphqlExpress } from 'apollo-server-express'

/**
 * Graphql middleware express
 * -------
 * use graphql express to create an instant
 * @param req
 * @param res
 * @param rootSchema
 * @return {*}
 */
export const GraphQLExec = (req, res, rootSchema) => {
  const startTime = Date.now()
  graphqlExpress({
    schema: rootSchema,
    context: { req, res },
    // rootValue: null,
    formatError: (error) => ({
      message: error.message,
      stack: error.stack,
      locations: error.locations,
    }),
    formatResponse: (response) => ({
      data: response.data,
      code: res.statusCode,
      runTime: `${((Date.now() - startTime)/1000).toFixed(2)}s`
    })
  })(req, res)
}


