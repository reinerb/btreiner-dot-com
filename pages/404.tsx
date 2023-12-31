import NotFound from "@/utils/components/NotFound";
import RootLayout from "@/utils/components/RootLayout/RootLayout";
import React from "react";

function About() {
  return (
    <RootLayout
      title="About | Ben Reiner"
      metaDescription="Hi! I'm Ben Reiner, a freelance frontend developer. Come learn more about me!"
      activeNav="about"
      className="grid place-items-center"
    >
      <NotFound />
    </RootLayout>
  );
}

export default About;
