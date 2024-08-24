const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const {injectRespError} = require('../middleware/middleware')
const {checkPassword, generateNewToken} = require('../utils/utility')

const signUpUser = async (req, res) => {
  const {email, fullName, password} = req.body
  try {
    const hash = await bcrypt.hash(password, 8)

    await User.create({...req.body, password: hash})
    res.status(201).send('Sucessfully account opened ')
    return
  } catch (err) {
    console.log('Eorror : ', err)
    injectRespError(500, 'Sign up failed. Please try again', res)
    return
  }
}

const signInUser = async (req, res) => {
  const {password, email} = req.body
  console.log(req.body)
  try {
    const user = await User.findOne({email})
    if (!!!user) {
      injectRespError(400, 'Please sign up before signing in', res)
    }

    const passwordMatched = await checkPassword(password, user.password)
    if (passwordMatched) {
      let token = generateNewToken(user)
      res.status(200).send({status: 'ok', token})
      return
    }
    injectRespError(400, 'InValid password !', res)
  } catch (err) {
    console.log('EROR', err)
    injectRespError(500, `Error ${err}`, res)
  }
}

const getUser = async (req, res) => {
  res.status(200).send({user: req.user})
}
module.exports = {signUpUser, signInUser, getUser}