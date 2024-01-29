import React from "react";
import Image from "next/image";

export default function Heading() {
  return (
    <>
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center"
      >
        <Image
          src="/name.png"
          alt="hannah thorley: full stack web developer"
          width={550}
          height={550}
          priority
        />
      </section>
    </>
  );
}
