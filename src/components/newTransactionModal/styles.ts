import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeConteiner = styled.div`
  height: 4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  
`;


interface RadioBoxProps{
    ativo: boolean;
    cor: 'green' | 'red'
}
const colors = {
    green: '#b8efdb',
    red: '#f1cfd5'
}
export const RadiusBox = styled.button<RadioBoxProps>`
    width: 48%;
    font-size: 1rem;
    color: var(--text-body);
    border: 1px solid #d7d7d7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;

    background: ${(props) => props.ativo ? colors[props.cor] : 'transparent'}  ;
    
    transition: border-color 0.2s;
    &:hover{
        border-color: #aaa;
    }

    i{
        margin-right: 1rem;
        font-size: 1.5rem;
    }
    i .iconEntrada {
      color: var(--green);
    }
    i .iconSaida {
      color: var(--red);
    }
`;