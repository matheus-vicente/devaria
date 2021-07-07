import { Header } from '../../components/Header';
import { CardUser } from '../../components/CardUser';
import { ContainerAdminTools } from '../../components/ContainerAdminTools';

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
            <ContainerAdminTools subject="Módulos" />

            <ContainerAdminTools subject="Aulas" />
          </div>
        </Content>
      </Container>
    </>
  );
}

export { Dashboard };
