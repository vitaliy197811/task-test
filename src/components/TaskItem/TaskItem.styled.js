import styled from 'styled-components';

export const Message = styled.h3`
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 21px;
    line-height: 32px;
  }
`;

export const Hours = styled.p`
  position: absolute;
  left: 17px;
  bottom: 17px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  color: #999999;

  @media (min-width: 768px) {
    left: 25px;
    bottom: 25px;
    font-size: 21px;
    line-height: 32px;
  }
`;

export const Date = styled.div`
  position: absolute;
  right: 17px;
  bottom: 17px;
  font-family: 'MuseoModerno';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  color: #999999;

  @media (min-width: 768px) {
    right: 25px;
    bottom: 25px;
    font-size: 21px;
    line-height: 32px;
  }
`;