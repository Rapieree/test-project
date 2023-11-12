import {clsx} from "clsx";
import React from "react";
import {TPostJSON} from "../../../controllers/post/post.dto";
import PostPreview from "../post-preview/post-preview";
import postListStyle from "./post-list.module.css";

type TProps = {
  className?: string,
  posts: TPostJSON[],
}

const PostList: React.FC<TProps> = ({className, posts}) => {
  return (
    <ul className={clsx(postListStyle.list, className)}>
      {
        posts.map((post) => {
          return (
            <PostPreview key={post.id} post={post} />
          );
        })
      }
    </ul>
  );
};

export default PostList;
