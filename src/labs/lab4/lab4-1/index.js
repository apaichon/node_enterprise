import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { CORS } from 'cores'
import { CentralizedApi } from '../../../cores/api'

const app = new express()
const PORT = 3000
// const api = new ApiCentral()

app.use(cors(CORS))
app.use(bodyParser.json())
app.post('/api/CentralizedApi', CentralizedApi.Execute);

app.listen(PORT)
console.log(`Service is running on port ${PORT}.`)
