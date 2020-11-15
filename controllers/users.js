const User = require('../models/user');
const { CustomError } = require('../errors/CustomError');
const { sendError } = require('../errors');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;
  console.log('req.params', req.params, typeof (req.params));
  console.log('req.user._id', req.user._id, typeof (req.user._id));
  console.log('id', id, typeof (id));
  User.findById(id)
    .orFail(() => { throw new CustomError(404, 'Нет пользователя с таким id'); })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      // sendError(err, res);
      console.log('err: ', err);
      if (err.kind === 'ObjectId') {
        res.status(400).send({ message: 'id не удовлетворяет условиям' });
      } else if (err.status === 404) {
        res.status(err.status).send({ message: err.message });
      } else if (err.name === 'ValidationError') {
        const allErr = Object.values(err.errors);
        res.status(400).send({ message: allErr.reduce(((allMessage, item) => allMessage + ((allMessage === '') ? '' : '; ') + item.message), '') });
      } else {
        res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
