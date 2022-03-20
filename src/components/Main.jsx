import { StyleSheet, View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';
import theme from '../theme';
import { AppBar } from './AppBar';
import { CreateReview } from './CreateReview';
import { RepositoryList } from './RepositoryList';
import { Snackbar } from './shared';
import { SignIn } from './SignIn';
import { SingleRepository } from './SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.bgPrimary,
    fontFamily: theme.fonts.main,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/createReview" element={<CreateReview />} exact />
        <Route path="/:repositoryId" element={<SingleRepository />} />
        <Route path="*" element={<Navigate to="*" replace />} />
      </Routes>
      <Snackbar />
    </View>
  );
};

export default Main;
