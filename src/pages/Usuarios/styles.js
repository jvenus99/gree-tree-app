import { Button } from '@mui/material';
import styled from 'styled-components';

export const HeaderUsuarios = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  span:nth-child(3) {
    margin: 5px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  div {
    background-color: #117821;
    padding: 30px;
    border-radius: 50%;
    svg {
      color: #fff;
    }
  }
`;
export const ContainerUsuarios = styled.div`
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

export const ContentModal = styled.div`
  border-radius: 8px;
  min-height: 30vh;
  max-height: auto;
  width: 100%;
  margin-top: 38px;
  color: black !important;
  h1 {
    font-size: 32px;
    text-align: left;
    margin-bottom: 10%;
  }
`;

export const ButtonCloseModal = styled(Button)`
  position: absolute !important;
  top: 2px;
  right: 0px;
  padding: 20px;
`;

export const ButtonConfirm = styled(Button)`
  width: 100%;
  background: ${({ unconfirm }) =>
    unconfirm ? 'red !important' : '#117821 !important'};
  padding: 10px !important;
  @media (min-width: 768px) {
    width: 40%;
    margin: 25px !important;
  }
  margin-bottom: 25px !important;
  border-radius: 13px !important;
  text-transform: none !important;
  font-size: 18px !important;
`;
