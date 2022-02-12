import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid;
  border-color: ${(props) => props.color || '#9298cf'};
  border-radius: 10px;
  color: #373e81;
  display: block;
  width: ${(props) => props.width || 100}%;
  padding: 14px 63px 13px 16px;
  font-size: inherit;

  &::placeholder {
    color: #9298cf;
  }
  &:focus {
    outline: none;
    border-color: #006aff;
  }
  &:invalid:not(:placeholder-shown) {
    border-color: red;
  }
`;

export default Input;
