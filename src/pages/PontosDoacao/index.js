import { Container, HeaderChildren, HeaderContainer } from '../../style/styles';
import { ComponentList } from '../../components/ComponentList';
import { SearchBar } from '../../components/Search';

export const PontosDoacao = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderChildren>
          <h1>Pontos de Doação</h1>
          <span>54</span>
        </HeaderChildren>
      </HeaderContainer>
      <Container>
        <SearchBar />
      </Container>
    </>
  );
};
