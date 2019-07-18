import styled from "styled-components";

const RoundButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border: none;
  border-radius: 32px;
  background-color: #00b0c8;
  position: absolute;
  right: 40px;
  bottom: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  &:hover {
    background-color: #02a5bb;
  }
`;

export default RoundButton;
