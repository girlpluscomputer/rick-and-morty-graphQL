import React from "react";
import { StyledButton, ButtonContainer } from "./elements";

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

export default Button;
