import { AddTask } from 'components/AddTask/AddTask';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { СontainerList } from '../ListPage/ListPage.styled';

export const CreatePage = () => {
  return (
    <СontainerList>
      <MainTitle text="Add new" />
      <AddTask />
    </СontainerList>
  );
};
