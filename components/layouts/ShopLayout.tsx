import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  pageDescription: string;
  imageFullURL?: string;
}

export const ShopLayout: FC<Props> = ({
  children,
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

      {/* <Sidebar/> */}

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
