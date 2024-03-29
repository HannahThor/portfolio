import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Pill from "./Pill";
import { useWindowWidth } from "@react-hook/window-size";

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
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useLayoutEffect(() => {
    setIsLayoutReady(true);
  }, []);

  const screenWidth = useWindowWidth();
  // split the skills into rows of 4, and rows of 5. If the last row doesn't have enough skills to fill either 4 or 5, then add the remaining skills to the last row.
  const skillRows: string[][] = [];
  let skillRow: string[] = [];
  const skillsLength = skillsData.length;

  // if small screen, make row length either 2 or 3
  // line 39, get rid of ternery operator and make it an if statement

  skillsData.forEach((skill, index) => {
    // Even rows have 4 skills, odd rows have 5 skills
    const isEvenRow = skillRows.length % 2 === 0;

    const isSmallScreen = screenWidth < 700;
    let rowLength = isEvenRow ? 4 : 5;
    if (isSmallScreen) {
      rowLength = isEvenRow ? 2 : 3;
    }

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
    <section
      id="skills"
      className="py-8 max-w-[800px] mx-auto flex flex-col items-center"
    >
      <Image src="/skills.png" alt="skills" width={400} height={400} priority />

      {isLayoutReady &&
        skillRows.map((row, index) => (
          <ul key={index} className="flex flex-row justify-center items-center">
            {row.map((skill) => (
              <Pill
                key={skill}
                tag={skill}
                className="sm:w-[120px] flex justify-self-center justify-center   whitespace-nowrap"
              />
            ))}
          </ul>
        ))}
    </section>
  );
}
