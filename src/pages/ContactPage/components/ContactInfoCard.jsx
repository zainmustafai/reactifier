import React from "react";

const ContactInfoCard = ({ title, value, icon }) => {
  return (
    <div className="flex gap-4 items-center p-4 my-2">
      <div>{icon}</div>
      <div className=" ml-3 md:ml-16 space-y-2">
        <h3 className="text-xl font-bold ">{title}</h3>
        <p className="text-dark dark:text-light break-words text-[1.3rem]">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
