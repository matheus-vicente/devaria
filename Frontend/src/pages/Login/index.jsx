import { Banner } from '../../components/Banner';
import { FormLogin } from '../../components/FormLogin';

import { Container, Content } from './styles';

function Login() {
  return (
    <Container>
      <Content>
        <Banner subject="Login" />

        <FormLogin />
      </Content>
    </Container>
  )
}

export { Login };
