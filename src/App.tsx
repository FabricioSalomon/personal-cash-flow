// import styled from "styled-components";
import { useState } from "react";
import { AddTransactionModal } from "./components/AddTransactionModal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";

// const Title = styled.h1`
//   font-size: 64px;
//   color: #888;

//   button {
//     background-color: red;
//   }
// `;

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
    useState(false);

  function handleNewTransactionModal() {
    setNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <TransactionsProvider>
      {/* <Title>
      hello, world!
      <button>Teste</button>
      </Title> */}

      <Header handleNewTransactionModal={handleNewTransactionModal} />

      <Dashboard handleNewTransactionModal={handleNewTransactionModal} />

      <AddTransactionModal
        isOpen={isNewTransactionModalOpen}
        handleModal={handleNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
