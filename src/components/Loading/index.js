import { CircularProgress } from '@mui/material';
import { Container } from './styles';

export const Loading = () => {
  return (
    <Container>
      <CircularProgress style={{ color: '#117821' }} />
    </Container>
  );
};
