import {clsx} from "clsx";
import React from "react";
import {TPostWithHtml} from "../../../controllers/post/post.dto";
import markdownStyle from "../../../styles/markdown.module.css";
import PostHeader from "../post-header/post-header";
import postPreviewStyle from "./post-preview.module.css";

type TProps = {
  className?: string,
  post: TPostWithHtml,
}

const PostPreview: React.FC<TProps> = ({className, post}) => {
  const {contentHtml} = post;

  return (
    <article className={clsx(postPreviewStyle.wrapper, className)}>
      <PostHeader post={post} className={clsx(postPreviewStyle.header)}/>
      <hr className={clsx(`hr`)}/>
      <div className={clsx(markdownStyle.markdown, markdownStyle.markdownPreview)} dangerouslySetInnerHTML={{__html: contentHtml}}></div>
    </article>
  );
};

export default PostPreview;
