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
import { getMudas, getMudasByName } from '../../services/mudasController';
import { Loading } from '../../components/Loading';

export const Mudas = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalDoar, setShowModalDoar] = useState(false);
  const [mudas, setMudas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mudasExibir, setMudasExibir] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));
  const [api, setApi] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
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
  }, [api]);

  useEffect(() => {
    setLoading(false);
  }, [mudas]);

  const handleChange = async (e) => {
    try {
      if (e.target.value.length > 0 || e.target.value.length !== '') {
        const { data } = await getMudasByName(e.target.value);
        if (data.data && data.data.length > 0) {
          setMudas(data.data);
        }
      } else {
        setApi(true);
      }
    } catch (error) {
      setApi(true);
      console.log(error);
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderMudas>
          <ContainerAdmin>
            <h1>Mudas solicitadas</h1>
            {user.isAdmin && (
              <ButtonAdd onClick={() => setShowModalCreate(true)}>
                <IoIosAdd size={40} />
              </ButtonAdd>
            )}
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
            <SearchBar onChange={(e) => handleChange(e)}></SearchBar>
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

            <ModalCreate
              open={showModalCreate}
              setOpen={setShowModalCreate}
              mudas={mudas}
              setMudas={setMudas}
            />
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
