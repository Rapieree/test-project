import {clsx} from "clsx";
import {GetServerSideProps} from "next";
import React from "react";
import joi from "types-joi";
import {SITE_URL} from "../../../config";
import PostList from "../../components/blog/post-list/post-list";
import Layout, {TLayoutContent} from "../../components/layout/layout";
import {PageRoute} from "../../const/const";
import {createContent} from "../../content/base-content";
import {PostDto, TPostWithHtml} from "../../controllers/post/post.dto";
import {postService} from "../../controllers/post/post.service";
import {validate} from "../../service/api/validation";
import {markdownToHtml} from "../../utils/markdown";
import {handlePromise, log} from "../../utils/utils";

const TITLE = `Блог`;
const DESCRIPTION = `Страница блога`;
const CANONICAL = `${SITE_URL}${PageRoute.BLOG}`;

type TProps = {
  content: {
    layout: TLayoutContent,
    posts: TPostWithHtml[],
  },
  canonical: string,
};

const BlogPage: React.FC<TProps> = ({content, canonical}) => {
  const {layout, posts} = content;

  return (
    <Layout title={TITLE} description={DESCRIPTION} canonical={canonical} content={layout}>
      <div className={clsx(`container mrgt-middle mrgb-middle`)}>
        <PostList posts={posts} />
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

  const [findingError, posts] = await handlePromise(postService.find());

  if (findingError) {
    return {
      notFound: true,
    };
  }

  const postsJson = posts.map((post) => PostDto.toJSON(post));

  const [error, postsWithHtml] = await handlePromise(Promise.all(postsJson.map(async (post) => {
    const html = await markdownToHtml(post.content);

    return {...post, contentHtml: html};
  })));

  if (error) {
    log(error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: createContent(true, {
        posts: postsWithHtml,
      }),
      canonical: `${CANONICAL}/${page}`,
    },
  };
};

export default BlogPage;
