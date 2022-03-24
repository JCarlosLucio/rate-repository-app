import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (variables) => {
  // variables = {repositoryId, first, after}
  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORY,
    {
      variables,
      fetchPolicy: 'cache-and-network',
    }
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data?.repository,
    error,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepository;
