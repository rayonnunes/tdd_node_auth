const routes = require('express').Router()
const SessionController = require('./app/controller/SessionController')
routes.post('/session',  SessionController.store)

module.exports = routes