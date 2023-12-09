import {clsx} from "clsx";
import {GetStaticProps} from "next";
import React from "react";
import {SITE_URL} from "../../config";
import CustomButton from "../components/custom-button/custom-button";
import CustomForm from "../components/custom-form/custom-form";
import CustomInput from "../components/custom-input/custom-input";
import Layout, {TLayoutContent} from "../components/layout/layout";
import {PageRoute} from "../const/const";
import {createContent} from "../content/base-content";
import registrationPageStyle from "../styles/registration-page.module.css";

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
        <h1 className={clsx(`mrgb-low`)}>Страница регистрации</h1>
        <CustomForm className={clsx(registrationPageStyle.registerForm)}>
          <CustomInput type={`text`} label={`Имя`} placeholder={`Иван`} />
          <CustomInput type={`text`} label={`Ник`} placeholder={`username`} />
          <CustomInput type={`email`} label={`Емейл`} placeholder={`email@mail.ru`} />
          <CustomInput type={`password`} label={`Пароль`} placeholder={`••••••••`} />

          <CustomButton>Регистрация</CustomButton>
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
