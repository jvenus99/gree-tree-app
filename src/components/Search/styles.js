import styled from 'styled-components';
import { TextField } from '@mui/material';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin: 20px;
  padding: 10px 10px;
  border-radius: 20px;
  background-color: #117821;
  width: 80%;
`;

export const Input = styled(TextField)`
  width: 80%;
  input {
    color: white;
    background-color: transparent;
  }
`;
