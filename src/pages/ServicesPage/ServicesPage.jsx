import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import ServiceCard from "./components/ServiceCard";
import PricePlanCard from "./components/PricePlanCard";

const GridSection = ({ children }) => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </section>
  );
};

const ServicesPage = () => {
  return (
    <div>
      <PageHeading>Services</PageHeading>
      <GridSection>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </GridSection>
      <PageHeading>Choose a Plan</PageHeading>
      <GridSection>
        <PricePlanCard />
        <PricePlanCard />
        <PricePlanCard />
      </GridSection>
    </div>
  );
};

export default ServicesPage;
