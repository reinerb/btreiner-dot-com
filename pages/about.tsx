import RootLayout from "@/utils/layouts/RootLayout";
import React from "react";
import benAndLibby from "@/assets/ben-and-libby.jpg";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <RootLayout
      title="About | Ben Reiner"
      className="grid gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-8"
    >
      <Image
        layout="responsive"
        src={benAndLibby}
        alt="A picture of Ben"
        className="order-2 justify-self-center md:order-1"
      />
      <article className="order-1 flex flex-col gap-4 md:order-2 md:col-span-2 xl:col-span-3">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p>Hi! My name is Ben Reiner and I'm a freelance frontend developer.</p>
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">My Work and Background</h2>
          <p>
            I graduated from Northeastern University in January 2016 with a
            Bachelors of Science in mathematics, cum laude.
          </p>
          <p>
            I currently work as a freelance web developer, frequently with Jody
            Kotkin at{" "}
            <Link href="https://masscommunications.co" target="_blank">
              Mass Communications Concepts, LLC
            </Link>
            {", "}
            to build websites for local religious institutions and small
            businesses. Working with her, I have delivered projects for churches
            and temples, private tutors, engineers, and nonprofit organizations
            using WordPress. As a freelancer, I have learned to communicate
            effectively, manage projects in chaotic environments, and learn to
            use new technologies quickly.
          </p>
          <p>
            During the pandemic, I spent several months working with my church
            to maintain and upgrade its web presence and assist with running
            remote worship services. I spent a great deal of time educating the
            less technical members of the congregation connecting to remote
            worship services and church groups, whether through livestreams on
            YouTube or interactive sessions on Zoom.
          </p>
          <p>
            In my work life and my time self-teaching, I have worked with a
            number of front- and back-end technologies, including:
            <ul role="list" className="ml-1 mt-1 list-inside list-disc">
              <li>HTML5 and CSS3</li>
              <li>JavaScript and TypeScript</li>
              <li>React and NextJS</li>
              <li>Bootstrap and TailwindCSS</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
          </p>
          <p>
            A copy of my resume is available{" "}
            <Link href="/resume.pdf">here</Link>.
          </p>
        </section>
        <section className="flex flex-col gap-2"></section>
      </article>
    </RootLayout>
  );
}

export default About;
