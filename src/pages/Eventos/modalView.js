import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ButtonConfirm, ContentModal } from './styles';
import { IoMdClose } from 'react-icons/io';
import { leaveEvento } from '../../services/eventosController';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export const ModalView = ({ open, setOpen, evento }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  async function participarEvento() {
    try {
      const { data } = await leaveEvento(evento.id, user.id);
      if (data) {
        alert('Participação Confirmada');
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
            <p>{evento.location}</p>
            <br />
            <span>Data do Evento:</span>
            <p>{moment(evento.date).format('DD/MM/YYYY')}</p>
            <br />
            <span>Horário de Início</span>
            <p>{moment(evento.date).format('hh:mm A')}</p>
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
