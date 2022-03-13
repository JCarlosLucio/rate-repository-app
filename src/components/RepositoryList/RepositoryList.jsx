import { useNavigate } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

export const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();
  const goTo = (repositoryId) => navigate(`/${repositoryId}`);

  return <RepositoryListContainer repositories={repositories} goTo={goTo} />;
};
