import React from "react";
import Image from "next/image";

export default function Heading() {
  return (
    <>
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center"
      >
        {/* <h1 className="font-semibold">Hannah Thorley</h1>
        <h2 className="text-5xl font-extralight">Full Stack Developer</h2> */}
        <Image
          src="/name.png"
          alt="hannah thorley: full stack web developer"
          width={500}
          height={500}
          priority
        />
      </section>
    </>
  );
}
