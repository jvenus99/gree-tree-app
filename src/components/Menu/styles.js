import styled from 'styled-components';
import { MenuItem } from '@mui/material';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
  width: ${(open) => (open ? '70%' : 0)};
  @media (min-width: 768px) {
    width: 30%;
  }
  height: 100vh;
  border-radius: 20px 0px 0px 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  span {
    float: left;
    margin: 20px;
  }
  transition: width 1.5s ease;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 20px;
  padding-top: 35px;
  li {
    border-radius: 13px;
  }
`;

export const MenuItemStyle = styled(MenuItem)`
  display: flex;
  align-items: center;
  a {
    text-align: right;
    color: #117821;
    font-size: 18px;
    margin-left: 5px;
    @media (min-width: 768px) {
      font-size: 24px;
      margin-left: 15px;
    }
    svg {
      position: absolute;
      left: 0;
      top: 15px;
      margin-right: 10px;
      @media (min-width: 768px) {
        top: 13px;
      }
    }
  }
`;
