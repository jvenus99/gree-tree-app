import styled from 'styled-components';

export const HeaderProfile = styled.div`
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
export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 40%;
    align-self: center;
    background-color: rgba(17, 120, 33, 0.1);
    min-height: 70vh;
    border-radius: 30px;
    max-height: 100%;
  }
`;
