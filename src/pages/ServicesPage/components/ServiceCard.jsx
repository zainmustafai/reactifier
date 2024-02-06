import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white border-b-8 border-black hover:border-primary hover:translate-y-1 transition-all duration-500  dark:bg-black p-4 shadow-lg h-full">
      <h1>
        <span className="text-4xl">{icon}</span>
      </h1>
      <h3 className="text-xl font-semibold"> {title}</h3>
      <div className="h-1 w-16 my-4 bg-light dark:bg-dark " />
      <p className="text-gray-500 dark:text-gray-400 max-w-md pr-8 mb-16">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
