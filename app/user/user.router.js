const userRouter = require('express').Router();
const user = require('./user.controller.js');

userRouter.post('/', user.createUser);

module.exports = userRouter;
