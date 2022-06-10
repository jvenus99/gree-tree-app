import { Container, HeaderChildren, HeaderContainer } from '../../style/styles';
import { ComponentList } from '../../components/ComponentList';
import { SearchBar } from '../../components/Search';
import { ButtonAdd, ContainerAdmin, ContainerPontosDoacao } from './styles';
import { IoIosAdd } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { ModalCreate } from './modalCreate';
import { GoLocation } from 'react-icons/go';
import { ModalView } from './modalView';
import {
  getDonationByAdress,
  getPontosDoacao,
} from '../../services/pontosDoacaoController';
import { Loading } from '../../components/Loading';

export const PontosDoacao = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [pontos, setPontos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pontoExibir, setPontoExibir] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));
  const [api, setApi] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fecthData() {
      try {
        const { data: pontos } = await getPontosDoacao();
        if (pontos && pontos.length > 0) {
          setPontos(pontos);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fecthData();
  }, [api]);

  useEffect(() => {
    setLoading(false);
  }, [pontos]);

  const handleChange = async (e) => {
    try {
      if (e.target.value.length > 0) {
        const { data } = await getDonationByAdress(e.target.value);
        if (data.data && data.data.length > 0) {
          setPontos(data.data);
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
      <ModalCreate
        open={showModal}
        setOpen={setShowModal}
        pontosDoacao={pontos}
        setPontosDoacao={setPontos}
      />
      <ModalView
        open={showModalView}
        setOpen={setShowModalView}
        pontoDoacao={pontoExibir}
      />
      <HeaderContainer>
        <HeaderChildren>
          <ContainerAdmin>
            <h1>Pontos de Doação</h1>
            {user.isAdmin && (
              <ButtonAdd onClick={() => setShowModal(true)}>
                <IoIosAdd size={40} />
              </ButtonAdd>
            )}
          </ContainerAdmin>
          <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: 28 }}>
            {pontos.length}
          </h1>
        </HeaderChildren>
      </HeaderContainer>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <ContainerPontosDoacao>
            <SearchBar onChange={(e) => handleChange(e)} />
            {pontos &&
              pontos.map((ponto) => (
                <ComponentList
                  icon={<GoLocation size={25} />}
                  name={ponto.name}
                  children={`${ponto.logradouro}, ${ponto.numero} - ${ponto.bairro}`}
                  onClick={() => {
                    setPontoExibir(ponto);
                    setShowModalView(true);
                  }}
                />
              ))}
          </ContainerPontosDoacao>
        )}
      </Container>
    </>
  );
};
