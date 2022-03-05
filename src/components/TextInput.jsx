import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textPrimary,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
  },
  error: {
    color: theme.colors.error,
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.error, style];

  return (
    <NativeTextInput
      style={textInputStyle}
      placeholderTextColor={theme.colors.textSecondary}
      {...props}
    />
  );
};

export default TextInput;
