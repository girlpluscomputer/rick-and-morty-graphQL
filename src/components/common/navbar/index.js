import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { NavbarContainer, LogoContainer, StyledLink } from "../navbar/elements";
import Logo from "../../../img/rick-and-morty.png";

const Navbar = ({ location }) => {
  const activeRoute = location.pathname;
  return (
    <Fragment>
      <LogoContainer>
        <img src={Logo} alt="logo" width="200" />
      </LogoContainer>
      <NavbarContainer>
        <Link to="/find-character">
          <StyledLink active={activeRoute === "/find-character"}>
            Find character
          </StyledLink>
        </Link>

        <Link to="/find-location">
          <StyledLink active={activeRoute === "/find-location"}>
            Find location
          </StyledLink>
        </Link>

        <Link to="/random-character">
          <StyledLink active={activeRoute === "/random-character"}>
            Random character
          </StyledLink>
        </Link>

        <Link to="/random-location">
          <StyledLink active={activeRoute === "/random-location"}>
            Random location
          </StyledLink>
        </Link>
      </NavbarContainer>
    </Fragment>
  );
};

Navbar.propTypes = {
  location: PropTypes.object
};

export default withRouter(Navbar);
