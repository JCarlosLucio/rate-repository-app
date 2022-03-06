import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { AppBarTab } from './AppBarTab';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bgAppBar,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};