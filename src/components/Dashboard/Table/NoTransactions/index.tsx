import { Container } from "./styles";

type NoTransactionsProps = {
  handleNewTransactionModal: () => void;
};

export function NoTransactions({
  handleNewTransactionModal,
}: NoTransactionsProps) {
  return (
    <Container>
      <span>Nenhuma transação cadastrada.</span>
      <button type="button" onClick={handleNewTransactionModal}>
        Clique para cadastrar uma nova transação.
      </button>
    </Container>
  );
}
