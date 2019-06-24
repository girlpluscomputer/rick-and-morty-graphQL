import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import "./Historial.css";

function Historial({ show, characters, handleHistorial }) {
  //   console.log(show);
  if (!show) {
    return null;
  }
  //Characters are undefined

  //console.log(characters);

  return ReactDOM.createPortal(
    <div className="historial-container">
      <div className="historial-sidebar">
        <div className="historial-content">
          <Fragment>
            {characters.map((character, index) => (
              <div className="historial-item" key={index}>
                {character.name}
              </div>
            ))}
          </Fragment>
          <div className="button-container">
            <button
              className="historial-close-button"
              onClick={handleHistorial}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("historial")
  );
}

export default Historial;
