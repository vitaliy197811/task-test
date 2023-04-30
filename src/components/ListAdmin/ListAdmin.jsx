import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TaskItem } from '../TaskItem/TaskItem';
import { Loader } from '../Loader/Loader';
import { getUsers, getUsersTask } from 'api/serviseApi';
import { Search, LoaderBox, Task, ListText, Name } from './ListAdmin.styled';


export const ListAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const classDone = done => {
    if (done === true) {
      return toString(done);
    }
    return;
  };

  const showVisibleTasks = () => {
    const filteredUsers = users.map(user => {
      const filteredTasks = user.task.filter(task =>
        task.message.toLowerCase().includes(search.toLowerCase())
      );
      const filteredMessages = filteredTasks.map(task => task);
      return {
        userId: user.userId,
        name: user.name,
        task: filteredMessages,
      };
    });
    return filteredUsers;
  };
  const visibleTasks = showVisibleTasks();

  useEffect(() => {
    const renderTask = async () => {
      setLoading(true);
      try {
        const allUsers = await getUsers();
        const tasksUsers = await Promise.all(
          allUsers.map(async ({ id, name }) => {
            const task = await getUsersTask(id);
            return {
              userId: id,
              name,
              task,
            };
          })
        );
        setUsers(tasksUsers);
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
      <Search onInput={handleChange} type="text" placeholder="Search" />
      {loading ? (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      ) : visibleTasks && !loading ? (
        <ul>
          {visibleTasks.map(user => (
            <li key={user.userId}>
              {user.task.length > 0 && <Name>{user.name}</Name>}
              <ul>
                {user.task.map(task => (
                  <Task
                    done={classDone(task.done)}
                    key={task.id}
                    to={`/list/:${task.id}`}
                    statefrom={{ from: location }}
                  >
                    <TaskItem
                      id={task.id}
                      date={task.date}
                      hours={task.hours}
                      message={task.message}
                    />
                  </Task>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <ListText>You don't have your users</ListText>
      )}
    </>
  );
};
