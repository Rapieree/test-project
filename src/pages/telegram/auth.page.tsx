import {clsx} from "clsx";
import {GetStaticProps} from "next";
import React from "react";
import {SITE_URL} from "../../../config";
import Layout, {TLayoutContent} from "../../components/layout/layout";
import TelegramAuthForm from "../../components/telegram-auth-form/telegram-auth-form";
import {PageRoute} from "../../const/const";
import {createContent} from "../../content/base-content";

const TITLE = `Телеграм авторизация`;
const DESCRIPTION = `Телеграм авторизация`;
const CANONICAL = `${SITE_URL}${PageRoute.TELEGRAM_AUTH}`;

type TProps = {
  content: {
    layout: TLayoutContent,
  },
}

const TelegramAuthPage: React.FC<TProps> = ({content}) => {
  const {layout} = content;

  return (
    <Layout title={TITLE} description={DESCRIPTION} canonical={CANONICAL} content={layout}>
      <div className={clsx(`container mrgt-middle`)}>
        <TelegramAuthForm/>
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

export default TelegramAuthPage;
