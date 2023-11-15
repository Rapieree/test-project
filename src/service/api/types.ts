export type TApiErrorData = {
  statusCode: number;
  message: string,
  data?: any,
}

export type TApiSuccessData<T> = {
  response: Response,
  statusCode: number,
  data: T,
}

export type TApiResult<T = unknown> = TApiErrorData | TApiSuccessData<T>;
