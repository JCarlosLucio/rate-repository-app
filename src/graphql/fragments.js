import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
  }
`;

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    createdAt
    rating
    user {
      ...UserDetails
    }
    repository {
      id
      fullName
    }
  }
  ${USER_DETAILS}
`;

export const PAGE_INFO_DETAILS = gql`
  fragment PageInfoDetails on PageInfo {
    hasNextPage
    startCursor
    endCursor
  }
`;
