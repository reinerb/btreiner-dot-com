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
          `h-screen ${inter.className} ${saira.variable}`,
          !noSidebar &&
            "grid grid-rows-root-mobile md:grid-cols-root md:grid-rows-root-desktop",
        )}
      >
        {!noSidebar && (
          <Header
            activeNav={activeNav}
            className="bg-slate-200 dark:bg-slate-800"
          />
        )}
        <main
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
