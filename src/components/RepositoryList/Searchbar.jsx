import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';
import { TextInput } from '../shared';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.bgSecondary,
    shadowColor: theme.colors.textPrimary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 16,
  },
  searchbar: {
    flex: 1,
    borderWidth: 0,
    marginBottom: 0,
  },
});

export const Searchbar = ({ value, onChangeText, ...props }) => {
  const reset = () => onChangeText('');

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={theme.iconSizes.md}
        color={theme.colors.textPrimary}
      />
      <TextInput
        style={styles.searchbar}
        placeholder="Search repositories..."
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      {!!value && (
        <Pressable onPress={reset}>
          <Ionicons
            name="close"
            size={theme.iconSizes.md}
            color={theme.colors.textPrimary}
          />
        </Pressable>
      )}
    </View>
  );
};
