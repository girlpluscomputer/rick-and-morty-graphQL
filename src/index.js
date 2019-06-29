import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import client from './apollo';

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);

// Apollo Provider, cliente de graphql para el front, existen mas clientes
// state = {
// client: ejecutar queries y mutaciones dentro de graphql
// }

// Contexto
// React.Context

// HOC
// High Order Component
