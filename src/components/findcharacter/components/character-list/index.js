import React from "react";

import {
  TableContainer,
  StyledBodyTable,
  StyledTable,
  StyledHeader,
  StyledRow,
  StyledCell
} from "./elements";

function CharacterList({ results }) {
  return (
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
  );
}

export default CharacterList;
