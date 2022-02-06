import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: #78affd;
  border: none;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  padding: 14px;
  min-width: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  &:active {
    transform: scale(0.98);
  }
`;

export default Button;
