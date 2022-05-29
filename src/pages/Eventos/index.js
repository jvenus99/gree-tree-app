import { Container, HeaderContainer } from '../../style/styles';
import { ContainerEventos, HeaderEventos } from './styles';
import { ComponentList } from '../../components/ComponentList';
import { BsCalendar4Event } from 'react-icons/bs';


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
            icon={<BsCalendar4Event size={25} />}
            name={'Nome do evento'}
            children={new Date()}
            onClick={() => {
                console.log('Clicou');
            }}                       
        />
        <ComponentList
            icon={<BsCalendar4Event size={25} />}
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