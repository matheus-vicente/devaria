import { useCallback } from 'react';
import Modal from 'react-modal';
import { BiTrash, BiPencil, BiXCircle } from 'react-icons/bi';

import { useModule } from '../../../hooks/module';
import { useLesson } from '../../../hooks/lesson';

import { Container, Content } from './styles';

function ModalList({
  subject,
  isOpen,
  onRequestClose,
  setIsUpdate,
}) {
  let pointer;

  const { modules, deleteModule, setSelectedModuleById } = useModule();
  const { lessons, deleteLesson, setSelectedLessonById } = useLesson();

  if (subject === 'Aulas') {
    pointer = lessons;
  } else {
    pointer = modules;
  }

  const handleDelete = useCallback(async (data) => {
    if (subject === 'Aulas') {
      await deleteLesson(data);
    } else {
      await deleteModule(data);
    }
  }, []);

  const handleUpdate = useCallback(async (data) => {
    setIsUpdate(true);

    if (subject === 'Aulas') {
      setSelectedLessonById(String(data));
    } else {
      setSelectedModuleById(String(data));
    }
  }, []);

  return (
    <Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <BiXCircle size={24} />
      </button>

      <Container>
        {
          pointer.map(value => (
            <li key={value.id} className="list">
              <Content>
                <strong>{value.name}</strong>

                <div>
                  <button onClick={() => handleUpdate(value.id)}>
                    <BiPencil size={24} />
                  </button>

                  <button onClick={() => handleDelete(value.id)}>
                    <BiTrash size={24} />
                  </button>
                </div>
              </Content>
            </li>
          ))
        }
      </Container>
    </Modal>
  );
}

export { ModalList };
