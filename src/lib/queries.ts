import { gql } from '@apollo/client';

export const USER_QUERY = gql`
  query User($username: String!) {
    user(username: $username) {
      posts {
        edges {
          node {
            title
            brief
            slug
            coverImage {
              url
            }
            dateAdded
          }
        }
      }
    }
  }
`;