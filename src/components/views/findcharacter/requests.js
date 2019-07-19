import gql from "graphql-tag";

const GET_CHARACTER = gql`
  query findCharacter($filter: FilterCharacter!) {
    characters(filter: $filter) {
      results {
        name
        status
        gender
        species
      }
    }
  }
`;

export default GET_CHARACTER;
