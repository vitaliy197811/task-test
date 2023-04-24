import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Сontainer } from '../Сontainer.styled';

export const RegisterPage = () => {
  return (
    <Сontainer>
      <MainTitle text="Registration" />
      <RegisterForm />
    </Сontainer>
  );
};