import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  StyledBodyTable,
  StyledTable,
  StyledHeader,
  StyledRow,
  StyledCell
} from "./elements";
import Loader from "../../../../common/loader";

const CharacterList = ({ results, loading }) => {
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
                <StyledHeader>Gender</StyledHeader>
                <StyledHeader>Species</StyledHeader>
                <StyledHeader>Status</StyledHeader>
              </StyledRow>

              {results.map((character, id) => {
                return (
                  <StyledRow key={id}>
                    <StyledCell>{character.name}</StyledCell>
                    <StyledCell>{character.gender}</StyledCell>
                    <StyledCell>{character.species}</StyledCell>
                    <StyledCell>{character.status}</StyledCell>
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

CharacterList.propTypes = {
  results: PropTypes.object,
  loading: PropTypes.bool
};

export default CharacterList;
