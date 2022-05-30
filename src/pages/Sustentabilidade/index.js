import { Container, HeaderContainer } from '../../style/styles';
import { ContainerSustentabilidade, HeaderSustentabilidade } from './styles';
import { ComponentList } from '../../components/ComponentList';
import { BiNews } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import { LoadMoreButton } from '../../components/ButtonLoadMore/styles';
import { MdOutlineAutorenew } from 'react-icons/md';
import { Loading } from '../../components/Loading';
import { ModalNews } from './modal';
moment.locale('pt-br');

export const Sustentabilidade = () => {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState([]);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  async function fetchNews() {
    setLoading(true);
    const { data } = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=br&category=science&apiKey=f675699f1756481d8ef67909b805c7c7'
    );
    setCount(data.articles.length);
    setNews(data.articles);
    setLoading(false);
  }

  useEffect(() => {
    fetchNews();
    setModal(false);
  }, []);

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
              {news.slice(0, limit).map((item) => {
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

          {news.length >= limit && (
            <LoadMoreButton
              startIcon={<MdOutlineAutorenew size={20} />}
              onClick={() => setLimit(limit + 5)}
            >
              Carregar mais ...
            </LoadMoreButton>
          )}
        </ContainerSustentabilidade>
      </Container>
    </>
  );
};
