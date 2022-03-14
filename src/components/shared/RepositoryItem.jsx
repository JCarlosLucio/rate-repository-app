import * as Linking from 'expo-linking';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import { Button } from './Button';
import { Chip } from './Chip';
import { Stat } from './Stat';
import { Subheading } from './Subheading';
import { Text } from './Text';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  button: {
    marginTop: 16,
  },
  container: {
    backgroundColor: theme.colors.bgSecondary,
    padding: 16,
  },
  details: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  padBottom: {
    paddingBottom: 10,
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export const RepositoryItem = ({ repository, single }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.info}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View style={styles.details}>
          <Subheading style={styles.padBottom}>
            {repository.fullName}
          </Subheading>
          <Text style={styles.padBottom} color="textSecondary">
            {repository.description}
          </Text>
          <Chip label={repository.language} />
        </View>
      </View>
      <View style={styles.stats}>
        <Stat label="Stars" stat={repository.stargazersCount} />
        <Stat label="Forks" stat={repository.forksCount} />
        <Stat label="Reviews" stat={repository.reviewCount} />
        <Stat label="Rating" stat={repository.ratingAverage} />
      </View>
      {single && (
        <Button
          label="Open in GitHub"
          onPress={() => Linking.openURL(repository.url)}
          style={styles.button}
        />
      )}
    </View>
  );
};
