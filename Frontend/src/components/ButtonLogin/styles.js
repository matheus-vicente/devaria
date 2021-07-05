import styled, { css } from 'styled-components';

export const Container = styled.button`
  background: transparent;
  color: var(--text-blue);

  display: flex;
  align-items: center;

  font-size: 1.125rem;
  padding: 0.4rem 1rem;
  border: 1px solid var(--text-blue);
  border-radius: 10px;

  transition: all 0.2s;

  &:hover {
    background: var(--text-blue);
    color: var(--text-white);
  }

  svg {
    margin-right: 1rem;
  }

  ${
    props => {
      props.isLogged &&
        css`
          margin-right: 2rem;
        `
    }
  }
`;
