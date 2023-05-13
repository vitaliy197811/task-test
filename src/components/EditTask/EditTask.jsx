import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { editTask, delTask } from 'api';
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
import { Modal } from '../Modal/Modal';

export const EditTask = () => {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);
  const [placeholderData, setPlaceholderData] = useState('Data');
  const [placeholderTime, setPlaceholderTime] = useState('Time');
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
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
    await editTask(id, task);
    navigate(-1);
  };

  const togle = () => {
    setDone(!done);
    return;
  };

  const onDelete = async () => {
    await delTask(id);
    navigate(-1);
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

  useEffect(() => {
    const renderTask = async () => {
      if (location.state) {
        const { date, hours, message, done } = location.state;
        setDate(date);
        setHours(translateTime(hours));
        setMessage(message);
        setDone(done);
      }
    };
    renderTask();
  }, [location]);

  return (
    <>
      {isModalOpen && <Modal onClose={handleCloseModal} onDelete={onDelete} />}
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
