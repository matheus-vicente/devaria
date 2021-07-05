import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 1.5rem;
  background: var(--background-50);

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--purple);
  border-radius: 20px;

  svg {
    margin-bottom: 2rem;
  }

  strong {
    max-width: 240px;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
  }

  span {
    color: var(--green);
  }
`;
