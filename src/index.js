import express from 'express'
import bodyParser from 'body-parser'
import { MembersRouter } from './cores'

const app = new express()
const PORT = 3000

app.use(bodyParser.json())
app.use(MembersRouter)

app.listen(PORT)
console.log(`Service is running on port ${PORT}.`)
