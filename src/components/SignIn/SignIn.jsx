import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import * as yup from 'yup';
import theme from '../../theme';
import { FormikTextInput } from './FormikTextInput';
import { Subheading } from '../shared';

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

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              type="password"
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

// export default SignIn;
