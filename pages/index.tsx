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
import { useState, useRef } from 'react';

const Description = styled(Section)`
  grid-row: 1/-5;
`;

const Home: NextPage = () => {
  const [loanCost, setLoanCost] = useState('');
  const [percent, setPercent] = useState('');
  const [month, setMonth] = useState('');
  const [output, setOutput] = useState<number[]>([]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const loanCostNum: number = +loanCost;
    const percentNum: number = +percent;
    const monthNum: number = +month;

    if (loanCostNum < 10000 || loanCostNum > 10000000) return;
    if (percentNum < 1 || percentNum > 1000) return;
    if (monthNum < 1) return;

    const percentMonth = percentNum / 12 / 100;
    const factorAnnuat =
      (percentMonth * (1 + percentMonth) ** monthNum) /
      ((1 + percentMonth) ** monthNum - 1);

    const payment = Math.round(loanCostNum * factorAnnuat);
    const income = Math.round(payment / 0.5);
    const overPayment = payment * monthNum - loanCostNum;
    const taxDeduction = Math.round(overPayment * 0.13);

    setOutput([payment, income, taxDeduction, overPayment]);

    setLoanCost('');
    setPercent('');
    setMonth('');
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
            type="text"
            autoFocus={true}
            min={10000}
            max={10000000}
            required
            value={loanCost
              .replace(/\D/g, '')
              .replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}
            onChange={(e) => setLoanCost(e.target.value.replace(/\D/g, ''))}
          />
          <AfterForInput placeholder="'руб'" />
        </div>
        <div>
          <Input
            placeholder="Введите процентную ставку"
            type="text"
            min={1}
            max={1000}
            required
            value={percent
              .replace(/\D/g, '')
              .replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}
            onChange={(e) => setPercent(e.target.value.replace(/\D/g, ''))}
          />
          <AfterForInput placeholder="'%'" />
        </div>
        <div>
          <Input
            placeholder="Введите срок кредитования"
            type="text"
            min={1}
            required
            value={month
              .replace(/\D/g, '')
              .replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}
            onChange={(e) => setMonth(e.target.value.replace(/\D/g, ''))}
          />
          <AfterForInput placeholder="'мес'" />
        </div>
        <Button
          type="submit"
          disabled={
            loanCost.length > 0 || percent.length > 0 || month.length > 0
              ? false
              : true
          }
          className={`${
            loanCost.length > 0 || percent.length > 0 || month.length > 0
              ? 'on'
              : ''
          }`}
        >
          Рассчитать
        </Button>
      </Form>
      <Wrapper>
        <Label>Ваш ежемесячный платёж будет составлять:</Label>
        <Output
          placeholder="Нажмите кнопку 'Рассчитать'"
          disabled
          value={`${output.length > 0 ? output[0].toLocaleString() : output}`}
        />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Для такого кредита рекомендованный доход:</Label>
        <Output
          placeholder="Нажмите кнопку 'Рассчитать'"
          disabled
          value={`${output.length > 0 ? output[1].toLocaleString() : output}`}
        />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Налоговый вычет, который можно получить:</Label>
        <Output
          placeholder="Нажмите кнопку 'Рассчитать'"
          disabled
          value={`${output.length > 0 ? output[2].toLocaleString() : output}`}
        />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
      <Wrapper>
        <Label>Переплата за срок кредитования:</Label>
        <Output
          placeholder="Нажмите кнопку 'Рассчитать'"
          disabled
          value={`${output.length > 0 ? output[3].toLocaleString() : output}`}
        />
        <AfterForOutput placeholder="'руб'" />
      </Wrapper>
    </>
  );
};

export default Home;
