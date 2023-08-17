import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "./profile_picture.png";
import { navLinks } from "../../data/Datafile";

const Sidenav = () => {
  const [activeItem, setActiveItem] = useState("home");
  return (
    <nav className="flex flex-col justify-between h-full text-black dark:text-white transition-all duration-300 ease-in-out ">
      <ul className="flex flex-col text-center ">
        <figure className="w-full aspect-square border-b dark:border-dark p-6">
          <img
            src={profileImage}
            alt="profile"
            className="w-full h-full rounded-full border-[8px]  dark:border-dark  "
          />
        </figure>
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="w-full h-full hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-10 transition-all duration-100 ease-in-out"
          >
            <Link
              onClick={() => setActiveItem(item.title.toLowerCase())}
              to={`/reactifier/${item.path} `}
              className={`
              w-full h-full block py-2
              ${
                activeItem === item.title.toLocaleLowerCase()
                  ? "text-primary text-lg hover:text-primary transition-colors duration-300 font-semibold "
                  : "hover:text-primary font-semibold transition-colors duration-300 "
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <footer className=" p-4 flex flex-col border-t text-center">
        <span className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://www.github.com/zainmustafai"
            className="text-blue-500 underline"
          >
            Zain
          </a>{" "}
        </span>
        <span className="text-sm">© 2023 All rights reserved.</span>
      </footer>
    </nav>
  );
};

export default Sidenav;
