import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from 'api';
import { Form, Input, Button, Title } from '../LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await registerUser(formData);

    const data = await loginUser(formData);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(formData));
    navigate('/list');
    window.location.reload();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          onInput={handleChange}
          value={formData.name}
          type="text"
          placeholder="Login"
          name="name"
          required
        />
        <Input
          onInput={handleChange}
          value={formData.password}
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
