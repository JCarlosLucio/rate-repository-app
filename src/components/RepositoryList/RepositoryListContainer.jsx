import { Component } from 'react';
import { FlatList, Pressable } from 'react-native';
import { ItemSeparator, RepositoryItem } from '../shared';
import { OrderPicker } from './OrderPicker';
import { Searchbar } from './Searchbar';

export class RepositoryListContainer extends Component {
  renderHeader = () => {
    const { order, setOrder, searchText, setSearchText } = this.props;
    const handleValueChange = (itemValue) => setOrder(itemValue);

    return (
      <>
        <Searchbar value={searchText} onChangeText={setSearchText} />
        <OrderPicker selectedValue={order} onValueChange={handleValueChange} />
      </>
    );
  };

  renderRepo = ({ item }) => {
    const { goTo } = this.props;

    return (
      <Pressable onPress={() => goTo(item.id)}>
        <RepositoryItem repository={item} />
      </Pressable>
    );
  };

  render() {
    const { repositories } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        renderItem={this.renderRepo}
        keyExtractor={(item) => item.id}
      />
    );
  }
}
