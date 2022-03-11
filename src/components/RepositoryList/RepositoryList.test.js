import { render, within } from '@testing-library/react-native';
import formatStat from '../../utils/formatStat';
import { RepositoryListContainer } from './RepositoryListContainer';

const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor: 'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const repositoryItems = getAllByTestId('repositoryItem');

      for (let i = 0; i < repositoryItems.length; i++) {
        const item = within(repositoryItems[i]);
        const node = repositories.edges[i].node;

        expect(item.getByText(node.fullName)).toBeDefined();
        expect(item.getByText(node.description)).toBeDefined();
        expect(item.getByText(node.language)).toBeDefined();
        expect(item.getByText(formatStat(node.forksCount))).toBeDefined();
        expect(item.getByText(formatStat(node.stargazersCount))).toBeDefined();
        expect(item.getByText(formatStat(node.ratingAverage))).toBeDefined();
        expect(item.getByText(formatStat(node.reviewCount))).toBeDefined();
      }
    });
  });
});
