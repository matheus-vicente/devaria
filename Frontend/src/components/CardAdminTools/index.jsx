import { useCallback, useState } from 'react';

import { Button } from '../Button';
import { ModalAdminTools } from '../ModalAdminTools';

import { Container } from './styles';

function CardAdminTools(props) {
  const [isModalAdminToolsOpen, setIsModalAdminToolsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalAdminToolsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalAdminToolsOpen(false);
  }, []);

  return (
    <Container>
      <span>{props.about}s</span>

      <Button className="button-admin-tools" onClick={handleOpenModal}>Criar {props.about}</Button>
      <Button className="button-admin-tools" onClick={handleOpenModal}>Editar {props.about}</Button>
      <Button className="button-admin-tools" onClick={handleOpenModal}>Deletar {props.about}</Button>

      <ModalAdminTools
        isOpen={isModalAdminToolsOpen}
        onRequestClose={handleCloseModal}
        about={props.about}
      />
    </Container>
  );
}

export { CardAdminTools };
