import { List } from 'components/List/List';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { СontainerList } from '../СontainerList.styled';

export const ListPage = () => {
  return (
    <СontainerList>
      <MainTitle text="List" />
      <List />
    </СontainerList>
  );
};
