import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { ItemSeparator, RepositoryItem } from '../shared';
import { OrderPicker } from './OrderPicker';

export const RepositoryListContainer = ({ repositories, order, setOrder }) => {
  const navigate = useNavigate();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const handleValueChange = (itemValue) => setOrder(itemValue);

  const renderRepo = ({ item }) => (
    <Pressable onPress={() => navigate(item.id)}>
      <RepositoryItem repository={item} />
    </Pressable>
  );

  return (
    <>
      <OrderPicker selectedValue={order} onValueChange={handleValueChange} />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderRepo}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
