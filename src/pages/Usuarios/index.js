import { Container, HeaderContainer } from '../../style/styles';
import { ContainerUsuarios, HeaderUsuarios } from './styles';
import { ComponentList } from '../../components/ComponentList';
import { SearchBar } from '../../components/Search';
import { FaUser } from 'react-icons/fa';


export const Usuarios = () =>{
    return (
    <>
    <HeaderContainer>
        <HeaderUsuarios>
            <h1>Usuários</h1>
            <h1 style={{fontWeight:'bold', color:'white', fontSize:28}}>54</h1>

        </HeaderUsuarios>
    </HeaderContainer>
    <Container>
        <ContainerUsuarios>
        <SearchBar >            
        </SearchBar>
        <ComponentList
            icon={<FaUser size={25} />}
            name={'Nome da usuário'}
            children={new Date()}
            onClick={() => {
                console.log('Clicou');
            }}                       
        />
        <ComponentList
            icon={<FaUser size={25} />}
            name={'Nome do usuário'}
            children={new Date()}
            onClick={() => {
                console.log('Clicou');
            }}            
        />
        </ContainerUsuarios>
    </Container>
    </>
    ) 
}