import { Dialog, DialogContent } from '@mui/material';
import { ButtonCloseModal, ContentModal } from './styles';
import { IoMdClose } from 'react-icons/io';

export const ModalNews = ({ article, open, setOpen }) => {
  return (
    <>
      <Dialog open={open}>
        <DialogContent>
          <ButtonCloseModal onClick={() => setOpen(false)}>
            <IoMdClose
              style={{ background: '#117821', borderRadius: '50%' }}
              color={'white'}
              size={25}
            />
          </ButtonCloseModal>
          <ContentModal>
            <h1>{article.title}</h1>
            <img src={article.media} alt='Imagem da notícia' />
            <p>{article.excerpt}</p>
            <p>{article.summary}</p>
            <span>
              Deseja ver a notícia completa, entre{' '}
              <a href={article.link}>aqui</a>!
            </span>
          </ContentModal>
        </DialogContent>
      </Dialog>
    </>
  );
};
