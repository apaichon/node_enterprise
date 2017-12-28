import { Random } from '../../../lib/random'
import { Members } from '../../../cores/biz'
import chai from 'chai'

let assert = chai.assert
let member = new Members()
let random = new Random()
let memberInfo = random.randomMember()

describe('Members', () => {
 describe('Insert a member', () => {
   it(`should return ${memberInfo.name}`,async function () {
       let result = await member.Add(memberInfo)
       assert.equal(result.ops[0].name, memberInfo.name)
     })
 })

 describe('Update a member', () => {
  let updateMember = random.randomMember()
  let updateData = {
    condition: {
      name: memberInfo.name
    },
    data: {
      email: updateMember.email
    }
  }
  it(`should return nModified is 1`,async function () {
      let result = await member.Edit(updateData)
      assert.equal(result.result.nModified, 1)
    })
  })

})


