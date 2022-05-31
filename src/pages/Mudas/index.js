import { Container, HeaderContainer } from '../../style/styles';
import {
  ButtonAdd,
  ContainerAdmin,
  ContainerMudas,
  HeaderMudas,
} from './styles';
import { ComponentList } from '../../components/ComponentList';
import { SearchBar } from '../../components/Search';
import { GiPlantRoots } from 'react-icons/gi';
import { IoIosAdd } from 'react-icons/io';
import { useState } from 'react';
import { ModalCreate } from './modalCreate';
import { ModalDoar } from './modalDoar';

export const Mudas = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalDoar, setShowModalDoar] = useState(false);
  return (
    <>
      <HeaderContainer>
        <HeaderMudas>
          <ContainerAdmin>
            <h1>Mudas solicitadas</h1>
            <ButtonAdd onClick={() => setShowModalCreate(true)}>
              <IoIosAdd size={40} />
            </ButtonAdd>
          </ContainerAdmin>
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
              setShowModalDoar(true);
            }}
          />

          <ComponentList
            icon={<GiPlantRoots size={25} />}
            name={'Nome da muda'}
            children={new Date()}
            onClick={() => {
              setShowModalDoar(true);
            }}
          />
          <ModalCreate open={showModalCreate} setOpen={setShowModalCreate} />
          <ModalDoar open={showModalDoar} setOpen={setShowModalDoar} />
        </ContainerMudas>
      </Container>
    </>
  );
};
