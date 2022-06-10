import { Dialog, DialogContent, InputLabel, MenuItem } from '@mui/material';
import {
  ButtonCloseModal,
  ButtonConfirm,
  ContentModal,
  SelectStyle,
} from './styles';
import { IoMdClose } from 'react-icons/io';
import { doar } from '../../services/mudasController';
import { useEffect, useState } from 'react';
import { getPontosDoacao } from '../../services/pontosDoacaoController';
import { getEventos } from '../../services/eventosController';

export const ModalDoar = ({ open, setOpen, muda }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [form, setForm] = useState({
    event: '',
    donationPoint: '',
  });
  const [pontosDoacao, setPontosDoacao] = useState([]);
  const [eventos, setEventos] = useState([]);

  async function doarMuda() {
    try {
      const { data } = await doar({
        ...form,
        crop: muda.id,
        user: user.id,
        date: new Date(),
      });
      if (data) {
        alert('Muda doada com sucesso!');
        setOpen(false);
        setForm({});
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: pontos } = await getPontosDoacao();
        if (pontos) {
          setPontosDoacao(pontos);
        }
        const { data: events } = await getEventos();
        if (events) {
          setEventos(events);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          <ContentModal>
            <h1>Doar Muda?</h1>
            <span>Muda: {muda.name}</span>
            <InputLabel id='pontoDoacao'>
              Selecione um ponto de doação
            </InputLabel>
            <SelectStyle
              id='pontoDoacao'
              name='donationPoint'
              sx={{ color: '#117821' }}
              required
              value={form.donationPoint}
              onChange={handleChange}
            >
              {pontosDoacao.map((ponto) => (
                <MenuItem value={ponto.id}>{ponto.name}</MenuItem>
              ))}
            </SelectStyle>
            <InputLabel id='evento'>Selecione um evento ou não</InputLabel>
            <SelectStyle
              id='evento'
              name='event'
              sx={{ color: '#117821' }}
              value={form.event}
              onChange={handleChange}
            >
              {eventos.map((evento) => (
                <MenuItem value={evento.id}>{evento.name}</MenuItem>
              ))}
            </SelectStyle>
            <ButtonConfirm variant='contained' onClick={doarMuda}>
              Doar
            </ButtonConfirm>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
