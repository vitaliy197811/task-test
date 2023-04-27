import { EditTask } from 'components/EditTask/EditTask';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { СontainerList } from '../ListPage/ListPage.styled';

export const EditPage = () => {
  return (
    <СontainerList>
      <MainTitle text="Edit" />
      <EditTask />
    </СontainerList>
  );
};
