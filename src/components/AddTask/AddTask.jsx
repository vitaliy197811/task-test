import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from 'api';
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
  const [placeholderData, setPlaceholderData] = useState('Data');
  const [placeholderTime, setPlaceholderTime] = useState('Time');

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
  const time = Number(hour * 60) + Number(minutes);

  const handleSubmit = async e => {
    e.preventDefault();
    const task = {
      date,
      hours: time,
      message,
      done,
    };
    await createTask(task);
    navigate(-1);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          onInput={handleChange}
          value={date}
          type="text"
          pattern="^([0-9]{4})-([0-9]{2})-([0-9]{2})$"
          placeholder={placeholderData}
          onFocus={() => setPlaceholderData('YYYY-MM-DD')}
          onBlur={() => setPlaceholderData('Data')}
          title="Enter the date in the specified format. For example: 2023-12-12"
          name="date"
          required
        />
        <Input
          onInput={handleChange}
          value={hours}
          type="text"
          pattern="^(?:[01]\d|2[0-3]):[0-5]\d$"
          placeholder={placeholderTime}
          onFocus={() => setPlaceholderTime('--:--')}
          onBlur={() => setPlaceholderTime('Time')}
          title="Enter the time in the specified format. For example: 12:00"
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
            <Svg checked={done} border="0" />
          </Check>
          <Text>Is complete</Text>
        </Checkbox>
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
};
