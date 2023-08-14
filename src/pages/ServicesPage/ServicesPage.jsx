import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import ServiceCard from "./components/ServiceCard";
import PricePlanCard from "./components/PricePlanCard";
import { Services, PricingPlans } from "../../data/Datafile";

const GridSection = ({ children }) => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </section>
  );
};

const ServicesPage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeading>Services</PageHeading>
      <GridSection>
        {Services.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          );
        })}
      </GridSection>
      <PageHeading>Choose a Plan</PageHeading>
      <GridSection>
        {PricingPlans.map((plan) => (
          <PricePlanCard key={plan.id} plan={plan} />
        ))}
      </GridSection>
    </div>
  );
};

export default ServicesPage;
