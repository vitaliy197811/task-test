import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TaskItem } from '../TaskItem/TaskItem';
import { getTask } from 'api/serviseApi';
import { Search, Task } from './List.styled';

export const List = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState([]);
  const [, setSearch] = useState('');
  const location = useLocation();

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const renderTask = async () => {
      setLoading(true);
      try {
        const data = await getTask();
        setTask(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    renderTask();
  }, []);

  console.log(task);
  return (
    <>
      <Search onInput={handleChange} type="text" placeholder="Search" />
      {loading && <div>Loading...</div>}
      <ul>
        {task.map(({ id, date, hours, message, done }) => (
          <Task key={id} to={`/track/:${id}`} statefrom={{ from: location }}>
            <TaskItem
              id={id}
              date={date}
              hours={hours}
              message={message}
            />
          </Task>
        ))}
      </ul>
    </>
  );
};
