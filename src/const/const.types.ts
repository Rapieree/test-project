export type TLink = {
  name: string,
  url: string,
}

export type RC<TResult = unknown, TError = Error> = [TError, null] | [null, TResult];
