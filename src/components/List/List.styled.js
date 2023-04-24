import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Search = styled.input`
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
  margin: 34px 7px 17px 7px;

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

export const Task = styled(Link)`
  position: relative;
  margin-bottom: 17px;
  min-height: 142px;
  padding: 10px 10px 55px 10px;
  background: #201d1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (min-width: 768px) {
    min-height: 180px;
    padding: 20px 20px 70px 20px;
  }

  :hover,
  :focus,
  :active {
    background: #272f28;
    scale: 1.02;
  }
`;