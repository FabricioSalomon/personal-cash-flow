import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import { RadioBox, TransactionTypeContainer } from "./styles";

type CashFlowProps = {
  transactionType: string;
  onTransactionTypeChange: (type: string) => void;
};

export function CashFlow({
  transactionType,
  onTransactionTypeChange,
}: CashFlowProps) {
  return (
    <TransactionTypeContainer>
      <RadioBox
        isActive={transactionType === "income"}
        activeColor="green"
        onClick={() => onTransactionTypeChange("income")}
        type="button"
      >
        <img src={incomeImg} alt="Income" />
        Entrada
      </RadioBox>
      <RadioBox
        isActive={transactionType === "outcome"}
        activeColor="red"
        onClick={() => onTransactionTypeChange("outcome")}
        type="button"
      >
        <img src={outcomeImg} alt="Outcome" />
        Saída
      </RadioBox>
    </TransactionTypeContainer>
  );
}
