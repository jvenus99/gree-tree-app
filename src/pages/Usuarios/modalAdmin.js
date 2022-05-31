import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ButtonConfirm, ContentModal } from './styles';
import { IoMdClose } from 'react-icons/io';

export const ModalAdmin = ({ open, setOpen }) => {
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
            <h1>Tornar Administrador?</h1>
            <ButtonConfirm variant='contained'>Sim</ButtonConfirm>
            <ButtonConfirm
              unconfirm={true}
              variant='contained'
              onClick={() => setOpen(false)}
            >
              Não
            </ButtonConfirm>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
