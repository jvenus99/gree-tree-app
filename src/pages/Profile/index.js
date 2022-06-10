import { Container, HeaderContainer } from '../../style/styles';
import { ContainerProfile, HeaderProfile } from './styles';
import { FaUser } from 'react-icons/fa';
import { ComponentList } from '../../components/ComponentList';
import { GiPlantRoots } from 'react-icons/gi';
import { AiOutlineCloud } from 'react-icons/ai';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/userController';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export const Profile = () => {
  const [user, setUser] = useState({});
  const [crops, setCrops] = useState([]);
  const [events, setEvents] = useState([]);
  const userLog = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getUser(userLog.id);
        if (data) {
          setUser(data.data.user[0]);
          setCrops(data.data.crops);
          setEvents(data.data.events);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [userLog.id]);
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
              <span>{user.Nome}</span>
              <span>
                Criado ou atualizado {moment(user['Data de criação']).fromNow()}
              </span>
            </HeaderProfile>
          </HeaderContainer>
          <Container>
            <ContainerProfile>
              <ComponentList
                icon={<AiOutlineCloud size={25} />}
                name={`${crops.reduce((total, currentValue) => {
                  return total + parseInt(currentValue['Absorção de co2']);
                }, 0)} KG de carbono compensados`}
              />
              <ComponentList
                icon={<GiPlantRoots size={25} />}
                name={`${crops.reduce((total, currentValue) => {
                  return total + parseInt(currentValue.Quantidade);
                }, 0)} Mudas doadas`}
              />
              <ComponentList
                icon={<BsCalendar2EventFill size={30} />}
                name={`${events.length} Eventos Interact`}
              />
            </ContainerProfile>
          </Container>
        </>
      )}
    </>
  );
};
