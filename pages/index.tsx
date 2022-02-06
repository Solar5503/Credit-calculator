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
import { useState } from 'react';

const Description = styled(Section)`
  grid-row: 1/-5;
`;

const Home: NextPage = () => {
  const [loanCost, setLoanCost] = useState(0);
  const [percent, setPercent] = useState(0);
  const [month, setMonth] = useState(0);

  let payment: number = 0;
  let income: number = 0;
  let overPayment: number = 0;
  let taxDeduction: number = 0;
  // const [payment, setPayment] = useState(0);
  // const [income, setIncome] = useState(0);
  // const [overPayment, setOverPayment] = useState(0);
  // const [taxDeduction, setTaxDeduction] = useState(0);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (loanCost < 10000 || loanCost > 10000000) return;
    if (percent < 0 || percent > 1000) return;
    if (month < 1) return;

    const percentMonth = percent / 12 / 100;
    const factorAnnuat =
      (percentMonth * (1 + percentMonth) ** month) /
      ((1 + percentMonth) ** month - 1);

    payment = Math.round(loanCost * factorAnnuat);
    income = Math.round(payment / 0.5);
    overPayment = payment * month - loanCost;
    taxDeduction = Math.round(overPayment * 0.13);

    console.log(factorAnnuat);
    console.log('payment', Math.round(loanCost * factorAnnuat));
    console.log('income', Math.round(payment / 0.5));
    console.log('overPayment', payment * month - loanCost);
    console.log('tax', Math.round(overPayment * 0.13));
  };
  return (
    <>
      <Title>Кредитный калькулятор</Title>
      <Form onSubmit={onSubmit}>
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
            autoFocus={true}
            min={10000}
            max={10000000}
            required
            value={loanCost}
            onChange={(e) => setLoanCost(+e.target.value)}
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
            value={percent}
            onChange={(e) => setPercent(+e.target.value)}
          />
          <AfterForInput placeholder="'%'" />
        </div>
        <div>
          <Input
            placeholder="Введите срок кредитования"
            type="number"
            min={1}
            required
            value={month}
            onChange={(e) => setMonth(+e.target.value)}
          />
          <AfterForInput placeholder="'мес'" />
        </div>
        <Button type="submit">Рассчитать</Button>
      </Form>
      <Wrapper>
        <Label>Ваш ежемесячный платёж будет составлять:</Label>
        <Output
          placeholder="Нажмите кнопку 'Рассчитать'"
          disabled
          value={payment}
        />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Для такого кредита рекомендованный доход:</Label>
        <Output
          placeholder="Нажмите кнопку 'Рассчитать'"
          disabled
          value={income}
        />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Налоговый вычет, который можно получить:</Label>
        <Output
          placeholder="Нажмите кнопку 'Рассчитать'"
          disabled
          value={taxDeduction}
        />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Переплата за срок кредитования:</Label>
        <Output
          placeholder="Нажмите кнопку 'Рассчитать'"
          disabled
          value={overPayment}
        />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
    </>
  );
};

export default Home;
