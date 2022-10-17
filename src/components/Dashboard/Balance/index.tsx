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

  const summary = transactions.reduce(
    (cashFlow, transaction) => {
      if (transaction.type === "income") {
        cashFlow.income = {
          total: cashFlow.income.total + transaction.amount,
          lastUpdate: checkLastUpdate(
            transaction.createdAt,
            cashFlow.income.lastUpdate
          ),
          currency: transaction.currency,
        };
      } else {
        cashFlow.outcome = {
          total: cashFlow.outcome.total + transaction.amount,
          lastUpdate: checkLastUpdate(
            transaction.createdAt,
            cashFlow.outcome.lastUpdate
          ),
          currency: transaction.currency,
        };
      }
      return {
        ...cashFlow,
        balance: cashFlow.income.total + cashFlow.outcome.total,
      };
    },
    {
      income: {
        total: 0,
        lastUpdate: new Date(0),
        currency: "R$",
      },
      outcome: {
        total: 0,
        lastUpdate: new Date(0),
        currency: "R$",
      },
      balance: 0,
    }
  );

  function showValue(card: CardOption) {
    if (card.id === "income") {
      return (
        <NumericFormat
          value={summary.income.total.toFixed(2)}
          displayType={"text"}
          prefix={` ${summary.income.currency} `}
        />
      );
    } else if (card.id === "outcome") {
      return (
        <NumericFormat
          value={summary.outcome.total.toFixed(2)}
          displayType={"text"}
          prefix={` ${summary.outcome.currency} `}
        />
      );
    } else {
      return (
        <NumericFormat
          value={summary.balance.toFixed(2)}
          displayType={"text"}
          prefix={` ${summary.income.currency} `}
        />
      );
    }
  }

  function showDescription(card: CardOption) {
    if (
      card.id !== "balance" &&
      moment(summary.income.lastUpdate).format("YYYY") > "2000"
    ) {
      if (card.id === "income") {
        return (
          <Description>
            <span>
              Última atualização:{" "}
              {moment(summary.income.lastUpdate).format("DD MMMM YYYY")}
            </span>
          </Description>
        );
      } else {
        return (
          <Description>
            <span>
              Última atualização:{" "}
              {moment(summary.outcome.lastUpdate).format("DD MMMM YYYY")}
            </span>
          </Description>
        );
      }
    }
  }

  function checkLastUpdate(currentDate: Date, lastUpdate: Date) {
    return moment(lastUpdate).isBefore(currentDate) ? currentDate : lastUpdate;
  }

  return (
    <CardContainer
      isPositive={summary.income.total + summary.outcome.total >= 0}
    >
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
