import { postQuery } from "@/lib/query";
import Post from "./post";
import { client } from "../../sanity.client";

export default async function Main() {
  const postList: IPost[] = await client.fetch(postQuery);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-x-6 lg:gap-x-8">
      {postList?.map((post) => <Post post={post} key={post._id} />)}
    </div>
  );
}
