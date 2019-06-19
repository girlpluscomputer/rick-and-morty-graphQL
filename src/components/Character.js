import React from "react";
import "./Character.css";

function Character() {
  return (
    <div className="character-container">
      <div className="character-card">
        <img
          className="character-image"
          alt="character"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          width="300"
          height="300"
        />
        <div className="character-description">
          <div className="character-name item">
            <label className="label">Name: </label>
            <h3 className="data">Rick Sanchez</h3>
          </div>
          <div className="character-status item">
            <label className="label">Status: </label>
            <h3 className="data">Alive</h3>
          </div>
          <div className="character-specie item">
            <label className="label">Specie: </label>
            <h3 className="data">Human</h3>
          </div>
          <div className="character-origin item">
            <label className="label">Origin: </label>
            <h3 className="data">Earth</h3>
          </div>
          <div className="character-last-location item">
            <label className="label">Location: </label>
            <h3 className="data">Earth</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Character;
