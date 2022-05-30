import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ButtonConfirm, ContentModal, Input } from './styles';
import { IoMdClose } from 'react-icons/io';
import CreatableSelect from 'react-select/creatable';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

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
            <h1>Cadastrar Evento</h1>
            <Input
              label={'Nome do Evento'}
              placeholder='Digite o nome do evento'
            />
            <Input label={'Local'} placeholder='Digite o enedereço do evento' />
            <Input type='date' placeholder='Data do evento' />
            <Input type='time' placeholder='Digite o nome do evento' />
            <CreatableSelect
              isClearable
              isMulti
              name='mudas'
              options={options}
            />
            <ButtonConfirm variant='contained'>Cadastrar</ButtonConfirm>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
