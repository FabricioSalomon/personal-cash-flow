import { useTransactions } from "../../../hooks/useTransactions";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";
import { NoTransactions } from "./NoTransactions";

type TableProps = {
  handleNewTransactionModal: () => void;
};

export function Table({ handleNewTransactionModal }: TableProps) {
  const { transactions } = useTransactions();

  return (
    <>
      {transactions.length > 0 ? (
        <>
          <MobileTable />
          <DesktopTable />
        </>
      ) : (
        <NoTransactions handleNewTransactionModal={handleNewTransactionModal} />
      )}
    </>
  );
}
