import gql from "graphql-tag";

const GET_CHARACTER = gql`
  query findCharacter($name: String, $gender: String, $status: String) {
    characters(filter: { name: $name, gender: $gender, status: $status }) {
      results {
        name
        status
        gender
      }
    }
  }
`;

export default GET_CHARACTER;
