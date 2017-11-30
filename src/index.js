import express from 'express'
import bodyParser from 'body-parser'
import { MembersRouter } from './cores'

const app = new express()
const PORT = 3000

app.use(bodyParser.json())
app.use(MembersRouter)

app.listen(PORT)
console.log(`Service is running on port ${PORT}.`)

// app.get('/', (req, res) => { res.send('Hello World') })


/* const data = {
  id:2,
  firstName: 'Apaichon2',
  lastName: 'Punopas2',
  nickName: 'Pup',
  birthday: '1979/11/13'
}*/
 // const db = new MongoDB('members')
/*db.Open((connected) => console.log(connected))
db.Insert(data, (result) => console.log(result))
db.Close((connected) => console.log(connected)) */

/* db.Open((connected) => 
  db.Insert(data, (result) => {
    console.log('inserted', result)
    db.Close((connected) => console.log(connected))
  })
)*/

/*db.Open()
.then((connected) => db.Insert(data))
.then((inserted) => db.Close())
*/
/* async function insertData(data) {
  let connected = await db.Open()
  console.log('Database is connected:', connected)
  let inserted = await db.Insert(data)
  console.log('Insert data', inserted)
  connected = await db.Close()
  console.log('Database is connected:', connected)
}

insertData(data)
*/

//
// db.open((connected) => console.log('is connected', connected))
// const data = {id:1, name: "Apaichon"}
// db.insert(data, (result) => console.log(result))

/* db.open((connected) => {
  db.insert(data, (result) => console.log('insert', result))
})
*/
// console.log(CONFIG)


/* app.post('/membership/members/add', (req, res) => {
  db.open((connected) => {
    db.insert(req.body, (result) => res.send(result))
  })
}) */

// let db = new BaseDAL({dataProvider:'MongoDB', collection: 'members'})
/* db.Add(data)
.then((result) => console.log(result)) */

// console.log(Members)
/* let members = new Members()
members.Add(data)
.then((result) => console.log(result))
*/
// app.listen(PORT)

// console.log(`Service is running on port ${PORT}.`)