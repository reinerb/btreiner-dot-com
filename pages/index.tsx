import LinkButton from "@/utils/components/LinkButton";
import Logo from "@/utils/components/Logo";
import RootLayout from "@/utils/components/RootLayout/RootLayout";
import {
  allMediaQuery,
  projectsQuery,
  toolQuery,
} from "@/utils/queries/wpQueryHandler";
import { Project } from "@/utils/types/WordPressQueries";
import { GetStaticProps } from "next";

type HomepageProps = {
  projects: Project[];
};

export const getStaticProps: GetStaticProps<HomepageProps> = async () => {
  const projectsData = await projectsQuery({
    fields: ["tools", "excerpt", "featured_media"],
  });
  const allTools = await toolQuery();
  const allMedia = await allMediaQuery();

  const projects = projectsData.map(({ featured_media, tools, ...project }) => {
    const projectTools = allTools.filter((tool) => tools.includes(tool.id));
    const projectMedia = allMedia.filter(
      (media) => media.id === featured_media,
    )[0];

    return {
      ...project,
      tools: projectTools,
      featuredMedia: projectMedia,
    };
  });

  return { props: { projects } };
};
export default function Home({ projects }: HomepageProps) {
  return (
    <RootLayout
      title="Ben Reiner | Web Developer"
      metaDescription="Hi! I'm Ben Reiner, a freelance frontend developer. This is a collection of some cool projects I've made."
      activeNav="home"
      className="grid place-items-center"
    >
      <div className="container flex flex-col items-center gap-8">
        <p className="font-bold sm:text-lg md:text-xl">Hi! I'm</p>
        <h1 className="text-5xl font-bold text-primary-800 dark:text-primary-300 sm:text-7xl md:text-8xl xl:text-9xl">
          Ben{" "}
          <Logo className="inline w-16 fill-primary-800 dark:fill-primary-300 sm:w-24 md:w-28 xl:w-32" />
          einer
        </h1>
        <ul className="flex gap-4 divide-x-2 divide-slate-500 text-slate-700 dark:text-slate-300 sm:text-lg">
          <li>Frontend</li>
          <li className="pl-4">React</li>
          <li className="pl-4">WordPress</li>
        </ul>
        <div className="flex max-w-fit flex-col items-center gap-4 bg-primary-800 p-4 text-center text-slate-50 dark:bg-primary-300 dark:text-slate-950">
          <p className="font-heading font-semibold sm:text-lg">
            Let's build something incredible together.
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
