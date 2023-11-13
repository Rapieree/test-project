import {clsx} from "clsx";
import Link from "next/link";
import React from "react";
import {PageRoute} from "../../../const/const";
import {TPostJSON} from "../../../controllers/post/post.dto";
import postHeaderStyle from "./post-header.module.css";

type TProps = {
  className?: string,
  post: TPostJSON,
}

const createPostLink = (postId: string | number) => {
  return `${PageRoute.POST}/${postId}`;
};

const PostHeader: React.FC<TProps> = ({className, post}) => {
  const {id, title, createdAt} = post;

  return (
    <header className={clsx(postHeaderStyle.wrapper, className)}>
      <Link className={clsx(`link`, postHeaderStyle.link)} href={createPostLink(id)}>{title}</Link>
      <p className={clsx(postHeaderStyle.createdDate)}>{new Date(createdAt).toLocaleString()}</p>
    </header>
  );
};

export default PostHeader;
