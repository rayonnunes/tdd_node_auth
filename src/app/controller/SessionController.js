const { User } = require('../models')
const bcrypt = require('bcrypt')

class SessionController {
  async store(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user){
      return res.status(400).json({
        message: 'Email not found!'
      })
    }
    const checkPassword = await user.checkPassword(password)
    if (!checkPassword) {
      return res.status(400).json({
        message: 'Incorrect password!'
      })
    }
    return res.status(200).json({
      user,
      token: user.generateToken(),
    })
  }
}
module.exports = new SessionController();