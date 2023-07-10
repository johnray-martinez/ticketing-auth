import { CustomError } from "./custom-error";

export class MissingCredentialsError extends CustomError {
  statusCode = 500;

  constructor(public message: string) {
    super(message);

      Object.setPrototypeOf(this, MissingCredentialsError.prototype);
  }

  serializeErrors() {
    return [
      { message: this.message }
    ]
  }
}