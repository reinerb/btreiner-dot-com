import HamburgerNav from "@/utils/Navigation/HamburgerNav";
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
      className="grid h-screen place-items-center bg-gradient-to-b from-slate-400 via-slate-50 to-slate-400 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950"
    >
      <HamburgerNav activeNav="home" className="fixed right-5 top-5" />
      <div className="container flex flex-col items-center gap-8">
        <p
          className={`font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${anybody.className}`}
        >
          Hi! I'm
        </p>
        <h1
          className={`text-4xl font-bold text-primary-800 dark:text-primary-300 sm:text-7xl lg:text-8xl xl:text-9xl ${anybody.className}`}
          aria-label="Ben Reiner"
        >
          Ben{" "}
          <Logo className="inline w-16 fill-primary-800 dark:fill-primary-300 sm:w-24 md:w-28 xl:w-32" />
          einer
        </h1>
        {/* <ul className="flex divide-x-2 divide-slate-500 text-slate-700 dark:text-slate-300 sm:text-lg">
          <li className="px-4">Frontend</li>
          <li className="px-4">React</li>
          <li className="px-4">WordPress</li>
        </ul> */}
        <ScrollingText elements={skills} />
        <div className="flex max-w-fit flex-col items-center gap-4 bg-primary-800 p-4 text-center text-slate-50 dark:bg-primary-300 dark:text-slate-950">
          <p className="font-heading font-semibold sm:text-lg">
            Ready to make something incredible?
          </p>
          <LinkButton
            href="/contact"
            className="max-w-fit border-2 font-semibold"
            inverted
          >
            Contact Me
          </LinkButton>
        </div>
      </div>
    </RootLayout>
  );
}
