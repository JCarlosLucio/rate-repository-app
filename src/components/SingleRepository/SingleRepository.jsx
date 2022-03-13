import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import { RepositoryItem } from '../shared';

export function SingleRepository() {
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository(repositoryId);

  if (loading) return null;

  return <RepositoryItem item={repository} single />;
}
