import gql from "graphql-tag";

const GET_RANDOM_LOCATION = gql`
  query($random: ID!) {
    location(id: $random) {
      id
      name
      type
      dimension
      created
    }
  }
`;

export default GET_RANDOM_LOCATION;
