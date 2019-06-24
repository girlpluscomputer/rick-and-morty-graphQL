import React from "react";
import "./Character.css";

function Character({ id, image, name, status, species, origin, location }) {
  return (
    <div className="character-container">
      <div className="character-card" id={id}>
        <img
          className="character-image"
          alt="character"
          src={image}
          width="300"
          height="300"
        />
        <div className="character-description">
          <div className="character-name item">
            <label className="label">Name: </label>
            <h3 className="data">{name}</h3>
          </div>
          <div className="character-status item">
            <label className="label">Status: </label>
            <h3 className="data">{status}</h3>
          </div>
          <div className="character-specie item">
            <label className="label">Specie: </label>
            <h3 className="data">{species}</h3>
          </div>
          <div className="character-origin item">
            <label className="label">Origin: </label>
            <h3 className="data">{origin.name}</h3>
          </div>
          <div className="character-last-location item">
            <label className="label">Location: </label>
            <h3 className="data">{location.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Character;
