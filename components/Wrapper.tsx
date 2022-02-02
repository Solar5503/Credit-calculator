import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  margin-bottom: 16px;

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
export default Wrapper;
