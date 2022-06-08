import { Container, HeaderContainer } from '../../style/styles';
import { ContainerProfile, HeaderProfile } from './styles';
import { FaUser } from 'react-icons/fa';
import { ComponentList } from '../../components/ComponentList';
import { GiPlantRoots } from 'react-icons/gi';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/userController';

export const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const { data: user } = await getUser('userId');
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });
  return (
    <>
      {user && (
        <>
          <HeaderContainer>
            <HeaderProfile>
              <h1>{''}</h1>
              <div>
                <FaUser size={40} />
              </div>
              <span>{user.name}</span>
              <span>{user.createdAt}</span>
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
      )}
    </>
  );
};
