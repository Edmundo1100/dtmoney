import * as S from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.titulo}</td>
                <td className={transaction.type}>
                  {transaction.type === "retirada" ? "- " : null}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.valor)}
                </td>
                <td>{transaction.categoria}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.Container>
  );
}
