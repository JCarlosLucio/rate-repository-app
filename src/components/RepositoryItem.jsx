import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import RepositoryInfo from './RepositoryInfo';
import RepositoryStats from './RepositoryStats';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgSecondary,
    padding: 16,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryInfo repo={item} />
      <RepositoryStats repo={item} />
    </View>
  );
};

export default RepositoryItem;
