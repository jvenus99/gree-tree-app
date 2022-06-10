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
import { useEffect, useState } from 'react';
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
      'https://newsapi.org/v2/everything?q=sustentabilidade&apiKey=f675699f1756481d8ef67909b805c7c7'
    );
    setNews(data.articles);
  }

  async function fetchEvents() {
    try {
      const { data: eventos } = await getMyEvents(user.id);
      if (eventos && eventos.length > 0) {
        setEventos(eventos.slice(0, 2));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvents();
    fetchNews();
  }, []);
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
                  name={evento.name}
                  children={moment(evento.data).format('D MMM. YYYY')}
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
