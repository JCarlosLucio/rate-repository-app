import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import useRepositories from '../../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const orderValues = {
  latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  highest: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowest: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
};

export const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState('latest');
  const [searchText, setSearchText] = useState('');
  const [searchKeyword] = useDebounce(searchText, 1000);
  const { repositories, fetchMore } = useRepositories({
    ...orderValues[order],
    searchKeyword,
    first: 8,
  });

  const goTo = (repositoryId) => navigate(`/${repositoryId}`);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      goTo={goTo}
      order={order}
      setOrder={setOrder}
      onEndReach={onEndReach}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  );
};
