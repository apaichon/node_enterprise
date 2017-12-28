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
})
