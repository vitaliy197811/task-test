import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TaskItem } from '../TaskItem/TaskItem';
import { Loader } from '../Loader/Loader';
import { getTask } from 'api/serviseApi';
import { Button, Search, LoaderBox, Task, Svg, ListText } from './List.styled';


export const List = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState([]);
  const [, setSearch] = useState('');
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
        setTask(await getTask());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    renderTask();
  }, []);

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
      ) : task && !loading ? (
        <ul>
          {task.map(({ id, date, hours, message, done }) => (
            <Task
              done={classDone(done)}
              key={id}
              to={`/list/:${id}`}
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
