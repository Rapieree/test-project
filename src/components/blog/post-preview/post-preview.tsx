import {clsx} from "clsx";
import React from "react";
import {TPostJSON} from "../../../controllers/post/post.dto";
import postPreviewStyle from "./post-preview.module.css";

type TProps = {
  className?: string,
  post: TPostJSON,
}

const PostPreview: React.FC<TProps> = ({className, post}) => {
  const {title, content, createdAt} = post;

  return (
    <article className={clsx(postPreviewStyle.wrapper, className)}>
      <p>{title}</p>
      <p>{content}</p>
      <p>{createdAt}</p>
    </article>
  );
};

export default PostPreview;
