
import chai from 'chai'

let assert = chai.assert
//loop Scenarios
describe('Members CRUD', () => {
  //loop testCases
  let {Members} = require('../../biz')

   describe('Insert a Member.', () => {
    it('Should return memeber name is "Apaichon Punopas"',async function () {
        let member = new Members ()
        let result = await member.Add({"name":"Apaichon Punopas","email":"apaichon@gmail.com"})
        assert.equal(result.ops[0].name, 'Apaichon Punopas')
      })
  })
  
 describe('Update a Member.', () => {
    it('Should return update status is 1',async function () {
        let member = new Members ()
        let result = await member.Edit({"condition":{"name":"Apaichon Punopas"},"data":{"email":"apaichon@hotmail.com"}})
        assert.equal(result.result.nModified, 1)
      })
  })
  

})
