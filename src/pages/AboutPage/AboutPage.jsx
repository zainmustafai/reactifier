import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import avatar from "./about-me-page-dispplay-image.jpg";
import { CloudDownloadOutlined } from "@ant-design/icons";
// import Testimonials from "./components/Testimonials";

const AboutPage = () => {
  return (
    <div className="animate-fade-in ">
      <PageHeading>
        About <span className="text-primary">Me</span>
      </PageHeading>
      {/* ABOUT ME SECTION */}
      <section className=" lg:container flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-16  ">
        {/* LEFT IMAGE */}
        <figure className="lg:w-1/2 aspect-square overflow-hidden border-4 border-opacity-10 border-gray-200">
          <img
            src={avatar}
            alt="about"
            className=" w-full h-full object-cover "
          />
        </figure>
        {/* RIGHT : ABOUT CONTENT */}
        <main className="text-md lg:w-1/2">
          <h2 className="text-2xl font-bold text-primary">Who am I?</h2>
          <h1 className="text-4xl font-bold mt-2 dark:text-white ">
            I am <span className="text-primary">Zain Ul Abidin</span>
          </h1>
          <p className="leading-relaxed text-justify">
            I am full stack MERN developer. I have Experience in Developing
            Websites, Web Applications and Database schema design. I have
            experience in working with React, Redux, Node, Express, MongoDB and
            Firebase.
          </p>
          <table className="table-auto overflow-auto mt-4 w-full text-sm md:text-lg">
            <tbody className="w-full ">
              <tr>
                <td className="py-2 font-semibold">Full Name</td>
                <td className=" py-2">: M. Zain Ul Abidin</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold ">Age</td>
                <td className="py-2">: 23</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold ">Nationality</td>
                <td className="py-2">: Pakistani</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold ">Languages</td>
                <td className="py-2">: English,Urdu & Punjabi </td>
              </tr>
              <tr>
                <td className="py-2 font-semibold ">Freelance</td>
                <td className="py-2">: Available</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold ">Email</td>
                <td className="py-2">: zforzain2000@gmail.com</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold ">CV</td>
                <td>
                  <a
                    href="https://drive.google.com/file/d/14fdpTj729PqsbQENiNhvTZSG8yprpWLG/view"
                    download={true}
                    className=" w-full bg-primary py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-100"
                  >
                    <CloudDownloadOutlined className="font-bold text-2xl mr-2" />
                    Download CV
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
