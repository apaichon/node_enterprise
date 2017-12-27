import MembersBiz from '../../../cores/biz/membership/Members'

let Members = new MembersBiz()
let aMember = {
  id: 99,
  firstName: 'John',
  lastName: 'Doe',
  sex: 0,
  registerdDate: new Date()
}
Members.Add(aMember)
  .then((result) => console.log(aMember))
  .catch((err) => console.log(err))