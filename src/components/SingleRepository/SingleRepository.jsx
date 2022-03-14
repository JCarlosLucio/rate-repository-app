import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import { ItemSeparator, RepositoryItem } from '../shared';
import { ReviewItem } from './ReviewItem';

export function SingleRepository() {
  const { repositoryId } = useParams();
  const { repository, loading } = useRepository(repositoryId);

  if (loading) return null;

  const reviews = repository?.reviews?.edges?.map((edge) => edge.node) ?? [];

  const renderItem = ({ item }) => <ReviewItem review={item} />;
  const renderHeader = () => <RepositoryItem repository={repository} single />;

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={renderHeader}
    />
  );
}
