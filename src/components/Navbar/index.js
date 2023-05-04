import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = ({ toogle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizaaaaa</NavLink>
        <NavIcon onClick={toogle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
