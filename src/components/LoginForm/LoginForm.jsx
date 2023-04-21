import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/authOperations';
import { Form, Label, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(logIn({ email, password }));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Login
          <Input
            onInput={handleChange}
            value={email}
            type="email"
            placeholder="email"
            name="email"
            required
          />
        </Label>
        <Label>
          Password
          <Input
            onInput={handleChange}
            value={password}
            type="password"
            placeholder="password"
            name="password"
            required
          />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};
