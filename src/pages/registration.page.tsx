import {clsx} from "clsx";
import {GetStaticProps} from "next";
import React, {useCallback} from "react";
import {SITE_URL} from "../../config";
import CustomButton from "../components/custom-button/custom-button";
import CustomForm from "../components/custom-form/custom-form";
import CustomInput from "../components/custom-input/custom-input";
import Layout, {TLayoutContent} from "../components/layout/layout";
import {PageRoute} from "../const/const";
import {createContent} from "../content/base-content";
import {userApi} from "../controllers/user/user.api";
import {TRegistrationData} from "../controllers/user/user.types";
import registrationPageStyle from "../styles/registration-page.module.css";

const TITLE = `Главная`;
const DESCRIPTION = `Главная страница`;
const CANONICAL = `${SITE_URL}${PageRoute.MAIN}`;

type TProps = {
  content: {
    layout: TLayoutContent,
  },
}

const RegistrationForm: React.FC = () => {
  const onSubmit = useCallback(async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;

    const formData: TRegistrationData = {
      name: (form.elements.namedItem(`name`) as HTMLInputElement)?.value || ``,
      email: form.email.value,
      password: form.password.value,
      username: form.username.value,
    };

    const [error, user] = await userApi.registration(formData);

    let resultMessage;
    if (error) {
      resultMessage = error.message;
    } else {
      resultMessage = JSON.stringify(user, null, 2);
    }

    // eslint-disable-next-line no-alert
    alert(resultMessage);
  }, []);

  return (
    <CustomForm className={clsx(registrationPageStyle.registerForm)} onSubmit={onSubmit}>
      <CustomInput name={`name`} type={`text`} label={`Имя`} placeholder={`Иван`} />
      <CustomInput name={`username`} type={`text`} label={`Ник`} placeholder={`username`} />
      <CustomInput name={`email`} type={`email`} label={`Емейл`} placeholder={`email@mail.ru`} />
      <CustomInput name={`password`} type={`password`} label={`Пароль`} placeholder={`••••••••`} />

      <CustomButton>Регистрация</CustomButton>
    </CustomForm>
  );
};

const RegistrationPage: React.FC<TProps> = ({content}) => {
  const {layout} = content;

  return (
    <Layout title={TITLE} description={DESCRIPTION} canonical={CANONICAL} content={layout}>
      <div className={clsx(`container mrgt-middle`)}>
        <h1 className={clsx(`mrgb-low`)}>Страница регистрации</h1>
        <RegistrationForm />
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
