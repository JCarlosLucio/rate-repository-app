import { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const orderValues = {
  latest: { by: 'CREATED_AT', direction: 'DESC' },
  highest: { by: 'RATING_AVERAGE', direction: 'DESC' },
  lowest: { by: 'RATING_AVERAGE', direction: 'ASC' },
};

export const RepositoryList = () => {
  const [order, setOrder] = useState('latest');
  const { repositories } = useRepositories(
    orderValues[order].by,
    orderValues[order].direction
  );

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
    />
  );
};
