import { api } from './index';

export function createEvento({ name, local, data, horario }) {
  return api.post('/events', {
    name,
    local,
    data,
    horario,
  });
}

export function getEventos() {
  return api.get('/events');
}

export function getMyEvents(userId) {
  return api.get(`/myEvents/${userId}`);
}

export function intoEvento(idEvento, idUser) {
  return api.post(`/events/participate`, {
    idUser,
    idEvento,
  });
}
