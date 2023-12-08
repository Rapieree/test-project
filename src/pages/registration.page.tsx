import {clsx} from "clsx";
import {GetStaticProps} from "next";
import React from "react";
import {SITE_URL} from "../../config";
import Layout, {TLayoutContent} from "../components/layout/layout";
import {PageRoute} from "../const/const";
import {createContent} from "../content/base-content";
import CustomForm from "../components/custom-form/custom-form";
import CustomInput from "../components/custom-input/custom-input";

const TITLE = `Главная`;
const DESCRIPTION = `Главная страница`;
const CANONICAL = `${SITE_URL}${PageRoute.MAIN}`;

type TProps = {
  content: {
    layout: TLayoutContent,
  },
}

const RegistrationPage: React.FC<TProps> = ({content}) => {
  const {layout} = content;

  return (
    <Layout title={TITLE} description={DESCRIPTION} canonical={CANONICAL} content={layout}>
      <div className={clsx(`container mrgt-middle`)}>
        <h1>Страница регистрации</h1>
        <CustomForm >
          <CustomInput label={`Логин`} placeholder={`saasss`}/>
        </CustomForm>
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

export default RegistrationPage;
