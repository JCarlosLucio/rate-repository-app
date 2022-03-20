import { StyleSheet, View } from 'react-native';
import { useSnackbar } from '../../contexts/SnackbarContext';
import theme from '../../theme';
import { Text } from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    backgroundColor: theme.colors.primary,
  },
  error: {
    backgroundColor: theme.colors.error,
  },
  warn: {
    backgroundColor: theme.colors.warn,
  },
  success: {
    backgroundColor: theme.colors.success,
  },
  info: {
    backgroundColor: theme.colors.info,
  },
});

export const Snackbar = () => {
  const { message, type } = useSnackbar();

  const snackbarStyle = [
    styles.container,
    type === 'error' && styles.error,
    type === 'warn' && styles.warn,
    type === 'success' && styles.success,
    type === 'info' && styles.info,
  ];

  if (!message) return null;

  return (
    <View style={snackbarStyle}>
      <Text>{message}</Text>
    </View>
  );
};
