import React from "react";
import Image from "next/image";

export default function ContactMe() {
  return (
    <article id="contact">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/contactme.png"
          alt="comtact me"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <a
            target="_blank"
            className="block lg:inline-block cursor-pointer "
            aria-label="github"
            href="https://www.linkedin.com/in/hannah-thorley-a4727b289/"
          >
            linkedin
          </a>
          <a
            target="_blank"
            className="block lg:inline-block cursor-pointer "
            aria-label="github"
            href="https://github.com/HannahThor"
          >
            github
          </a>
          <p>hannahthorley2014@gmail.com</p>
        </div>
      </div>
    </article>
  );
}
