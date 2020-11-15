class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    console.log('in constructor');
  }
}

module.exports = CustomError;
