import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { FooterContainer,FooterLink,FooterLinkItems,FooterLinkTitle,FooterLinksContainer,FooterLinksWrapper,FooterWrap, SocialIconLink, SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap, WebsitesRights} from './FooterStyles';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
function Footer() {
  const toggleHome = () =>{
    scroll.scrollToTop();
}
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                        <FooterLink to='/signin'>Como Trabalhamos</FooterLink>
                        <FooterLink to='/signin'>FeedBacks</FooterLink>
                        <FooterLink to='/signin'>Investimentos</FooterLink>
                        <FooterLink to='/signin'>Termos de Serviço</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Fale Conosco</FooterLinkTitle>
                        <FooterLink to='/signin'>Contato</FooterLink>
                        <FooterLink to='/signin'>Support</FooterLink>
                        <FooterLink to='/signin'>Emails</FooterLink>
                        <FooterLink to='/signin'>Forum</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/signin'>Instragram</FooterLink>
                        <FooterLink to='/signin'>Facebook</FooterLink>
                        <FooterLink to='/signin'>Github</FooterLink>
                        <FooterLink to='/signin'>Twitter</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}> prosperify </SocialLogo>
                    <WebsitesRights>Prosperify @ {new Date().getFullYear()} Todos os direitos reservados.</WebsitesRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" arial-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="https://x.com/ImmGustavoSilva" target="_blank" arial-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Github"><FaGithub/></SocialIconLink>
                    </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
