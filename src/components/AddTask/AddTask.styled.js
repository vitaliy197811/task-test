import styled from 'styled-components';
import checked from './checked.svg';

export const Form = styled.form`
  padding-top: 61px;
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
  margin: 0 0 35px 0;

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

export const Textarea = styled.textarea`
  direction: none;
  width: 269px;
  min-height: 236px;
  padding: 18px 33px;
  background: #312f36;
  border-radius: 37px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133%;
  color: #625f65;
  margin: 0 0 24px 0;
  resize: none;
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

export const Checkbox = styled.div`
  display: flex;
`;

export const Check = styled.div`
  background-color: ${props => (props.checked ? '#C1C0C2' : '#43404b')};

  width: 18px;
  height: 18px;
  border-radius: 4px;
  margin: 0 13px 0 0;

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
    margin: 0 18px 0 0;
  }

  @media (min-width: 1440px) {
    width: 28px;
    height: 28px;
    margin: 0 22px 0 0;
  }

  :hover,
  :focus,
  :active {
    background-color: grey;
    scale: 1.02;
  }
`;

export const Svg = styled.img`
  visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  background-image: url('${checked}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  border-radius: 4px;
  width: 18px;
  height: 18px;

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media (min-width: 1440px) {
    width: 28px;
    height: 28px;
  }
`;

export const Text = styled.p`
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 133%;
  color: #c1c0c2;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
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
  margin-top: 61px;

  :hover,
  :focus {
    background-color: #3483eb;
    color: white;
    scale: 1.02;
  }
`;