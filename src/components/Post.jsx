"use client";

import { getPostBySlug } from "../lib/request";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Post({ slug }) {
  const { data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
  });

  if (!data) return notFound();

  return (
    <div>
      <Image src={data?.coverImage?.url} alt="title-img" className="w-full" width={800} height={65} />
      <h1 className="text-4xl lg:text-6xl text-center leading-relaxed font-bold mt-5">
        {data?.title}
      </h1>
      <p className="my-5 text-center text-xl text-gray-400">{data?.subtitle}</p>
      <div className="my-5 flex items-center justify-center text-lg">
        {data?.author.profilePicture && (
          <Image
            src={data?.author.profilePicture}
            alt={data?.author.name}
            className="rounded-full h-10 w-10 mr-5"
            width={400}
            height={200}
          />
        )}
        {data?.author.name}
      </div>
      <div
        className="blog-content text-xl leading-loose flex flex-col gap-5 mt-5"
        dangerouslySetInnerHTML={{ __html: data?.content.html }}
      ></div>
    </div>
  );
}