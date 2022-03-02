import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

const formatStat = (stat) =>
  stat >= 1000 ? `${Math.round(stat / 100) / 10}k` : stat;

const Stat = ({ label, stat }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{formatStat(stat)}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default Stat;
