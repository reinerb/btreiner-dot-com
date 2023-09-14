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
  className?: string;
};

function RootLayout({
  title,
  metaDescription,
  children,
  className,
}: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div
        className={`grid min-h-screen grid-rows-root-layout ${inter.className} ${saira.variable}`}
      >
        <Header />
        <div className="flex justify-center">
          <main className={twMerge("container m-4", className)}>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
