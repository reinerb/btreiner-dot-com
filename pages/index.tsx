import HamburgerNav from "@/utils/components/Navigation/HamburgerNav";
import LinkButton from "@/utils/components/LinkButton";
import Logo from "@/utils/components/Logo";
import RootLayout from "@/utils/components/RootLayout/RootLayout";
import ScrollingText from "@/utils/components/ScrollingText";
import { Anybody } from "next/font/google";

const anybody = Anybody({ subsets: ["latin"] });

const skills = [
  "React",
  "WordPress",
  "Front-End",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "NextJS",
  "JQuery",
  "TypeScript",
  "PHP",
  "NodeJS",
];

export default function Home() {
  return (
    <RootLayout
      title="Ben Reiner | Web Developer"
      metaDescription="Hi! I'm Ben Reiner, a freelance frontend developer. This is a collection of some cool projects I've made."
      activeNav="home"
      noSidebar
      className="grid h-screen place-items-center bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950"
    >
      <HamburgerNav activeNav="home" className="fixed right-5 top-5" />
      <div className="container flex flex-col items-center gap-8">
        <p
          className={`font-extrabold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${anybody.className}`}
        >
          Hi! I'm
        </p>
        <h1
          className={`text-4xl font-black text-primary-800 dark:text-primary-300 sm:text-7xl lg:text-8xl xl:text-9xl ${anybody.className}`}
          aria-label="Ben Reiner"
        >
          Ben{" "}
          <Logo className="inline w-16 fill-primary-800 dark:fill-primary-300 sm:w-24 md:w-28 xl:w-32" />
          einer
        </h1>
        <ScrollingText elements={skills} />
        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton small href="/About">
            About Me
          </LinkButton>
          <LinkButton small href="/portfolio">
            Portfolio
          </LinkButton>
          <LinkButton
            small
            href="https://github.com/reinerb"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </LinkButton>
          <LinkButton
            small
            href="https://linkedin.com/in/benjamin-t-reiner"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </LinkButton>
        </div>
        <div className="flex max-w-fit flex-col items-center gap-4 bg-slate-300 p-4 text-center dark:bg-slate-700">
          <p className="font-heading font-semibold sm:text-lg">
            Want to make something incredible?
          </p>
          <LinkButton href="/contact" className="max-w-fit font-semibold">
            Contact Me
          </LinkButton>
        </div>
      </div>
    </RootLayout>
  );
}
