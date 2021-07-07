import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { Form } from 'unform';
import { BiXCircle } from 'react-icons/bi';

import { useModule } from '../../../hooks/module';
import { useLesson } from '../../../hooks/lesson';

import { Button } from '../../Button';
import { Input } from '../../Input';

import { Container } from './styles';

function ModalCreate({
  subject,
  isOpen,
  onRequestClose,
  setIsOpen,
  isUpdate,
}) {
  const { modules, createModule, updateModule, selectedModuleById } = useModule();
  const { createLesson, updateLesson, selectedLessonById } = useLesson();

  const history = useHistory();

  const handleCreateModule = useCallback(async (data) => {
    try {
      if (isUpdate) {
        await updateModule(selectedModuleById, data.name);
      } else {
        await createModule(data.name);
      }

      setIsOpen(false);
      history.go(0);
    } catch (error) {
      alert('Erro na aplicação. Este nome de móulo já existe', error.message);
    }
  }, [selectedModuleById, updateModule, createModule, isUpdate, history]);

  const handleCreateLesson = useCallback(async (data) => {
    try {
      if (isUpdate) {
        await updateLesson(selectedLessonById, data.name, data.classDate);
      } else {
        const module = modules.find(module => module.name === data.module);
        await createLesson(data.name, module.id, data.classDate);
      }

      setIsOpen(false);
      history.go(0);
    } catch (error) {
      alert('Erro na aplicação. Verifique se o módulo informado existe.', error.message);
    }
  }, [selectedLessonById, modules, history]);

  const handleCloseModal = useCallback(() => {
    onRequestClose();
    setIsOpen(false);
  }, []);

  return (
    <Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <button
        type='button'
        onClick={handleCloseModal}
        className='react-modal-close'
      >
        <BiXCircle size={24} />
      </button>

      <Container isUpdate={isUpdate}>
        {
          subject === 'Aulas' ?
            <>
              <Form onSubmit={handleCreateLesson}>
                <Input name="name" type="text" placeholder="Nome" />

                <Input name="classDate" type="date" />

                <Input name="module" type="text" placeholder="Módulo" className="module-input" />

                <Button type="submit">Adicionar</Button>
              </Form>
            </>
          :
            <>
              <Form onSubmit={handleCreateModule}>
                <Input name="name" type="text" placeholder="Nome" />

                <Button type="submit">Adicionar</Button>
              </Form>
            </>
        }
      </Container>
    </Modal>
  );
}

export { ModalCreate };
