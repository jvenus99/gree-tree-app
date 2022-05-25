import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const LoginContainer = styled.div`
  background-color: #e6eee7;
  height: auto;
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    color: #117821 !important;
    font-size: 48px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Input = styled(TextField)`
  width: 80%;
  div {
    border-radius: 13px;
  }
  input {
    border-radius: 13px;
    background-color: transparent;
  }
`;
