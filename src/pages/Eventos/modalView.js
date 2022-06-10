import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ButtonConfirm, ContentModal } from './styles';
import { IoMdClose } from 'react-icons/io';
import { intoEvento } from '../../services/eventosController';

export const ModalView = ({ open, setOpen, evento }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  async function participarEvento() {
    try {
      const { data } = await intoEvento(evento._id, user.id);
      if (data) {
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Dialog open={open} fullWidth={true}>
        <DialogContent>
          <ButtonCloseModal onClick={() => setOpen(false)}>
            <IoMdClose
              style={{ background: '#117821', borderRadius: '50%' }}
              color={'white'}
              size={25}
            />
          </ButtonCloseModal>
          <ContentModal>
            <h1>Participar do Evento?</h1>
            <span>Local do evento:</span>
            <p>{evento.local}</p>
            <br />
            <span>Data do Evento:</span>
            <p>{evento.data}</p>
            <br />
            <span>Horário de Início</span>
            <p>{evento.horario}</p>
            <ButtonConfirm
              variant='contained'
              onClick={() => participarEvento()}
            >
              Participar
            </ButtonConfirm>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
