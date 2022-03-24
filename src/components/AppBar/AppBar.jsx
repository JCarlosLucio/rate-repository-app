import { View, StyleSheet, ScrollView } from 'react-native';
import { useApolloClient } from '@apollo/client';
import Constants from 'expo-constants';
import { AppBarTab } from './AppBarTab';
import theme from '../../theme';
import useMe from '../../hooks/useMe';
import useAuthStorage from '../../hooks/useAuthStorage';

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
  const { me } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        {me ? (
          <>
            <AppBarTab to="/createReview">Create a Review</AppBarTab>
            <AppBarTab to="/myReviews">My Reviews</AppBarTab>
            <AppBarTab to="/signin" onPress={signOut}>
              Sign out
            </AppBarTab>
          </>
        ) : (
          <>
            <AppBarTab to="/signin">Sign in</AppBarTab>
            <AppBarTab to="/signup">Sign up</AppBarTab>
          </>
        )}
      </ScrollView>
    </View>
  );
};
