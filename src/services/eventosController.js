import { api } from './index';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export function createEvento({ name, location, date, time }) {
  const data = moment(date).format('YYYY/MM/DD');
  const dataTime = moment(`${data} ${time}`);
  return api.post('/events', {
    name,
    location,
    date: dataTime,
  });
}

export function getEventos() {
  return api.get('/events');
}

export function getMyEvents(userId) {
  return api.get(`/eventHasUsers/findEventsByUsers/${userId}`);
}

export function getNextEvents(userId) {
  return api.get(`/events/nextEvents/${userId}`);
}

export function leaveEvento(event, user) {
  return api.post(`/eventHasUsers`, { event, user, registerDate: new Date() });
}
