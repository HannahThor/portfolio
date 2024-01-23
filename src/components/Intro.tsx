import Image from "next/image";

export default function Intro() {
  return (
    <>
      {" "}
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/aboutme.png"
          alt="skills title"
          width={400}
          height={400}
          priority
        />
      </div>
      <article
        id="about"
        className="prose max-w-none my-8 mx-auto w-full flex flex-col md:flex-row items-center gap-20 pb-8 sm:my-1 sm:px-20 sm:py-16"
      >
        <Image src="/avatar.png" width={300} height={300} alt="avatar" />
        <div className="text-lg text-justify">
          <p>
            Hi, I am{" "}
            <span className="font-semibold text-2xl text-green">Hannah</span>, I
            am based in Dudley, U.K.
          </p>
          <p>
            I recently made a career shift from SEN teaching assistant to{" "}
            <span className="font-semibold text-2xl text-green">
              Full-Stack Developer
            </span>{" "}
            through the School Of Code bootcamp.
          </p>
          <p>
            I discovered my love for coding during my free time, and now I am
            all in for the exciting world of problem-solving and committed to
            continuous learning.
          </p>
          <p>
            When I am not coding, you will find me personalising my clothes with
            embroidery, rewatching the Harry Potter movies, or maybe even making
            a wedding cake.
          </p>
        </div>
      </article>
    </>
  );
}
