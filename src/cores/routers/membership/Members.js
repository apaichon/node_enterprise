import express from 'express'
import { MEMBERS } from '../../config/routers'
import MembersBiz from '../../biz/membership/Members'

let router = express.Router()
let members = new MembersBiz()

router.post(MEMBERS.ADD_URL, (req, res) => {
  members.Add(req.body)
  .then((result) => res.send(result))
  .catch((err) => res.send(err))
})

router.put(MEMBERS.EDIT_URL, (req, res) => {
  members.Edit(req.body)
  .then((result) => res.send(result))
  .catch((err) => res.send(err))
})

router.delete(MEMBERS.DELETE_URL, (req, res) => {
  members.Delete(req.body)
  .then((result) => res.send(result))
  .catch((err) => res.send(err))

})

router.get(MEMBERS.GET_URL, (req, res) => {
  console.log('query', req.query)
  members.Get(req.query)
  .then((result) => res.send(result))
  .catch((err) => res.send(err))
})

export { router }