const mongoose = require('mongoose');

const userShema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  codeSiss: { type: Number, required: true },
  ci: { type: Number, required: true },
  email: { type: String, required: true }
});

const User = mongoose.model('User', userShema);

module.exports = User;
