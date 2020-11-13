const usersRouter = require('express').Router();

const { getUsers, getUser, createUser } = require('../controllers/users.js');

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUser);

usersRouter.post('/', createUser);

module.exports = usersRouter;
