import React from "react";

const ResumeCard = () => {
  return (
    <div className="flex gap-6 w-full">
      {/* LEFT LONG DIV WITH BULLET. */}
      <div className=" w-2 bg-lightGray dark:bg-darkBlue pt-8 pb-16 overflow-visible flex items-center flex-col">
        {/* BULLET */}
        <div className="rounded-full p-2 border-[3px] bg-light dark:bg-dark border-lightGray dark:border-darkBlue " />
      </div>
      
      {/* RIGHT SHORT DIV WITH TEXT. */}
      <div className="pt-6 pb-16 space-y-2   ">
        <h1 className="font-semibold text-xl">Computer Science</h1>
        <h2 className="">University of California, Irvine</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
          quisquam!
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
