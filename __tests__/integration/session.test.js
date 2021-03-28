const request = require('supertest')
const chance = require('chance').Chance()

const app = require('../../src/app')
const factory = require('../factory')
const truncateTables = require('../utils/truncateTables')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncateTables()
  })

  it('should authenticate with valid cretentials', async () => {
    const user = await factory.create('User')
    const response = await request(app)
      .post('/session')
      .send({
        email: user.email,
        password: user.password,
      })
    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials',  async () => {
    await factory.create('User')
    const response = await request(app)
      .post('/session')
      .send({
        email: chance.email(),
        password: chance.string(),
      })
    expect(response.status).toBe(400)
  })

  it('should return jwt token when authenticated', async () => {
    const user = await factory.create('User')
    const response = await request(app)
      .post('/session')
      .send({
        email: user.email,
        password: user.password,
      })
    expect(response.body).toHaveProperty('token')
  })

  it('should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User')
    const response = await request(app)
    .get('/home')
    .set('Authorization', `Bearer ${user.generateToken()}`)
    expect(response.status).toBe(200)
  })

  it('should not be able to access private routes without jwt token', async () => {
    const user = await factory.create('User')
    const response = await request(app)
    .get('/home')
    expect(response.status).toBe(401)
  })
  it('should not be able to access private routes with invalid jwt token', async () => {
    const user = await factory.create('User')
    const response = await request(app)
    .get('/home')
    .set('Authorization', `Bearer sdf5641g6sd`)
    expect(response.status).toBe(401)
  })
})

