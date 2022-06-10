import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ContentModal } from './styles';
import { IoMdClose } from 'react-icons/io';
import moment from 'moment';

export const ModalView = ({ open, setOpen, evento }) => {
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
            <h1>Meu Evento</h1>
            <span>Local do evento:</span>
            <p>{evento.e_location}</p>
            <br />
            <span>Data do Evento:</span>
            <p>{moment(evento.e_date).format('DD/MM/YYYY')}</p>
            <br />
            <span>Horário de Início</span>
            <p>{moment(evento.e_date).format('hh:mm A')}</p>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
