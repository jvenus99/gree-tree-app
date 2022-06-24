import { ComponentList } from '../../components/ComponentList';
import { HeaderContainer } from '../../style/styles';
import {
  HomeContainer,
  HomeDesktop,
  ListEvents,
  ListNewLetter,
  SpanClick,
} from './styles';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import { getMyEvents } from '../../services/eventosController';
moment.locale('pt-br');

export const Home = () => {
  const [news, setNews] = useState([]);
  const [eventos, setEventos] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  async function fetchNews() {
    const { data } = await axios.get(
      `https://api.newscatcherapi.com/v2/search?q=sustainability`,
      {
        headers: {
          'x-api-key': '89s_SyY_8VpO6mW-Aw5sgDA4S1C-gzy85LqfeHCW94o',
        },
      }
    );
    setNews(data.articles);
  }

  const fetchEvents = useCallback(async () => {
    try {
      const { data } = await getMyEvents(user.id);
      if (data.data && data.data.length > 0) {
        setEventos(data.data.slice(0, 2));
      }
    } catch (error) {
      console.log(error);
    }
  }, [user.id]);

  useEffect(() => {
    fetchEvents();
    fetchNews();
  }, [fetchEvents]);
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer>
        <h1>Olá, Seja Bem Vindo!</h1>
      </HeaderContainer>
      <HomeContainer>
        <HomeDesktop>
          <ListEvents>
            <h1>Meus Eventos</h1>
            {eventos &&
              eventos.map((evento) => (
                <ComponentList
                  name={evento.e_name}
                  children={moment(evento.e_date).format('D MMM. YYYY')}
                  icon={<BsCalendar2EventFill size={30} />}
                  onClick={() => {
                    navigate('/myEvents');
                  }}
                />
              ))}
            {eventos.length === 0 && (
              <span style={{ margin: '20px', textAlign: 'center' }}>
                Você não participou de nenhum evento ainda
              </span>
            )}
            <SpanClick onClick={() => navigate('/myEvents')}>
              Ver Mais
            </SpanClick>
          </ListEvents>
          <ListNewLetter>
            <h1>Sobre Sustentabilidade</h1>
            {news.slice(0, 4).map((item) => (
              <ComponentList
                name={item.title}
                children={moment(item.publishedAt).format('D MMM. YYYY')}
                icon={<BiNews size={30} />}
                onClick={() => {
                  navigate('/sustentabilidade');
                }}
              />
            ))}

            <SpanClick onClick={() => navigate('/sustentabilidade')}>
              Ver Mais
            </SpanClick>
          </ListNewLetter>
        </HomeDesktop>
      </HomeContainer>
    </>
  );
};
