import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  console.log(transactions);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposito") {
        acc.depositos += transaction.valor;
        acc.total += transaction.valor;
      } else {
        acc.retiradas += transaction.valor;
        acc.total -= transaction.valor;
      }
      return acc;
    },
    {
      depositos: 0,
      retiradas: 0,
      total: 0,
    }
  );

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <i>
            <FontAwesomeIcon
              icon="circle-up"
              style={{ color: "green" }}
            ></FontAwesomeIcon>
          </i>
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.depositos)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <i>
            <FontAwesomeIcon
              icon="circle-down"
              style={{ color: "red" }}
            ></FontAwesomeIcon>
          </i>
        </header>
        <strong>
          {" "}
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.retiradas)}
        </strong>
      </div>

      <div className="cardTotal">
        <header>
          <p>Total</p>
          <i>
            <FontAwesomeIcon icon="dollar-sign"></FontAwesomeIcon>
          </i>
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </S.Container>
  );
}
