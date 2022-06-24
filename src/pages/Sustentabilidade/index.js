import { ComponentList } from '../../components/ComponentList';

import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';

import { BiNews } from 'react-icons/bi';
import { Pagination, Stack } from '@mui/material';
import { Loading } from '../../components/Loading';
import { ModalNews } from './modal';
import { Container, HeaderContainer } from '../../style/styles';
import { ContainerSustentabilidade, HeaderSustentabilidade } from './styles';

moment.locale('pt-br');

export const Sustentabilidade = () => {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.newscatcherapi.com/v2/search?q=sustainability&page=${page}`,
        {
          headers: {
            'x-api-key': '89s_SyY_8VpO6mW-Aw5sgDA4S1C-gzy85LqfeHCW94o',
          },
        }
      );
      setCount(data.total_hits);
      setNews(data.articles);
      setLoading(false);
    }
    fetchNews();
    setModal(false);
  }, [page]);

  function handlePage(event, value) {
    setPage(value);
  }

  return (
    <>
      <ModalNews open={modal} article={article} setOpen={setModal} />
      <HeaderContainer>
        <HeaderSustentabilidade>
          <h1>Sustentabilidade</h1>
          <h1 style={{ fontWeight: 'bold', color: 'white', fontSize: 28 }}>
            {count}
          </h1>
        </HeaderSustentabilidade>
      </HeaderContainer>
      <Container>
        <ContainerSustentabilidade>
          {loading ? (
            <Loading />
          ) : (
            <>
              {news.map((item) => {
                const data = moment(item.published_date).format('D MMM. YYYY');
                return (
                  <ComponentList
                    icon={<BiNews size={25} />}
                    name={item.title}
                    children={data}
                    onClick={() => {
                      setArticle(item);
                      setModal(true);
                    }}
                  />
                );
              })}
            </>
          )}
          <Stack style={{ margin: '10px', alignSelf: 'center' }} spacing={2}>
            <Pagination count={20} page={page} onChange={handlePage} />
          </Stack>
        </ContainerSustentabilidade>
      </Container>
    </>
  );
};
