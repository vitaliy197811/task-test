import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, loginAdmin } from 'api/serviseApi';
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
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = {
      name,
      password,
    };

    if (user.name === 'Admin' && user.password === 'password') {
      const data = await loginAdmin(user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/admin');
    } else {
      const data = await loginUser(user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/list');
    }
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
