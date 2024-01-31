"use client";

import ContactMe from "@/components/ContactMe";
import Heading from "@/components/Heading";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Hotjar from "@hotjar/browser";

export default function Home() {
  const siteId = 3847701;
  const hotjarVersion = 6;

  if (process.env.CONTEXT === "production") {
    try {
      Hotjar.init(siteId, hotjarVersion);
    } catch (error) {
      // no-op
    }
  }

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
