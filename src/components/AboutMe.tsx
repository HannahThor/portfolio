import Image from "next/image";

export default function AboutMe() {
  return (
    <article
      className="py-8 mx-auto w-full text-lg text-center max-w-[800px] flex flex-col justify-center items-center"
      id="about"
    >
      <Image
        src="/aboutme.png"
        alt="skills title"
        width={400}
        height={400}
        priority
      />

      <div className="sm:my-8 mx-auto w-full sm:text-lg text-sm text-center max-w-[800px] space-y-5">
        <p>
          Hi, I&apos;m Hannah 👋🏾 and I have recently made a career shift from
          special needs education to Full-Stack Developer through the School Of
          Code bootcamp.
        </p>
        <p>
          I&apos;m a creative and empathetic person who loves to solve problems
          and work with others. I&apos;m a self driven learner who is always
          looking for ways to improve my skills and knowledge.
        </p>
        <p>
          After having coding recommended to me, I decided to give it a go in my
          spare time. I loved it so much that I took the leap and applied for
          the School of Code. Now that I have completed the bootcamp, I&apos;m
          looking for a role where I can continue to learn, grow as a developer
          and make this space more inclusive for others.
        </p>
        <p>
          When I&apos;m not coding, you will find me personalising my clothes
          with embroidery 🪡, rewatching the Harry Potter movies 🦉, or maybe
          even making a wedding cake 🎂.
        </p>
      </div>
    </article>
  );
}
