// import { PostMetadata } from "../lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <Card className="flex flex-col border-2 border-[#052e52] bg-[#030014] text-white">
      <CardHeader>
        <Image
          className="rounded-lg h-full"
          src={post?.coverImage?.url}
          alt={post?.title}
            width={800}
            height={400}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">
          <Link href={`/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <div className="mt-3 flex gap-3 items-center">
          {post?.author.profilePicture && (
            <Image
              src={post.author.profilePicture}
              className="h-7 w-7 rounded-full"
              alt={post.author.name}
              width={28}
              height={28}
            />
          )}{" "}
          {post.author.name}
        </div>
        <p className="text-gray-500 line-clamp-4 mt-3">
          {post.subtitle || post.content.text}
        </p>
      </CardContent>
    </Card>
  );
}