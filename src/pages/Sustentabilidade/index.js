import { Container, HeaderContainer } from '../../style/styles';
import { ContainerSustentabilidade, HeaderSustentabilidade } from './styles';
import { ComponentList } from '../../components/ComponentList';
import { BiNews } from 'react-icons/bi';


export const Sustentabilidade = () =>{
    return (
    <>
    <HeaderContainer>
        <HeaderSustentabilidade>
            <h1>Sustentabilidade</h1>
        </HeaderSustentabilidade>
    </HeaderContainer>
    <Container>
        <ContainerSustentabilidade> 
        <ComponentList
            icon={<BiNews size={25} />}
            name={'Noticia'}
            children={new Date()}
            onClick={() => {
                console.log('Clicou');
            }}                       
        />
        <ComponentList
            icon={<BiNews size={25} />}
            name={'Notícia'}
            children={new Date()}
            onClick={() => {
                console.log('Clicou');
            }}            
        />
        </ContainerSustentabilidade>
    </Container>
    </>
    ) 
}