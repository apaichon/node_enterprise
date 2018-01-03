/**
 * Member Schema
 * ------
 **/
'use strict'

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql'

import {
  GraphQLDate,
  GraphQLDateTime
} from 'graphql-iso-date'

import {
  SexSchema
} from '../Enums'

// Member fields
export const memberFields = () => 
({
  memberId: { type: GraphQLString },
  firstName: { type: GraphQLString },
  lastName: { type: GraphQLString },
  sex: { type: SexSchema },
  birthDate: { type: GraphQLDate },
  registeredDate: { type: GraphQLDateTime },
  createdDate: { type: GraphQLDateTime },
  modifiedDate: { type: GraphQLString },
  createdBy: { type: GraphQLString },
  modifiedDate: { type: GraphQLString },
  isActive: { type: GraphQLBoolean },
  status: { type: GraphQLInt }
})

// export Member type
export const MemberSchema = new GraphQLObjectType({
  name: "Members",
  description: 'Member Schema',
  fields: memberFields
})


