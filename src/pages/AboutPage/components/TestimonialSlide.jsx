import React from "react";
import avatar from "./avatar.png";

const TestimonialSlide = () => {
  return (
      <div className=" mx-auto bg-lightGray dark:bg-darkBlue rounded-lg shadow-md p-8">
        <div className="relative">
          <div className="mb-4 text-lg font-semibold ">
            Testimonial
          </div>
          <div className="text-gray-600">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </div>
          <div className="mt-4">
            <img
              src={avatar}
              alt="Testimonial"
              className="w-16 h-16 rounded-full border-4 border-white inline-block mr-4"
            />
            <div className="inline-block">
              <div className="font-semibold ">John Doe</div>
              <div className="text-gray-600">Web Developer</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TestimonialSlide;
