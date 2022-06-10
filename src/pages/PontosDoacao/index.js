import { Container, HeaderChildren, HeaderContainer } from '../../style/styles';
import { ComponentList } from '../../components/ComponentList';
import { SearchBar } from '../../components/Search';
import { ButtonAdd, ContainerAdmin } from './styles';
import { IoIosAdd } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { ModalCreate } from './modalCreate';
import { GoLocation } from 'react-icons/go';
import { ModalView } from './modalView';
import { getPontosDoacao } from '../../services/pontosDoacaoController';
import { Loading } from '../../components/Loading';

export const PontosDoacao = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [pontos, setPontos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pontoExibir, setPontoExibir] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));

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
  }, []);

  return (
    <>
      <ModalCreate open={showModal} setOpen={setShowModal} />
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
          <>
            <SearchBar />
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
          </>
        )}
      </Container>
    </>
  );
};
