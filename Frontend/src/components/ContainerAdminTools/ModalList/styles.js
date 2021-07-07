import styled from 'styled-components';

export const Container = styled.ul`
  max-height: 60vh;
  overflow-x: hidden;
  overflow-y: scroll;

  li + li {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  background: var(--background-50);
  padding: 1.125rem 1rem;
  margin-right: 2rem;

  border: 1px solid var(--purple);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    padding: 0.2rem;
    border: 0;

    & + button {
      margin-left: 1rem;
    }

    &:hover {
      filter: brightness(0.5);
    }
  }
`;
