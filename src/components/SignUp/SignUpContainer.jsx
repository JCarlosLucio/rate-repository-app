import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { Button, FormikTextInput } from '../shared';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be at least 1 character')
    .max(30, 'Username must be at most 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

export function SignUpContainer({ onSubmit }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '', passwordConfirm: '' }}
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
            <FormikTextInput
              name="passwordConfirm"
              type="password"
              testID="passwordConfirm"
              placeholder="Password confirmation"
              secureTextEntry
            />
            <Button label="Sign Up" onPress={handleSubmit} testID="signUp" />
          </>
        )}
      </Formik>
    </View>
  );
}
