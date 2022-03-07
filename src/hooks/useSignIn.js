import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

function useSignIn() {
  const [authenticate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const response = await authenticate({
      variables: { credentials: { username, password } },
    });
    return response;
  };

  return [signIn, result];
}

export default useSignIn;
