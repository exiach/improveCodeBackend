const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const userShema = Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  codeSiss: { type: Number, required: true },
  ci: { type: Number, required: true },
  emal: { type: String, required: true }
});

const User = model('User', userShema);

module.exports = User;
