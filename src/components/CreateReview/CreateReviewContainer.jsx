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
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating must be a number')
    .min(0)
    .max(100)
    .required('Rating is required'),
  text: yup.string().optional(),
});

export const CreateReviewContainer = ({ onSubmit, loading }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          ownerName: '',
          repositoryName: '',
          rating: '',
          text: '',
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput
              name="ownerName"
              placeholder="Repository owner name"
              testID="ownerName"
            />
            <FormikTextInput
              name="repositoryName"
              placeholder="Repository name"
              testID="repositoryName"
            />
            <FormikTextInput
              name="rating"
              placeholder="Rating between 0 and 100"
              keyboardType="numeric"
              testID="rating"
            />
            <FormikTextInput
              name="text"
              placeholder="Review"
              multiline={true}
              numberOfLines={4}
              returnKeyType="next"
              testID="text"
            />
            <Button
              label="Create a review"
              loading={loading}
              testID="createReview"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
