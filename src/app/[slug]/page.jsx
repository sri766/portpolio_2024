import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getPostBySlug } from "../../lib/request"
import Post from "../../components/Post";

export async function generateMetadata({params}){
    const data = getPostBySlug(params.slug);

    return {
        title: data.title,
    }
}
export default async function BlogPage({params}) {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["post", params.slug],
        queryFn: ()=>getPostBySlug(params.slug)
    })


  return (
    <div className="min-h-screen mx-12 lg:mx-64">
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Post slug={params.slug}/>
        </HydrationBoundary>
    </div>
  )
}
