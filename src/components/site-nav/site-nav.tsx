import {clsx} from "clsx";
import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";
import {TLink} from "../../const/const.types";
import siteNavStyle from "./site-nav.module.css";

type TProps = {
  className?: string,
  links: TLink[],
}

const SiteNav: React.FC<TProps> = ({className, links = []}) => {
  const {pathname} = useRouter();

  return (
    <nav className={clsx(siteNavStyle.navigation, className)}>
      <ul className={clsx(siteNavStyle.list)}>
        {
          links.map(({url, name}) => {
            return (
              <li className={clsx(siteNavStyle.item, pathname === url && siteNavStyle.itemActive)} key={url + name}>
                <Link className={clsx(siteNavStyle.link)} href={url} passHref>{name}</Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

export default SiteNav;
