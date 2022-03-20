import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { CreateReviewContainer } from './CreateReviewContainer';

describe('CreateReview', () => {
  describe('CreateReviewContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      const { getByTestId } = render(
        <CreateReviewContainer onSubmit={onSubmit} />
      );

      fireEvent.changeText(getByTestId('ownerName'), 'tester');
      fireEvent.changeText(getByTestId('repositoryName'), 'test');
      fireEvent.changeText(getByTestId('rating'), '100');
      fireEvent.changeText(getByTestId('text'), 'test text');
      fireEvent.press(getByTestId('createReview'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          ownerName: 'tester',
          repositoryName: 'test',
          rating: '100',
          text: 'test text',
        });
      });
    });
  });
});
