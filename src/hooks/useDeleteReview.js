import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_ME } from '../graphql/queries';

const useDeleteReview = () => {
  const [remove, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [GET_ME, 'Me'],
  });

  const deleteReview = async (deleteReviewId) => {
    await remove({
      variables: {
        deleteReviewId,
      },
    });
  };
  return [deleteReview, result];
};

export default useDeleteReview;
