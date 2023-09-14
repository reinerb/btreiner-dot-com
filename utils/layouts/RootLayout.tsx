import Head from "next/head";
import React from "react";
import Header from "../components/RootLayout/Header";
import Footer from "../components/RootLayout/Footer";
import { twMerge } from "tailwind-merge";
import { Inter, Saira } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const saira = Saira({ subsets: ["latin"], variable: "--font-saira" });

type RootLayoutProps = {
  title: string;
  metaDescription?: string;
  children: React.ReactNode;
  noContainer?: boolean;
  noHeader?: boolean;
  noFooter?: boolean;
  className?: string;
};

function RootLayout({
  title,
  metaDescription,
  children,
  noContainer,
  className,
}: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div
        className={`grid-rows-root grid-cols-root grid min-h-screen ${inter.className} ${saira.variable}`}
      >
        <Header />
        {noContainer ? (
          <main className={twMerge("row-span-2", className)}>{children}</main>
        ) : (
          <div className="row-span-2 flex justify-center">
            <main className={twMerge("container m-4", className)}>
              {children}
            </main>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
