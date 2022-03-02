import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
});

const Chip = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  );
};

export default Chip;
