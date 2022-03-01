import { Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import Subheading from './Subheading';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    color: theme.colors.textAppBar,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable style={styles.container}>
      <Subheading style={styles.text}>{children}</Subheading>
    </Pressable>
  );
};

export default AppBarTab;
