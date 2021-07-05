import styled from 'styled-components';

export const Container = styled.form`
  h1 {
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    background: transparent;

    border: 1px solid var(--purple);
    border-radius: 8px;

    font-weight: 600;
    font-size: 1rem;

    color: var(--text-white);

    &::placeholder {
      color: var(--text-white-50);
    }
  }

  .margin-bottom {
    margin-bottom: 2rem;
  }

  select {
    width: 100%;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    background: transparent;

    border: 1px solid var(--purple);
    border-radius: 8px;

    font-weight: 600;
    font-size: 1rem;

    color: var(--text-white);

    option {
      background: var(--background-50);
    }
  }

  .button-add {
    margin-top: 2rem;
  }
`;
