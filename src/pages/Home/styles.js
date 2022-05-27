import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  max-height: auto;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 50vh;
  }
`;

export const HomeDesktop = styled.div`
  @media (min-width: 768px) {
    width: 80%;
    display: flex;
    flex-direction: row;
  }
`;

export const ListEvents = styled.div`
  margin-bottom: 10px;
  height: 26vh;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  @media (min-width: 768px) {
    height: 40vh;
    max-height: auto;
  }
  width: 100%;
  h1 {
    margin-left: 20px;
    margin-top: 20px;
    float: left;
  }
`;

export const ListNewLetter = styled.div`
  margin-bottom: 10px;
  height: 26vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 40vh;
    max-height: auto;
  }
  width: 100%;
  h1 {
    margin-left: 20px;
    margin-top: 20px;
    float: left;
  }
`;

export const SpanClick = styled.span`
  color: #117821;
  font-size: 16px;
  text-decoration: underline;
  text-align: center;
  margin: 10px;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
    color: #03500f;
  }
`;
