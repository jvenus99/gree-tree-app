import { Container, HeaderContainer } from '../../style/styles';
import { ContainerUsuarios, HeaderUsuarios } from './styles';
import { ComponentList } from '../../components/ComponentList';
import { SearchBar } from '../../components/Search';
import { FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { ModalAdmin } from './modalAdmin';
import { getUserByName, getUsers } from '../../services/userController';
import { Loading } from '../../components/Loading';

export const Usuarios = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userExibir, setUserExibir] = useState({});
  const [api, setApi] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data: users } = await getUsers();
        if (users && users.length > 0) {
          setUsers(users);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [api]);

  const handleChange = async (e) => {
    try {
      if (e.target.value.length > 0) {
        const { data } = await getUserByName(e.target.value);
        if (data.data && data.data.length > 0) {
          setUsers(data.data);
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
      <ModalAdmin open={showModal} setOpen={setShowModal} user={userExibir} />
      <HeaderContainer>
        <HeaderUsuarios>
          <h1>Usuários</h1>
          <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: 28 }}>
            {users.length}
          </h1>
        </HeaderUsuarios>
      </HeaderContainer>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <ContainerUsuarios>
            <SearchBar onChange={(e) => handleChange(e)}></SearchBar>
            {users &&
              users.map((user) => (
                <ComponentList
                  icon={<FaUser size={25} />}
                  name={user.name}
                  children={user.email}
                  onClick={() => {
                    setUserExibir(user);
                    setShowModal(true);
                  }}
                />
              ))}
          </ContainerUsuarios>
        )}
      </Container>
    </>
  );
};
