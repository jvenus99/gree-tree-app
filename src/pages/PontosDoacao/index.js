import { Container, HeaderChildren, HeaderContainer } from '../../style/styles';
// import { ComponentList } from '../../components/ComponentList';
import { SearchBar } from '../../components/Search';
import { ButtonAdd, ContainerAdmin } from './styles';
import { IoIosAdd } from 'react-icons/io';
import { useState } from 'react';
import { ModalCreate } from './modalCreate';

export const PontosDoacao = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalCreate open={showModal} setOpen={setShowModal} />
      <HeaderContainer>
        <HeaderChildren>
          <ContainerAdmin>
            <h1>Pontos de Doação</h1>
            <ButtonAdd onClick={() => setShowModal(true)}>
              <IoIosAdd size={40} />
            </ButtonAdd>
          </ContainerAdmin>
          <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: 28 }}>
            54
          </h1>
        </HeaderChildren>
      </HeaderContainer>
      <Container>
        <SearchBar />
      </Container>
    </>
  );
};
