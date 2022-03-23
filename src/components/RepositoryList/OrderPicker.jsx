import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 5,
  },
  picker: {
    backgroundColor: theme.colors.bgPrimary,
    color: theme.colors.textPrimary,
  },
});

const options = [
  {
    label: 'Latest repositories',
    value: 'latest',
  },
  {
    label: 'Highest rated repositories',
    value: 'highest',
  },
  {
    label: 'Lowest rated repositories',
    value: 'lowest',
  },
];

export const OrderPicker = ({ selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Picker
        prompt="Select an item..."
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
        dropdownIconColor={theme.colors.textPrimary}
      >
        {options.map(({ label, value }) => (
          <Picker.Item key={value} label={label} value={value} />
        ))}
      </Picker>
    </View>
  );
};
