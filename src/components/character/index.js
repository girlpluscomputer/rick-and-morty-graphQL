import React from 'react';
import './Character.css';

const Character = ({ character }) => (
	<div className="character-container">
		<div className="character-card" id={character.id}>
			<img
				className="character-image"
				alt="character"
				src={character.image}
				width="300"
				height="300"
			/>
			<div className="character-description">
				<div className="character-name item">
					<label className="label">Name: </label>
					<h3 className="data">{character.name}</h3>
				</div>
				<div className="character-status item">
					<label className="label">Status: </label>
					<h3 className="data">{character.status}</h3>
				</div>
				<div className="character-specie item">
					<label className="label">Specie: </label>
					<h3 className="data">{character.species}</h3>
				</div>
				{character.origin && (
					<div className="character-origin item">
						<label className="label">Origin: </label>
						<h3 className="data">{character.origin.name}</h3>
					</div>
				)}
				{character.location && (
					<div className="character-last-location item">
						<label className="label">Location: </label>
						<h3 className="data">{character.location.name}</h3>
					</div>
				)}
			</div>
		</div>
	</div>
);

export default Character;
