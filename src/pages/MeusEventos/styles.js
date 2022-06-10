import { Button } from '@mui/material';
import styled from 'styled-components';

export const ContentModal = styled.div`
  border-radius: 8px;
  min-height: 30vh;
  width: 100%;
  margin-top: 38px;
  color: black !important;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 28px;
    text-align: left;
  }
  span {
    margin-top: 20px;
    margin-bottom: 2px;
    font-size: 18px;
  }
  p {
    font-size: 18px;
  }
  p:nth-last-child(2) {
    margin-bottom: 20px;
  }
`;
export const ContainerEventos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
    align-self: center;
    background-color: rgba(17, 120, 33, 0.1);
    min-height: 70vh;
    border-radius: 30px;
    max-height: 100%;
  }
`;

export const ButtonCloseModal = styled(Button)`
  position: absolute !important;
  top: 2px;
  right: 0px;
  padding: 20px;
`;
