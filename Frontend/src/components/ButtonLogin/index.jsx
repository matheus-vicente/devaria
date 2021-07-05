import { Container } from './styles';

function ButtonLogin({ icon: Icon, children, isLogged = false, ...rest }) {
  return (
    <Container isLogged={isLogged} {...rest}>
      {
        Icon && <Icon />
      }
      {children}
    </Container>
  );
}

export { ButtonLogin };
