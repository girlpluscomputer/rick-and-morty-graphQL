import React from "react";
import { StyledButton, ButtonContainer } from "./elements";

function Button({ text, handleClick }) {
  return (
    <ButtonContainer>
      <StyledButton onClick={handleClick}>{text}</StyledButton>
    </ButtonContainer>
  );
}

export default Button;
