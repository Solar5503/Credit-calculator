import type { NextPage } from 'next';
import styled from 'styled-components';
import Title from '../components/Title';
import Form from '../components/Form';
import Section from '../components/Section';
import Button from '../components/Button';
import Input from '../components/Input';
import AfterForInput from '../components/AfterForInput';
import Wrapper from '../components/Wrapper';

const Description = styled(Section)`
  grid-row: 1/-5;
`;

const Home: NextPage = () => {
  return (
    <>
      <Title>Кредитный калькулятор</Title>
      <Form>
        <Description>
          Чтобы расчитать стоимость кредита, пожалуйста, введите стоимость
          кредита в рублях, минимальная сумма 10 000 рублей, максимальная 10
          миллионов рублей.
          <br />
          <br />
          Процент по кредитам зависит от того - что это за кредит и что за банк,
          если ипотека это обычно от 8 и до 15, обычный кредит - до 30, быстрый
          займ или другие ненадежные источники до 500
          <br />
          <br />
          Обычно кредит берется от 1 месяца до 36 месяцев (3х лет), если вы
          расчитываете ипотеку.
        </Description>
        <Wrapper>
          <Input placeholder="Введите стоимость кредита" type="number" />
          <AfterForInput placeholder="'руб'"></AfterForInput>
        </Wrapper>
        <Wrapper>
          <Input
            placeholder="Введите процентную ставку"
            type="number"
            max={1000}
          />
          <AfterForInput placeholder="'%'"></AfterForInput>
        </Wrapper>
        <Wrapper>
          <Input placeholder="Введите срок кредитования" type="number" />
          <AfterForInput placeholder="'мес'"></AfterForInput>
        </Wrapper>
        <Button>Рассчитать</Button>
      </Form>
    </>
  );
};

export default Home;
