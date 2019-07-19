import React from "react";
import { StyledButton, ButtonContainer } from "./elements";
import PropTypes from "prop-types";

const Button = ({ text, handleClick, bcolor, color, shape, align }) => {
  return (
    <ButtonContainer align={align}>
      <StyledButton
        bcolor={bcolor}
        color={color}
        shape={shape}
        onClick={handleClick}
      >
        {text}
      </StyledButton>
    </ButtonContainer>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  bcolor: PropTypes.string,
  color: PropTypes.string,
  shape: PropTypes.string,
  align: PropTypes.string
};

export default Button;
