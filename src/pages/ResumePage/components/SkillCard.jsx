import React, { useState, useEffect } from "react";

const SkillCard = ({ skillName, skillScore }) => {
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    if (currentScore < skillScore) {
      const interval = setInterval(() => {
        setCurrentScore((prevScore) => {
          const increment = Math.ceil((skillScore - prevScore) / 10);
          return prevScore + increment;
        });
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentScore, skillScore]);

  const skillBarStyles = {
    width: `${currentScore}%`,
  };

  return (
    <div>
      <h1 className="text-xl font-bold">{skillName}</h1>
      <div className="flex gap-4 items-center ">
        <span className="min-w-[8%] pr-1">{currentScore}%</span>
        <div className="bg-lightGray dark:bg-darkBlue h-[6px] w-full">
          <div
            className={`bg-primary h-full transition-width duration-75 ease-in`}
            style={skillBarStyles}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

// import React from "react";

// const SkillCard = ({ skillName, skillScore }) => {
//   return (
//     <div>
//       <h1>HTML</h1>
//       <div className="flex gap-4 items-center ">
//         <span>{skillScore}%</span>
//         <div className="bg-lightGray dark:bg-darkBlue h-[6px] w-full ">
//           {/* LIGHT COLORED SKILL-SCORE */}
//           <div className={`bg-primary h-full`}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillCard;