import React from "react";
import { Fragment } from "react";
import {
  LoaderContainer,
  CardContainer,
  StyledCard,
  CardImage,
  CardDescription,
  Data,
  Label,
  Item
} from "./elements";
import Loader from "../../common/loader";

const CardCharacter = ({ data, loading }) => {
  const { character } = data;

  if (loading) {
    return (
      <CardContainer>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </CardContainer>
    );
  }

  return (
    <Fragment>
      {Object.keys(data).length > 0 && (
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
      )}
    </Fragment>
  );
};

export default CardCharacter;
