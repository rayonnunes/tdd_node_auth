require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const express = require('express')
const routes = require('./routes')

class AppController { 
  routes() {
    this.express.use(routes)
  }

  middlewares() {
    this.express.use(express.json())
  }

  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }
}

module.exports = new AppController().express