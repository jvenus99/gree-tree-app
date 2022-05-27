import { HeaderContent } from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { MenuButton } from '../../style/styles';
import { Menu } from '../Menu';
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {!(
        location.pathname === '/login' || location.pathname === '/cadastro'
      ) && (
        <>
          <HeaderContent>
            {location.pathname !== '/' && location.pathname !== '/home' ? (
              <AiOutlineArrowLeft size={25} style={{ color: 'white' }} />
            ) : (
              <BiUserCircle size={40} style={{ color: 'white' }} />
            )}
            <MenuButton>
              <GiHamburgerMenu
                onClick={() => setOpenMenu(true)}
                size={40}
                style={{ color: 'white' }}
              />
            </MenuButton>
          </HeaderContent>
          {openMenu && <Menu setOpen={setOpenMenu} open={openMenu} />}
        </>
      )}
    </>
  );
};
