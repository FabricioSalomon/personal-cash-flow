import logoImg from "../../assets/logo.svg";
import { Container, TopContent } from "./styles";

type HeaderProps = {
  handleNewTransactionModal: () => void;
};

export function Header({ handleNewTransactionModal }: HeaderProps) {
  return (
    <>
      <Container>
        <TopContent>
          <div>
            <img src={logoImg} alt="DtMoney logo" />
          </div>
          <div>
            <button type="button" onClick={() => handleNewTransactionModal()}>
              Nova transação
            </button>
          </div>
        </TopContent>
      </Container>
    </>
  );
}
