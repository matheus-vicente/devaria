import styled, { css } from 'styled-components';

export const Container = styled.div`
  div + div {
    margin-top: 2rem;
  }

  ${props => {
    if (props.isUpdate) {
      return css`
        .module-input {
          display: none;
        }
      `;
    }
  }}

  select {
    background: var(--background-50);
    color: var(--text-white);

    width: 100%;
    margin-top: 2rem;
    padding: 1.125rem 1rem;
    font-size: 1.125rem;

    border: 0;
    border-radius: 10px;
  }

  form {
    button {
      margin-top: 2rem;
    }
  }
`;
