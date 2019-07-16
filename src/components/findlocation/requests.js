import gql from "graphql-tag";

const GET_LOCATION = gql`
  query findLocation($filter: FilterLocation!) {
    locations(filter: $filter) {
      results {
        name
        dimension
        type
        created
      }
    }
  }
`;

export default GET_LOCATION;
