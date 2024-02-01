"use client";

import ContactMe from "@/components/ContactMe";
import Heading from "@/components/Heading";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Hotjar from "@hotjar/browser";
import Script from "next/script";

export default function Home() {
  return (
    <Main>
      {/* We are using a wrapper div as our main is where the styling lives for our glow pointer */}
      <div className="container mx-auto">
        <Nav />
        <Heading />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactMe />
      </div>
    </Main>
  );
}
