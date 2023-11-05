export type TApiErrorData = {
  statusCode: number;
  name: string;
  message: string,
}

export type TApiSuccessData<T> = {
  response: Response,
  statusCode: number,
  data: T,
}

export type TApiResult<T = unknown> = TApiErrorData | TApiSuccessData<T>;
