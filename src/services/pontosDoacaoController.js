import { api } from './index';

export function createPontoDoacao({
  cep,
  name,
  cidade,
  logradouro,
  numero,
  bairro,
  openAt,
  closeAt,
}) {
  return api.post('/donationPoints', {
    cep,
    name,
    cidade,
    logradouro,
    numero: parseInt(numero),
    bairro,
    openAt,
    closeAt,
  });
}

export function getPontosDoacao() {
  return api.get('/donationPoints');
}
