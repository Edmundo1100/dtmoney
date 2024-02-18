import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";
import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  const { createTransaction } = useTransactions();
  const [titulo, setTitulo] = useState('');
  const [valor, setValor] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [type, setType] = useState('deposito');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

   await createTransaction({
      titulo,
      categoria,
      type,
      valor,
    });

    setTitulo('');
    setValor(0);
    setType('deposito');
    setCategoria('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="btnCloseModal">
        <i>
          <FontAwesomeIcon icon={"xmark"} />
        </i>
      </button>

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(event) => setValor(+event.target.value)}
        ></input>

        <S.TransactionTypeConteiner>
          <S.RadiusBox
            type="button"
            onClick={() => {
              setType('deposito');
            }}
            ativo={type === 'deposito' ? true : false}
            cor="green"
          >
            <i>
              <FontAwesomeIcon
                icon="circle-up"
                className="iconEntrada"
              ></FontAwesomeIcon>
            </i>
            <span>Entrada</span>
          </S.RadiusBox>
          <S.RadiusBox
            type="button"
            onClick={() => setType('retirada')}
            ativo={type === 'retirada' ? true : false}
            cor="red"
          >
            <i>
              <FontAwesomeIcon
                icon="circle-down"
                className="iconSaida"
              ></FontAwesomeIcon>
            </i>
            <span>Saída</span>
          </S.RadiusBox>
        </S.TransactionTypeConteiner>

        <input
          placeholder="Categoria"
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
        ></input>

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
