import { GraphQLEnumType } from 'graphql'

const SexSchema = new GraphQLEnumType({
  name: 'Sex',
  values: {
    MALE: { value: 0 },
    FEMALE: { value: 1 }
  }
})

export {
  SexSchema
}
