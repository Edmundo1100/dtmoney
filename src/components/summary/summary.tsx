import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";

export function Summary() {
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
        <strong>R$ 2000,00</strong>
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
        <strong> - R$ 500,00</strong>
      </div>

      <div className="cardTotal">
        <header>
          <p>Total</p>
          <i>
            <FontAwesomeIcon icon="dollar-sign"></FontAwesomeIcon>
          </i>
        </header>
        <strong>R$ 1500,00</strong>
      </div>
    </S.Container>
  );
}
