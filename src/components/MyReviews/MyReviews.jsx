import { FlatList } from 'react-native';
import useMe from '../../hooks/useMe';
import { ItemSeparator, ReviewItem } from '../shared';

export const MyReviews = () => {
  const { me, fetchMore } = useMe({ includeReviews: true, first: 8 });

  const renderItem = ({ item }) => <ReviewItem review={item} inMyReviews />;

  const reviews = me?.reviews?.edges.map((edge) => edge.node) ?? [];

  const onEndReach = () => {
    fetchMore();
  };

  if (!me) return null;

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
