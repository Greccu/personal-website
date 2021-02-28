import React from "react";
import {
  InfoCardsContainer,
  InfoCardsH1,
  InfoCardsWrapper,
  InfoCardsCard,
  InfoCardsIcon,
  InfoCardsH2,
  InfoCardsP,
} from "./InfoCardsElements";

const InfoCards = () => {
  return (
    <InfoCardsContainer id="InfoCards">
      <InfoCardsH1>My InfoCards</InfoCardsH1>
      <InfoCardsWrapper>
        <InfoCardsCard>
          <InfoCardsIcon
          //src={}
          />
          <InfoCardsH2>Computer Science</InfoCardsH2>
          <InfoCardsP></InfoCardsP>
        </InfoCardsCard>
        <InfoCardsCard>
          <InfoCardsIcon //src={}
          />
          <InfoCardsH2></InfoCardsH2>
          <InfoCardsP></InfoCardsP>
        </InfoCardsCard>
      </InfoCardsWrapper>
    </InfoCardsContainer>
  );
};

export default InfoCards;
