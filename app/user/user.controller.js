const User = require('./user.model.js');

function createUser(req, res) {
  console.log(req.body.userData);
  User.create(req.body.userData)
    .then(function(result) {
      res.status(201).send('User is created.');
    }).catch(function(error) {
      console.log(error);
    });
}
 module.exports = {
   createUser: createUser
 };
