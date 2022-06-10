import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

export const HeaderEventos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
export const ContainerEventos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 40%;
    align-self: center;
    background-color: rgba(17, 120, 33, 0.1);
    min-height: 70vh;
    border-radius: 30px;
    max-height: 100%;
  }
`;

export const ButtonAdd = styled(Button)`
  svg {
    color: white;
  }
`;

export const ContainerAdmin = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  button {
    margin-bottom: 20px;
  }
`;

export const ContentModalCreate = styled.div`
  border-radius: 8px;
  min-height: 50vh;
  width: 100%;
  margin-top: 38px;
  color: black !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    font-size: 32px;
    text-align: left;
  }
`;

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

export const ButtonCloseModal = styled(Button)`
  position: absolute !important;
  top: 2px;
  right: 0px;
  padding: 20px;
`;

export const Input = styled(TextField)`
  width: 100%;
  div {
    border-radius: 13px;
  }
  input {
    border-radius: 13px;
    background-color: transparent;
  }
`;

export const ButtonConfirm = styled(Button)`
  width: 100%;
  background: #117821 !important;
  padding: 10px !important;
  border-radius: 13px !important;
  text-transform: none !important;
  font-size: 18px !important;
`;
