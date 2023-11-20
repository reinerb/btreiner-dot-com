import RootLayout from "@/utils/components/RootLayout/RootLayout";
import React from "react";
import benAndLibby from "@/assets/ben-and-libby.jpg";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <RootLayout
      title="About | Ben Reiner"
      metaDescription="Hi! I'm Ben Reiner, a freelance frontend developer. Come learn more about me!"
      activeNav="about"
      className="grid place-items-center"
    >
      <div className="grid gap-4 px-2 sm:px-4 md:grid-cols-3 md:px-8 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5">
        <Image
          layout="responsive"
          src={benAndLibby}
          alt="A picture of Ben"
          className="order-2 justify-self-center md:order-1"
        />
        <article className="order-1 flex flex-col gap-4 md:order-2 md:col-span-2 xl:col-span-3 2xl:col-span-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p>
            Hi! My name is Ben Reiner, and I'm a freelance frontend developer.
          </p>
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">My Background and Work</h2>
            <p>
              I graduated from Northeastern University in January 2016 with a
              Bachelors of Science in mathematics, cum laude. I'm always on the
              hunt for a new problem to engage with, puzzle to solve, or subject
              to learn everything about.
            </p>
            <p>
              Currently, I work as a freelance web developer, building websites
              for local religious institutions and small businesses. I
              frequently interface with Jody Kotkin at{" "}
              <Link href="https://masscommunications.co" target="_blank">
                Mass Communications Concepts, LLC
              </Link>
              . Together, we have delivered projects for churches and temples,
              private tutors, engineers, and nonprofit organizations using
              WordPress. As a freelancer, I have learned to communicate
              effectively with people of all backgrounds, manage projects in
              chaotic environments, and pick up new technologies quickly.
            </p>
            <p>
              During the pandemic, I spent several months working with my church
              to maintain and upgrade its web presence and assist with running
              remote worship services. I spent a great deal of time educating
              the less technical members of the congregation connecting to
              remote worship services and church groups, whether through
              livestreams on YouTube or interactive sessions on Zoom.
            </p>
            <p>
              Between self-teaching and working, I have learned a number of
              front- and back-end technologies, including:
            </p>
            <ul role="list" className="ml-1 list-inside list-disc">
              <li>HTML5 and CSS3</li>
              <li>JavaScript and TypeScript</li>
              <li>React and NextJS</li>
              <li>Bootstrap and TailwindCSS</li>
              <li>WordPress</li>
              <li>PHP</li>
            </ul>
            <p>
              A copy of my resume is available{" "}
              <Link href="/resume.pdf" target="_blank">
                here
              </Link>
              .
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">My Interests</h2>
            <p>
              Outside of work, I like to keep my mind engaged with games and
              puzzles.
            </p>
            <p>
              I start most days by solving the variant sudoku puzzle posted on
              the{" "}
              <Link
                href="https://crackingthecryptic.fandom.com/wiki/CTC_Fan_Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cracking the Cryptic Discord server
              </Link>
              . Each Sunday, my partner and I solve the New York Times crossword
              together, then research any answers that stood out to us.
            </p>
            <p>
              I love tabletop games of every shape and size, whether it's an
              easy game of{" "}
              <Link
                href="https://boardgamegeek.com/boardgame/266192/wingspan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wingspan
              </Link>{" "}
              with my friends, a romp through a dungeon in Pathfinder, or a
              high-stakes Magic: the Gathering tournament. I love finding
              unconventional ways to play - new strategies, cool combos, weird
              gameplay restrictions, or other ways to make the games I enjoy
              more challenging.
            </p>
            <p>
              When I'm not engaging with those hobbies, you'll find me outside,
              searching for birds with my partner or enjoying sitting by the
              nearest available body of water.
            </p>
          </section>
        </article>
      </div>
    </RootLayout>
  );
}

export default About;
