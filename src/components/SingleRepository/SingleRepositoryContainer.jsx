// import { Component } from 'react';
import { FlatList } from 'react-native';
import { ItemSeparator, RepositoryItem, ReviewItem } from '../shared';

export function SingleRepositoryContainer({ repository, onEndReach }) {
  const renderHeader = () => (
    <>
      <RepositoryItem repository={repository} single />
      <ItemSeparator />
    </>
  );

  const renderItem = ({ item }) => <ReviewItem review={item} />;

  const reviews = repository?.reviews?.edges.map((edge) => edge.node) ?? [];

  if (!repository) return null;

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
}
