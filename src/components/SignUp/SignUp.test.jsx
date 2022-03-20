import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { SignUpContainer } from './SignUpContainer';

describe('SignUp', () => {
  describe('SignUpContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      const { getByTestId } = render(<SignUpContainer onSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId('username'), 'kalle');
      fireEvent.changeText(getByTestId('password'), 'password');
      fireEvent.changeText(getByTestId('passwordConfirm'), 'password');
      fireEvent.press(getByTestId('signUp'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
          passwordConfirm: 'password',
        });
      });
    });
  });
});
