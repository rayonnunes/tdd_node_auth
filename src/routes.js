const routes = require('express').Router()
const SessionController = require('./app/controller/SessionController')
const authMiddleware = require('./app/middleware/auth')

routes.post('/session',  SessionController.store)

routes.use(authMiddleware)

routes.get('/home', (req, res) => {
  return res.status(200).send()
})

module.exports = routes