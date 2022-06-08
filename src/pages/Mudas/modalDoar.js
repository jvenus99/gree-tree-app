import { Dialog, DialogContent, InputLabel, MenuItem } from '@mui/material';
import {
  ButtonCloseModal,
  ButtonConfirm,
  ContentModal,
  SelectStyle,
} from './styles';
import { IoMdClose } from 'react-icons/io';

export const ModalDoar = ({ open, setOpen, muda }) => {
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
            <h1>Doar Muda?</h1>
            <span>Muda: {muda.name}</span>
            <InputLabel id='pontoDoacao'>
              Selecione um ponto de doação
            </InputLabel>
            <SelectStyle
              id='pontoDoacao'
              sx={{ color: '#117821' }}
              required
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SelectStyle>
            <InputLabel id='evento'>Selecione um evento ou não</InputLabel>
            <SelectStyle
              id='evento'
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </SelectStyle>
            <ButtonConfirm variant='contained'>Doar</ButtonConfirm>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
