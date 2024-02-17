import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Logo = styled.div`
  color: #fff;

  .icone {
    color: var(--green);
    font-size: 40px;
    margin-right: 2rem;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  padding-top: 2rem;
  padding-bottom: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
