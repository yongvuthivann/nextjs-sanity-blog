import Image from "next/image";

import urlFor from "../../sanity.client";
import dayjs from "dayjs";

type props = {
  post: IPost;
};

export default function Post({ post }: props) {
  return (
    <div className="transition duration-300 hover:scale-105">
      <div className="relative w-full h-40 md:h-48 lg:h-56">
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-2 flex flex-col space-y-1.5 lg:space-y-2.5">
        <div className="flex items-center space-x-1">
          <div className="flex items-center space-x-1">
            <div className="relative w-8 h-8">
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-xs">{post.author.name}</p>
          </div>
          <span className="w-1 h-1 bg-slate-500 rounded-full dark:bg-slate-400"></span>
          <p className="text-xs base-text">
            {dayjs(post._createdAt).format("YYYY-MM-DD")}
          </p>
        </div>
        <h1 className="text-sm font-semibold line-clamp-1">{post.title}</h1>
        <p className="text-xs base-text line-clamp-3">{post.description}</p>
        <div className="flex items-center space-x-2">
          <p className="text-[10px] border border-slate-500 dark:border-slate-400 rounded-md px-2 py-0.5">
            {post?.category.title}
          </p>
          <p className="text-xs base-text">{post.minRead} min read</p>
        </div>
      </div>
    </div>
  );
}
