import styled from 'styled-components';

export const ComponentListContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    padding: 40px;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
      background-color: rgba(17, 120, 33, 0.1);
    }
  }
  background-color: transparent;
  flex: row;
  align-items: center;
  & > span {
    background-color: #c3ce0e;
    padding: 20px 20px;
    border-radius: 50%;
    margin: 0px 20px;
    display: flex;
    align-items: center;
    svg {
      color: #117821;
    }
  }
  & > svg {
    margin-right: 5px;
  }
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  color: #117821;
  h2 {
    font-size: 18px;
    margin-bottom: 5px;
    max-width: 22ch;
    @media (min-width: 768px) {
      max-width: 31ch;
    }
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    color: #c3ce0e !important;
    font-size: 14px;
    margin: 0 10px;
  }
`;
