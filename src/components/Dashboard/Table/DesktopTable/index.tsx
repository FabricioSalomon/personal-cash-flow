import moment from "moment";
import { NumericFormat } from "react-number-format";
import { useTransactions } from "../../../../hooks/useTransactions";
import { DesktopContainer, TransactionTable, Value } from "./styles";

export function DesktopTable() {
  const { transactions } = useTransactions();

  return (
    <DesktopContainer>
      <TransactionTable>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>
                  <span title={transaction.description}>
                    {transaction.description}
                  </span>
                </td>
                <td>
                  <Value
                    title={transaction.amount.toString()}
                    className="price"
                  >
                    <NumericFormat
                      value={transaction.amount.toFixed(2)}
                      displayType={"text"}
                      prefix={` ${transaction.currency} `}
                    />
                  </Value>
                </td>
                <td>
                  <span title={transaction.category}>
                    {transaction.category}
                  </span>
                </td>
                <td>
                  <span
                    title={moment(transaction.createdAt)
                      .format("DD/MM/YYYY")
                      .toString()}
                  >
                    {moment(transaction.createdAt)
                      .format("DD/MM/YYYY")
                      .toString()}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TransactionTable>
    </DesktopContainer>
  );
}
