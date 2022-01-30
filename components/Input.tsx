import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid #86a8e7;
  border-radius: 4px;
  display: block;
  width: ${(props) => props.width || 100}%;
  padding: 0.7rem;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &:focus {
    outline: none;
    border-color: #777;
  }
`;

export default Input;
