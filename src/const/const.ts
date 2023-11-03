import {TLink} from "./const.types";

export enum PageRoute {
  MAIN = `/`,
  ABOUT = `/about`,
}

export const navLinks: TLink[] = [{
  name: `Главная`,
  url: PageRoute.MAIN,
}];
