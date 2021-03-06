import { Container, HeaderContainer } from '../../style/styles';
import {
  ButtonAdd,
  ContainerAdmin,
  ContainerEventos,
  HeaderEventos,
} from './styles';
import { ComponentList } from '../../components/ComponentList';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { ModalCreate } from './modalCreate';
import { ModalView } from './modalView';
import { getEventos } from '../../services/eventosController';
import { Loading } from '../../components/Loading';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export const Eventos = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventoExibir, setEventoExibir] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setLoading(true);
    async function fecthData() {
      try {
        const { data: eventos } = await getEventos();
        if (eventos && eventos.length > 0) {
          setEventos(eventos);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fecthData();
  }, []);

  return (
    <>
      <ModalCreate
        open={showModalCreate}
        setOpen={setShowModalCreate}
        eventos={eventos}
        setEventos={setEventos}
      />
      <ModalView
        open={showModalView}
        setOpen={setShowModalView}
        evento={eventoExibir}
      />
      <HeaderContainer>
        <HeaderEventos>
          <ContainerAdmin>
            <h1>Eventos Interact</h1>
            {user.isAdmin && (
              <ButtonAdd onClick={() => setShowModalCreate(true)}>
                <IoIosAdd size={40} />
              </ButtonAdd>
            )}
          </ContainerAdmin>
          <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: 28 }}>
            {eventos.length}
          </h1>
        </HeaderEventos>
      </HeaderContainer>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <ContainerEventos>
            {eventos &&
              eventos.map((evento) => (
                <ComponentList
                  icon={<BsCalendar2EventFill size={25} />}
                  name={evento.name}
                  children={moment(evento.date).format('DD/MM/YYYY')}
                  onClick={() => {
                    setEventoExibir(evento);
                    setShowModalView(true);
                  }}
                />
              ))}
          </ContainerEventos>
        )}
      </Container>
    </>
  );
};
