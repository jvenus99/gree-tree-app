import { HeaderContent } from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  return (
    <>
      {!(
        location.pathname === '/login' || location.pathname === '/cadastro'
      ) && (
        <HeaderContent>
          {console.log(location.pathname)}
          {location.pathname !== '/' && location.pathname !== '/home' ? (
            <AiOutlineArrowLeft size={25} style={{ color: 'white' }} />
          ) : (
            <BiUserCircle size={40} style={{ color: 'white' }} />
          )}
          <GiHamburgerMenu size={40} style={{ color: 'white' }} />
        </HeaderContent>
      )}
    </>
  );
};
