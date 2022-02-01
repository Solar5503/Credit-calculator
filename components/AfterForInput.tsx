import styled from 'styled-components';

const AfterForInput = styled.label`
  &::after {
    position: absolute;
    left: 637px;
    bottom: 14px;
    font-size: 18px;
    content: ${(props) => props.placeholder};
  }
`;

export default AfterForInput;
