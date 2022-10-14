import moment from "moment";
import { NumericFormat } from "react-number-format";
import { CashFlow } from "..";
import { CardOptions, CardOption } from "./Cards";
import {
  CardContent,
  CardContainer,
  Title,
  Value,
  Description,
} from "./styles";

type BalanceProps = {
  income: CashFlow;
  outcome: CashFlow;
};

export function Balance({ income, outcome }: BalanceProps) {
  function showValue(card: CardOption) {
    if (card.id === "income") {
      return (
        <NumericFormat
          value={income.amount.toFixed(2)}
          displayType={"text"}
          prefix={` ${income.currency} `}
        />
      );
    } else if (card.id === "outcome") {
      return (
        <NumericFormat
          value={outcome.amount.toFixed(2)}
          displayType={"text"}
          prefix={` ${outcome.currency} `}
        />
      );
    } else {
      const balance = income.amount + outcome.amount;
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
