import type { NextPage } from 'next';
import styled from 'styled-components';
import Title from '../components/Title';
import Form from '../components/Form';
import Section from '../components/Section';
import Button from '../components/Button';
import Input from '../components/Input';
import AfterForInput from '../components/AfterForInput';
import Wrapper from '../components/Wrapper';
import Label from '../components/Label';
import Output from '../components/Output';
import AfterForOutput from '../components/AfterForOutput';

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
        <div>
          <Input
            placeholder="Введите стоимость кредита"
            type="number"
            autoFocus
            min={10000}
            max={10000000}
            required
          />
          <AfterForInput placeholder="'руб'" />
        </div>
        <div>
          <Input
            placeholder="Введите процентную ставку"
            type="number"
            min={0}
            max={1000}
            required
          />
          <AfterForInput placeholder="'%'" />
        </div>
        <div>
          <Input
            placeholder="Введите срок кредитования"
            type="number"
            min={1}
            required
          />
          <AfterForInput placeholder="'мес'" />
        </div>
        <Button>Рассчитать</Button>
      </Form>
      <Wrapper>
        <Label>Ваш ежемесячный платёж будет составлять:</Label>
        <Output placeholder="8 300" disabled />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Для такого кредита рекомендованный доход:</Label>
        <Output placeholder="14 000" disabled />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Налоговый вычет, который можно получить:</Label>
        <Output placeholder="2 000" disabled />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Переплата за срок кредитования:</Label>
        <Output placeholder="4 000" disabled />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
    </>
  );
};

export default Home;
