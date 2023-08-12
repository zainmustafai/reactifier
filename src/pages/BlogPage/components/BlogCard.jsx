import React from "react";

const BlogCard = () => {
  return (
    <div className="max-w-full mx-auto bg-lightGray dark:bg-darkBlue overflow-hidden">
      <figure className="overflow-hidden" >
        <img
          src="https://picsum.photos/400/250"
          alt="Blog"
          className="w-full h-56 lg:h-96 object-cover hover:scale-105 transition-all duration-300  ease-in-out transform-gpu"
        />
      </figure>

      {/* DATE */}
      <div className="bg-primary  py-1 px-2 inline-block -translate-y-[100%]">
        July 15, 2023
      </div>

      <div className="p-6">
        <h1 className="text-xl font-semibold mb-2">Blog Title</h1>
        <p className="leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
          ante vitae ex hendrerit venenatis.
        </p>
        <div className="flex items-center mb-2">
          <img
            src="https://picsum.photos/40/40"
            alt="Author"
            className="w-8 h-8 mr-2 rounded-full"
          />
          <span className="dark:text-gray-300 text-gray-700">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
