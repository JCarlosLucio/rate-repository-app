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

export const RepositoryItem = ({ item, single }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.info}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.details}>
          <Subheading style={styles.padBottom}>{item.fullName}</Subheading>
          <Text style={styles.padBottom} color="textSecondary">
            {item.description}
          </Text>
          <Chip label={item.language} />
        </View>
      </View>
      <View style={styles.stats}>
        <Stat label="Stars" stat={item.stargazersCount} />
        <Stat label="Forks" stat={item.forksCount} />
        <Stat label="Reviews" stat={item.reviewCount} />
        <Stat label="Rating" stat={item.ratingAverage} />
      </View>
      {single && (
        <Button
          label="Open in GitHub"
          onPress={() => Linking.openURL(item.url)}
          style={styles.button}
        />
      )}
    </View>
  );
};
