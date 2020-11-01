const express = require('express');
const path = require('path');

const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // теперь клиент имеет доступ только к публичным файлам

app.use('/', cardsRouter);

app.use('*', (req, res) => {
  res.status(404).send({ message: '!Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
