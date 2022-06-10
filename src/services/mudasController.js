import { api } from './index';

export function createMuda({ name, code, co2AbsorptionKg }) {
  return api.post('/crops', {
    name,
    code,
    co2AbsorptionKg,
  });
}

export function getMudas() {
  return api.get('/crops');
}

export function doar(form) {
  return api.post('/transactions', form);
}
