const request = require('supertest')
const app = require('../../src/app')
const { User } = require('../../src/app/models')

describe('signUp', () => {
  it('should create a user', async() => {
    expect(user.email).toBe('rayonnunes@hotmail.com')
  })
})

describe('Authentication', () => {
  it('should authenticate with valid cretentials', async () => {
    const user = await User.create({
      name: 'Rayon',
      email: 'rayonnunes@hotmail.com',
      password: '123456'
    })
    const response = await request(app)
      .post('/session')
      .send({
        name: 'Rayon',
        email: 'rayonnunes@hotmail.com',
        password: '123456'
      })
    expect(response.status).toBe(200)
  })
})

