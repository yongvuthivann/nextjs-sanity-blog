import { Metadata } from "next";

import { postDetailQuery } from "@/lib/query";
import Detail from "@/components/detail";
import { client } from "../../../../sanity.client";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const post: IPost = await client.fetch(postDetailQuery, {
    slug: params.slug.toString(),
  });
  return {
    title: post.title,
  };
};

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
