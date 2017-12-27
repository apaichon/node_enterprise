import { MongoDb } from './MongoDb'

let db = new MongoDb('test')
let data = {
  id: 1,
  firstName: 'AAA',
  lastName: 'BBB',
  createdDate: new Date()
}

db.Open((connected) =>
  db.Insert(data, (result) => {
	console.log('inserted', result)
	db.Close((connected) => console.log(connected))
  })
)
