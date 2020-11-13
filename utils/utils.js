const isUrlValid = (str) => {
  const regexUrl = /^https?:\/\/[w{3}\.]?[-\w]{1,}\.[A-Za-z]{2,3}/; // шаблон для проверки адреса Url
  return regexUrl.test(str);
};

module.exports = {
  isUrlValid,
};
