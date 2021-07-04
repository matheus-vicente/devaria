import styled from 'styled-components';

export const Container = styled.main`
  max-width: 50%;
  margin: 0 auto;
`;

export const Content = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 100%;
    max-width: 700px;
  }
`;

export const Banner = styled.section`
  img {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.4rem;
    color: var(--text-blue);
  }
`;
