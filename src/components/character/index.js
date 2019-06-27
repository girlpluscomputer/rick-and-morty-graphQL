import React from "react";
import {
  CharacterContainer,
  CharacterCard,
  CharacterImage,
  CharacterDescription,
  Data,
  Label,
  Item
} from "./elements";

const Character = ({ character }) => (
  <CharacterContainer>
    <CharacterCard id={character.id}>
      <CharacterImage alt="character" src={character.image} />
      <CharacterDescription>
        <Item className="character-name item">
          <Label>Name: </Label>
          <Data className="data">{character.name}</Data>
        </Item>
        <Item className="character-status item">
          <Label>Status: </Label>
          <Data className="data">{character.status}</Data>
        </Item>
        <Item className="character-specie item">
          <Label>Specie: </Label>
          <Data className="data">{character.species}</Data>
        </Item>
        {character.origin && (
          <Item className="character-origin item">
            <Label>Origin: </Label>
            <Data className="data">{character.origin.name}</Data>
          </Item>
        )}
        {character.location && (
          <Item className="character-last-location item">
            <Label>Location: </Label>
            <Data className="data">{character.location.name}</Data>
          </Item>
        )}
      </CharacterDescription>
    </CharacterCard>
  </CharacterContainer>
);

export default Character;
