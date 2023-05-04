import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TaskItem } from '../TaskItem/TaskItem';
import { Loader } from '../Loader/Loader';
import { getTask } from 'api/serviseApi';
import { Button, Search, LoaderBox, Task, Svg, ListText } from './List.styled';

export const List = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const classDone = done => {
    if (done === true) {
      return toString(done);
    }
    return;
  };

  useEffect(() => {
    const renderTask = async () => {
      setLoading(true);
      try {
        const tasksData = await getTask();
        setTask(tasksData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    renderTask();
  }, []);

  const showVisibleTasks = () => {
    if (task) {
      const filteredTasks = task.filter(e =>
        e.message.toLowerCase().includes(search.toLowerCase())
      );
      return filteredTasks;
    }
    return;
  };
  const visibleTasks = showVisibleTasks();
  console.log(visibleTasks);

  return (
    <>
      <Button onClick={() => navigate('/add')} statefrom={{ from: location }}>
        New
        <Svg></Svg>
      </Button>
      <Search onInput={handleChange} type="text" placeholder="Search" />
      {loading ? (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      ) : visibleTasks && !loading ? (
        <ul>
          {visibleTasks.map(({ id, date, hours, message, done }) => (
            <Task
              done={classDone(done)}
              key={id}
              to={{ pathname: `/list/${id}` }}
              state={{ id, date, hours, message, done }}
              statefrom={{ from: location }}
            >
              <TaskItem id={id} date={date} hours={hours} message={message} />
            </Task>
          ))}
        </ul>
      ) : (
        <ListText>You don't have your tasks</ListText>
      )}
    </>
  );
};
