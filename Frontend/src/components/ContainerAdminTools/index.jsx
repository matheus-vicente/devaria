import { useCallback, useState } from 'react';

import { Button } from '../Button';
import { ModalList } from './ModalList';
import { ModalCreate } from './ModalCreate';

import { Container } from './styles';

function ContainerAdminTools({ subject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  const [isUpdate, setIsUpdate] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleOpenModalCreate = useCallback(() => {
    setIsModalCreateOpen(true);
  }, []);

  const handleCloseModalCreate = useCallback(() => {
    setIsModalCreateOpen(false);
  }, []);


  return (
    <Container>
      <h1>{subject}</h1>

      <Button onClick={handleOpenModal}>Listar {subject}</Button>
      <Button onClick={handleOpenModalCreate}>Adicionar {subject}</Button>

      <ModalList
        subject={subject}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        setIsUpdate={setIsUpdate}
      />

      <ModalCreate
        subject={subject}
        setIsOpen={setIsModalCreateOpen}
        isOpen={isModalCreateOpen}
        onRequestClose={handleCloseModalCreate}
      />

      <ModalCreate
        subject={subject}
        setIsOpen={setIsUpdate}
        isOpen={isUpdate}
        onRequestClose={handleCloseModalCreate}
        isUpdate
      />
    </Container>
  );
}

export { ContainerAdminTools }
