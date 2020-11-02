const cardsRouter = require('express').Router();
const { getCards } = require('../controllers/cards.js');

cardsRouter.get('/', getCards);

module.exports = cardsRouter;
