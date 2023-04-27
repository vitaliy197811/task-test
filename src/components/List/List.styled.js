import styled from 'styled-components';
import { Link } from 'react-router-dom';
import plus from './plus.svg';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: absolute;
  width: 97px;
  height: 44px;
  left: 231px;
  top: 55px;

  background: rgba(255, 255, 255, 0.09);
  border-radius: 60px;

  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 18px;
    width: 110px;
    height: 50px;
    left: 440px;
    top: 77px;
  }

  @media (min-width: 1440px) {
    font-size: 21px;
    width: 120px;
    height: 55px;
    left: 780px;
    top: 97px;
  }

  :hover,
  :focus,
  :active {
    background-color: grey;
    scale: 1.02;

    ::placeholder {
      color: black;
    }
  }
`;

export const Svg = styled.div`
  width: 15px;
  height: 15px;
  background-image: url('${plus}');
  background-repeat: no-repeat;
  background-position: center center;
  color: black;

  @media (min-width: 768px) {
    scale: 1.2;
  }

  @media (min-width: 1440px) {
    scale: 1.5;
  }

  :hover,
  :focus,
  :active {
    color: black;
    scale: 1.02;
  }
`;

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
  margin: 34px 0 17px 0;

  border: none;
  outline: none;

  @media (min-width: 768px) {
    width: 622px;
  }

  @media (min-width: 1440px) {
    width: 1254px;
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

export const LoaderBox = styled.div`
display: flex;
width: 100%;
justify-content: center;
`;

export const Task = styled(Link)`
  position: relative;
  margin: 0 -7px 17px -7px;
  min-height: 142px;
  padding: 10px 10px 55px 10px;
  background: ${props => (props.done ? '#272F28' : '#201d1e')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (min-width: 768px) {
    min-height: 180px;
    margin: 0 -14px 34px -14px;
    padding: 20px 20px 70px 20px;
  }

  @media (min-width: 768px) {
    min-height: 180px;
    margin: 0 -21px 51px -21px;
    padding: 20px 20px 70px 20px;
  }

  :hover,
  :focus,
  :active {
    background: #312f36;
    scale: 1.02;
  }
`;

export const ListText = styled.div`
  display: block;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 21px;
    line-height: 32px;
  }
`;