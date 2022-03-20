import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import * as yup from 'yup';
import { Button, FormikTextInput } from '../shared';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export const SignInContainer = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput
              name="username"
              placeholder="Username"
              testID="username"
            />
            <FormikTextInput
              name="password"
              type="password"
              testID="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button label="Sign In" onPress={handleSubmit} testID="signIn" />
          </>
        )}
      </Formik>
    </View>
  );
};
