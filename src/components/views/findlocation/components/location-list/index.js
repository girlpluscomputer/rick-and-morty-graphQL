import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import {
  TableContainer,
  StyledBodyTable,
  StyledTable,
  StyledHeader,
  StyledRow,
  StyledCell
} from "./elements";
import Loader from "../../../../common/loader";

const LocationList = ({ results, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <Fragment>
      {Object.keys(results).length > 0 && (
        <TableContainer>
          <StyledTable>
            <StyledBodyTable>
              <StyledRow>
                <StyledHeader>Name</StyledHeader>
                <StyledHeader>Dimension</StyledHeader>
                <StyledHeader>Type</StyledHeader>
                <StyledHeader>Created</StyledHeader>
              </StyledRow>

              {results.map((location, id) => {
                return (
                  <StyledRow key={id}>
                    <StyledCell>{location.name}</StyledCell>
                    <StyledCell>{location.dimension}</StyledCell>
                    <StyledCell>{location.type}</StyledCell>
                    <StyledCell>{location.created}</StyledCell>
                  </StyledRow>
                );
              })}
            </StyledBodyTable>
          </StyledTable>
        </TableContainer>
      )}
    </Fragment>
  );
};

LocationList.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.object
};

export default LocationList;
