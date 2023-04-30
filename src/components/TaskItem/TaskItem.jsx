import { Message, Hours, Date } from './TaskItem.styled';

export const TaskItem = ({ date, hours, message }) => {
  const hour = Math.trunc(hours / 60);
  const minute = hours - hour*60;
  const changeMinutes = minute => {
    if (minute < 10) {
      return '0' + minute;
    }
    return minute;
  };
  
  return (
    <>
      <Message>{message}</Message>
      <Hours>
        {hour}:{changeMinutes(minute)}
      </Hours>
      <Date>{date}</Date>
    </>
  );
};
