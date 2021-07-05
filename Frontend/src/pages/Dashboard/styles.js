import styled from 'styled-components';

export const Container = styled.main`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem 0;

  h1 {
    strong {
      color: var(--green);
    }
  }
`;

export const Content = styled.section`
  display: flex;

  margin-top: 2rem;

  .container-admin-tools {
    background: var(--background-50);
    padding: 2rem;
    margin-left: 2rem;

    display: flex;
    align-items: center;

    border: 1px solid var(--purple);
    border-radius: 20px;

    div + div {
      margin-left: 4rem;
    }
  }
`;
