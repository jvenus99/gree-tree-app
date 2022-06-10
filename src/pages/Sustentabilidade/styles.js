import styled from 'styled-components';
import { Button } from '@mui/material';

export const HeaderSustentabilidade = styled.div`
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
export const ContainerSustentabilidade = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    align-self: center;
    background-color: rgba(17, 120, 33, 0.1);
    min-height: 70vh;
    border-radius: 30px;
  }
`;

export const ContentModal = styled.div`
  border-radius: 8px;
  min-height: 85vh;
  width: 100%;
  margin-top: 38px;
  color: black !important;
  h1 {
    font-size: 18px;
    margin: 4px;
    text-align: left;
  }
  img {
    width: 90%;
    margin: 10px;
  }
  p,
  span {
    margin: 10px;
  }
`;

export const ButtonCloseModal = styled(Button)`
  position: absolute !important;
  top: 2px;
  right: 0px;
  padding: 20px;
`;
