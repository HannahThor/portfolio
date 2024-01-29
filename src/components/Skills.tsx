import React from "react";
import Image from "next/image";
import Pill from "./Pill";

const skillsData = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Tailwind",
  "Node",
  "Express",
  "SQL",
  "Rest APIs",
  "Vitest",
  "Jest",
  "Playwright",
  "UI Design",
  "UX Design",
  "Figma",
  "Wireframing",
  "Git",
  "Agile",
];

export default function Skills() {
  const evenRows = skillsData.filter((_, index) => index % 2 === 0);
  const oddRows = skillsData.filter((_, index) => index % 2 === 1);

  // 4 on first row
  const rowOne = evenRows.slice(0, 4);
  // 5 on second row
  const rowTwo = oddRows.slice(0, 5);
  // 4 on third row
  const rowThree = evenRows.slice(4, 8);
  // 5 on fourth row
  const rowFour = oddRows.slice(5, 10);
  // 2 on fifth row
  const rowFive = evenRows.slice(8, 10);

  return (
    <article
      id="skills"
      className="py-8 max-w-[800px] mx-auto flex flex-col items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/skills.png"
          alt="skills"
          width={400}
          height={400}
          priority
        />
      </div>
      {/* 4 on first row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-5">
        {rowOne.map((skill) => (
          <Pill
            key={skill}
            tag={skill}
            className="w-[120px] flex justify-self-center justify-center"
          />
        ))}
      </div>
      {/* 5 on second row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 my-5">
        {rowTwo.map((skill) => (
          <Pill
            key={skill}
            tag={skill}
            className="w-[120px] flex justify-self-center justify-center"
          />
        ))}
      </div>
      {/* 4 on third row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-5">
        {rowThree.map((skill) => (
          <Pill
            key={skill}
            tag={skill}
            className="w-[120px] flex justify-self-center justify-center"
          />
        ))}
      </div>
      {/* 5 on fourth row */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 my-5">
        {rowFour.map((skill) => (
          <Pill
            key={skill}
            tag={skill}
            className="w-[120px] flex justify-self-center justify-center"
          />
        ))}
      </div>
      {/* 2 on fifth row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-5">
        {rowFive.map((skill) => (
          <Pill
            key={skill}
            tag={skill}
            className="w-[120px] flex justify-self-center justify-center"
          />
        ))}
      </div>
    </article>
  );
}
