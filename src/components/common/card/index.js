import React from "react";
import {
  CardContainer,
  StyledCard,
  CardImage,
  CardDescription,
  Data,
  Label,
  Item
} from "./elements";

function Card({ data }) {
  const { character } = data;
  return (
    <CardContainer>
      <StyledCard id={character.id}>
        <CardImage alt="character" src={character.image} />
        <CardDescription>
          <Item>
            <Label>Name: </Label>
            <Data>{character.name}</Data>
          </Item>
          <Item>
            <Label>Status: </Label>
            <Data>{character.status}</Data>
          </Item>
          <Item>
            <Label>Specie: </Label>
            <Data>{character.species}</Data>
          </Item>

          <Item>
            <Label>Origin: </Label>
            <Data>{character.origin.name}</Data>
          </Item>

          <Item>
            <Label>Location: </Label>
            <Data>{character.location.name}</Data>
          </Item>
        </CardDescription>
      </StyledCard>
    </CardContainer>
  );
}

export default Card;
