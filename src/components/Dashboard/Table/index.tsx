import { useContext } from "react";
import { TransactionsContext } from "../../../TransactionsContext";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";
import { NoTransactions } from "./NoTransactions";

type TableProps = {
  handleNewTransactionModal: () => void;
};

export function Table({ handleNewTransactionModal }: TableProps) {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      {transactions.length > 0 ? (
        <>
          <MobileTable />
          <DesktopTable />{" "}
        </>
      ) : (
        <NoTransactions handleNewTransactionModal={handleNewTransactionModal} />
      )}
    </>
  );
}
