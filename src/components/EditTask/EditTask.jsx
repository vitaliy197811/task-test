import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTask, editTask, delTask } from 'api/serviseApi';
import {
  Form,
  Input,
  Textarea,
  Button,
  Checkbox,
  Check,
  Svg,
  Text,
  Common,
  DelSvg,
} from '../AddTask/AddTask.styled';
import { Modal} from '../Modal/Modal';

export const EditTask = () => {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState('');
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const taskId = id.slice(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = e => {
    switch (e.target.name) {
      case 'date':
        setDate(e.target.value);
        break;
      case 'hours':
        setHours(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };
  
  const translateTime = hours => {
    const hour = Math.trunc(hours / 60);
    const minute = hours - hour * 60;
    if (minute < 10) {
      const time = `${hour}:0${minute}`;
      return time;
    }
    const time = `${hour}:${minute}`;
    return time;
  };

  
  const [hour, minutes] = hours.split(':');
  const time = Number(hour * 60) + Number(minutes);
  
  const handleSubmit = async e => {
    e.preventDefault();
    const task = {
      date: date,
      hours: time,
      message,
      done,
    };
    await editTask(taskId, task);
    navigate(-1);
  };

  const togle = () => {
    setDone(!done);
    return;
  };

  const onDelete = async () => {
    await delTask(taskId);
    navigate(-1);
  };

  useEffect(() => {
    const renderTask = async () => {
      try {
        const taskUser = await getTask();
        const task = taskUser.find(i => i.id === Number(taskId));
        setDate(task.date);
        setHours(translateTime(task.hours));
        setMessage(task.message);
        setDone(task.done);
      } catch (error) {
        console.log(error);
      }
    };
    renderTask();
  }, [taskId]);

  return (
    <>
      {isModalOpen && <Modal onClose={handleCloseModal} onDelete={onDelete} />}
      <Form onSubmit={handleSubmit}>
        <Input
          onInput={handleChange}
          value={date}
          type="text"
          // pattern={/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/}
          name="date"
        />
        <Input
          onInput={handleChange}
          value={hours}
          type="text"
          // pattern={/^(?:[01]\d|2[0-3]):[0-5]\d$/}
          name="hours"
        />
        <Textarea
          onInput={handleChange}
          value={message}
          type="text"
          name="message"
        />
        <Common>
          <Checkbox>
            <Check onClick={togle} checked={done}>
              <Svg checked={done} />
            </Check>
            <Text>Is complete</Text>
          </Checkbox>
          <DelSvg onClick={() => setIsModalOpen(true)} />
        </Common>

        <Button type="submit">Create</Button>
      </Form>
    </>
  );
};
