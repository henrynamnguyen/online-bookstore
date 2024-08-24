require('dotenv').config()
const mongoose = require('mongoose')

const conn = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://127.0.0.1/ecom',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
    )
    console.log('Connection SUCCEEDED')
  } catch (error) {
    console.error('Connection FAILED')
    process.exit(1)
  }
}

module.exports = {conn}
