import { DollarOutlined, DollarCircleOutlined } from "@ant-design/icons";
import React from "react";

const PricePlanCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-6">
      <div className="text-center">
        <div className="text-3xl text-primary">
          <DollarCircleOutlined />
        </div>
        <h2 className="text-xl font-semibold mt-4">Premium Plan</h2>
        <p className="text-gray-600 mt-2">
          Enjoy unlimited benefits with our premium plan.
        </p>
        <div className="mt-4">
          <span className="text-2xl font-semibold text-primary">$29</span>
          <span className="text-gray-600"> / month</span>
        </div>
        <div>
          <p>Mobile App Desgin</p>
          <p>Web App Desgin</p>
          <p>Responsive design</p>
          <p>Unlimited support</p>
          <p>Database Developement</p>
        </div>
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricePlanCard;
