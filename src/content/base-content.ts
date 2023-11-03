import {TLayoutContent} from "../components/layout/layout";
import {navLinks} from "../const/const";

const layoutContent: TLayoutContent = {
  header: {
    navLinks,
  }
};

type TContentResult<TWithLayout extends boolean, TContent extends Record<string, unknown>> = TWithLayout extends true
  ? TLayoutContent & TContent
  : TContent;

export const createContent = <TWithLayout extends boolean, TContent extends Record<string, unknown>>(withLayout: TWithLayout, content: TContent | {} = {}) => {
  return {
    ...(withLayout ? {layout: layoutContent} : {}),
    ...content,
  } as TContentResult<TWithLayout, TContent>;
};
