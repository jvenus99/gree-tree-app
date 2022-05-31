import styled from 'styled-components';

export const HeaderContent = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    box-shadow: none;
  }
  display: flex;
  flex-direction: row;
  height: 57px;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #c3ce0e;
`;
