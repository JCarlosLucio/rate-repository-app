import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
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

const AppBarTab = ({ to, children }) => {
  return (
    <Link to={to} style={styles.container}>
      <Subheading style={styles.text}>{children}</Subheading>
    </Link>
  );
};

export default AppBarTab;
