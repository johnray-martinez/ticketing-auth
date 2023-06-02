import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  reason = 'Destination not found';
  statusCode = 404;

  constructor() {
    super('Destination not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  } 

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}
