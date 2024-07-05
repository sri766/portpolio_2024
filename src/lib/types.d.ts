export type PostMetadata = {
  title: string;
  subtitle?: string;
  slug: string;
  content: {
    text: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
    profileImage?: string;
  };
  posts: {
    edges: {
      node: PostMetadata;
      cursor: string;
    }[];
  };
};
