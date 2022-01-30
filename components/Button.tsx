import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: 1.1rem;
  padding: 1rem;
  margin-top: 1.2rem;
  min-width: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

export default Button;
