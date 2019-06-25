import styled from "styled-components";

const HistorialContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

const HistorialSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 100vh - 360px;
  bottom: 0;
  right: 0;
  width: 460px;
  background-color: #fff;
`;

const HistorialContent = styled.div`
  padding: 20px 60px;
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
`;

const HistorialCloseButton = styled.button`
  border: none;
  padding: 0 16px;
  height: 36px;
  font-weight: bold;
  color: tomato;
  background-color: #fff;
`;

const HistorialItem = styled.div`
  background-color: #fff;
  padding: 10px 0;
  text-align: end;
`;

export {
  HistorialContainer,
  HistorialSidebar,
  HistorialContent,
  ButtonContainer,
  HistorialCloseButton,
  HistorialItem
};
