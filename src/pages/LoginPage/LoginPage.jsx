import { LoginForm } from 'components/LoginForm/LoginForm';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Сontainer } from '../Сontainer.styled';

export const LoginPage = () => {
  return (
    <Сontainer>
      <MainTitle text="Login" />
      <LoginForm />
    </Сontainer>
  );
};
