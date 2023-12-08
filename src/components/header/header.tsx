import {clsx} from "clsx";
import Link from "next/link";
import React from "react";
import {PageRoute} from "../../const/const";
import {TLink} from "../../const/const.types";
import SiteNav from "../site-nav/site-nav";
import headerStyle from "./header.module.css";

type THeaderContent = {
  navLinks: TLink[],
}

type TProps = {
  className?: string,
  content: THeaderContent,
}

const Header: React.FC<TProps> = ({className, content}) => {
  const {navLinks} = content;

  return (
    <header className={clsx(`container`, headerStyle.header, className)}>
      <SiteNav links={navLinks} />

      <div className={clsx(headerStyle.userNav)}>
        <Link href={PageRoute.REGISTRATION} className={clsx(headerStyle.userNavRegLink)}>
          Регистрация
        </Link>
      </div>
    </header>
  );
};

export type {
  THeaderContent,
};

export default Header;
