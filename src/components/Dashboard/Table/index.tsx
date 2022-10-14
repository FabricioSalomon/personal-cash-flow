/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import { useEffect, useState } from "react";
import { Transaction } from "../../../index";
import { api } from "../../../services/api";
import { CashFlow } from "../index";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";
import { NoTransactions } from "./NoTransactions";

type TableProps = {
  onIncomeChange: (income: CashFlow) => void;
  onOutcomeChange: (outcome: CashFlow) => void;
  handleNewTransactionModal: () => void;
};

export function Table({
  onIncomeChange,
  onOutcomeChange,
  handleNewTransactionModal,
}: TableProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // function calculateTotal(transactions: Transaction[]) {
    //   const income = transactions
    //     .filter((transaction) => transaction.type === "income")
    //     .map((income) => ({
    //       amount: income.amount,
    //       lastUpdate: income.createdAt,
    //       currency: income.currency,
    //     }))
    //     .reduce(
    //       (total, income) => {
    //         return {
    //           currency: income.currency,
    //           amount: total.amount + income.amount,
    //           lastUpdate: moment(total.lastUpdate).isBefore(income.lastUpdate)
    //             ? income.lastUpdate
    //             : total.lastUpdate,
    //         };
    //       },
    //       {
    //         amount: 0,
    //         lastUpdate: new Date(0),
    //         currency: "R$",
    //       }
    //     );

    //   const outcome = transactions
    //     .filter((transaction) => transaction.type === "outcome")
    //     .map((outcome) => ({
    //       amount: outcome.amount,
    //       lastUpdate: outcome.createdAt,
    //       currency: outcome.currency,
    //     }))
    //     .reduce(
    //       (total, outcome) => {
    //         return {
    //           currency: outcome.currency,
    //           amount: total.amount + outcome.amount,
    //           lastUpdate: moment(total.lastUpdate).isBefore(outcome.lastUpdate)
    //             ? outcome.lastUpdate
    //             : total.lastUpdate,
    //         };
    //       },
    //       {
    //         amount: 0,
    //         lastUpdate: new Date(0),
    //         currency: "R$",
    //       }
    //     );

    //   onIncomeChange(income);
    //   onOutcomeChange(outcome);
    // }

    api.get("/transactions").then(({ data }) => {
      setTransactions(data.transactions);
      // calculateTotal(data.transactions);
    });
  }, []);

  return (
    <>
      {transactions.length > 0 ? (
        <>
          <MobileTable transactions={transactions} />
          <DesktopTable transactions={transactions} />{" "}
        </>
      ) : (
        <NoTransactions handleNewTransactionModal={handleNewTransactionModal} />
      )}
    </>
  );
}
