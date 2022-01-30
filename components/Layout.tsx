import Header from '../components/Header';
import Meta from './Meta';
import styled from 'styled-components';

const Main = styled.main`
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
