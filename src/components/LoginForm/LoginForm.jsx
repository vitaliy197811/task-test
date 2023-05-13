import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, loginAdmin } from 'api';
import { Form, Input, Button, Title } from './LoginForm.styled';

export const LoginForm = () => {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const navigate = useNavigate();
  const admin = process.env.REACT_APP_ADMIN;

  const handleChange = e => {
    // switch (e.target.name) {
    //   case 'name':
    //     setName(e.target.value);
    //     break;
    //   case 'password':
    //     setPassword(e.target.value);
    //     break;
    //   default:
    //     break;
    // }

    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // const user = {
    //   name,
    //   password,
    // };
    // console.log(user.name);

    if (formData.name === admin) {
      const data = await loginAdmin(formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(formData));
      navigate('/admin', { replace: false });
    }

    if (formData.name !== admin) {
      const data = await loginUser(formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(formData));
      navigate('/list', { replace: false });
    }
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
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      <Title to="/register">Registration</Title>
    </>
  );
};
