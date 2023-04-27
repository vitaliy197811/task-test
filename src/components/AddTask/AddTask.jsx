import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create } from 'api/serviseApi';
import {
  Form,
  Input,
  Textarea,
  Button,
  Checkbox,
  Check,
  Svg,
  Text,
} from './AddTask.styled';

export const AddTask = () => {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);

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

  const togle = () => {
    setDone(!done);
    return;
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
    await create(task);
    navigate('/list');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          onInput={handleChange}
          value={date}
          type="text"
          // pattern={/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/}
          placeholder="Date"
          name="date"
          required
        />
        <Input
          onInput={handleChange}
          value={hours}
          type="text"
          // pattern={/^(?:[01]\d|2[0-3]):[0-5]\d$/}
          placeholder="Time"
          name="hours"
          required
        />
        <Textarea
          onInput={handleChange}
          value={message}
          type="text"
          placeholder="Note"
          name="message"
          required
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
