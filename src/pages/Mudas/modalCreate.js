import { Dialog, DialogContent } from '@mui/material';
import {
  ButtonCloseModal,
  ButtonConfirm,
  ContentModalCreate,
  Input,
} from './styles';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { createMuda } from '../../services/mudasController';

export const ModalCreate = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    name: '',
    codigoPlanta: '',
    porcentagemAbsorção: ''
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
      const { data: muda } = await createMuda(form);
      if (muda) {
        setOpen(false);
        alert('Muda cadastrada com sucesso!');
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
            <h1>Cadastrar Mudas</h1>
            <Input
              label={'Nome da Planta'}
              placeholder='Digite o nome da planta'
              value={form.nome}
              onChange={handleChange}
            />
            <Input
              label={'Código da Planta'}
              placeholder='Digite o código da planta'
              value={form.codigoPlanta}
              onChange={handleChange}
            />
            <Input
              label={'Porcentagem de Absorção'}
              placeholder='Digite a porcentagem de absorção'
              value={form.porcentagemAbsorção}
              onChange={handleChange}
            />
            <ButtonConfirm variant='contained' onClick ={submit}>Cadastrar</ButtonConfirm>
          </ContentModalCreate>
        </DialogContent>
      </Dialog>
    </>
  );
};
