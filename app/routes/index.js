const router = require('express').Router();

const user = require('../user/user.router.js');

router.use('/user', user);

module.exports = router;
