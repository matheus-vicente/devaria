import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  border: 1px solid var(--blue);
  border-radius: 10px;
  padding: 2rem;

  div + div {
    margin-top: 2rem;
  }

  button {
    background: var(--text-blue);
    color: var(--text-white);

    font-size: 1.125rem;
    font-weight: 600;

    margin-top: 4rem;
    padding: 1.125rem 0;
    border: 0;
    border-radius: 10px;

    position: relative;
    transition: all 0.2s;

    &:hover {
      background: transparent;
      color: var(--text-blue);
      border: 1px solid var(--text-blue);
    }

    &.button-login::after {
      content: '';
      position: absolute;
      bottom: -2em;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: #fff;
    }
  }
`;
