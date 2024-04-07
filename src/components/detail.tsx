import Image from "next/image";
import dayjs from "dayjs";
import { PortableText } from "@portabletext/react";

import urlFor from "../../sanity.client";
import { RichTextEditor } from "./rich-text-editor";

type props = {
  post: IPost;
};

export default function Detail({ post }: props) {
  return (
    <div>
      <h1 className="text-base font-semibold">{post.title}</h1>
      <div className="flex items-center mt-5 space-x-2">
        <div className="relative w-10 h-10 ">
          <Image
            src={urlFor(post.author.image).url()}
            alt={post.author.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs">{post.author.name}</p>
          <div className="base-text text-xs flex items-center gap-x-2">
            <p>{post.minRead} min read</p>
            <span className="w-1 h-1 bg-slate-500 rounded-full dark:bg-slate-400"></span>
            <p className="">{dayjs(post._createdAt).format("MMM DD, YYYY")}</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-64 md:h-80 lg:h-[600px] mt-5">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <PortableText value={post.body} components={RichTextEditor} />
      </div>
    </div>
  );
}
