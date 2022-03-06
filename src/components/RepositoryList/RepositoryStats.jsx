import { StyleSheet, View } from 'react-native';
import { Stat } from './Stat';

const styles = StyleSheet.create({
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export const RepositoryStats = ({ repo }) => {
  return (
    <View style={styles.stats}>
      <Stat label="Stars" stat={repo.stargazersCount} />
      <Stat label="Forks" stat={repo.forksCount} />
      <Stat label="Reviews" stat={repo.reviewCount} />
      <Stat label="Rating" stat={repo.ratingAverage} />
    </View>
  );
};
