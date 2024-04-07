import Link from "next/link";
import Image from "next/image";

import urlFor from "../../sanity.client";

export const RichTextEditor = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-[100%] h-[250px] md:h-[350px] lg:h-[500px] mt-5">
          <Image
            src={urlFor(value).url()}
            alt={"location image"}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-5 list-disc space-y-2 text-sm md:text-base">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-5 space-y-2 text-sm md:text-base list-decimal">
        {children}
      </ol>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="mt-5 text-2xl md:text-4xl py-2 font-bold">{children}</h1>
    ),

    h2: ({ children }: any) => (
      <h2 className="mt-5 text-xl md:text-2xl py-2 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-5 text-lg md:text-xl py-2 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mt-5 md:text-lg text-base font-bold">{children}</h4>
    ),

    normal: ({ children }: any) => (
      <span className="space-y-2 text-sm md:text-base">{children}</span>
    ),

    blockqoute: ({ children }: any) => (
      <blockquote className="border-l-green-500 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-green-500 hover:decoration-black">
          {children}
        </Link>
      );
    },
  },
};
