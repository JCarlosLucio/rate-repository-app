import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import useRepositories from '../../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const orderValues = {
  latest: { by: 'CREATED_AT', direction: 'DESC' },
  highest: { by: 'RATING_AVERAGE', direction: 'DESC' },
  lowest: { by: 'RATING_AVERAGE', direction: 'ASC' },
};

export const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState('latest');
  const [searchText, setSearchText] = useState('');
  const [searchKeyword] = useDebounce(searchText, 1000);
  const { repositories } = useRepositories(
    orderValues[order].by,
    orderValues[order].direction,
    searchKeyword
  );

  const goTo = (repositoryId) => navigate(`/${repositoryId}`);

  return (
    <RepositoryListContainer
      repositories={repositories}
      goTo={goTo}
      order={order}
      setOrder={setOrder}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  );
};
