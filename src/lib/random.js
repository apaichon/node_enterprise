import faker from 'faker'

export class Random {
  randomMember () {
    let randomName = faker.name.findName()
    let randomEmail = faker.internet.email()
    return {
      name: randomName,
      email: randomEmail
    }
  }
}
