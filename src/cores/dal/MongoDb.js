import { MongoClient } from 'mongodb'
import { DB_SERVER } from '../config/db'

export class MongoDb {

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

  /**
   * Collection Name Property
   */
  set Collection (collectionName) {
    this._collection = collectionName
  }
  get Collection () {
    return this._collection
  }

  /**
   * Database url property for set connection string of MongoDB.
   */
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
    data = {'$set': data }
    return new Promise((resolve, reject) => {
      this.Db.collection(this.Collection)
      .update(condition, data, option, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }

  /**
   * Upsert
   */
  Upsert (dataWithCondition) {
    let { data, condition } = dataWithCondition
    let option = { upsert: true }
    data = {'$set': data }
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
    if(!condition) throw 'Invalid condition!'
    if (!option) {
      option = {justOne: true}
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

  FindOne (condition) {
    return new Promise((resolve, reject) => {
      this.Db.collection(this.Collection)
      .findOne(condition, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }

  Count (condition) {
    return new Promise((resolve, reject) => {
      this.Db.collection(this.Collection)
      .count(condition, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  }



}