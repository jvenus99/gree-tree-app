import { Link, useLocation } from 'react-router-dom';
import { MenuButton } from '../../style/styles';
import { MenuContainer, MenuContent, MenuItemStyle } from './styles';
import { IoMdClose } from 'react-icons/io';

export const Menu = ({ setOpen, open }) => {
  const location = useLocation();

  return (
    <MenuContainer open={open}>
      <MenuButton onClick={() => setOpen(false)}>
        <IoMdClose size={40} style={{ color: '#117821' }} />
      </MenuButton>
      <MenuContent>
        <MenuItemStyle selected={location.pathname === '/'}>
          <Link onClick={() => setOpen(false)} to='/'>
            Home
          </Link>
        </MenuItemStyle>
        <MenuItemStyle selected={location.pathname === '/profile'}>
          <Link onClick={() => setOpen(false)} to='/profile'>
            Perfil
          </Link>
        </MenuItemStyle>
        <MenuItemStyle selected={location.pathname === '/usuarios'}>
          <Link onClick={() => setOpen(false)} to='/usuarios'>
            Usuários
          </Link>
        </MenuItemStyle>
        <MenuItemStyle selected={location.pathname === '/mudas'}>
          <Link onClick={() => setOpen(false)} to='/mudas'>
            Mudas
          </Link>
        </MenuItemStyle>
        <MenuItemStyle selected={location.pathname === '/eventos'}>
          <Link onClick={() => setOpen(false)} to='/eventos'>
            Eventos
          </Link>
        </MenuItemStyle>
        <MenuItemStyle selected={location.pathname === '/pontosDoacao'}>
          <Link onClick={() => setOpen(false)} to='/pontosDoacao'>
            Buscar pontos <br />
            de doação
          </Link>
        </MenuItemStyle>
        <MenuItemStyle selected={location.pathname === '/myEvents'}>
          <Link onClick={() => setOpen(false)} to='/myEvents'>
            Meus Eventos
          </Link>
        </MenuItemStyle>
        <MenuItemStyle selected={location.pathname === '/sustentabilidade'}>
          <Link onClick={() => setOpen(false)} to='/sustentabilidade'>
            Sustentabilidade
          </Link>
        </MenuItemStyle>
      </MenuContent>
    </MenuContainer>
  );
};
