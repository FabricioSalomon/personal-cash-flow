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
  return (
    <Container>
      <Balance />
      <Table handleNewTransactionModal={handleNewTransactionModal} />
    </Container>
  );
}
