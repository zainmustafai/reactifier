import React from "react";
import DiamondIcon from "./DiamondIcon";

const PricePlanCard = ({ plan }) => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-6">
      <div className="text-center">
        <div className="text-8xl text-primary">
          <DiamondIcon className="w-20 mx-auto" fill="#fefe" />
        </div>
        <h2 className="text-xl font-semibold mt-4">{plan?.title}</h2>
        <p className="text-gray-600 mt-2">
          Enjoy unlimited benefits with our premium plan.
        </p>
        <div className="mt-4">
          <span className="text-2xl font-semibold text-primary">
            {plan?.price}
          </span>
          <span className="text-gray-600"> / month</span>
        </div>
        <ul className="text-center">
          {plan?.features?.map((feature, index) => {
            return (
              <li key={index} className="text-center mt-4">
                {feature}
              </li>
            );
          })}
        </ul>

        <a href={"https://www.fiverr.com/zainmustafai"}>
          <button className="mt-4 bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark hover:px-6 transition-all duration-300">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default PricePlanCard;
