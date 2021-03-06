import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../../theme';
import { Subheading } from '../shared';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    color: theme.colors.textAppBar,
  },
});

export const AppBarTab = ({ to, onPress, children }) => {
  return (
    <Link to={to} style={styles.container} onPress={onPress}>
      <Subheading style={styles.text}>{children}</Subheading>
    </Link>
  );
};
