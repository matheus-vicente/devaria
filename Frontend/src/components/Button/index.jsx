import { Container } from './styles';

function Button({ children , ...rest}) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}

export { Button };
