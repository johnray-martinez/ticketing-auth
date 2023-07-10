import { CustomError } from "./custom-error";

export class UnathorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Unauthorized access. Contact your administrator.');

    Object.setPrototypeOf(this, UnathorizedError.prototype);
  }

  serializeErrors() {
    return [
      { message: this.message }
    ]    
  }
}