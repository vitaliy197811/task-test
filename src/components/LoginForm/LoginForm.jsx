import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'api/serviseApi';
// import { useDispatch } from 'react-redux';
import { Form, Input, Button, Title } from './LoginForm.styled';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem('user'));
  if (data) {
    setName(data.name);
    setPassword(data.password);
  } 

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
    // localStorage.setItem('user', [setName, setPassword]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = {
      name,
      password,
    };

    const data = await loginUser(user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/list');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          onInput={handleChange}
          value={name}
          type="text"
          placeholder="Login"
          name="name"
          required
        />
        <Input
          onInput={handleChange}
          value={password}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      <Title to="/register">Registration</Title>
    </>
  );
};
