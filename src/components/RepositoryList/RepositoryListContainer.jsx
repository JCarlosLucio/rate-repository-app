import { FlatList } from 'react-native';
import { ItemSeparator } from './ItemSeparator';
import { RepositoryItem } from './RepositoryItem';

export const RepositoryListContainer = ({ repositories }) => {
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
