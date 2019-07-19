import gql from "graphql-tag";

const GET_RANDOM_CHARACTER = gql`
  query($random: ID!) {
    character(id: $random) {
      id
      name
      image
      status
      species
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;

export default GET_RANDOM_CHARACTER;
