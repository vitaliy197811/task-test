import { Message, Hours, Date } from './TaskItem.styled';

export const TaskItem = ({ date, hours, message }) => {
  return (
    <>
      <Message>{message}</Message>
      <Hours>{hours}</Hours>
      <Date>{date}</Date>
    </>
  );
};
