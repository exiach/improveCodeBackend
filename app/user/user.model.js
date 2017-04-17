const mongoose = require('mongoose');
const Schema = mongoose.Shema;
const model = mongoose.model;

const userShema = Shema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  codeSiss: { type: Number, required: true },
  ci: { type: Number, required: true },
  emal: { type: String, required: true }
});

const User = model('User', userShema);

module.export = User;
