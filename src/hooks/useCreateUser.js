import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import useSignIn from './useSignIn';

const useCreateUser = () => {
  const [signIn] = useSignIn();

  const [create, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    await create({
      variables: { user: { username, password } },
    });
    await signIn({ username, password });
  };

  return [createUser, result];
};

export default useCreateUser;
