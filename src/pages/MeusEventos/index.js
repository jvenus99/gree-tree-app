import { Container, HeaderChildren, HeaderContainer } from '../../style/styles';
import { ComponentList } from '../../components/ComponentList';
import { useEffect, useState } from 'react';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { ModalView } from './modalView';
import { ContainerEventos } from './styles';
import { getMyEvents } from '../../services/eventosController';
import { Loading } from '../../components/Loading';
import moment from 'moment';

export const MeusEventos = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventoExibir, setEventoExibir] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { data } = await getMyEvents(user.id);
        if (data.data && data.data.length > 0) {
          setEventos(data.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [user.id]);

  return (
    <>
      <ModalView
        open={showModal}
        setOpen={setShowModal}
        evento={eventoExibir}
      />
      <HeaderContainer>
        <HeaderChildren>
          <h1>Meus Eventos</h1>
          <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: 28 }}>
            {eventos.length}
          </h1>
        </HeaderChildren>
      </HeaderContainer>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <ContainerEventos>
            {eventos.length > 0 ? (
              <>
                {eventos.map((evento) => (
                  <ComponentList
                    icon={<BsCalendar2EventFill size={25} />}
                    name={evento.e_name}
                    children={moment(evento.e_date).format('DD/MM/YYYY')}
                    onClick={() => {
                      setEventoExibir(evento);
                      setShowModal(true);
                    }}
                  />
                ))}
              </>
            ) : (
              <span>Voc?? n??o participou de nenhum evento ainda</span>
            )}
          </ContainerEventos>
        )}
      </Container>
    </>
  );
};
