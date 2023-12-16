import {TLink} from "./const.types";

export enum PageRoute {
  MAIN = `/`,
  TELEGRAM_AUTH = `/telegram/auth`,
  TELEGRAM_FEATURES = `/telegram/features`,
  BLOG = `/blog`,
  POST = `/post`,
  REGISTRATION = `/registration`,
}

export enum ApiRoute {
  USER = `api/user`,
  USER_ACTIVATION = `/api/user/activation`,
  USER_REGISTRATION = `/api/user/registration`,
  PUSHER_AUTH = `api/pusher-auth`,
  TELEGRAM_AUTH = `/api/telegram/auth`,
  TELEGRAM_SEND_MESSAGE = `/api/telegram/send-message`,
  REGISTRATION = `/api/registration`,
}

export const navLinks: TLink[] = [{
  name: `Главная`,
  url: PageRoute.MAIN,
}, {
  name: `Авторизация`,
  url: PageRoute.TELEGRAM_AUTH,
}, {
  name: `Фичи`,
  url: PageRoute.TELEGRAM_FEATURES,
}, {
  name: `Блог`,
  url: PageRoute.BLOG,
}];
