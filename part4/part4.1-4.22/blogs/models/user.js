const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  username: {
      type:String,
      unique:true,
      minLength:3
  },
  name: String,
  passwordHash: {
    type:String,
    minLength:3
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'blogs'
    }
  ],
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})
userSchema.plugin(uniqueValidator)
const User = mongoose.model('users', userSchema)

module.exports = User