import React from "react";
import img1 from "../../images/highschool.svg";
import img2 from "../../images/faculty.svg";
import {
  InfoCardsContainer,
  InfoCardsH1,
  InfoCardsWrapper,
  InfoCardsCard,
  InfoCardsIcon,
  InfoCardsH2,
  InfoCardsP,
} from "./InfoCardsElements";
import { Button } from "../ButtonElement";
const InfoCards = () => {
  return (
    <InfoCardsContainer id="education">
      <InfoCardsH1>Education</InfoCardsH1>
      <InfoCardsWrapper>
        <InfoCardsCard>
          <InfoCardsIcon src={img1} />
          <InfoCardsH2>Mathematics and Informatics</InfoCardsH2>
          <InfoCardsP>
            Theoretical HighSchool "Nicolae Iorga" <br />
            Braila <br />
            2015-2019
          </InfoCardsP>
        </InfoCardsCard>
        <InfoCardsCard>
          <InfoCardsIcon src={img2} />
          <InfoCardsH2>Computer Science</InfoCardsH2>
          <InfoCardsP>
            Faculty of Mathematics and Computer Science <br />
            University of Bucharest <br />
            2019-present
          </InfoCardsP>
        </InfoCardsCard>
      </InfoCardsWrapper>
      <Button
        to="skills"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        primary={false}
        dark={false}
        dark2={false}
      >
        Skills
      </Button>
    </InfoCardsContainer>
  );
};

export default InfoCards;
<InfoCardsCard>
  <InfoCardsIcon //src={}
  />
  <InfoCardsH2></InfoCardsH2>
  <InfoCardsP></InfoCardsP>
</InfoCardsCard>;
