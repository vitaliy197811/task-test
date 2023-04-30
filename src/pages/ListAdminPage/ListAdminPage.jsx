import { ListAdmin } from 'components/ListAdmin/ListAdmin';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { СontainerList } from '../ListPage/ListPage.styled';

export const ListAdminPage = () => {
  return (
    <СontainerList>
      <MainTitle text="List" />
      <ListAdmin />
    </СontainerList>
  );
};
