import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Subheading from './Subheading';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    padding: 16,
  },
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Subheading>Sign in</Subheading>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
