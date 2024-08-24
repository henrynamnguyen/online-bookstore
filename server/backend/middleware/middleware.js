const User = require('../models/User')
const {verifyToken} = require('../utils/utility')

const injectRespError = (statusCode, msg, res) => {
  res.status(statusCode || 400).send(!!msg ? msg : 'Invalid input !!')
}

const verifyUser = async (req, res, next) => {
  const {authorization} = req.headers
  if (!authorization) {
    injectRespError(400, 'You are not authorized ', res)
    return
  } else if (!authorization.startsWith('Bearer ')) {
    injectRespError(400, 'You are not authorized ', res)
    return
  }

  try {
    const payload = await verifyToken(authorization.split(' ')[1])
    console.log(payload)
    if (payload) {
      const user = await User.findById(payload.id, {password: 0})

      req['user'] = user

      next()
    } else {
      injectRespError(400, `you are not authorizeed`, res)
    }
  } catch (err) {
    console.log('Error ', err)
    injectRespError(400, `Error ${err}`, res)
  }
}

module.exports = {
  injectRespError,
  verifyUser,
}
