import gql from 'graphql-tag';

const GET_CHARACTER = gql`
	query character($id: ID!) {
		character(id: $id) {
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

export default GET_CHARACTER;
