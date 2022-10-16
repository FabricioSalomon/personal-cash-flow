import moment from "moment";
import { useContext } from "react";
import { NumericFormat } from "react-number-format";
import { TransactionsContext } from "../../../TransactionsContext";
import { CardOption, CardOptions } from "./Cards";
import {
  CardContainer,
  CardContent,
  Description,
  Title,
  Value,
} from "./styles";

export function Balance() {
  const { transactions } = useContext(TransactionsContext);

  const income = transactions.reduce(
    (income, transaction) => {
      return {
        total:
          transaction.type === "income"
            ? income.total + transaction.amount
            : income.total,
        lastUpdate: moment(income.lastUpdate).isBefore(transaction.createdAt)
          ? transaction.createdAt
          : income.lastUpdate,
        currency: transaction.currency,
      };
    },
    {
      total: 0,
      lastUpdate: new Date(0),
      currency: "R$",
    }
  );

  const outcome = transactions.reduce(
    (outcome, transaction) => {
      return {
        total:
          transaction.type === "outcome"
            ? outcome.total + transaction.amount
            : outcome.total,
        lastUpdate: moment(outcome.lastUpdate).isBefore(transaction.createdAt)
          ? transaction.createdAt
          : outcome.lastUpdate,
        currency: transaction.currency,
      };
    },
    {
      total: 0,
      lastUpdate: new Date(0),
      currency: "R$",
    }
  );

  function showValue(card: CardOption) {
    if (card.id === "income") {
      return (
        <NumericFormat
          value={income.total.toFixed(2)}
          displayType={"text"}
          prefix={` ${income.currency} `}
        />
      );
    } else if (card.id === "outcome") {
      return (
        <NumericFormat
          value={outcome.total.toFixed(2)}
          displayType={"text"}
          prefix={` ${outcome.currency} `}
        />
      );
    } else {
      const balance = income.total + outcome.total;
      return (
        <NumericFormat
          value={balance.toFixed(2)}
          displayType={"text"}
          prefix={` ${income.currency} `}
        />
      );
    }
  }

  function showDescription(card: CardOption) {
    if (
      card.id !== "balance" &&
      moment(income.lastUpdate).format("YYYY") > "2000"
    ) {
      if (card.id === "income") {
        return (
          <Description>
            <span>
              Última atualização:{" "}
              {moment(income.lastUpdate).format("DD MMMM YYYY")}
            </span>
          </Description>
        );
      } else {
        return (
          <Description>
            <span>
              Última atualização:{" "}
              {moment(outcome.lastUpdate).format("DD MMMM YYYY")}
            </span>
          </Description>
        );
      }
    }
  }

  return (
    <CardContainer>
      {CardOptions.map((card) => {
        return (
          <CardContent id={card.id} key={card.title}>
            <Title>
              <div>
                <span>{card.title}</span>
              </div>
              <div>
                <img src={card.img} alt={card.altText} />
              </div>
            </Title>
            <Value>
              <span>{showValue(card)}</span>
              {showDescription(card)}
            </Value>
          </CardContent>
        );
      })}
    </CardContainer>
  );
}
