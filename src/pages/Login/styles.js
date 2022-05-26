import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  @media (min-width: 768px) {
    padding-top: 10%;
  }
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
  @media (min-width: 768px) {
    width: 30%;
  }
  width: 80%;
  div {
    border-radius: 13px;
  }
  input {
    border-radius: 13px;
    background-color: transparent;
  }
`;

export const ButtonConfirm = styled(Button)`
  width: 50%;
  @media (min-width: 768px) {
    width: 20%;
  }
  background: #117821 !important;
  padding: 10px !important;
  margin: 10px !important;
  border-radius: 13px !important;
  text-transform: none !important;
  font-size: 18px !important;
`;

export const SpanClick = styled.span`
  color: #117821;
  font-size: 16px;
  text-decoration: underline;
  margin: 10px;
  &:hover {
    cursor: pointer;
    color: #03500f;
  }
`;
