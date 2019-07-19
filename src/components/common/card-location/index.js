import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import {
  LoaderContainer,
  CardContainer,
  StyledCard,
  CardDescription,
  Data,
  Label,
  Item
} from "./elements";
import Loader from "../../common/loader";

const CardLocation = ({ data, loading }) => {
  const { location } = data;

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
          <StyledCard>
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
      )}
    </Fragment>
  );
};

CardLocation.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool
};

export default CardLocation;
