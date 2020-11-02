const usersRouter = require('express').Router();

const { getUsers, getUser } = require('../controllers/users.js');

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUser);

module.exports = usersRouter;
