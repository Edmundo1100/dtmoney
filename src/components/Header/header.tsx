import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Content, Logo } from "./styles";


interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {
  
  return (
    <Container>
      <Content>
        <Logo>
          <FontAwesomeIcon icon="sack-dollar" className="icone" />
          <span>Controle Financeiro</span>
        </Logo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};
