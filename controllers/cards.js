const path = require('path');

const readFile = require('../utils/read-file');

const pathToData = path.join(__dirname, '..', 'data', 'cards.json');

module.exports.getCards = (req, res) => {
  readFile(pathToData)
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ error: 'Ошибка чтения файла' });
    });
};
