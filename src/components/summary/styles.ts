import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -8rem;

  div {
    background: var(--shape);
    width: 20rem;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    margin-right: 2rem;
    color: var(--text-title);

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        font-size: 1.5rem;
      }
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
    }

    &.cardTotal {
      background-color: var(--green);
      color: #fff;
    }
  }
`;
