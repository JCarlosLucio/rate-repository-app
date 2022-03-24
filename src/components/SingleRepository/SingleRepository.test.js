import { render, within } from '@testing-library/react-native';
import formatDate from '../../utils/formatDate';
import formatStat from '../../utils/formatStat';
import { SingleRepositoryContainer } from './SingleRepositoryContainer';

const repository = {
  id: 'jaredpalmer.formik',
  fullName: 'jaredpalmer/formik',
  ratingAverage: 91,
  reviewCount: 10,
  stargazersCount: 29978,
  forksCount: 2468,
  description: 'Build forms in React, without the tears 😭',
  ownerAvatarUrl: 'https://avatars.githubusercontent.com/u/4060187?v=4',
  url: 'https://github.com/jaredpalmer/formik',
  language: 'TypeScript',
  reviews: {
    pageInfo: {
      hasNextPage: false,
      startCursor:
        'WzE2NDc5Nzg4MTMxNzMsIjc1M2YzZTk5LWU3M2EtNDNhMy05YTUwLWIzMGQ3NzI3YzBlYi5qYXJlZHBhbG1lci5mb3JtaWsiXQ==',
      endCursor:
        'WzE2NDgwOTYwMTQ1NjgsImM2Mzc1NWFmLTIzNGQtNDlkYy04NmQzLTU0YWUzYjE4NTJkOC5qYXJlZHBhbG1lci5mb3JtaWsiXQ==',
    },
    edges: [
      {
        node: {
          id: '753f3e99-e73a-43a3-9a50-b30d7727c0eb.jaredpalmer.formik',
          user: {
            id: '753f3e99-e73a-43a3-9a50-b30d7727c0eb',
            username: 'leeroyjenkins',
          },
          rating: 96,
          createdAt: '2022-03-22T19:53:33.173Z',
          text: 'test text',
        },
      },
      {
        node: {
          id: '9b9d927e-2ee9-4f93-b96b-c8f677c63a5f.jaredpalmer.formik',
          user: {
            id: '9b9d927e-2ee9-4f93-b96b-c8f677c63a5f',
            username: 'johndoe',
          },
          rating: 89,
          createdAt: '2022-03-22T20:53:33.173Z',
          text: 'test text',
        },
      },
      {
        node: {
          id: 'cff8872a-8ff5-4092-ac2f-d79e65f18aa2.jaredpalmer.formik',
          user: {
            id: 'cff8872a-8ff5-4092-ac2f-d79e65f18aa2',
            username: 'elina',
          },
          rating: 100,
          createdAt: '2022-03-22T21:53:33.173Z',
          text: 'test text',
        },
      },
    ],
  },
};

describe('SingleRepository', () => {
  describe('SingleRepositoryContainer', () => {
    it('renders repository information and reviews correctly', () => {
      const { getByText, getAllByTestId } = render(
        <SingleRepositoryContainer repository={repository} />
      );

      expect(getByText(repository.fullName)).toBeDefined();
      expect(getByText(repository.description)).toBeDefined();
      expect(getByText(repository.language)).toBeDefined();
      expect(getByText(formatStat(repository.forksCount))).toBeDefined();
      expect(getByText(formatStat(repository.stargazersCount))).toBeDefined();
      expect(getByText(formatStat(repository.ratingAverage))).toBeDefined();
      expect(getByText(formatStat(repository.reviewCount))).toBeDefined();

      const reviewItems = getAllByTestId('reviewItem');

      for (let i = 0; i < reviewItems.length; i++) {
        const item = within(reviewItems[i]);
        const node = repository.reviews.edges[i].node;

        expect(item.getByText(node.user.username)).toBeDefined();
        expect(item.getByText(node.rating.toString())).toBeDefined();
        expect(item.getByText(formatDate(node.createdAt))).toBeDefined();
        expect(item.getByText(node.text)).toBeDefined();
      }
    });
  });
});
