import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 280px;
  height: 173px;
  background: #fafafa;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 24px 24px 10px 24px;

  @media (min-width: 768px) {
    width: 320px;
    height: 213px;
  }
  @media (min-width: 1440px) {
    width: 360px;
    height: 253px;
  }
`;

export const Text = styled.h3`
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 128%;
  color: rgba(0, 0, 0, 0.87);

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const Span = styled.span`
  color: #757575;
`;


export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 10px;
  right: 24px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 76px;
  height: 31px;
  background: ${props => (props.no ? '#312f36' : '#686082')};
  border-radius: 134px;
  padding: 0px;
  cursor: pointer;
  margin-left: 11px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 133%;
  color: #f6ead4;

  @media (min-width: 768px) {
    width: 84px;
    height: 39px;
    margin-left: 15px;
  }
  @media (min-width: 1440px) {
    width: 92px;
    height: 47px;
    margin-left: 18px;
  }

  :hover,
  :focus {
    background: #3483eb;
    scale: 1.1;
  }
`;