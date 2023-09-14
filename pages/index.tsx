import LinkButton from "@/utils/components/LinkButton";
import RootLayout from "@/utils/layouts/RootLayout";
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
      noContainer
      metaDescription="Hi! I'm Ben Reiner, a freelance frontend developer. This is a collection of some cool projects I've made."
    >
      <section className="bg-primary-200 p-8 dark:bg-primary-900">
        <div className="container mx-auto flex flex-col items-center gap-2">
          <h1 className="text-center text-3xl font-bold sm:text-4xl">
            Hi! I'm Ben Reiner.
          </h1>
          <p className="text-center sm:text-lg">I'm a front-end developer.</p>
        </div>
      </section>
      <section className="bg-secondary-200 p-8 dark:bg-secondary-950">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            Ready to bring your vision to life?
          </h2>
          <p className="text-center sm:text-lg">
            Get in touch and let's build something incredible together.
          </p>
          <LinkButton href="/contact">Contact Me</LinkButton>
        </div>
      </section>
    </RootLayout>
  );
}
