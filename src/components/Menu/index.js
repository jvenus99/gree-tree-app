import { Link, useLocation } from 'react-router-dom';
import { MenuButton } from '../../style/styles';
import { MenuContainer, MenuContent, MenuItemStyle } from './styles';
import { IoMdClose } from 'react-icons/io';

export const Menu = ({ setOpen, open }) => {
  const location = useLocation();

  return (
    <MenuContainer open={open}>
      <MenuButton>
        <IoMdClose
          onClick={() => setOpen(false)}
          size={40}
          style={{ color: '#117821' }}
        />
      </MenuButton>
      <MenuContent>
        <MenuItemStyle
          selected={location.pathname === '/'}
          onClick={() => setOpen(false)}
        >
          <Link to='/'>Home</Link>
        </MenuItemStyle>
        <MenuItemStyle
          selected={location.pathname === '/profile'}
          onClick={() => setOpen(false)}
        >
          <Link to='/profile'>Perfil</Link>
        </MenuItemStyle>
        <MenuItemStyle
          selected={location.pathname === '/pontosDoacao'}
          onClick={() => setOpen(false)}
        >
          <Link to='/pontosDoacao'>
            Buscar pontos <br />
            de doação
          </Link>
        </MenuItemStyle>
        <MenuItemStyle
          selected={location.pathname === '/myEvents'}
          onClick={() => setOpen(false)}
        >
          <Link to='/myEvents'>Meus Eventos</Link>
        </MenuItemStyle>
        <MenuItemStyle
          selected={location.pathname === '/Sustentabilidade'}
          onClick={() => setOpen(false)}
        >
          <Link to='/Sustentabilidade'>Sustentabilidade</Link>
        </MenuItemStyle>
      </MenuContent>
    </MenuContainer>
  );
};
