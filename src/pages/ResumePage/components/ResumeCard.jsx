import React from "react";

const ResumeCard = ({ institute, title, duration, description }) => {
  return (
    <div className="flex gap-6 w-full">
      {/* LEFT LONG DIV WITH BULLET. */}
      <div className=" w-2 bg-lightGray dark:bg-black pt-8 pb-16 overflow-visible flex items-center flex-col">
        {/* BULLET */}
        <div className="rounded-full p-2 border-[3px] bg-light dark:bg-dark border-lightGray dark:border-black " />
      </div>

      {/* RIGHT SHORT DIV WITH TEXT. */}
      <div className="pt-6 pb-16 space-y-2   ">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="flex gap-2">
          <h2 className="">{institute}</h2>
          <span>/</span>
          <span className="text-sm">{duration}</span>
        </p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
