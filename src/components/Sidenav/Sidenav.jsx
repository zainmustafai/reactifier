import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "./profile.png";

const NavMenu = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Resume",
    path: "/resume",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },

  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Sidenav = () => {
  const [activeItem, setActiveItem] = useState("home");
  return (
    <ul className="flex flex-col space-y-4 text-center text-black dark:text-white transition-all duration-300 ease-in-out ">
      <figure className="w-full aspect-square border-b p-5">
        <img
          src={profileImage}
          alt="profile"
          className="w-full h-full rounded-full border-[8px]"
        />
      </figure>
      {NavMenu.map((item, index) => (
        <li key={index} className="w-full">
          <Link
            onClick={() => setActiveItem(item.title.toLowerCase())}
            to={item.path}
            className={`${
              activeItem === item.title.toLocaleLowerCase()
                ? "text-primary text-lg hover:text-primary transition-colors duration-300 font-semibold "
                : "hover:text-primary font-semibold transition-colors duration-300 "
            }`}
          >
            {item.title}
          </Link>
        </li>
      ))}
      <footer className="fixed p-4 bottom-0 flex flex-col border-t">
        <span className="text-sm">Made with ❤️ by <a href="https://www.github.com/zainmustafai">Zain Ul Abidin</a> </span>
        <span className="text-sm">© 2023 All rights reserved.</span>
      </footer>
    </ul>
  );
};

export default Sidenav;
