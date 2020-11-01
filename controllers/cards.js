/* eslint-disable linebreak-style */
const path = require('path');

const readFile = require('../utils/read-file');

const pathToData = path.join(__dirname, '..', 'data', 'cards.json');

module.exports.getCards = (req, res) => {
  readFile(pathToData)
    .then(data => res.send(data))
    .catch((err) => {
      res.status(404).send({ error: 'cards Запрашиваемый ресурс не найден' })
    });
};
