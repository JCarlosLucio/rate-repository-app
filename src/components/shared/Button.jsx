import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import theme from '../../theme';
import { Text } from './Text';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    padding: 16,
  },
});

export const Button = ({ label, onPress, style, loading, ...props }) => {
  const buttonStyle = [styles.button, style];

  return (
    <Pressable style={buttonStyle} onPress={onPress} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.textPrimary} />
      ) : (
        <Text fontSize="subheading" fontWeight="bold">
          {label}
        </Text>
      )}
    </Pressable>
  );
};
