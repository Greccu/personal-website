import styled from "styled-components";

export const InfoCardsContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #fff;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const InfoCardsWrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const InfoCardsCard = styled.div`
  background: #152347;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 500px;
  width: 470px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const InfoCardsIcon = styled.img`
  height: 300px;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InfoCardsH1 = styled.h1`
  font-size: 2.5rem;
  color: #152347;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const InfoCardsH2 = styled.h2`
  color: #e84118;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const InfoCardsP = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;
