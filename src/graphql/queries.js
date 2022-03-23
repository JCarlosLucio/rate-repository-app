import { gql } from '@apollo/client';
import {
  PAGE_INFO_DETAILS,
  REPOSITORY_DETAILS,
  REVIEW_DETAILS,
  USER_DETAILS,
} from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
      pageInfo {
        ...PageInfoDetails
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${PAGE_INFO_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      reviews {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`;

export const GET_ME = gql`
  query Me {
    me {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;
