import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import {
  HistorialContainer,
  LeftContainer,
  HistorialSidebar,
  HistorialContent,
  ButtonContainer,
  HistorialCloseButton,
  HistorialItem
} from "./elements";

function Historial({ show, data, handleHistorial }) {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <HistorialContainer>
      <LeftContainer onClick={handleHistorial} />
      <HistorialSidebar>
        <HistorialContent>
          <Fragment>
            {data.map((item, index) => (
              <HistorialItem key={index}>{item.name}</HistorialItem>
            ))}
          </Fragment>
          <ButtonContainer>
            <HistorialCloseButton onClick={handleHistorial}>
              CLOSE
            </HistorialCloseButton>
          </ButtonContainer>
        </HistorialContent>
      </HistorialSidebar>
    </HistorialContainer>,
    document.getElementById("historial")
  );
}

export default Historial;
