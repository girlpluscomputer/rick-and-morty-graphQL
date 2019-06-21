import React from "react";
// import "./Button.css";
import styled from "styled-components";

const RoundButton = styled.button`
  border: none;
  height: 36px;
  padding: 0 16px;
  border-radius: 16px;
  background-color: #5fc471;
  color: azure;
  font-weight: bold;
  cursor: pointer;
`;

function Button({ fetchCharacters }) {
  return <RoundButton onClick={fetchCharacters}>Generate</RoundButton>;
}
export default Button;
