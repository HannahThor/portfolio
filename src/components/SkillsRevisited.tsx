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
  // split the skills into rows of 4, and rows of 5. If the last row doesn't have enough skills to fill either 4 or 5, then add the remaining skills to the last row.
  const skillRows: string[][] = [];
  let skillRow: string[] = [];
  const skillsLength = skillsData.length;

  skillsData.forEach((skill, index) => {
    // Even rows have 4 skills, odd rows have 5 skills
    const isEvenRow = skillRows.length % 2 === 0;
    const rowLength = isEvenRow ? 4 : 5;

    // If the row is full, start a new row
    if (skillRow.length === rowLength) {
      skillRows.push(skillRow);
      skillRow = [];
    }

    // Add the skill to the row
    skillRow.push(skill);

    // If we're on the last skill, add the last row
    if (index === skillsLength - 1) {
      skillRows.push(skillRow);
    }
  });

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

      {skillRows.map((row, index) => (
        <div
          key={index}
          className="flex sm:flex-row flex-col justify-center items-center"
        >
          {row.map((skill) => (
            <Pill
              key={skill}
              tag={skill}
              className="w-[120px] flex justify-self-center justify-center"
            />
          ))}
        </div>
      ))}
    </article>
  );
}
