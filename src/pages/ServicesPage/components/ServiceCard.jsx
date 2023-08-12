import React from "react";

const ServiceCard = () => {
  return (
    <div className="border-b-8 border-darkBlue hover:border-primary hover:translate-y-1 transition-all duration-500 ">
      <div className="bg-white dark:bg-darkGray p-4 shadow-lg">
        <h3 className="text-xl font-semibold">Service Name</h3>
        <div className="h-1 w-16 my-4 bg-slate-300 " />
        <p className="text-gray-500 dark:text-gray-400 max-w-md pr-8 mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
