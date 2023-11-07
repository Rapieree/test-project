import {TApiErrorData} from "./types";

class ApiError extends Error {
  public readonly statusCode: number;
  public readonly response: Response | null;
  public readonly data?: any;

  constructor(errorData: TApiErrorData, response?: Response) {
    const {message, statusCode, data} = errorData;

    super(message);
    this.statusCode = statusCode;
    this.response = response || null;
    this.data = data;
  }

  static internalServerError(message: string = `Internal server error`) {
    return new ApiError({
      statusCode: 500,
      message,
    });
  }

  static badRequest(message: string, data?: any, res?: Response) {
    return new ApiError({
      statusCode: 400,
      message,
      data,
    }, res);
  }
}

export {
  ApiError,
};
