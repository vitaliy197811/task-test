import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from 'api';
import { Form, Input, Button, Title } from '../LoginForm/LoginForm.styled';

export const RegisterForm = () => {
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
    await registerUser(user);

    const data = await loginUser(user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/list');
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
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
          title="Password must contain at least 8 characters, including at least one number, one lowercase letter, and one uppercase letter."
          required
        />
        <Button type="submit">Create account</Button>
      </Form>
      <Title to="/">Login</Title>
    </>
  );
};
