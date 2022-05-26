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

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <h1>Olá, Seja Bem Vindo!</h1>
      </HeaderContainer>
      <HomeContainer>
        <HomeDesktop>
          <ListEvents>
            <h1>Meus Eventos</h1>
            <ComponentList
              name={'Evento'}
              children={new Date()}
              icon={<BsCalendar2EventFill size={30} />}
              onClick={() => {
                console.log('Clicou');
              }}
            />
            <ComponentList
              name={'Evento'}
              children={new Date()}
              icon={<BsCalendar2EventFill size={30} />}
              onClick={() => {
                console.log('Clicou');
              }}
            />
            <SpanClick>Ver Mais</SpanClick>
          </ListEvents>
          <ListNewLetter>
            <h1>Sobre Sustentabilidade</h1>
            <ComponentList
              name={'Notícia'}
              children={new Date()}
              icon={<BiNews size={30} />}
              onClick={() => {
                console.log('Clicou');
              }}
            />
            <ComponentList
              name={'Notícia'}
              children={new Date()}
              icon={<BiNews size={30} />}
              onClick={() => {
                console.log('Clicou');
              }}
            />
            <ComponentList
              name={'Notícia'}
              children={new Date()}
              icon={<BiNews size={30} />}
              onClick={() => {
                console.log('Clicou');
              }}
            />
            <ComponentList
              name={'Notícia'}
              children={new Date()}
              icon={<BiNews size={30} />}
              onClick={() => {
                console.log('Clicou');
              }}
            />
            <SpanClick>Ver Mais</SpanClick>
          </ListNewLetter>
        </HomeDesktop>
      </HomeContainer>
    </>
  );
};
