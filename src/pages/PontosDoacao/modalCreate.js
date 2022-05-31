import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ButtonConfirm, ContentModal, Input } from './styles';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import axios from 'axios';

export const ModalCreate = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    cep: '',
    nome: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function getCep() {
    try {
      const { data: endereco } = await axios.get(
        `https://viacep.com.br/ws/${form.cep}/json/`
      );
      setForm({
        ...form,
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
      });
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
            <h1>Cadastrar Ponto de Doação</h1>
            <Input
              label={'CEP'}
              type='number'
              name='cep'
              placeholder='Digite o CEP'
              value={form.cep}
              onChange={handleChange}
              onBlur={getCep}
            />
            <Input
              label={'Nome do Local'}
              name='nome'
              placeholder='Digite o nome do local'
              value={form.nome}
              onChange={handleChange}
            />
            <Input
              label={'Cidade'}
              name='cidade'
              placeholder='Digite a cidade'
              value={form.cidade}
              onChange={handleChange}
            />
            <Input
              label={'Logradouro'}
              name='logradouro'
              placeholder='Digite o logradouro'
              value={form.logradouro}
              onChange={handleChange}
            />
            <Input
              label={'Bairro'}
              name='bairro'
              placeholder='Digite o bairro'
              value={form.bairro}
              onChange={handleChange}
            />
            <Input
              label={'Número'}
              name='numero'
              placeholder='Digite o número'
              type='number'
              value={form.numero}
              onChange={handleChange}
            />
            <ButtonConfirm variant='contained'>Cadastrar</ButtonConfirm>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
