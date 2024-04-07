import { postDetailQuery } from "@/lib/query";
import Detail from "@/components/detail";
import { client } from "../../../../sanity.client";

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: IPost = await client.fetch(postDetailQuery, {
    slug: params.slug.toString(),
  });

  return <Detail post={post} />;
}

export const revalidate = 1;
