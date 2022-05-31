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
        `https://newsapi.org/v2/everything?q=sustentabilidade&page=${page}&apiKey=f675699f1756481d8ef67909b805c7c7`
      );
      setCount(data.totalResults);
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
                const data = moment(item.publishedAt).format('D MMM. YYYY');
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
