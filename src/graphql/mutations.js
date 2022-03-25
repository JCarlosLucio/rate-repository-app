import { gql } from '@apollo/client';
import { REVIEW_DETAILS, USER_DETAILS } from './fragments';

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      ...ReviewDetails
      repositoryId
    }
  }
  ${REVIEW_DETAILS}
`;

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
