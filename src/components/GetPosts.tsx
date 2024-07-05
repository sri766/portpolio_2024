import React from 'react';
import { useQuery } from '@apollo/client';
import { USER_QUERY } from '../lib/queries'

interface username {
  username: string;
}


const GetPosts = ({ username } : username) => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { username },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div className='min-h-screen'>
      {data.user.posts.edges.map(({ node } : any) => (
        <div key={node.slug}>
          <h2>{node.title}</h2>
          <p>{node.brief}</p>
          <a href={`https://hashnode.com/post/${node.slug}`}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default GetPosts;
