import express from 'express'
import MongoDB from './lib/mongodb'
import CONFIG from '../config'

const app = new express()
const PORT = 3000

app.get('/', (req, res) => { res.send('Hello World') })

const db = new MongoDB('membership')
db.open((connected) => console.log('is connected', connected))
// console.log(CONFIG)

app.listen(PORT)

console.log(`Service is running on port ${PORT}.`)