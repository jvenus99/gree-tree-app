import { Container, HeaderContainer } from '../../style/styles';
import { ContainerProfile, HeaderProfile } from './styles';
import { FaUser } from 'react-icons/fa';
import { ComponentList } from '../../components/ComponentList';
import { GiPlantRoots } from 'react-icons/gi';
import { BsCalendar2EventFill } from 'react-icons/bs';

export const Profile = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderProfile>
          <h1>Perfil</h1>
          <div>
            <FaUser size={40} />
          </div>
          <span>Ana Calixto</span>
          <span>Cadastrada há 3 meses</span>
        </HeaderProfile>
      </HeaderContainer>
      <Container>
        <ContainerProfile>
          <ComponentList
            icon={<GiPlantRoots size={25} />}
            name={'30 Mudas doadas'}
          />
          <ComponentList
            icon={<BsCalendar2EventFill size={30} />}
            name={'5 eventos interact'}
          />
        </ContainerProfile>
      </Container>
    </>
  );
};
