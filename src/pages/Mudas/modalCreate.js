import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ButtonConfirm, ContentModal, Input } from './styles';
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
          <ContentModal>
            <h1>Cadastrar Mudas</h1>
            <Input
              label={'Nome da Planta'}
              placeholder='Digite o nome da planta'
            />
            <Input
              label={'Código da Planta'}
              placeholder='Digite o código da planta'
            />
            <Input
              label={'Porcentagem de Absorção'}
              placeholder='Digite a porcentagem de absorção'
            />
            <ButtonConfirm variant='contained'>Cadastrar</ButtonConfirm>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
