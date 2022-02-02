import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 22px;
  line-height: 26px;
  background-color: #e5eafa;
  border-radius: 10px 0px 0px 10px;
  padding: 16px;
  padding-right: 26px;

  @media (max-width: 1220px) {
    border-radius: 10px 10px 0px 0px;
  }
`;

export default Label;
