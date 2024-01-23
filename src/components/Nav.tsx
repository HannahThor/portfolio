import React from "react";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="absolute right-20 top-10 pb-3 md:block md:pb-0 md:mt-0 block text-xl space-y-5 md:space-x-8 md:space-y-0">
      {/* <div
        id="links"
        className="items-center justify-center space-y-5 md:flex md:space-x-8 md:space-y-0"
      > */}
      <a
        className="block lg:inline-block cursor-pointer highlight"
        aria-label="projects"
        href="#projects"
      >
        projects
      </a>
      <a
        className="block lg:inline-block cursor-pointer highlight"
        aria-label="about"
        href="#about"
      >
        about
      </a>
      <a
        className="block lg:inline-block cursor-pointer highlight"
        aria-label="contact"
        href="#contact"
      >
        contact me
      </a>
      <Link
        href="/HannahThorley.pdf"
        target="_blank"
        className={"block lg:inline-block cursor-pointer highlight"}
        aria-label="download CV"
        download
      >
        cv
      </Link>
      {/* </div> */}
    </nav>
  );
}
