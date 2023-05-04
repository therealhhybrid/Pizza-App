import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./sidebarElements";

const Sidebar = ({ isOpen, toogle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onClick={toogle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/"> Pizzas </SidebarLink>
        <SidebarLink to="/"> Desert </SidebarLink>
        <SidebarLink to="/"> Full Menu </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/"> Order Now </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
