import {TApiErrorData} from "./types";

class ApiError extends Error {
  public readonly statusCode: number;
  public readonly response: Response | null;

  constructor(errorData: TApiErrorData, response?: Response) {
    const {message, name, statusCode} = errorData;

    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.response = response || null;
  }
}

export {
  ApiError,
};
