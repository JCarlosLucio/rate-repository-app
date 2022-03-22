import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, REVIEW_DETAILS, USER_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
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
