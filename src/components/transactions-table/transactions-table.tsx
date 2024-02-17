import { useEffect, useState } from "react";
import * as S from "./styles";
import { api } from "../../services/api";

interface Transaction {
  id: number,
  titulo: string,
  valor: number,
  categoria: string,
  type: string,
  createdAt: string,
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

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
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.valor)}
                  </td>
                <td>{transaction.categoria}</td>
                <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.Container>
  );
}
