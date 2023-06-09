import styled from 'styled-components';
import checked from '../../images/checked.svg';
import del from '../../images/delete.svg';

export const Form = styled.form`
  padding-top: 61px;
`;

export const Input = styled.input`
  direction: none;
  box-sizing: border-box;
  width: 335px;
  height: 62px;
  padding: 18px 33px;
  border-radius: 134px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133%;
  margin: 0 0 35px 0;
  color: #c1c0c2;
  background: #312f36;

  border: none;
  outline: none;

  @media (min-width: 768px) {
    width: 688px;
  }

  @media (min-width: 1440px) {
    width: 1320px;
  }

  :hover,
  :focus {
    background-color: #666666;
    scale: 1.02;

    ::placeholder {
      color: #c1c0c2;
    }
  }
`;

export const Textarea = styled.textarea`
  direction: none;
  box-sizing: border-box;
  width: 335px;
  min-height: 236px;
  padding: 18px 33px;
  border-radius: 37px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133%;
  margin: 0 0 24px 0;
  resize: none;
  border: none;
  outline: none;
  color: #c1c0c2;
  background: #312f36;

  @media (min-width: 768px) {
    width: 688px;
  }

  @media (min-width: 1440px) {
    width: 1320px;
  }

  :hover,
  :focus {
    background-color: #666666;
    scale: 1.02;

    ::placeholder {
      color: #c1c0c2;
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
  :focus {
    background-color: grey;
    scale: 1.02;
  }
`;

export const Svg = styled.div`
  visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  background-image: url('${checked}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

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

export const Common = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const DelSvg = styled.div`
  background-image: url('${del}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 1440px) {
    width: 34px;
    height: 34px;
  }

  :hover,
  :focus {
    scale: 1.1;
  }
`;