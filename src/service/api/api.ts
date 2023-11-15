/* global RequestInit */

import {handlePromise} from "../../utils/utils";
import {ApiError} from "./error";
import {TApiErrorData, TApiSuccessData} from "./types";

enum ApiMethod {
  GET = `GET`,
  // POST = `POST`,
  // PATCH = `PATCH`,
  // PUT = `PUT`,
  // DELETE = `DELETE`,
  // OPTIONS = `OPTIONS`,
  // HEAD = `HEAD`,
  // CONNECT = `CONNECT`,
}

enum ApiParser {
  JSON = `json`,
  TEXT = `text`,
}

type TApiOptions = {
  rootUrl?: string,
}

type TRequestOptions<TParams extends Record<string, unknown>> = Omit<RequestInit, `method`> & {
  method: ApiMethod,
  parser: ApiParser,
  params?: TParams,
};

const createUrl = (url: string, params?: Record<string, any>) => {
  return url + (params ? `?${new URLSearchParams(params)}` : ``);
};

const parseResult = async (response: Response, parser: ApiParser) => {
  switch (parser) {
    case ApiParser.JSON: {
      return await response.json();
    }
    case ApiParser.TEXT: {
      return await response.text();
    }
    default:
      return null;
  }
};

const request = async <TResult = unknown, TParams extends Record<string, unknown> = any>(url: string, requestOptions: TRequestOptions<TParams>): Promise<TApiSuccessData<TResult>> => {
  const {method, parser, params = ``, ...requestInit} = requestOptions;
  const _url = createUrl(url, params || undefined);

  const [error, response] = await handlePromise(fetch(_url, {
    ...requestInit,
    method,
  }));

  if (error) {
    throw error;
  }

  const result = await parseResult(response, parser);

  if (!response.ok) {
    const errorData = result.error as TApiErrorData;

    throw new ApiError(errorData, response);
  }

  return {
    data: result,
    response,
    statusCode: response.status,
  };
};

class Api {
  private readonly _baseUrl: string;

  constructor(options: TApiOptions = {}) {
    this._baseUrl = options.rootUrl || ``;
  }

  async get<TParams extends Record<string, any>, TResult = unknown>(url: string | null = null, params?: TParams, options?: Omit<TRequestOptions<any>, `params` | `method` | `parser`>) {
    return await request<TResult>(`${this._baseUrl}${url || ``}`, {
      ...options,
      params,
      method: ApiMethod.GET,
      parser: ApiParser.JSON,
    });
  }
}

export {
  Api,
  ApiMethod,
  ApiParser,
};
