import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import balanceImg from "../../../assets/total.svg";

export type CardOption = {
  title: string;
  img: string;
  altText: string;
  id: string;
};

export const CardOptions: CardOption[] = [
  {
    title: "Entradas",
    img: incomeImg,
    altText: "Entradas",
    id: "income",
  },
  {
    title: "Saídas",
    img: outcomeImg,
    altText: "Saídas",
    id: "outcome",
  },
  {
    title: "Total",
    img: balanceImg,
    altText: "Total",
    id: "balance",
  },
];
