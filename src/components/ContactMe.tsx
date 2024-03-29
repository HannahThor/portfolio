import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactMe() {
  return (
    <article id="contact" className="py-2">
      <div className="flex flex-col justify-center items-center mt-10 mb-10">
        <Image
          src="/contactme.png"
          alt="comtact me"
          width={497}
          height={91}
          priority
        />
      </div>

      <div className="flex flex-row justify-center sm:space-x-20 space-x-10">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/hannah-thorley-a4727b289/"
        >
          <Image
            src="/icons8-linkedin-50.png"
            className="hover:opacity-70"
            alt="mail"
            width={50}
            height={50}
          />
        </Link>
        <Link target="_blank" href="https://github.com/HannahThor">
          <Image
            src="/icons8-github-50.png"
            className="hover:opacity-70"
            alt="mail"
            width={50}
            height={50}
          />
        </Link>
        <Link target="_blank" href="mailto:hannahthorley2014@gmail.com">
          <Image
            src="/icons8-email-50.png"
            className="hover:opacity-70"
            alt="mail"
            width={50}
            height={50}
          />
        </Link>
        <Link target="_blank" href="https://twitter.com/hdtdev">
          <Image
            src="/icons8-twitter-50.png"
            className="hover:opacity-70"
            alt="twitter"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </article>
  );
}
