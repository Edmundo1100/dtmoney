import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Content, Logo } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <FontAwesomeIcon icon="sack-dollar" style={{marginRight: '2rem', color: "#89db4e", fontSize: '40px'}}/>
          <span>Controle Financeiro</span>
        </Logo>
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
};
