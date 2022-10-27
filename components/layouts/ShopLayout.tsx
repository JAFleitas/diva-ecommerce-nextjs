import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar, SideMenu } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
  imageFullURL?: string;
}

export const ShopLayout: FC<PropsWithChildren<Props>> = ({
  
  title,
  pageDescription,
  imageFullURL,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullURL && <meta name="og:image" content={imageFullURL} />}
      </Head>
      <nav>
        <Navbar />
      </nav>

      <SideMenu />

      <main
        style={{
          margin: "80px auto",
          padding: "0px 30px",
          maxWidth: "1440px",
        }}
      >
        {children}
      </main>

      <footer>{/* <Footer/> */}</footer>
    </>
  );
};
