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
        className={`grid-rows-root grid-cols-root grid h-screen ${inter.className} ${saira.variable}`}
      >
        <Header activeNav={activeNav} />
        <main
          className={twMerge(
            "row-span-2 h-screen overflow-y-auto p-4",
            className,
          )}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
