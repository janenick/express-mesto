const express = require('express');
const path = require('path');

const usersRouter = require('./routers/users.js');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // теперь клиент имеет доступ только к публичным файлам 

app.use('/', usersRouter);

app.use('*', (req, res) => {
  res.status(404).send({ error: 'Нет пути' });
});
app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
 