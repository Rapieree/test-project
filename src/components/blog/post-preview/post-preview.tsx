import {clsx} from "clsx";
import React from "react";
import {TPostJSON} from "../../../controllers/post/post.dto";
import PostHeader from "../post-header/post-header";
import postPreviewStyle from "./post-preview.module.css";

type TProps = {
  className?: string,
  post: TPostJSON,
}

const PostPreview: React.FC<TProps> = ({className, post}) => {
  const {title, content, createdAt, id} = post;

  return (
    <article className={clsx(postPreviewStyle.wrapper, className)}>
      <PostHeader post={post} className={clsx(postPreviewStyle.header)}/>
      <hr className={clsx(`hr`)}/>
      <p>{content}</p>
    </article>
  );
};

export default PostPreview;
