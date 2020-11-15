const sendError = (err, res) => {
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
};

module.exports = sendError;
