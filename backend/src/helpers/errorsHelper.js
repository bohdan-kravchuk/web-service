export default class CustomError {
  constructor(status, message, errorCode, original) {
    this.status = status;
    this.errorCode = errorCode;
    this.message = message;
    this.originalError = original;
  }
}
