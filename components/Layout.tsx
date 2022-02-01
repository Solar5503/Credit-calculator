import Meta from './Meta';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.25);
  width: 1440px;
  margin-top: 32px;
  padding: 32px;
  padding-bottom: 14px;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
