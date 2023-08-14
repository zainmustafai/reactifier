import { GithubFilled, GlobalOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const hoverCLass =
  "absolute h-[90%] w-[90%] lg:w-[96%]  mx-auto md:mx-0 inset-2 bg-white bg-opacity-90 transition-all duration-300";

const PortfolioCard = ({
  title,
  category,
  description,
  image,
  link,
  githubLink,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="animate-fade-in" >
      <section className="space-y-2">
        <figure
          className="relative w-full h-auto"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img
            src={image || "https://via.placeholder.com/500"}
            alt="portfolio"
            className="w-full h-96 object-cover"
          />
          {/* White Overlay */}
          <div className={`${isHover ? hoverCLass : "w-0 h-0"}`}>
            {isHover && (
              <div className="w-full h-full flex items-center gap-4 justify-center">
                <Link to={githubLink}>
                  <GithubFilled className="flex bg-lightGray dark:bg-darkBlue hover:bg-primary dark:hover:bg-primary text-4xl  text-white p-2 rounded-full aspect-square transition-all ease-linear duration-75  " />
                </Link>
                <Link to={link}>
                  <GlobalOutlined className="flex bg-lightGray dark:bg-darkBlue hover:bg-primary dark:hover:bg-primary text-4xl  text-white p-2 rounded-full aspect-square transition-all ease-linear duration-75  " />
                </Link>
              </div>
            )}
          </div>
        </figure>
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description?.toString()}</p>
      </section>
    </div>
  );
};

export default PortfolioCard;
