import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+234-813-088-9300">+234-813-088-9300</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:anyanwu.ijeomajovita@mail.com">
            anyanwu.ijeomajovita@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"Embrace the Elegance of Technology!" </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/IjeomaAnyanwu">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="http://www.linkedin.com/in/anyanwu-ijeoma">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/ijaaysophia">
          <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
