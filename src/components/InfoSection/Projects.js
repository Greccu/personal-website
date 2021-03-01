import React from "react";
import {
  InfoContainer,
  InfoWrapper2,
  ProjectRow,
  PColumn1,
  PColumn2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Video,
} from "./InfoElements";

const ProjectSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  alt,
  gitlink,
  video,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper2>
          <ProjectRow imgStart={imgStart}>
            <PColumn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </Subtitle>
              </TextWrapper>
            </PColumn1>
            <PColumn2>
              <ImgWrap>
                <Video autoPlay loop muted src={video} type="video/mp4" />
              </ImgWrap>
            </PColumn2>
          </ProjectRow>
        </InfoWrapper2>
      </InfoContainer>
    </>
  );
};

export default ProjectSection;
