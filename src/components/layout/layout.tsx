import Head from "next/head";
import React from "react";
import Header, {THeaderContent} from "../header/header";

type TLayoutContent = {
  header: THeaderContent,
}

type TProps = {
  responsive?: boolean,
  children?: React.ReactNode,
  title: string,
  description: string,
  canonical: string,
  content: TLayoutContent,
}

const Layout: React.FC<TProps> = ({children, title, description, responsive = true, canonical, content}) => {
  const {header} = content;

  return (
    <>
      <Head>
        <title>{title}</title>
        {responsive
          ? <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          : <meta name="viewport" content="width=1024, initial-scale=0.3" />
        }
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        { canonical ? <link rel="canonical" href={canonical} /> : null}
      </Head>

      <Header content={header}/>

      <main>
        {children}
      </main>
    </>
  );
};

export type {
  TLayoutContent,
};

export default Layout;
