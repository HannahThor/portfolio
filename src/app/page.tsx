"use client";

import ContactMe from "@/components/ContactMe";
import Heading from "@/components/Heading";
import Intro from "@/components/Intro";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skillset from "@/components/Skillset";

export default function Home() {
  return (
    <Main>
      {/* We are using a wrapper div as our main is where the styling lives for our glow pointer */}
      <div className="container mx-auto">
        <Nav />
        <Heading />
        <Projects />
        <Skillset />
        <Intro />
        <ContactMe />
      </div>
    </Main>
  );
}
