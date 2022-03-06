import { Image, StyleSheet, View } from 'react-native';
import { Chip } from './Chip';
import { Subheading, Text } from '../shared';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
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
});

export const RepositoryInfo = ({ repo }) => {
  return (
    <View style={styles.info}>
      <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }} />
      <View style={styles.details}>
        <Subheading style={styles.padBottom}>{repo.fullName}</Subheading>
        <Text style={styles.padBottom} color="textSecondary">
          {repo.description}
        </Text>
        <Chip label={repo.language} />
      </View>
    </View>
  );
};
