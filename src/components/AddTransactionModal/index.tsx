import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { CashFlow } from "./CashFlow";
import { Content, Header } from "./styles";

/* 
  Acessibilidade: a div root se torna o próprio modal, para realmente
  não interagir com a parte de trás do modal e confundir quem usa acessibilidade
*/
Modal.setAppElement("#root");

type AddTransactionModalProps = {
  isOpen: boolean;
  handleModal: () => void;
};

export function AddTransactionModal({
  isOpen,
  handleModal,
}: AddTransactionModalProps) {
  const { createNewTransaction } = useTransactions();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<"income" | "outcome">("income");
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const newTransaction = {
      description,
      amount,
      type,
      category,
    };

    await createNewTransaction(newTransaction);

    handleModal();
    setAmount(0);
    setCategory("");
    setType("income");
    setDescription("");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModal}
      contentLabel="Add transaction"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Header>
        <h2>Cadastrar transação</h2>
        <img src={closeImg} alt="Close" onClick={() => handleModal()} />
      </Header>
      <Content onSubmit={handleCreateNewTransaction}>
        <div>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Descrição"
            type="text"
          />
          <input
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            placeholder="Preço"
            type="number"
          />
          <CashFlow transactionType={type} onTransactionTypeChange={setType} />
          <input
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Categoria"
            type="text"
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </Content>
    </Modal>
  );
}
function onRequestClose() {
  throw new Error("Function not implemented.");
}
