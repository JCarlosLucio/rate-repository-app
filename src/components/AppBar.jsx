import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgAppBar,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="/signin">Sign in</AppBarTab>
    </View>
  );
};

export default AppBar;
