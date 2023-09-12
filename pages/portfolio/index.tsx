import React from "react";
import RootLayout from "@/utils/layouts/RootLayout";
import type { Project } from "@/utils/types/WordPressQueries";

type PortfolioPageProps = {
  projects: Project[];
};

function PortfolioPage({ projects }: PortfolioPageProps) {
  return (
    <RootLayout title="Portfolio | Ben Reiner">
      <h1>Portfolio</h1>
    </RootLayout>
  );
}

export default PortfolioPage;
