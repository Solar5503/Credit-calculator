import styled from 'styled-components';

const AfterForOutput = styled.label`
  &::after {
    position: absolute;
    font-size: 22px;
    line-height: 26px;
    color: #373e81;
    right: -670px;
    bottom: 40px;
    content: ${(props) => props.placeholder};
  }

  @media (max-width: 1630px) {
    &::after {
      right: -660px;
  }

  @media (max-width: 1450px) {
    &::after {
      right: -580px;
  }

  @media (max-width: 1330px) {
    &::after {
      right: -500px;
  }

  @media (max-width: 1210px) {
    &::after {
      right: 20px;
  }

  @media (max-width: 1030px) {
    &::after {
      left: 785px;
  }

  @media (max-width: 930px) {
    &::after {
      left: 675px;
  }

  @media (max-width: 810px) {
    &::after {
      left: 585px;
  }

  @media (max-width: 775px) {
    &::after {
      left: 555px;
  }

  @media (max-width: 675px) {
    &::after {
      left: 460px;
  }

  @media (max-width: 600px) {
    &::after {
      left: 410px;
  }

  @media (max-width: 430px) {
    &::after {
      left: 310px;
  }

  @media (max-width: 380px) {
    &::after {
      left: 260px;
  }

  @media (max-width: 330px) {
    &::after {
      left: 220px;
  }
`;

export default AfterForOutput;
