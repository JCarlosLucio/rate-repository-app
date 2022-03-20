import { useNavigate } from 'react-router-native';
import { useSnackbar } from '../../contexts/SnackbarContext';
import useCreateUser from '../../hooks/useCreateUser';
import { SignUpContainer } from './SignUpContainer';

export function SignUp() {
  const [createUser] = useCreateUser();
  const navigate = useNavigate();
  const { setSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await createUser({ username, password });
      navigate('/', { replace: true });
      setSnackbar({ message: `Welcome, ${username}!`, type: 'success' });
    } catch (e) {
      console.log(e);
      setSnackbar({ message: e?.message, type: 'error' });
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
}
