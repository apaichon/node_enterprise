import { Random } from '../../../lib/random'
import { Members } from '../../../cores/biz'
import chai from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

let assert = chai.assert
let member = new Members()
let random = new Random()

describe('Scenario CRUD of Members REST Api', () => {
  let memberInfo = random.randomMember()
  describe(`Given Member name is ${memberInfo.name}`, () => {
    it(`When add member name is ${memberInfo.name}`, async function () {
    let result = await chai.request('http://localhost:3000')
      .post('/membership/Members/Add')
      .set('content-Type', 'application/json')
      .send(memberInfo)
      // Then
      assert.equal(result.res.body.ops[0].name, memberInfo.name)
    })
  })
})