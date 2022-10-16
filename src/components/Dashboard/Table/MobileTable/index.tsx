import moment from "moment";
import { useContext } from "react";
import { NumericFormat } from "react-number-format";
import { TransactionsContext } from "../../../../TransactionsContext";
import {
  Card,
  Description,
  Header,
  MobileContainer,
  MobileHeader,
  Quantity,
  Title,
  Value,
} from "./styles";

export function MobileTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <MobileContainer>
      <MobileHeader>
        <Title>Listagem</Title>
        <Quantity> {transactions.length} itens</Quantity>
      </MobileHeader>
      {transactions.map((transaction) => {
        return (
          <Card key={transaction.id}>
            <Header>{transaction.description}</Header>
            <Value>
              <NumericFormat
                value={transaction.amount.toFixed(2)}
                displayType={"text"}
                allowLeadingZeros
                prefix={` ${transaction.currency} `}
              />
            </Value>
            <Description>
              <span>{transaction.category}</span>
              <span>
                {moment(transaction.createdAt).format("DD/MM/YYYY").toString()}
              </span>
            </Description>
          </Card>
        );
      })}
    </MobileContainer>
  );
}
