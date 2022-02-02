import styled from 'styled-components';

const AfterForInput = styled.label`
  &::after {
    position: absolute;
    left: 637px;
    bottom: 14px;
    font-size: 18px;
    content: ${(props) => props.placeholder};
  }

  @media (max-width: 1630px) {
    &::after {
      left: 625px;
  }

  @media (max-width: 1450px) {
    &::after {
      left: 545px;
  }
  
  @media (max-width: 1210px) {
    &::after {
      left: 935px;
  }

  @media (max-width: 1030px) {
    &::after {
      left: 790px;
  }

  @media (max-width: 930px) {
    &::after {
      left: 685px;
  }

  @media (max-width: 810px) {
    &::after {
      left: 585px;
  }

  @media (max-width: 775px) {
    &::after {
      left: 565px;
  }

  @media (max-width: 675px) {
    &::after {
      left: 470px;
  }

  @media (max-width: 600px) {
    &::after {
      left: 415px;
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

export default AfterForInput;
