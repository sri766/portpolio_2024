import { ApolloClient, InMemoryCache } from '@apollo/client';
import { USER_QUERY } from './queries';

export async function getPosts(username: string) {
  const client = new ApolloClient({
    uri: 'https://gql.hashnode.com/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: USER_QUERY,
    variables: { username },
  });

  return data;
}
