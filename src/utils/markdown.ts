import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import {unified} from "unified";

const markdownToHtml = async (text: string, isSanitizeHtml = true) => {
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHtml, {sanitize: isSanitizeHtml})
    .process(text);

  return html.toString();
};

export {
  markdownToHtml,
};
