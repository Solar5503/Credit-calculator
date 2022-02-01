import styled from 'styled-components';

const AfterForOutput = styled.label`
  &::after {
    position: absolute;
    font-size: 22px;
    line-height: 26px;
    color: #373e81;
    right: -675px;
    bottom: 40px;
    content: ${(props) => props.placeholder};
  }
`;

export default AfterForOutput;
