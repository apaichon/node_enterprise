import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { MembersRouter, CORS } from './cores'

const app = new express()
const PORT = 3000

app.use(cors(CORS))
app.use(bodyParser.json())
app.use(MembersRouter)

app.listen(PORT)
console.log(`Service is running on port ${PORT}.`)
