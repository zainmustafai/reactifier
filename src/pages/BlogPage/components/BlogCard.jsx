import React from "react";

const BlogCard = ({ link, image, title, description, date }) => {
  return (
    <div className="w-full max-w-full mx-auto bg-lightGray dark:bg-darkBlue overflow-hidden">
      <figure className="overflow-hidden">
        <img
          src={image || "https://picsum.photos/500/300"}
          alt="Blog"
          className="w-full h-56 lg:h-96 object-cover hover:scale-105 transition-all duration-300  ease-in-out transform-gpu"
        />
      </figure>

      {/* DATE */}
      <div className="bg-primary  py-1 px-2 inline-block -translate-y-[100%]">
        July 15, 2023
      </div>

      <div className="p-6">
        <a href={link || "/"}>
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
        </a>
        <p className="leading-relaxed mb-4">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
