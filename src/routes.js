const routes = require('express').Router()
const { User } = require('./app/models')

User.create({
  name: "Rayon",
  email: "rayonnunes@hotmail.com",
  password_hash: "123456"
})

module.exports = routes