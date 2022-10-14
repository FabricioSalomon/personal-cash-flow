import { useState } from "react";
import { Balance } from "./Balance";
import { Container } from "./styles";
import { Table } from "./Table";

export type CashFlow = {
  amount: number;
  lastUpdate: Date;
  currency: string;
};

type DashboardProps = {
  handleNewTransactionModal: () => void;
};

export function Dashboard({ handleNewTransactionModal }: DashboardProps) {
  const [income, setIncome] = useState<CashFlow>({
    amount: 0,
    lastUpdate: new Date(0),
    currency: "R$",
  });
  const [outcome, setOutcome] = useState<CashFlow>({
    amount: 0,
    lastUpdate: new Date(0),
    currency: "R$",
  });

  function handleIncomeChange(income: CashFlow) {
    setIncome({
      amount: income.amount,
      lastUpdate: income.lastUpdate,
      currency: income.currency,
    });
  }

  function handleOutcomeChange(outcome: CashFlow) {
    setOutcome({
      amount: outcome.amount,
      lastUpdate: outcome.lastUpdate,
      currency: outcome.currency,
    });
  }

  return (
    <Container>
      <Balance income={income} outcome={outcome} />
      <Table
        onIncomeChange={handleIncomeChange}
        onOutcomeChange={handleOutcomeChange}
        handleNewTransactionModal={handleNewTransactionModal}
      />
    </Container>
  );
}
