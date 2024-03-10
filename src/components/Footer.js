import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const openSocialMedia = (url) => {
    window.open(url, '_blank');
  };

  return (
    <StyledFooter>
      <div className="container">
        <FooterContent>
          <FooterLinks>
            <FooterSection>
              <FooterLink href="#">KnowledgeNest Business</FooterLink>
              <FooterLink href="#">Teach on KnowledgeNest</FooterLink>
              <FooterLink href="#">Get the app</FooterLink>
              <FooterLink href="#">About us</FooterLink>
              <FooterLink href="#">Contact us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Help and Support</FooterLink>
              <FooterLink href="#">Affiliate</FooterLink>
              <FooterLink href="#">Investors</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Privacy policy</FooterLink>
              <FooterLink href="#">Sitemap</FooterLink>
              <FooterLink href="#">Accessibility statement</FooterLink>
            </FooterSection>
          </FooterLinks>
          <Copyright>
            &copy; 2024 KNOWLEDGENEST
          </Copyright>
          <AuthorInfo>
            SHUBHAM PARADE
          </AuthorInfo>
          <SocialIcons>
            <SocialIcon onClick={() => openSocialMedia('https://www.instagram.com/shubham_._sp_._')}>
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
            <SocialIcon onClick={() => openSocialMedia('https://www.linkedin.com/in/shubhamparade')}>
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon onClick={() => openSocialMedia('https://github.com/Shubham6865/react_portfolio/')}>
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon onClick={() => openSocialMedia('mailto:paradeshubham6865@gmail.com')}>
              <FontAwesomeIcon icon={faGoogle} />
            </SocialIcon>
          </SocialIcons>
        </FooterContent>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  margin-top: 50px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const AuthorInfo = styled.p`
  margin-top: 10px;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;

  span {
    cursor: pointer;

    & > span {
      margin-left: 10px;
    }
  }
`;

const SocialIcon = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

export { Footer };
