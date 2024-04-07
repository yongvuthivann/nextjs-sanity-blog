interface ISlug {
  _type: string;
  current: string;
}

interface IBlock {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface IAuthor {
  _id: string;
  name: string;
  image: IImage;
}

interface IImage {
  _type: "image";
  asset: Reference;
}

interface ICategory {
  _id: string;
  title: string;
  slug: ISlug;
}

interface IPost {
  _id: string;
  slug: ISlug;
  mainImage: IImage;
  author: IAuthor;
  category: ICategory;
  title: string;
  _createdAt: string;
  description: string;
  minRead: number;
  body: IBlock[];
}
