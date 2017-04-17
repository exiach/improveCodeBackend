const userRouter = require('express').Router();
const user = require('./user.controller.js');

userRouter.get('/', user.createUser);

module.exports = userRouter;
