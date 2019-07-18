import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  height: 36px;
  padding: 0 16px;
  border-radius: 16px;
  background-color: #5fc471;
  color: azure;
  font-weight: bold;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  heigth: 36px;
  width: 100%;
  position: absolute;
  top: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { StyledButton, ButtonContainer };
