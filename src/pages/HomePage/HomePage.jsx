import { socialLinks } from "../../data/Datafile";
import ParticlesComponent from "./components/ParticlesComponent";
const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="" >
        <ParticlesComponent />
      </div>
      <div className="container m-auto text-center">
        <h1 className=" text-3xl md:text-4xl font-bold  dark:text-white">
          Hello I'm{" "}
          <span className="text-primary dark:text-primary  ">
            Zain Ul Abidin.
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          I'm a freelance react developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
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

          {/* <FacebookFilled className="p-3 border-2 rounded-full hover:border-primary transition-all duration-500 mx-2 " />
          <InstagramFilled className="p-3 border-2 rounded-full hover:border-primary transition-all duration-500 mx-2 " />
          <TwitterSquareFilled className="p-3 border-2 rounded-full hover:border-primary transition-all duration-500 mx-2 " />
          <LinkedinFilled className="p-3 border-2 rounded-full hover:border-primary transition-all duration-500 mx-2 " />
          <GithubFilled className="p-3 border-2 rounded-full hover:border-primary transition-all duration-500 mx-2 " /> */}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
