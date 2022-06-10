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

export const ModalCreate = ({ open, setOpen, eventos, setEventos }) => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    date: '',
    time: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit() {
    try {
      Object.keys(form).forEach((key) => {
        if (!form[key]) {
          alert(`O campo ${key} é obrigatório`);
          return;
        }
      });
      const { data } = await createEvento(form);
      if (data.event) {
        setEventos([...eventos, data.event]);
        setOpen(false);
        setForm({});
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
          <ButtonCloseModal
            onClick={() => {
              setOpen(false);
              setForm({});
            }}
          >
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
              name='location'
              value={form.location}
              onChange={handleChange}
            />
            <Input
              type='date'
              placeholder='Data do evento'
              name='date'
              required
              value={form.date}
              onChange={handleChange}
            />
            <Input
              type='time'
              placeholder='Digite o nome do evento'
              name='time'
              required
              value={form.time}
              onChange={handleChange}
            />
            <ButtonConfirm variant='contained' onClick={submit}>
              Cadastrar
            </ButtonConfirm>
          </ContentModalCreate>
        </DialogContent>
      </Dialog>
    </>
  );
};
