import { FlatList } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import ItemSeparator from './ItemSeparator';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
