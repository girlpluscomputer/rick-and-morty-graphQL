import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import {
  HistorialContainer,
  HistorialSidebar,
  HistorialContent,
  ButtonContainer,
  HistorialCloseButton,
  HistorialItem
} from "./elements";
// import "./Historial.css";

function Historial({ show, characters, handleHistorial }) {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <HistorialContainer>
      <HistorialSidebar className="historial-sidebar">
        <HistorialContent className="historial-content">
          <Fragment>
            {characters.map((character, index) => (
              <HistorialItem className="historial-item" key={index}>
                {character.name}
              </HistorialItem>
            ))}
          </Fragment>
          <ButtonContainer className="button-container">
            <HistorialCloseButton
              className="historial-close-button"
              onClick={handleHistorial}
            >
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
