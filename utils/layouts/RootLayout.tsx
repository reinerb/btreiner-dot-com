import Head from "next/head";
import React from "react";
import Header from "../components/RootLayout/Header";
import Footer from "../components/RootLayout/Footer";

type RootLayoutProps = {
  title: string;
  metaDescription?: string;
  children: React.ReactNode;
};

function RootLayout({ title, metaDescription, children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="grid-rows-root-layout grid min-h-screen">
        <Header />
        <div className="flex justify-center">
          <main className="container m-2">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
