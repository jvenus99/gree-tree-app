import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ButtonConfirm, ContentModal } from './styles';
import { IoMdClose } from 'react-icons/io';
import { tornarAdmin } from '../../services/userController';

export const ModalAdmin = ({ open, setOpen, user }) => {
  async function submit() {
    try {
      const { data } = await tornarAdmin(user.id);
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
            <h1>Tornar Administrador?</h1>
            <ButtonConfirm variant='contained' onClick={submit}>
              Sim
            </ButtonConfirm>
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
