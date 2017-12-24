import { MongoDb } from '../../../cores/dal/MongoDb'

let db = new MongoDb('test')
let data = {
  id: 1,
  firstName: 'Async',
  lastName: 'Promise',
  createdDate: new Date()
}

db.Open()
.then((connected) => db.Insert(data))
.then((inserted) => { 
    console.log(inserted) 
    db.Close()
  }
)