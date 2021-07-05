import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Button } from '../Button';

import { Container } from './styles';

function ModalAdminTools({ isOpen, onRequestClose, about }) {
  return (
    <Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <button
        className='react-modal-close'
        onClick={onRequestClose}
      >
        <AiOutlineCloseCircle size={40} />
      </button>

      {
        about === 'Módulo' ?
          <Container>
            <h1>Adicionar módulo:</h1>

            <input type="text" placeholder="Nome" />

            <Button className="button-add" type="button">Adicionar</Button>
          </Container>
        :
        <Container>
            <h1>Adicionar aula:</h1>

            <input type="text" placeholder="Nome" className="margin-bottom" />

            <label htmlFor="class-date">Data da aula:</label>
            <input type="date" id="class-date" />

            <select name="Módulo" id="module">
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Infraestrutura">Infraestrutura</option>
            </select>

            <Button className="button-add" type="button">Adicionar</Button>
          </Container>
      }

    </Modal>
  );
}

export { ModalAdminTools };
