const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const auth = async (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not provided'
    })
  }
  const [, token] = authorization.split(' ')
  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_JWT_SECRET)
    req.userId = decoded.id
    return next()
  } catch (e) {
    return res.status(401).json({
      message: 'Token invalid'
    })
  }
}

module.exports = auth