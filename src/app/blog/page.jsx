import React from 'react'
import {getBlogName, getPosts} from "../../lib/request"
import Posts from "../../components/Posts"
import { BookmarkIcon } from 'lucide-react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';


export default async function page(){

  const title = await getBlogName();

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
      getNextPageParam: (lastPage) =>
        lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
      initialPageParam: "",
  })

  return (
    <div className='min-h-screen mx-12 lg:mx-64'>
      <div className='grid h-[70px] flex-1'>
        <div className='title my-4'>
          <h1 className='text-4xl font-bold flex justify-center items-center'>
            {title.displayTitle || title.title}
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Posts />
          </HydrationBoundary>
        </div>
      </div>
    </div>
  )
}
