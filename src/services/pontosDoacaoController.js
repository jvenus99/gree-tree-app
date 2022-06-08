import { api } from './index';

export function createPontoDoacao({
  cep,
  name,
  cidade,
  logradouro,
  numero,
  bairro,
}) {
  return api.post('/users', {
    cep,
    name,
    cidade,
    logradouro,
    numero,
    bairro,
  });
}

export function getPontosDoacao() {
  return api.get('/donationPoints');
}
