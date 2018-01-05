import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { CORS, Session } from '../../../cores'
import { CentralizedApi, Logger } from '../../../cores/api'
const app = new express()
const PORT = 3000

app.use(cors(CORS))
app.use(Session)
app.use(bodyParser.json())
app.post('/api/CentralizedApi',
Logger.WriteReqLog,
CentralizedApi.Execute,
Logger.WriteResLog)

app.listen(PORT)
console.log(`Service is running on port ${PORT}.`)
