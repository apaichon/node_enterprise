import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { CORS, Session } from '../../../cores'
import { CentralizedApi, Logger, Security } from '../../../cores/api'

/* var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'p@ssw0rd';
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
  console.log('saltRounds', hash)
});*/

const app = new express()
const PORT = 3000

app.use(cors(CORS))
app.use(Session)
app.use(bodyParser.json())
app.post('/api/CentralizedApi',
Security.IsExceptApi,
Logger.WriteReqLog,
CentralizedApi.Execute,
Logger.WriteResLog)

app.listen(PORT)
console.log(`Service is running on port ${PORT}.`)
