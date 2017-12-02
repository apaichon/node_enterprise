import { MongoClient } from 'mongodb'
import { DB_SERVER } from '../../config'

export default class {

  constructor (collectionName) {
    this.Collection = collectionName
    switch(process.env) {
      case 'Production':
        this.DbUrl = DB_SERVER.prod.url
        break;
      default:
        this.DbUrl = DB_SERVER.dev.url
        break;
    }
  }

  /**
   * Properties
   */

  set Collection (collectionName) {
    this._collection = collectionName
  }
  
  get Collection () {
    return this._collection
  }

  set DbUrl (url) {
    this._dbUrl = url
  }

  get DbUrl () {
    return this._dbUrl
  }

  set IsConnected (connected) {
    this._isConnected = connected
  }

  get IsConnected () {
    return this._isConnected
  }

  set Db (dbObject) {
    this._db = dbObject
  }

  get Db () {
    return this._db
  }

  /** Methods */

  /**
   * Open database.
   * @param {*} callback 
   */
  /* Open (callback) {
    this.IsConnected = false
   
    MongoClient.connect(this.DbUrl, (err, db) => {
      if (err) throw err
      this.IsConnected = true
      this.Db = db
      callback(this.IsConnected)
    })
  } */

  Open () {
    this.IsConnected = false

    return new Promise ((resolve, reject) => {
      MongoClient.connect(this.DbUrl, (err, db) => {
        if (err) reject(err)
        this.IsConnected = true
        this.Db = db
        resolve(this.IsConnected)
      })
    })
  }

  /**
   * Close database.
   * @param {*} callback 
   */
  /* Close (callback) {
    this.Db.close(() => { 
      this.IsConnected = false
      callback(this.IsConnected)
    })
  }*/

  Close () {
    return new Promise((resolve, reject) => {
      this.Db.close(() => {
        this.IsConnected = false
        resolve(this.IsConnected)
      })
    })
  }
  /**
   * Insert data to database.
   * @param {*} data 
   * @param {*} callback 
   */
  /* Insert (data, callback) {
    this.Db.collection(this.collection)
    .insert(data, (result) => callback(result))
  }*/

  Insert (data) {
    return new Promise((resolve, reject) => {
      this.Db.collection(this.Collection)
      .insert(data, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }

  /**
   * Update data
   * @param {*} dataWithCondition 
   */
  Update (dataWithCondition) {
    let { data, condition, option } = dataWithCondition
    if (!option) {
      option = {}
    }
    return new Promise((resolve, reject) => {
      this.Db.collection(this.Collection)
      .update(condition, data, option, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }

  /**
   * Remove data
   * @param {*} conditionWithOption 
   */
  Remove (conditionWithOption) {
    let { condition, option } = conditionWithOption
    if (!option) {
      option = {}
    }
    return new Promise((resolve, reject) => {
      this.Db.collection(this.Collection)
      .remove(condition, option, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }

  Find (condition) {
    return new Promise((resolve, reject) => {
      this.Db.collection(this.Collection)
      .find(condition).toArray((err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }

}