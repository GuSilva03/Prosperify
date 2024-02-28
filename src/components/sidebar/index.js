import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SiderbarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute} from './sidebarElements';
const Sidebar = ({isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SiderbarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">Sobre</SidebarLink>
                <SidebarLink to="discover">Discover</SidebarLink>
                <SidebarLink to="services">Services</SidebarLink>
                <SidebarLink to="signup">Sign Up</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SidebarBtnWrap>
        </SiderbarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
