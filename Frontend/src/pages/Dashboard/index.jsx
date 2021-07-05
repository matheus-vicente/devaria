import { Header } from '../../components/Header';
import { CardUser } from '../../components/CardUser';
import { CardAdminTools } from '../../components/CardAdminTools';

import { Container, Content } from './styles';

function Dashboard() {
  return (
    <>
      <Header />

      <Container>
        <h1>Bem vindo, <strong>Matheus</strong></h1>

        <Content>
          <CardUser />

          <div className="container-admin-tools">
            <CardAdminTools about="Módulo" />

            <CardAdminTools about="Aula" />
          </div>
        </Content>
      </Container>
    </>
  );
}

export { Dashboard };
