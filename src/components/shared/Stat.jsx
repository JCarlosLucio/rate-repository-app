import { StyleSheet, View } from 'react-native';
import formatStat from '../../utils/formatStat';
import { Text } from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

export const Stat = ({ label, stat }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{formatStat(stat)}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};
