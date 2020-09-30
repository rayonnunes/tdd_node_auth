const { User } = require('../../src/app/models')

describe('Authentication', () => {
  it('creates user', async () => {
    const user = await User.create({
      name: "Rayon",
      email: "rayonnunes@hotmail.com",
      password_hash: "123456"
    })
    expect(user.name).toBe("Rayon")
  })
  it('/autenticate route should returns a jwt token w/ valid credentials when called', () => {
  
  })

})

