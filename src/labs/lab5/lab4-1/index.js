import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { CORS, GraphQLExec } from '../../../cores/middlewares'
import { graphiqlExpress } from 'apollo-server-express'
import rootSchema from './models/rootSchema'

const app = new express()
const PORT = 3000

app.use(cors(CORS))
app.use(bodyParser.json())
app.use('/graphql', (req, res) => GraphQLExec(req, res, rootSchema))
app.use('/graphqltool', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)
console.log(`Service is running on port ${PORT}.`)
