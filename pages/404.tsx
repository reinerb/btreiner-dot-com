import Button from "@/utils/components/Button";
import LinkButton from "@/utils/components/LinkButton";
import RootLayout from "@/utils/components/RootLayout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

function About() {
  const router = useRouter();

  return (
    <RootLayout
      title="About | Ben Reiner"
      metaDescription="Hi! I'm Ben Reiner, a freelance frontend developer. Come learn more about me!"
      activeNav="about"
      className="grid place-items-center"
    >
      <section className={"flex flex-col justify-center gap-4"}>
        <h1 className="text-center text-4xl">404 | Not Found</h1>
        <p>Sorry, the resource you're looking for does not exist.</p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => router.back()} primary>
            Go Back
          </Button>
          <LinkButton href="/" primary>
            Go Home
          </LinkButton>
        </div>
      </section>
    </RootLayout>
  );
}

export default About;
