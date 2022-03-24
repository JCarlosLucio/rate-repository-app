import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import { SingleRepositoryContainer } from './SingleRepositoryContainer';

export function SingleRepository() {
  const { repositoryId } = useParams();
  const { repository, fetchMore } = useRepository({
    repositoryId,
    first: 5,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <SingleRepositoryContainer
      repository={repository}
      onEndReach={onEndReach}
    />
  );
}
