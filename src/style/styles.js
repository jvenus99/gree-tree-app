import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 30vh;
  background-color: #c3ce0e;
  border-radius: 0px 0px 60px 60px;
  width: 100%;
  h1 {
    font-weight: 400;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeaderChildren = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 32px;
    margin: 20px;
    color: white;
    font-weight: 700;
  }
`;

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  max-height: auto;
  background-color: #e6eee7;
  border-radius: 60px 60px 0px 0px;
`;
export const PageAuth = styled.div`
  background-color: #e6eee7;
  overflow: auto;
  height: 100vh;
  max-height: auto;
  width: 100%;
  align-items: center;
`;

export const MenuButton = styled.span`
  display: flex;
  align-items: center;
  float: right;
  &:hover {
    cursor: pointer;
    background-color: rgba(17, 120, 33, 0.1);
    padding: 10px;
    border-radius: 50%;
  }
`;
