import { useNavigate } from 'react-router-native';
import { useSnackbar } from '../../contexts/SnackbarContext';
import useSignIn from '../../hooks/useSignIn';
import { SignInContainer } from './SignInContainer';

export const SignIn = () => {
  const [signIn, { loading }] = useSignIn();
  const navigate = useNavigate();
  const { setSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/', { replace: true });
      setSnackbar({ message: `Welcome back, ${username}!`, type: 'success' });
    } catch (e) {
      console.log(e);
      setSnackbar({ message: e?.message, type: 'error' });
    }
  };

  return <SignInContainer onSubmit={onSubmit} loading={loading} />;
};
