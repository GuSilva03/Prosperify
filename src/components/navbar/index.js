import React, { useEffect, useState } from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn,NavBtnLink} from './navbarElements';
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
    const [scrolNav, setscrolNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80){
            setscrolNav(true)
        }else{
            setscrolNav(false)
        }
    }
useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () =>{
    scroll.scrollToTop();
}

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrolNav={scrolNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Prosperify</NavLogo>
                <MobileIcon onClick={toggle}><FaBars/></MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exacy='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
