import logoImg from '../../assets/logo.svg';

import { Form } from '../../components/Form';

import { Container, Banner, Content } from './styles';

function Login() {
  return (
    <Container>
      <Content>
        <Banner>
          <img src={logoImg} alt="logo" />

          <h1>Fazer Login</h1>
        </Banner>

        <section>
          <Form />
        </section>
      </Content>
    </Container>
  )
}

export { Login };
