const path = require('path');

const readFile = require('../utils/read-file');

const pathToData = path.join(__dirname, '..', 'data', 'users.json');

module.exports.getUsers = (req, res) => {
  readFile(pathToData)
    .then((data) => res.status(200).send(data))
    .catch(() => {
      res.status(500).send({ error: 'Запрашиваемый файл не найден' })
    });
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;
  readFile(pathToData)
    .then((data) => {
      const user = data.users.find((item) => item._id === id);
      if (!user) {
        res.status(404).send({ error: 'Нет пользователя с таким id' });
      }
      res.status(200).send(user);
    })
    .catch(() => {
      res.status(500).send({ error: 'Запрашиваемый файл не найден' });
    });
};
