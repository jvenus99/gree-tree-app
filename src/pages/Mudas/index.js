import { Container, HeaderContainer } from '../../style/styles';
import { ButtonAdd, ContainerMudas, HeaderMudas } from './styles';
import { ComponentList } from '../../components/ComponentList';
import { SearchBar } from '../../components/Search';
import { GiPlantRoots } from 'react-icons/gi';
import { IoIosAdd } from 'react-icons/io';
import { useState } from 'react';
import { ModalCreate } from './modalCreate';

export const Mudas = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <HeaderContainer>
        <HeaderMudas>
          <ButtonAdd onClick={() => setShowModal(true)}>
            <IoIosAdd size={40} />
          </ButtonAdd>
          <h1>Mudas solicitadas</h1>
          <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: 28 }}>
            20
          </h1>
        </HeaderMudas>
      </HeaderContainer>
      <Container>
        <ContainerMudas>
          <SearchBar></SearchBar>
          <ComponentList
            icon={<GiPlantRoots size={25} />}
            name={'Nome da muda'}
            children={new Date()}
            onClick={() => {
              console.log('Clicou');
            }}
          />

          <ComponentList
            icon={<GiPlantRoots size={25} />}
            name={'Nome da muda'}
            children={new Date()}
            onClick={() => {
              console.log('Clicou');
            }}
          />
          <ModalCreate open={showModal} setOpen={setShowModal} />
        </ContainerMudas>
      </Container>
    </>
  );
};
