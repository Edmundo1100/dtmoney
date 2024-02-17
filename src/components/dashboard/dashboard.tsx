import { Summary } from "../summary";
import { TransactionsTable } from "../transactions-table";
import * as S from "./styles";

export function Dashboard() {
  return (
    <S.Container>
      <Summary></Summary>
      <TransactionsTable></TransactionsTable>
    </S.Container>
  );
}
