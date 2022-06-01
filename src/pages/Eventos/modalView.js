import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ButtonConfirm, ContentModal } from './styles';
import { IoMdClose } from 'react-icons/io';

export const ModalView = ({ open, setOpen }) => {
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
            <p>$Local</p>
            <br />
            <span>Data do Evento:</span>
            <p>$Data</p>
            <br />
            <span>Horário de Início</span>
            <p>$Horário</p>
            <ButtonConfirm variant='contained'>Participar</ButtonConfirm>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
