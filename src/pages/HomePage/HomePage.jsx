import { socialLinks } from "../../data/Datafile";
import ParticlesComponent from "./components/ParticlesComponent";
import logo from "./reactifier-portfolio-logo.png";

const HomePage = () => {
  return (
    <div className=" animate-fade-in flex justify-center items-center h-full">
      <div className="">
        <ParticlesComponent />
      </div>
      <div className="container m-auto text-center">
        <h1 className=" text-3xl md:text-4xl font-bold  dark:text-white">
          Hello I'm{" "}
          <span className="text-primary dark:text-primary  ">
            Muhammad Zain Ul Abidin.
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-2xl">
          I'm a freelance react developer. I can provide clean code and pixel
          perfect design.
        </p>

        <section className="flex justify-center items-center mt-8 text-lg">
          {socialLinks.map((link) => {
            return (
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                key={link.id}
                className="p-2 border-2 border-lightGray dark:border-darkBlue rounded-full hover:border-primary dark:hover:border-primary transition-all duration-500 mx-2 text-lg aspect-square w-12 flex justify-center items-center hover:text-primary hover:text-opacity-50 "
              >
                {link.icon}
              </a>
            );
          })}
        </section>
      </div>

      {/* LOGO */}
      <div className="w-16 md:w-20 aspect-square fixed bottom-4 right-4 z-50 rounded-full shadow-lg">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full object-cover slow-spin"
        />
        <p className="text-4xl font-light absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          R
        </p>
      </div>
    </div>
  );
};

export default HomePage;
