const { factory } = require('factory-girl')
const chance = require('chance').Chance()

const { User } = require('../src/app/models')

factory.define('User', User, {
  name: chance.name(),
  email: chance.email(),
  password: chance.string(),
})

module.exports = factory;
