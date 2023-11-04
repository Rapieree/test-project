import {clsx} from "clsx";
import {GetStaticProps} from "next";
import React from "react";
import {SITE_URL} from "../../config";
import Layout, {TLayoutContent} from "../components/layout/layout";
import TelegramAuthForm from "../components/telegram-auth-form/telegram-auth-form";
import {PageRoute} from "../const/const";
import {createContent} from "../content/base-content";

const TITLE = `Главная`;
const DESCRIPTION = `Главная страница`;
const CANONICAL = `${SITE_URL}${PageRoute.MAIN}`;

type TProps = {
  content: {
    layout: TLayoutContent,
  },
}

const Home: React.FC<TProps> = ({content}) => {
  const {layout} = content;

  return (
    <Layout title={TITLE} description={DESCRIPTION} canonical={CANONICAL} content={layout}>
      <div className={clsx(`container`)}>
        <h1>hao</h1>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<TProps> = async () => {
  return {
    props: {
      content: createContent(true),
    }
  };
};

export default Home;
