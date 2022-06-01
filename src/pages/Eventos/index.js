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
import { ModalView } from './modalView';

export const Eventos = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  return (
    <>
      <ModalCreate open={showModalCreate} setOpen={setShowModalCreate} />
      <ModalView open={showModalView} setOpen={setShowModalView} />
      <HeaderContainer>
        <HeaderEventos>
          <ContainerAdmin>
            <h1>Eventos Interact</h1>
            <ButtonAdd onClick={() => setShowModalCreate(true)}>
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
              setShowModalView(true);
            }}
          />
          <ComponentList
            icon={<BsCalendar2EventFill size={25} />}
            name={'Nome do evento'}
            children={new Date()}
            onClick={() => {
              setShowModalView(true);
            }}
          />
        </ContainerEventos>
      </Container>
    </>
  );
};
