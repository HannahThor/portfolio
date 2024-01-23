import React from "react";
import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  link: string;
};

export default function Card({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  link,
}: CardProps) {
  return (
    <article className="w-full rounded-lg overflow-hidden p-4 border relative flex flex-col justify-center group border-gray-600">
      <Image
        className="w-full"
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={300}
      />
      <Link
        href={link}
        target="_blank"
        className="absolute z-10 hidden group-hover:flex top-5 right-5 text-white items-center"
      >
        View
      </Link>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-green rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
