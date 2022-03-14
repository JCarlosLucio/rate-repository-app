import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import formatDate from '../../utils/formatDate';
import { Subheading, Text } from '../shared';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgSecondary,
    padding: 16,
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
});

export const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text color="primary" fontSize="heading" fontWeight="bold">
          {review.rating}
        </Text>
      </View>
      <View style={styles.review}>
        <Subheading>{review.user.username}</Subheading>
        <Text style={styles.date} color="textSecondary">
          {formatDate(review.createdAt)}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};
