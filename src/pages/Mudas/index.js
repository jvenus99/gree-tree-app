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
import { useEffect, useState } from 'react';
import { ModalCreate } from './modalCreate';
import { ModalDoar } from './modalDoar';
import { getMudas } from '../../services/mudasController';
import { Loading } from '../../components/Loading';

export const Mudas = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalDoar, setShowModalDoar] = useState(false);
  const [mudas, setMudas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mudasExibir, setMudasExibir] = useState({});

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const { data: mudas } = await getMudas();
        if (mudas && mudas.length > 0) {
          setMudas(mudas);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
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
            {mudas.length}
          </h1>
        </HeaderMudas>
      </HeaderContainer>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <ContainerMudas>
            <SearchBar></SearchBar>
            {mudas &&
              mudas.map((muda) => (
                <ComponentList
                  icon={<GiPlantRoots size={25} />}
                  name={muda.name}
                  children={`Absorção: ${muda.co2AbsorptionKg}kg`}
                  onClick={() => {
                    setMudasExibir(muda);
                    setShowModalDoar(true);
                  }}
                />
              ))}

            <ModalCreate open={showModalCreate} setOpen={setShowModalCreate} />
            <ModalDoar
              open={showModalDoar}
              setOpen={setShowModalDoar}
              muda={mudasExibir}
            />
          </ContainerMudas>
        )}
      </Container>
    </>
  );
};
