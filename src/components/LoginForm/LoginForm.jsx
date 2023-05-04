import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, loginAdmin } from 'api/serviseApi';
import { Form, Input, Button, Title } from './LoginForm.styled';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
    console.log(user.name);
    
    if (user.name === 'Admin') {
      const data = await loginAdmin(user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/admin', { replace: false });
    }

    if (user.name !== 'Admin') {
      const data = await loginUser(user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/list', { replace: false });
    }
    window.location.reload();
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
