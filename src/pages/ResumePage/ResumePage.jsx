import React from "react";
import PageHeading from "../../components/Sidenav/PageHeading/PageHeading";
import ResumeCard from "./components/ResumeCard";
import SkillCard from "./components/SkillCard";

const ResumePage = () => {
  return (
    <div>
      <PageHeading>Resume</PageHeading>
      {/* GRID */}
      <section className="grid grid-cols-1 gap-x-4 lg:grid-cols-2 container ">
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </section>
      <PageHeading>My Skills</PageHeading>
      {/* GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
        <SkillCard skillScore={80} skillName={'HTML'} />
      </section>
    </div>
  );
};

export default ResumePage;
