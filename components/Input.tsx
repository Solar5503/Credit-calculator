import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid #9298cf;
  border-radius: 10px;
  color: #373e81;
  display: block;
  width: ${(props) => props.width || 100}%;
  padding: 14px 63px 13px 16px;
  font-size: inherit;
  position: relative;
  &::placeholder {
    color: #9298cf;
  }
  &:focus {
    outline: none;
    border-color: #777;
  }
  & + label {
    position: relative;
  }
`;

export default Input;
