import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTask, edit } from 'api/serviseApi';
import {
  Form,
  Input,
  Textarea,
  Button,
  Checkbox,
  Check,
  Svg,
  Text,
} from '../AddTask/AddTask.styled';

export const EditTask = () => {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState('');
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

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
  const time = hour * 60 + minutes;

  const handleSubmit = async e => {
    e.preventDefault();
    const task = {
      date: new Date(date).getTime(),
      hours: Number(time),
      message,
      done,
    };
    await edit(id[1], task);
    navigate('/list');
  };

  const togle = () => {
    setDone(!done);
    return;
  };

  useEffect(() => {
    const renderTask = async () => {
      try {
        const taskUser = await getTask();
        const task = taskUser.find(i => i.id === Number(id[1]));
        setDate(task.date);
        setHours(translateTime(task.hours));
        setMessage(task.message);
        setDone(task.done);
        console.log(task);
      } catch (error) {
        console.log(error);
      }
    };
    renderTask();
  }, [id]);

  return (
    <>
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
        <Checkbox>
          <Check onClick={togle} checked={done}>
            <Svg checked={done} />
          </Check>
          <Text>Is complete</Text>
        </Checkbox>
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
};
