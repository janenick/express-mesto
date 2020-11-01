const path = require('path');

const readFile = require('../utils/read-file');

const pathToData = path.join(__dirname, '..', 'data', 'users.json');

module.exports.getUsers = (req, res) => {
  readFile(pathToData)
    .then(data => res.send(data))
    .catch((err) => {
      res.status(404).send({ error: 'Запрашиваемый ресурс не найден' })
    });
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;
  readFile(pathToData)
    .then(data => {
      const user = data.users.find(item => {
        return item._id === id;
      });
      if (!user) {
        res.status(404).send({ error: 'Нет пользователя с таким id' })
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(404).send({ error: 'Запрашиваемый ресурс не найден' })
    });
  };