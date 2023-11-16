import {IncomingMessage, ServerResponse} from "http";
import {deleteCookie, getCookie, setCookie} from "cookies-next";
import {OptionsType} from "cookies-next/lib/types";

type FrontOptions = Omit<OptionsType, `req` | `res`>
type ServerOptionsGet = OptionsType & {
  req: IncomingMessage & {
    cookies?: {[key: string]: string} | Partial<{[key: string]: string}>
  }};
type ServerOptionsSet = ServerOptionsGet & {
  res: ServerResponse;
}

const CookieFront = {
  get: (key: string, options?: FrontOptions) => {
    return getCookie(key, options);
  },
  set: (key: string, data: any, options?: FrontOptions) => {
    return setCookie(key, data, options);
  },
  delete: (key: string, options?: FrontOptions) => {
    return deleteCookie(key, options);
  },
};

const CookieServer = {
  get: (key: string, options: ServerOptionsGet) => {
    return getCookie(key, options);
  },
  set: (key: string, data: any, options: ServerOptionsSet) => {
    return setCookie(key, data, options);
  },
  delete: (key: string, options: ServerOptionsSet) => {
    return deleteCookie(key, options);
  }
};

export {
  CookieFront,
  CookieServer,
};
