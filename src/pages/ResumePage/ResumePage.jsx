import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import ResumeCard from "./components/ResumeCard";
import SkillCard from "./components/SkillCard";
import { EducationData, ExperienceData } from "../../data/Datafile";

const ResumePage = () => {
  return (
    <div className="animate-fade-in ">
      <PageHeading>Resume</PageHeading>
      {/* GRID */}
      <section className="grid grid-cols-1 gap-x-4 lg:grid-cols-2 container ">
        <div className="col-span-1">
          <h2 className="text-3xl font-semibold mb-8">
            <span className="text-4xl">🎓</span> Education
          </h2>
          {EducationData.map((item, index) => {
            return (
              <ResumeCard
                key={index}
                institute={item.institute}
                title={item.title}
                duration={item.duration}
                description={item.description}
              />
            );
          })}
        </div>
        <div className="col-span-1 mt-8 lg:mt-0">
          <div>
            <h2 className="text-3xl font-semibold mb-8">
              <span className="text-4xl">💼</span> Experience
            </h2>
            {ExperienceData.map((item, index) => {
              return (
                <ResumeCard
                  key={index}
                  institute={item.institute}
                  title={item.title}
                  duration={item.duration}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </section>
      <PageHeading>My Skills</PageHeading>
      {/* GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
        <SkillCard skillScore={80} skillName={"HTML"} />
      </section>
    </div>
  );
};

export default ResumePage;
