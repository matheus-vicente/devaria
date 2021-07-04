import { Container } from './styles';

function ButtonLogin({ icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {
        Icon && <Icon />
      }
      Entrar
    </Container>
  );
}

export { ButtonLogin };
