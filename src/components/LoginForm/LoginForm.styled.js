import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  padding-top: 227px;
  width: 335px;

  @media (min-width: 768px) {
    width: 688px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Input = styled.input`
  direction: none;
  width: 269px;
  height: 26px;
  padding: 18px 33px;
  background: #312f36;
  border-radius: 134px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133%;
  color: #625f65;
  margin-bottom: 16px;
  border: none;
  outline: none;

  @media (min-width: 768px) {
    width: 622px;
  }

  :hover,
  :focus,
  :active {
    background-color: grey;
    color: black;
    scale: 1.02;

    ::placeholder {
      color: black;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 62px;
  background: #686082;
  border-radius: 134px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 133%;
  color: #f6ead4;
  cursor: pointer;
  margin-bottom: 17px;

  :hover,
  :focus {
    background-color: #3483eb;
    color: white;
    scale: 1.02;
  }
`;

export const Title = styled(NavLink)`
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 133%;
  color: #c1c0c2;
  text-align: center;
  cursor: pointer;

  :hover,
  :focus {
    scale: 1.2;
  }
`;