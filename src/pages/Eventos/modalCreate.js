import { Dialog, DialogContent } from '@mui/material';
import {
  ButtonCloseModal,
  ButtonConfirm,
  ContentModalCreate,
  Input,
} from './styles';
import { IoMdClose } from 'react-icons/io';

export const ModalCreate = ({ open, setOpen }) => {
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
          <ContentModalCreate>
            <h1>Cadastrar Evento</h1>
            <Input
              label={'Nome do Evento'}
              placeholder='Digite o nome do evento'
              required
            />
            <Input
              label={'Local'}
              placeholder='Digite o enedereço do evento'
              required
            />
            <Input type='date' placeholder='Data do evento' required />
            <Input type='time' placeholder='Digite o nome do evento' required />
            <ButtonConfirm variant='contained'>Cadastrar</ButtonConfirm>
          </ContentModalCreate>
        </DialogContent>
      </Dialog>
    </>
  );
};
