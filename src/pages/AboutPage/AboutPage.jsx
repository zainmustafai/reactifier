import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
// import avatar from "./about-me-page-dispplay-image.jpg";
import avatar2 from "./about-me-page-dispplay-image-2.jpg";
import { CloudDownloadOutlined } from "@ant-design/icons";
import React from 'react';

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};
// import Testimonials from "./components/Testimonials";

const AboutPage = () => {
  return (
    <div className="animate-fade-in ">
      <PageHeading>
        About <span className="text-primary">Me</span>
      </PageHeading>
      {/* ABOUT ME SECTION */}
      <section className="flex flex-col space-y-8 lg:container lg:space-y-0 lg:flex-row lg:space-x-16 ">
        {/* LEFT IMAGE */}
        <figure className="overflow-hidden border-4 border-gray-200 lg:w-1/2 aspect-square border-opacity-10">
          <img
            src={avatar2}
            alt="muhammad-zain-ul-abidin standing in glasses in a grassy park."
            className="flex-none object-cover object-center w-full h-full transition-all duration-300 ease-in-out grayscale hover:grayscale-0"
          />
        </figure>
        {/* RIGHT : ABOUT CONTENT */}
        <main className="text-md lg:w-1/2">
          <h2 className="text-2xl font-bold text-primary">Who am I?</h2>
          <h1 className="mt-2 text-4xl font-bold dark:text-white ">
            I am{" "}
            <span className="underline text-primary underline-offset-8">
              Zain
            </span>{" "}
            .
          </h1>
          <p className="mt-4 text-sm md:text-md lg:text-lg xl:text-xl lg:text-justify">
            I'm an IT graduate from Jhelum, Pakistan, passionate about website
            creation and skilled in React JS. Excited to work as a React
            Developer, I transitioned from Graphic Design on fiverr.com in 2019
            to programming and web development. Learning through YouTube and
            online resources, I completed several projects and my final year
            project using MERN Stack. I'm enthusiastic about React and web app
            development, plus I enjoy working with databases and APIs.
            Proficient in HTML, CSS, JavaScript, and React JS, I'm well-equipped
            for the role, ready to contribute, and eager to tackle challenges
            with enthusiasm.
          </p>

          <table className="table w-full mt-4 overflow-auto text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl lg:text-justify ">
            <tbody className="w-full ">
              <tr className="flex justify-between flex-wrap items-center my-[2rem] ">
                <td className="p-1 py-2 font-semibold ">Full Name</td>
                <td className="py-2 ">Muhammad Zain Ul Abidin</td>
              </tr>

              <tr className="flex justify-between flex-wrap items-center my-[2rem] ">
                <td className="p-1 py-2 font-semibold ">Age</td>
                <td className="py-2">{
                  `${calculateAge('2000-10-09')} Years`
                }</td>
              </tr>

              <tr className="flex justify-between flex-wrap items-center my-[2rem] ">
                <td className="p-1 py-2 font-semibold ">Nationality</td>
                <td className="py-2">Pakistani</td>
              </tr>

              <tr className="flex justify-between flex-wrap items-center my-[2rem] ">
                <td className="p-1 py-2 font-semibold ">Languages</td>
                <td className="py-2">English,Urdu & Punjabi </td>
              </tr>

              <tr className="flex justify-between flex-wrap items-center my-[2rem] ">
                <td className="p-1 py-2 font-semibold ">Freelance</td>
                <td className="py-2">Available</td>
              </tr>

              <tr className="flex justify-between flex-wrap items-center my-[2rem] ">
                <td className="p-1 py-2 font-semibold ">Email</td>
                <td className="py-2">zforzain2000@gmail.com</td>
              </tr>

              <tr className="flex justify-between flex-wrap items-center my-[2rem] ">
                <td className="p-1 py-2 font-semibold ">CV</td>
                <td>
                  <a
                    href="https://drive.google.com/file/d/1Z_pKa9G-gpHIzI-du4xlzOlsVkD2KiRA/view?usp=drive_link"
                    download={true}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 transition-all text-[20px] duration-300 transform rounded-full bg-primary hover:scale-105 active:scale-100"
                  >
                    <CloudDownloadOutlined className="font-bold text-[20px] mr-2" />
                    <span className="text-[16px]">Download CV</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="my-16">
        <PageHeading>Testimonials</PageHeading>
        <Testimonials />
      </section> */}
    </div>
  );
};

export default AboutPage;
