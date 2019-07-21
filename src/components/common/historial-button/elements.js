import styled from "styled-components";

const RoundButton = styled.button`
  height: 56px;
  width: 56px;
  border: none;
  border-radius: 32px;
  background-color: #00b0c8;
  position: fixed;
  bottom: 5%;
  right: 3%;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  &:hover {
    background-color: #02a5bb;
  }

  /* @media only screen and(max-width: 768px) {
    top: 300px;
  } */
`;

export default RoundButton;
