import React from "react";
import Card, { CardProps } from "./Card";
import Image from "next/image";

const projectData: CardProps[] = [
  {
    title: "Calming Down App",
    description:
      "A simple app that provides a personal space to manage the user’s mindset and track progress, providing free tools and resources to educate the user to help them achieve their mindset goals. Get in touch for more details.",
    tags: ["Next.js", "Tailwind", "Postgres", "Figma"],
    imageSrc: "/calming-down-app.png",
    imageAlt: "calming-down app",
  },
  {
    title: "Tortee App",
    description:
      "A mentee app with icebreakers, question suggestions and note taking, focused on guiding conversations between mentors and mentees in the bootcamp. ",
    tags: ["JavaScript", "HTML", "CSS", "PostgresSQL", "Figma"],
    imageSrc: "/tortee.jpg",
    imageAlt: "mentor mentee app",
    link: "https://team-expedition-hdt.vercel.app/landing.html",
  },
  {
    title: "Favourite Bakes",
    description: "A collection of my favourite home baking recipes.",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
    imageSrc: "/favouritebakes.jpg",
    imageAlt: "favourite bakes",
    link: "https://favourite-bakes.vercel.app/",
  },
];

export default function Projects() {
  return (
    <article id="projects" className="py-8 flex flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/projects.png"
          alt="projects"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1000px]">
        {projectData.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </article>
  );
}
