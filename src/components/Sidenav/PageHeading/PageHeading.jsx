import React from "react";

const PageHeading = ({ children, className }) => {
  return (
    <div className={"my-8 md:my-16 "}>
      <h1
        className={" text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white"}
      >
        {children}
      </h1>

      <div
        className={`h-2 w-40  border-[1px] border-gray-500 rounded-full mt-4 mb-4 dark:bg-white`}
      >
        <div className="h-full w-[50%] bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default PageHeading;
