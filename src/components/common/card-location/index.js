import React from "react";
import Image from "../../img/pickle.jpg";
import {
  CardContainer,
  StyledCard,
  CardImage,
  CardDescription,
  Data,
  Label,
  Item
} from "./elements";

function CardLocation({ data }) {
  const { location } = data;
  console.log(data);
  return (
    <CardContainer>
      <StyledCard>
        <CardImage alt="location image" src={Image} />
        <CardDescription>
          <Item>
            <Label>Name: </Label>
            <Data>{location.name}</Data>
          </Item>
          <Item>
            <Label>Type: </Label>
            <Data>{location.type}</Data>
          </Item>
          <Item>
            <Label>Dimension: </Label>
            <Data>{location.dimension}</Data>
          </Item>
          <Item>
            <Label>Created: </Label>
            <Data>{location.created}</Data>
          </Item>
        </CardDescription>
      </StyledCard>
    </CardContainer>
  );
}

export default CardLocation;
