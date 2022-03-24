import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = (variables) => {
  // varialbes = {includeReviews, first ,after}
  const { data, error, loading, fetchMore } = useQuery(GET_ME, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me?.reviews?.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { me: data?.me, error, loading, fetchMore: handleFetchMore };
};

export default useMe;
