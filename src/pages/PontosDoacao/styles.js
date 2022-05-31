import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

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
  min-height: 65vh;
  max-height: auto;
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

export const ButtonConfirm = styled(Button)`
  width: 100%;
  background: #117821 !important;
  padding: 10px !important;
  border-radius: 13px !important;
  text-transform: none !important;
  font-size: 18px !important;
`;
