import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

/*
    Para que minha aplicação tenha acesso aos contextos criados por mime, é necessário ter um provider.
    Como será utilizado em vários lugares, esse contexto pode ser adicionado no App.tsx.
    OBS.: Sempre que os dados dentro do contexto mudarem, os componentes que utilizam useContext serão renderizados.
*/

export type TransactionsProviderProps = {
  children: ReactNode;
};

export type Transaction = {
  id: number;
  description: string;
  amount: number;
  currency: string;
  type: "income" | "outcome";
  category: string;
  createdAt: Date;
};

export type newTransaction = Omit<Transaction, "id" | "currency" | "createdAt">;

export type TransactionsContext = {
  transactions: Transaction[];
  createNewTransaction: (newTransaction: newTransaction) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContext>(
  {} as TransactionsContext
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions").then(({ data }) => {
      setTransactions(data.transactions);
    });
  }, []);

  async function createNewTransaction(newTransaction: newTransaction) {
    if (newTransaction.type === "outcome") {
      newTransaction.amount *= -1;
    }
    const response = await api.post("/transaction", newTransaction);
    setTransactions([...transactions, response.data.transactions]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
