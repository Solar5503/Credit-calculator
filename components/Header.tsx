import styled from 'styled-components';

export interface Props {
  title: string;
}

const Title = styled.h1`
  line-height: 42px;
  font-size: 36px;
  text-align: center;
  margin: 32px 32px 0 32px;
`;

const Header = (props: Props) => {
  return (
    <header>
      <Title>{props.title}</Title>
    </header>
  );
};

Header.defaultProps = {
  title: 'Кредитный калькулятор',
};

export default Header;
