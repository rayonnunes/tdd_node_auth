const request = require('supertest')

const app = require('../../src/app')
const { User } = require('../../src/app/models')
const truncateTables = require('../utils/truncateTables')

describe('Authentication', () => {
  beforeEach(async() => {
    await truncateTables()
  })
  it('should authenticate with valid cretentials', async () => {
    const user = await User.create({
      name: 'Rayon',
      email: 'rayonnunes@hotmail.com',
      password_hash: '123456'
    })
    const response = await request(app)
      .post('/session')
      .send({
        name: 'Rayon',
        email: 'rayonnunes@hotmail.com',
        password_hash: '123456'
      })
    expect(response.status).toBe(200)
  })
})

