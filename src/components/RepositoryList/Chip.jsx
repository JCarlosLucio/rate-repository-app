import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import { Text } from '../shared';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
});

export const Chip = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  );
};
