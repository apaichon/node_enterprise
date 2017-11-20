import { MongoClient } from 'mongodb'
import { DB_SERVER } from '../../config'

export default class {

  constructor (collectionName) {
    this.collection = collectionName
  }

  set collection (collectionName) {
    this._collection = collectionName
  }
  
  get collection () {
    return this._collection
  }

  set isConnected (connected) {
    this._isConnected = connected
  }

  get isConnected () {
    return this._isConnected
  }

  set db (dbObject) {
    this._db = dbObject
  }

  get db () {
    return this._db
  }

  open (callback) {
    this.isConnected = false
   
    MongoClient.connect(DB_SERVER.dev.url, (err, db) => {
      if (err) throw err
      this.isConnected = true
      callback('Connected!')
    })
  }



}