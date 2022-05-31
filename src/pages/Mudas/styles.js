import styled from 'styled-components';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

export const HeaderMudas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;
export const ContainerMudas = styled.div`
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

export const ContentModal = styled.div`
  border-radius: 8px;
  min-height: 45vh;
  max-height: auto;
  width: 100%;
  margin-top: 38px;
  color: black !important;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 32px;
    text-align: left;
    margin-bottom: 20px;
  }
  span {
    font-size: 18px;
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 5px;
    margin-top: 10px;
  }
`;

export const ContentModalCreate = styled.div`
  border-radius: 8px;
  min-height: 40vh;
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

export const SelectStyle = styled(Select)`
  width: 100%;
  border-radius: 13px !important;
  select {
    color: #117821 !important;
  }
`;

export const ButtonConfirm = styled(Button)`
  width: 100%;
  background: #117821 !important;
  padding: 10px !important;
  border-radius: 13px !important;
  text-transform: none !important;
  font-size: 18px !important;
  margin-top: 30px !important;
`;
