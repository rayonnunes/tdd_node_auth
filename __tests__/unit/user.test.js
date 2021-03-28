const truncateTables = require('../utils/truncateTables')
const { User } = require('../../src/app/models')
const chance = require('chance').Chance()

describe('User', () => {
  beforeEach(async () => {
    await truncateTables()
  })

  it('should encrypt user password', async() => {
    const user = await User.create({
      name: chance.name(),
      email: chance.email(),
      password: chance.string(),
    })
    const checkPassword = await user.checkPassword(user.password)
    expect(checkPassword).toBe(true)
  })
})