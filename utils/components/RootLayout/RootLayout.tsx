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
  noSidebar?: boolean;
  className?: string;
};

function RootLayout({
  title,
  metaDescription,
  children,
  noSidebar,
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
        className={twMerge(
          `relative h-screen ${inter.className} ${saira.variable}`,
          !noSidebar &&
            "grid grid-rows-root-mobile md:grid-cols-root md:grid-rows-root-desktop",
        )}
      >
        <div className="absolute left-0 top-0 w-24 -translate-y-full bg-slate-800 px-4 py-2 text-center transition-transform focus-within:translate-y-0">
          <a href="#content" tabIndex={1}>
            Skip to content
          </a>
        </div>
        {!noSidebar && (
          <Header
            activeNav={activeNav}
            className="bg-slate-200 dark:bg-slate-800"
          />
        )}
        <main
          id="content"
          className={twMerge(
            "m-4 md:row-span-2 md:m-0 md:h-screen md:overflow-y-auto md:p-4",
            noSidebar && "m-0",
            className,
          )}
        >
          {children}
        </main>
        {!noSidebar && <Footer className="bg-slate-200 dark:bg-slate-800" />}
      </div>
    </>
  );
}

export default RootLayout;
