import React, { useState } from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import PortfolioCard from "./components/PortfolioCard";

import { portfolioProjects } from "../../data/Datafile";

const PortfolioPage = () => {
  const [projects, setProjects] = useState(portfolioProjects || []);
  const categories = [
    ...new Set(portfolioProjects.map((project) => project.category)),
  ];

  return (
    <div className="animate-fade-in">
      <PageHeading>Portfolios</PageHeading>
      {/* TAB-BAR */}
      <section className="flex flex-wrap gap-2 justify-center items-center w-full min-h-16 dark:shadow-none transition-all duration-300 ease-in-out ">
        <button
          className="border-2 border-primary px-4 py-1 text-md hover:bg-primary transition-all duration-300 min-w-[30px]"
          onClick={() => {
            setProjects(portfolioProjects);
          }}
        >
          All
        </button>
        {
          // Loop through the categories array and render a button for each category
          categories?.map((category, index) => {
            return (
              <button
                key={index}
                className="border-2 border-primary px-4 py-1 text-md hover:bg-primary transition-all duration-300 min-w-[30px]"
                onClick={() => {
                  // Filter the projects array based on the category
                  const newProjects = portfolioProjects.filter(
                    (project) => project.category === category
                  );
                  setProjects(newProjects);
                }}
              >
                {category}
              </button>
            );
          })
        }
      </section>

      {/* PORTFOLIO CARDS */}
      <section className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        {
          // Loop through the projects array and render a PortfolioCard component for each project
          projects.map((project) => {
            return (
              <PortfolioCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            );
          })
        }
      </section>
    </div>
  );
};

export default PortfolioPage;
