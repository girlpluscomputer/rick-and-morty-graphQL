import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer, LogoContainer, Item } from "../navbar/elements";
import Logo from "../../img/rick-and-morty.png";
import StyledLink from "./StyledLink";

function Navbar() {
  return (
    <div>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="logo" width="200" />
        </Link>
      </LogoContainer>
      <NavbarContainer>
        <Item>
          <StyledLink to="/find-character">Find character</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/find-location">Find location</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/random-character">Random character</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/random-location">Random location</StyledLink>
        </Item>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
