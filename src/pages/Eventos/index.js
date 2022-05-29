import { Container, HeaderContainer } from '../../style/styles';
import { ContainerEventos, HeaderEventos } from './styles';
import { ComponentList } from '../../components/ComponentList';
import { GiPlantRoots } from 'react-icons/gi';


export const Eventos = () =>{
    return (
    <>
    <HeaderContainer>
        <HeaderEventos>
            <h1>Eventos Interact</h1>
            <h1 style={{fontWeight:'bold', color:'white', fontSize:28}}>5</h1>

        </HeaderEventos>
    </HeaderContainer>
    <Container>
        <ContainerEventos>
        <ComponentList
            icon={<GiPlantRoots size={25} />}
            name={'Nome do evento'}
            children={new Date()}
            onClick={() => {
                console.log('Clicou');
            }}                       
        />
        <ComponentList
            icon={<GiPlantRoots size={25} />}
            name={'Nome do evento'}
            children={new Date()}
            onClick={() => {
                console.log('Clicou');
            }}            
        />
        </ContainerEventos>
    </Container>
    </>
    ) 
}