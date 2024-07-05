"use client";

import { getPosts } from "../lib/request";
import { useInfiniteQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import { Button } from "./ui/button";

export default function Posts() {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (lastPage) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <>
      {data?.pages.map((group) =>
        group?.map((post) => <BlogCard key={post.cursor} post={post.node} />)
      )}
      <div className="col-span-1 lg:col-span-3 w-full flex justify-center my-5">
        <Button
          className="w-full text-slate-950"
          variant="outline"
          disabled={!hasNextPage || isFetching}
          onClick={() => fetchNextPage()}
        >
          {isFetching
            ? "Loading..."
            : hasNextPage
            ? "Load more"
            : "That's all for today!"}
        </Button>
      </div>
    </>
  );
}