import type { NextPage } from 'next';
import Button from '../components/Button';
import Input from '../components/Input';
import Form from '../components/Form';
import Label from '../components/Label';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';

const Payment = styled(Label)`
  font-size: 2.5rem;
  margin: 0;
`;
const Calculate = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;
const FullInput = styled(Input)`
  grid-column: 1/-1;
`;
const FullButton = styled(Button)`
  grid-column: 1/-1;
`;

const Home: NextPage = () => {
  return (
    <>
      <Form>
        <Label>Рассчитайте свой кредит:</Label>
        <Calculate>
          <FullInput placeholder="Сколько вам нужно денег?" type="number" />
          <Input placeholder="Срок кредита" />
          <Input placeholder="Ставка, %" type="number" />
          <FullButton>Рассчитать</FullButton>
        </Calculate>

        <Label>Ежемесячный платеж составит:</Label>
        <Wrapper>
          <Payment>15000 ₽</Payment>
        </Wrapper>
      </Form>
    </>
  );
};

export default Home;
