import { Banner } from '../../components/Banner';
import { FormSignUp } from '../../components/FormSignUp';

import { Container, Content } from './styles';

function SignUp() {
  return (
    <Container>
      <Content>
        <Banner subject="Cadastro" />

        <FormSignUp />
      </Content>
    </Container>
  );
}

export { SignUp };
