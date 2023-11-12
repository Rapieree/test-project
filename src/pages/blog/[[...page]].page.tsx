import {clsx} from "clsx";
import {GetServerSideProps} from "next";
import React from "react";
import joi from "types-joi";
import {SITE_URL} from "../../../config";
import PostList from "../../components/blog/post-list/post-list";
import Layout, {TLayoutContent} from "../../components/layout/layout";
import {PageRoute} from "../../const/const";
import {createContent} from "../../content/base-content";
import {PostDto, TPostJSON} from "../../controllers/post/post.dto";
import {postService} from "../../controllers/post/post.service";
import {validate} from "../../service/api/validation";
import {handlePromise, log} from "../../utils/utils";

const TITLE = `Блог`;
const DESCRIPTION = `Страница блога`;
const CANONICAL = `${SITE_URL}${PageRoute.BLOG}`;
const MAX_POSTS = 20;

type TProps = {
  content: {
    layout: TLayoutContent,
    posts: TPostJSON[],
  },
};

const BlogPage: React.FC<TProps> = ({content}) => {
  const {layout, posts} = content;

  return (
    <Layout title={TITLE} description={DESCRIPTION} canonical={CANONICAL} content={layout}>
      <div className={clsx(`container`)}>
        {
          <PostList posts={posts} />
        }
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<TProps, {page?: string}> = async ({params}) => {
  let page = params?.page || 1;

  const {value, error: validationError} = validate(joi.number().min(1).positive().required(), Number(page), {convert: true});

  if (validationError) {
    log(validationError);
    return {
      notFound: true,
    };
  }

  page = value;

  log(page);
  const [error, posts] = await handlePromise(postService.find());

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: createContent(true, {
        posts: posts?.map((post) => PostDto.toJSON(post)),
      }),
      canonical: `${CANONICAL}/{}`
    },
  };
};

export default BlogPage;
