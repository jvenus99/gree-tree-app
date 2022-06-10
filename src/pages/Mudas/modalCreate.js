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

export const ModalCreate = ({ open, setOpen, setMudas, mudas }) => {
  const [form, setForm] = useState({
    name: '',
    code: '',
    co2AbsorptionKg: '',
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
      const { data } = await createMuda(form);
      if (data.muda) {
        setOpen(false);
        setMudas([...mudas, data.muda]);
        setForm({});
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
              name='name'
              placeholder='Digite o nome da planta'
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label={'Código da Planta'}
              name='code'
              placeholder='Digite o código da planta'
              value={form.code}
              onChange={handleChange}
            />
            <Input
              label={'Porcentagem de Absorção'}
              name='co2AbsorptionKg'
              placeholder='Digite a porcentagem de absorção'
              value={form.co2AbsorptionKg}
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
