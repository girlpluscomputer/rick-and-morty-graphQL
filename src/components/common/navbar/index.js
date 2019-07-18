import React from "react";
import { Fragment } from "react";
import { withRouter } from "react-router";
import { NavbarContainer, LogoContainer } from "../navbar/elements";
import Logo from "../../img/rick-and-morty.png";
import StyledLink from "./StyledLink";

function Navbar(props) {
  const activeRoute = props.location.pathname;
  return (
    <Fragment>
      <LogoContainer>
        <img src={Logo} alt="logo" width="200" />
      </LogoContainer>
      <NavbarContainer>
        <StyledLink
          to="/find-character"
          active={activeRoute === "/find-character" ? "active" : ""}
        >
          Find character
        </StyledLink>
        <StyledLink
          to="/find-location"
          active={activeRoute === "/find-location" ? "active" : ""}
        >
          Find location
        </StyledLink>
        <StyledLink
          to="/random-character"
          active={activeRoute === "/random-character" ? "active" : ""}
        >
          Random character
        </StyledLink>
        <StyledLink
          to="/random-location"
          active={activeRoute === "/random-location" ? "active" : ""}
        >
          Random location
        </StyledLink>
      </NavbarContainer>
    </Fragment>
  );
}

export default withRouter(Navbar);
