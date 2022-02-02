import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
export default Form;
