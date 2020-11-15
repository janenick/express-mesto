const Card = require('../models/card');
const CustomError = require('../utils/utils');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('user')
    .then((cards) => {
      console.log(cards);
      res.send(cards);
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  console.log(req.user._id); // _id станет доступен
  const { name, link } = req.body;
  console.log('req.body', req.body);

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.deleteCard = (req, res) => {
  const { id } = req.params;
  console.log('del card with id', id);
  Card.findByIdAndRemove(id)
    .orFail(() => { throw new CustomError(404, 'Нет карточки с таким id'); })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(400).send({ message: 'id не удовлетворяет условиям' });
      } else if (err.status === 404) {
        res.status(err.status).send({ message: err.message });
      } else {
        res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
      }
    });
};
