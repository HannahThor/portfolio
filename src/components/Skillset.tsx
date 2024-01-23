import React from "react";
import Image from "next/image";

export default function Skillset() {
  return (
    <article id="skills" className="py-8">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/skills.png"
          alt="skills"
          width={400}
          height={400}
          priority
        />
      </div>
    </article>
  );
}
