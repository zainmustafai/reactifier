import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import PortfolioCard from "./components/PortfolioCard";

const PortfolioPage = () => {
  return (
    <div className="animate-fade-in" >
      <PageHeading>Portfolios</PageHeading>
      {/* TAB-BAR */}
      <section className="flex flex-wrap gap-2 justify-center items-center w-full min-h-16 dark:shadow-none transition-all duration-300 ease-in-out ">
        <button className="border-2 border-primary px-4 py-1 text-md hover:bg-primary transition-all duration-300 min-w-[30px]">All</button>
        <button className="border-2 border-primary px-4 py-1 text-md hover:bg-primary transition-all duration-300 min-w-[30px]">React</button>
        <button className="border-2 border-primary px-4 py-1 text-md hover:bg-primary transition-all duration-300 min-w-[30px]">React Native</button>
        <button className="border-2 border-primary px-4 py-1 text-md hover:bg-primary transition-all duration-300 min-w-[30px]">ECOMMERCE</button>
      </section>
      
      {/* PORTFOLIO CARDS */}
      <section className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
        <PortfolioCard/>
      </section>
    </div>
  );
};

export default PortfolioPage;
