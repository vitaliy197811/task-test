import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px 30px 30px 30px;
  border: 2px solid blue;
  border-radius: 5px;
  background-color: aquamarine;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
`;

export const Input = styled.input`
  width: 415px;
  font-size: 20px;
  font-weight: 400;
  padding: 10px;
  margin: 0 0 20px 0;
  border-radius: 5px;
  border: 2px solid blue;

  :hover,
  :focus {
    background-color: grey;
    color: white;
    scale: 1.02;
  }
`;

export const Button = styled.button`
  width: 415px;
  font-size: 20px;
  font-weight: 400;
  padding: 10px;
  margin: 0 0 20px 0;
  border-radius: 5px;
  border: 2px solid blue;

  :hover,
  :focus {
    background-color: grey;
    color: white;
    scale: 1.02;
  }
`;