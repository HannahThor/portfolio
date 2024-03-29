import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pill from "./Pill";

export type CardProps = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  link?: string;
};

// component that takes a link prop, title prop and description prop. If the link is undefined render all the content not wrapped in a link
// if the link is defined render the content wrapped in a link
function CardContent({
  link,
  title,
  description,
}: Pick<CardProps, "link" | "title" | "description">) {
  if (!link) {
    return (
      <div className="py-4">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold sm:text-xl text-sm mb-2">{title}</h3>
        </div>
        <p className="sm:text-base text-xs font-light text-left">
          {description}
        </p>
      </div>
    );
  }
  return (
    <Link href={link} target="_blank" className="">
      <div className="py-4">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold sm:text-xl text-sm mb-2">{title}</h3>

          <Image
            src="/icons8-link-48.png"
            alt="link"
            width={30}
            height={30}
            className="!h-[30px]"
          />
        </div>
        <p className="sm:text-base text-xs font-light text-left">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function Card({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  link,
}: CardProps) {
  return (
    <article className="w-full rounded-lg overflow-hidden p-4 border relative flex flex-col group bg-black border-gray-600">
      <Image
        className="w-full rounded-lg"
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={300}
      />
      <CardContent title={title} description={description} link={link} />

      <div className="pt-4 pb-2">
        {tags.map((tag) => (
          <Pill key={tag} tag={tag} className="ml-0" />
        ))}
      </div>
    </article>
  );
}
