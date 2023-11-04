import {TLink} from "./const.types";

export enum PageRoute {
  MAIN = `/`,
  TELEGRAM_AUTH = `/telegram/auth`,
  TELEGRAM_FEATURES = `/telegram/features`,
}

export enum ApiRoute {
  PUSHER_AUTH = `api/pusher-auth`,
  TELEGRAM_AUTH = `/api/telegram/auth`,
  TELEGRAM_SEND_MESSAGE = `/api/telegram/send-message`,
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
}];
