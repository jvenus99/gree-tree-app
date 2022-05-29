import { HeaderContent } from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MenuButton } from '../../style/styles';
import { Menu } from '../Menu';
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {!(
        location.pathname === '/login' || location.pathname === '/cadastro'
      ) && (
        <>
          <HeaderContent>
            {location.pathname !== '/' && location.pathname !== '/home' ? (
              <AiOutlineArrowLeft
                onClick={() => navigate(-1)}
                size={25}
                style={{ color: 'white', cursor: 'pointer' }}
              />
            ) : (
              <BiUserCircle
                onClick={() => {
                  navigate('/profile');
                }}
                size={40}
                style={{ color: 'white', cursor: 'pointer' }}
              />
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
