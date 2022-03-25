import { Alert, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useSnackbar } from '../../contexts/SnackbarContext';
import useDeleteReview from '../../hooks/useDeleteReview';
import theme from '../../theme';
import formatDate from '../../utils/formatDate';
import { Button } from './Button';
import { Subheading } from './Subheading';
import { Text } from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgSecondary,
    padding: 16,
    display: 'flex',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.primary,
    borderRadius: 55 / 2,
    borderWidth: 2.5,
    marginRight: 16,
    width: 55,
    height: 55,
  },
  date: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  review: {
    display: 'flex',
    alignItems: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  viewButton: {
    backgroundColor: theme.colors.info,
    flexGrow: 1,
    marginRight: 16,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
    flexGrow: 1,
  },
});

export const ReviewItem = ({ review, inMyReviews }) => {
  const navigate = useNavigate();
  const [deleteReview, { loading }] = useDeleteReview();
  const { setSnackbar } = useSnackbar();

  const handleDeleteReview = async () => {
    try {
      await deleteReview(review.id);
      setSnackbar({
        message: `Deleted "${review.repository.fullName}" review successfully`,
        type: 'success',
      });
    } catch (e) {
      console.log(e);
      setSnackbar({ message: e?.message, type: 'error' });
    }
  };

  const createDeleteReviewAlert = () =>
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [{ text: 'Cancel' }, { text: 'DELETE', onPress: handleDeleteReview }]
    );

  const goToRepository = () => navigate(`/${review.repository.id}`);

  return (
    <View style={styles.container} testID="reviewItem">
      <View style={styles.info}>
        <View style={styles.rating}>
          <Text color="primary" fontSize="heading" fontWeight="bold">
            {review.rating}
          </Text>
        </View>
        <View style={styles.review}>
          <Subheading>
            {inMyReviews ? review.repository.fullName : review.user.username}
          </Subheading>
          <Text style={styles.date} color="textSecondary">
            {formatDate(review.createdAt)}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {inMyReviews && (
        <View style={styles.buttons}>
          <Button
            label="View repository"
            style={styles.viewButton}
            onPress={goToRepository}
          />
          <Button
            label="Delete review"
            style={styles.deleteButton}
            loading={loading}
            onPress={createDeleteReviewAlert}
          />
        </View>
      )}
    </View>
  );
};
