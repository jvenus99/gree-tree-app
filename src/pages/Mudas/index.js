import { Container, HeaderContainer } from '../../style/styles';
import { ContainerMudas, HeaderMudas } from './styles';
import { ComponentList } from '../../components/ComponentList';
import { GiPlantRoots } from 'react-icons/gi';


export const Mudas = () =>{
    return (
    <>
    <HeaderContainer>
        <HeaderMudas>
            <h1>Mudas solicitadas</h1>
            <h1 style={{fontWeight:'bold', color:'white', fontSize:28}}>20</h1>

        </HeaderMudas>
    </HeaderContainer>
    <Container>
        <ContainerMudas>

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
        </ContainerMudas>
    </Container>
    </>
    ) 
}