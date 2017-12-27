// import assert from 'assert'
import faker from 'faker'
import { Members } from '../../biz'
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
let assert = chai.assert

function randomMember () {
  let randomName = faker.name.findName()
  let randomEmail = faker.internet.email()
  return {
    name: randomName,
    email: randomEmail
  }
}

let member = new Members()
let memberInfo = randomMember()

describe('Members', () => {
 
  describe('Insert a member', () => {
    it(`should return ${memberInfo.name}`,async function () {
        let result = await member.Add(memberInfo)
        assert.equal(result.ops[0].name, memberInfo.name)
      })
  })

  describe('Update a member', () => {
    let updateMember = randomMember()
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

  describe('Find a member', () => {
    let condition = {
      name: memberInfo.name
    }
    it(`should found a member is ${memberInfo.name}`,async function () {
      let result = await member.Get(condition)
      assert.equal(result[0].name, memberInfo.name)
    })
  })

 describe('Delete a member', () => {
    let condition = {
      condition: {
        name: memberInfo.name
      }
    }
    it(`should remove a member is 1`,async function () {
      let result = await member.Delete(condition)
      assert.equal(result.result.n, 1)
    })
  })
  
})

describe('Scenario CRUD of Members REST Api', () => {
  let memberInfo = randomMember()
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

  let newInfo = randomMember()
  describe(`Given member name is ${memberInfo.name}, email is ${memberInfo.email}`, () => {
    it(`When update member name is ${memberInfo.name}, email is ${newInfo.email}`, async function () {
    
      let updateData = {
        condition: {
          name: memberInfo.name
        },
        data: {
          email: newInfo.email
        }
      }

      let result = await chai.request('http://localhost:3000')
      .put('/membership/Members/Edit')
      .set('content-Type', 'application/json')
      .send(updateData)
      // Then
      assert.equal(result.res.body.nModified, 1)
    })
  })

  describe(`Given member name is ${memberInfo.name}`, () => {
    it(`When find member name is ${memberInfo.name}`, async function () {
      let result = await chai.request('http://localhost:3000')
      .get(`/membership/Members/Get?name=${memberInfo.name}`)
      .set('content-Type', 'application/json')
      // Then
      assert.equal(result.res.body[0].name, memberInfo.name)
    })
  })

  describe(`Given member name is ${memberInfo.name}`, () => {
    it(`When delete member name is ${memberInfo.name}`, async function () {
      let condition = {
        condition: {
          name: memberInfo.name
        }
      }
      let result = await chai.request('http://localhost:3000')
      .delete(`/membership/Members/Delete`)
      .set('content-Type', 'application/json')
      .send(condition)
      // Then
      assert.equal(result.res.body.n, 1)
    })
  })

})
