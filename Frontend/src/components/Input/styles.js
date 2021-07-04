import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: var(--background-50);

  padding-left: 1rem;
  border: 0;
  border-radius: 10px;

  transition: border 0.2s;

  &:hover {
    border: 1px solid var(--blue);
  }

  input {
    width: 100%;

    padding: 1.125rem;
    border: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    font-size: 1.125rem;
    color: var(--text-white);
    background-color: transparent;
  }
`;
