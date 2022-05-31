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
import { useState } from 'react';
import { ModalCreate } from './modalCreate';

export const Eventos = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalCreate open={showModal} setOpen={setShowModal} />
      <HeaderContainer>
        <HeaderEventos>
          <ContainerAdmin>
            <h1>Eventos Interact</h1>
            <ButtonAdd onClick={() => setShowModal(true)}>
              <IoIosAdd size={40} />
            </ButtonAdd>
          </ContainerAdmin>
          <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: 28 }}>
            5
          </h1>
        </HeaderEventos>
      </HeaderContainer>
      <Container>
        <ContainerEventos>
          <ComponentList
            icon={<BsCalendar2EventFill size={25} />}
            name={'Nome do evento'}
            children={new Date()}
            onClick={() => {
              console.log('Clicou');
            }}
          />
          <ComponentList
            icon={<BsCalendar2EventFill size={25} />}
            name={'Nome do evento'}
            children={new Date()}
            onClick={() => {
              console.log('Clicou');
            }}
          />
        </ContainerEventos>
      </Container>
    </>
  );
};
