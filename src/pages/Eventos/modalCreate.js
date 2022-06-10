import { Dialog, DialogContent } from '@mui/material';
import {
  ButtonCloseModal,
  ButtonConfirm,
  ContentModalCreate,
  Input,
} from './styles';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { createEvento } from '../../services/eventosController';

export const ModalCreate = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    name:'',
    local:'',
    data:'',
    horario:'',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit() {
    try {
      Object.Keys(form).forEach((key) => {
        if (!form[key]) {
          alert(`O campo ${key} é obrigatório`);
          return;
        }
      });
      const { data: evento } = await createEvento(form);
      if (evento) {
        setOpen(false);
        alert('Evento cadastrado com sucesso!');
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
          <ContentModalCreate>
            <h1>Cadastrar Evento</h1>
            <Input
              label={'Nome do Evento'}
              placeholder='Digite o nome do evento'
              name='name'
              required
              value={form.name}
              onChange={handleChange}              
            />
            <Input
              label={'Local'}
              placeholder='Digite o enedereço do evento'
              required
              value={form.local}
              onChange={handleChange}
            />
            <Input 
              type='date' 
              placeholder='Data do evento' 
              required 
              value={form.data}
              onChange={handleChange}
            />
            <Input 
              type='time' 
              placeholder='Digite o nome do evento' 
              required
              value={form.horario}
              onChange={handleChange}
            />
            <ButtonConfirm variant='contained' onClick={submit}>Cadastrar</ButtonConfirm>
          </ContentModalCreate>
        </DialogContent>
      </Dialog>
    </>
  );
};
