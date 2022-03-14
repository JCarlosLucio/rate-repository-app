import { FlatList, Pressable } from 'react-native';
import { ItemSeparator, RepositoryItem } from '../shared';

export const RepositoryListContainer = ({ repositories, goTo }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <Pressable onPress={() => goTo(item.id)}>
      <RepositoryItem repository={item} />
    </Pressable>
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
