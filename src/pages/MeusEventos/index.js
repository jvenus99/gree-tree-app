import { Container, HeaderChildren, HeaderContainer } from '../../style/styles';
import { ComponentList } from '../../components/ComponentList';
import { useState } from 'react';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { ModalView } from './modalView';
import { ContainerEventos } from './styles';

export const MeusEventos = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalView open={showModal} setOpen={setShowModal} />
      <HeaderContainer>
        <HeaderChildren>
          <h1>Meus Eventos</h1>
          <span>5</span>
        </HeaderChildren>
      </HeaderContainer>
      <Container>
        <ContainerEventos>
          <ComponentList
            icon={<BsCalendar2EventFill size={25} />}
            name={'Nome do evento'}
            children={new Date()}
            onClick={() => {
              setShowModal(true);
            }}
          />
        </ContainerEventos>
      </Container>
    </>
  );
};
