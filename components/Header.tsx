import styled from 'styled-components';

export interface Props {
  title: string;
}

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  padding: 1rem;
  border-bottom: 2px solid #fff;
  filter: drop-shadow(0 0 5px #000);
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
