import express from 'express'
import MongoDB from './lib/mongodb'
import CONFIG from '../config'

const app = new express()
const PORT = 3000

app.get('/', (req, res) => { res.send('Hello World') })

const db = new MongoDB('members')
// db.Open((connected) => console.log('is connected', connected))
// console.log(CONFIG)
async function openDB () {
  let connected = await db.Open()
  let data = {id:2, name: 'Apaicho2n'}
  let dataWithCondition = {
    condition: {id:2},
    data: {name: 'PUP1', age: 37}
  }
  let result = await db.Insert(data)
  let updated = await db.Update(dataWithCondition)
  let list = await db.Find({})
  let removed = await db.Remove({id:1})
  let isClosed  = await db.Close()
  console.log( updated)
}

openDB()


app.listen(PORT)

console.log(`Service is running on port ${PORT}.`)

