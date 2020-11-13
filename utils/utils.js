const isUrlValid = (str) => {
  const regexUrl = /^(https?:\/\/(www\.)?)[\w-]+\.[\w./():,-]+#?$/; // шаблон для проверки адреса Url
  return regexUrl.test(str);
};

module.exports = {
  isUrlValid,
};
