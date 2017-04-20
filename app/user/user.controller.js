const User = require('./user.model.js');

function createUser(req, res) {
  User.create(req.body.userData)
    .then(function(result) {
      res.status(201).send('User is created.');
    }).catch(function(error) {
      res.status(500).send('User is not created');
    });
}
 module.exports = {
   createUser: createUser
 };
