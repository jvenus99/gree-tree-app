import { api } from './index';

export function createMuda({ name, codigoPlanta, porcentagemAbsorção }) {
  return api.post('/crops', {
    name,
    codigoPlanta,
    porcentagemAbsorção,
  });
}

export function getMudas() {
  return api.get('/crops');
}

export function doar(form) {
  return api.post('/transactions', form);
}
