const bcrypt = require('bcrypt')
const {JWT} = require('../config/config')
const jwt = require('jsonwebtoken')

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, JWT.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

  const generateNewToken = user => {
    return jwt.sign({id: user._id}, JWT.jwt, {
      expiresIn: JWT.jwtExp,
    })
  }

  const checkPassword = (password, hash) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (err, same) => {
        if (err) {
          reject(err)
        }
  
        resolve(same)
      })
    })
  }

module.exports = {verifyToken, generateNewToken, checkPassword}