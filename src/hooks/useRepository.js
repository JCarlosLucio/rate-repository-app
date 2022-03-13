import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repositoryId) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId },
  });

  return { repository: data?.repository, error, loading };
};

export default useRepository;
