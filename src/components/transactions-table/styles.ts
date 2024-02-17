import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  
  table{
    width: 70%;
    border-spacing: 0 0.5rem;

    th{
        color: var(--text-body);
        text-align: left;
        padding: 1rem 2rem;
    }

    td{
        padding: 1rem 2rem;
        background: var(--shape);
        border-radius: 0.25rem;
        color: var(--text-body);
        

        &:first-child{
            color: var(--text-title);
        }
        
        &.deposito{
            color: var(--green);
        }
        &.retirada{
            color: var(--red);
        }
    }
  }
`;
