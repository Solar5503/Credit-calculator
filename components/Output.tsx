import styled from 'styled-components';

const Output = styled.input`
  color: #373e81;
  display: block;
  width: ${(props) => props.width || 100}%;
  font-size: 22px;
  line-height: 26px;
  border: 5px solid #e5eafa;
  border-radius: 0px 10px 10px 0px;
  padding: 35px 76px 35px 21px;

  &::placeholder {
    color: #373e81;
  }

  & + label {
    position: relative;
  }

  @media (max-width: 1220px) {
    border-radius: 0px 0px 10px 10px;
  }
`;

export default Output;
