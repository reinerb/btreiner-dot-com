import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { twMerge } from "tailwind-merge";
import { Inter, Saira } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const saira = Saira({ subsets: ["latin"], variable: "--font-saira" });

type RootLayoutProps = {
  title: string;
  metaDescription?: string;
  children: React.ReactNode;
  activeNav: "home" | "portfolio" | "about" | "contact";

  className?: string;
};

function RootLayout({
  title,
  metaDescription,
  children,

  activeNav,
  className,
}: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div
        className={`grid-rows-root-mobile md:grid-rows-root-desktop md:grid-cols-root grid h-screen ${inter.className} ${saira.variable}`}
      >
        <Header
          activeNav={activeNav}
          className="bg-slate-200 dark:bg-slate-800"
        />
        <main
          className={twMerge(
            "m-4 md:row-span-2 md:m-0 md:h-screen md:overflow-y-auto md:p-4",
            className,
          )}
        >
          {children}
        </main>
        <Footer className="bg-slate-200 dark:bg-slate-800" />
      </div>
    </>
  );
}

export default RootLayout;
