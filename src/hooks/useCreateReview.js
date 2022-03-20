import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [create, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await create({
      variables: {
        review: {
          ownerName,
          repositoryName,
          rating: Math.round(rating),
          text,
        },
      },
    });

    return data.createReview;
  };

  return [createReview, result];
};

export default useCreateReview;
