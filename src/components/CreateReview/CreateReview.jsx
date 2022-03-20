import { useNavigate } from 'react-router-native';
import { useSnackbar } from '../../contexts/SnackbarContext';
import useCreateReview from '../../hooks/useCreateReview';
import { CreateReviewContainer } from './CreateReviewContainer';

export const CreateReview = () => {
  const [createReview] = useCreateReview();
  const { setSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { repositoryId } = await createReview(values);
      navigate(`/${repositoryId}`);
      setSnackbar({ message: 'Created successfully', type: 'success' });
    } catch (e) {
      console.log('ERROR', JSON.stringify(e));
      const message = e?.message;
      setSnackbar({ message, type: 'error' });
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};
