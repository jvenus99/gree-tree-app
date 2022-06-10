import { Dialog, DialogContent } from '@mui/material';
import {
  ButtonCloseModal,
  ButtonConfirm,
  ContentModalCreate,
  Input,
} from './styles';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import axios from 'axios';
import { createPontoDoacao } from '../../services/pontosDoacaoController';

export const ModalCreate = ({
  open,
  setOpen,
  pontosDoacao,
  setPontosDoacao,
}) => {
  const [form, setForm] = useState({
    cep: '',
    name: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    openAt: `9:00`,
    closeAt: `18:00`,
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

  async function submit() {
    try {
      Object.keys(form).forEach((key) => {
        if (!form[key]) {
          alert(`O campo ${key} é obrigatório`);
          return;
        }
      });
      const { data } = await createPontoDoacao(form);
      if (data.donationPoint) {
        setOpen(false);
        setPontosDoacao([...pontosDoacao, data.donationPoint]);
        setForm({});
        alert('Ponto de doação criado com sucesso!');
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
              name='name'
              placeholder='Digite o nome do local'
              value={form.name}
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
            <ButtonConfirm variant='contained' onClick={() => submit()}>
              Cadastrar
            </ButtonConfirm>
          </ContentModalCreate>
        </DialogContent>
      </Dialog>
    </>
  );
};
