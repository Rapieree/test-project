import {GetStaticProps} from "next";
import React from "react";
import {SITE_URL} from "../../config";
import Layout, {TLayoutContent} from "../components/layout/layout";
import {navLinks, PageRoute} from "../const/const";

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
      <h1>hao</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<TProps> = async () => {
  return {
    props: {
      content: {
        layout: {
          header: {
            navLinks,
          }
        }
      },
    }
  };
};

export default Home;
