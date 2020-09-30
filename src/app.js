const express = require('express')

class AppController { 
  routes() {
    this.express.use(require('./routes'))
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