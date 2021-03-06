import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SocialIconLink = styled.a`
  color: ${({ dark }) => (dark ? "#152347" : "#fff")};
  font-size: 48px;
  margin: 0 30px;
  @media screen and (max-width: 400px) {
    font-size: 32px;
  }
  @media screen and (max-width: 300px) {
    font-size: 24px;
  }
`;
